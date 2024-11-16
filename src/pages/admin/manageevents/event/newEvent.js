import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Savesuccesfull from "@/components/admin/popup/savesuccesfull";
import fetchAPI from "@/service/api/fetchAPI";
import Loader from "@/components/loader";
import InputColor from 'react-input-color';

const NewCategory = (props) => {
  const { visible, onHides, isEdit, recordID } = props;
  const toast = useRef()
  const [loading, setLoading] = useState(false)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [categoryDetails, setCategoryDetails] = useState({ category: '' })
  const [color, setColor] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const changeFieldValue = (event) => {
    const { name, value } = event.target;
    setCategoryDetails({ ...categoryDetails, [name]: value })
  }
  const checkValidation = () => {
    const { category } = categoryDetails;
    if (!category) {
      toast.current.show({ severity: 'error', detail: 'Category is required', life: 3000 })
      return false
    }
    else if (!color) {
      toast.current.show({ severity: 'error', detail: 'Text Color is required', life: 3000 })
      return false
    }
    else if (!bgColor) {
      toast.current.show({ severity: 'error', detail: 'Bg-Color is required', life: 3000 })
      return false
    }
    return true
  }

  const submitCategory = async () => {
    const validate = checkValidation()
    if (!validate) return

    const userID = sessionStorage.getItem("userId")
    setLoading(true)
    try {

      let payload = {
        title: categoryDetails.category,
        color_code: color,
        bg_color_code: bgColor,
      }
      let response

      if (isEdit) {
        payload = { ...payload, updatedBy: parseInt(userID) }
        response = await fetchAPI(`/eventcategory/${recordID}`, 'PUT', payload, 'application/json')
      } else {
        payload = { ...payload, createdBy: parseInt(userID) }
        response = await fetchAPI('/eventcategory', 'POST', payload, 'application/json')
      }

      if (response) {
        setOpenSuccessModal(true)
      }
     
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const closeModal = (update) => {
    onHides(update)
    setCategoryDetails({ title: '', el_category: '',bgColor:'',color:'' })
  }

  const closeSuccessModal = () => {
    closeModal(true)
    setOpenSuccessModal(false)
  }

  const getcategoryDetials = async () => {
    try {
      setLoading(true)
      let response = await fetchAPI(`/eventcategory/${recordID}`, 'GET', {}, 'application/json')

      setCategoryDetails({
        title: response.title,
        category: response.title
      })
      setColor(response.color_code)
      setBgColor(response.bg_color_code)
      setLoading(false)

    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {

    if (isEdit) {
      getcategoryDetials()
    }

  }, [isEdit])

  return (
    <>
      <div>
        <Sidebar
          visible={visible}
          position="right"
          blockScroll={true}
          style={{
            background: "#FFF",
            borderRadius: "16px 0 0 16px",
            width: "30vw",
          }}
          className="custmSidebar width576"
          onHide={() => closeModal(false)}
        >
          <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
            {/**row***/}
            {loading ? <>
              <div className="card flex justify-center">
                <Loader />
              </div>
            </> :
              <>
                <Toast ref={toast}></Toast>
                <div>
                  <div className="text-[#374151] xl:text-[1.25vw] text-[24px] font-semibold ">
                    {isEdit ? 'Update Event' : 'Add New Event'}
                  </div>
                  <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                    <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                      <div className="col-span-12 xl:col-span-12 ">
                        <div className="col-span-12 xl:col-span-6">
                          <div className="flex flex-col customInput">
                            <label
                              htmlFor="category"
                              className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                            >
                              Category{" "}<span className="text-red-500 required-dot">*</span>
                            </label>
                            <InputText
                              id="category"
                              placeholder="Type here"
                              name='category'
                              // value={categoryDetails}
                              value={categoryDetails['category']}
                              onChange={changeFieldValue}
                              className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                              aria-describedby="username-help"
                            />
                            <label
                              htmlFor="colorBgPicker"
                              className="text-[#374151] xl:text-[0.833vw] text-base font-medium mt-2"
                            >
                              Pick bg-color for category{" "}<span className="text-red-500 required-dot">*</span>
                            </label>
                          {/*   <ColorPicker id="colorBgPicker" value={bgColor} onChange={(e) => setBgColor(e.value)} /> */}

                            <InputColor initialValue={bgColor} id="colorBgPicker" onChange={(e) => setBgColor(e.hex)}  placement="right" />

                            <label
                              htmlFor="colorPicker"
                              className="text-[#374151] xl:text-[0.833vw] text-base font-medium mt-2"
                            >
                              Pick text color for category{" "}<span className="text-red-500 required-dot">*</span>
                            </label>

                            <InputColor initialValue={color} id="colorPicker" onChange={(e) => setColor(e.hex)} placement="right" />

                           {/*  <ColorPicker id="colorPicker" value={color} onChange={(e) => setColor(e.value)} /> */}

                          </div>
                        </div>
                      </div>
                    </div>
                    {/**Editor**/}
                  </div>
                </div>
                {/**Footer**/}
                <div className="flex justify-end py-[24px] xl:py-[1.25vw]">
                  <div className="flex items-center xl:gap-[0.833vw] gap-4">
                    <Link
                      href={""}
                      onClick={() => closeModal(false)}
                      className="text-[#4B586E] text-[16px] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
                    >
                      Cancel
                    </Link>
                    <Link
                      href={""}
                      onClick={submitCategory}
                      className="text-white bg-[#A93439] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#1F2A37] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
                    >
                      {isEdit ? 'Update' : 'Save'}
                    </Link>
                  </div>
                </div>
              </>}
          </div>
        </Sidebar>

        <Savesuccesfull
          visible={openSuccessModal}
          onHides={closeSuccessModal}
          message={categoryDetails.category}
          submessage={isEdit ? 'updated successfully' : "saved successfully "}
        />
      </div>
    </>
  );
};

export default NewCategory;
