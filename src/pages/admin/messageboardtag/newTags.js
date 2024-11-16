import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Savesuccesfull from "@/components/admin/popup/savesuccesfull";
import fetchAPI from "@/service/api/fetchAPI";
import Loader from "@/components/loader";
import { ColorPicker } from 'primereact/colorpicker';

const NewTags = (props) => {
  const { visible, onHides, isEdit, recordID } = props;
  const toast = useRef()
  const [loading, setLoading] = useState(false)
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  //request payload
  const [TagDetails, setTagDetails] = useState({ title: '' })
 

  const changeFieldValue = (event) => {
    const { name, value } = event.target;
    setTagDetails({ ...TagDetails, [name]: value })
  }

  const checkValidation = () => {
    const { title } = TagDetails;
    if (!title) {
      toast.current.show({ severity: 'error', detail: 'Tag is required', life: 3000 })
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
        title: TagDetails.title,
      }
      let response

      if (isEdit) {
        payload = { ...payload, updatedBy: parseInt(userID) }
        response = await fetchAPI(`/tags/${recordID}`, 'PUT', payload, 'application/json')
      } else {
        payload = { ...payload, created_by: parseInt(userID) }
        response = await fetchAPI('/tags/', 'POST', payload, 'application/json')
      }

      if (response) {
        setOpenSuccessModal(true)
      }
     
    } catch (error) {
      setLoading(false)
    }
  }

  const closeModal = (update) => {
    onHides(update)
    setTagDetails({ title: '' })
  }

  const closeSuccessModal = () => {
    closeModal(true)
    setOpenSuccessModal(false)
  }

  const getcategoryDetials = async () => {
    try {
      setLoading(true)
      let response = await fetchAPI(`/tags/${recordID}`, 'GET', {}, 'application/json')

      setTagDetails({
        title: response.title,
      })
    
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
                    {isEdit ? 'Update Tag' : 'Add New Tag'}
                  </div>
                  <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                    <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                      <div className="col-span-12 xl:col-span-12 ">
                        <div className="col-span-12 xl:col-span-6">
                          <div className="flex flex-col customInput">
                            <label
                              htmlFor="Tag"
                              className="text-[#374151] xl:text-[0.833vw] text-base font-medium"
                            >
                              Tag{" "}<span className="text-red-500 required-dot">*</span>
                            </label>
                            <InputText
                              id="Tag"
                              placeholder="Type here"
                              name='title'
                              value={TagDetails['title']}
                              onChange={changeFieldValue}
                              className="placeholder:text-[#9CA1AB] placeholder:font-normal"
                              aria-describedby="username-help"
                            />
                         
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
                      className="text-white bg-[#A93439] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#A93439] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
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
          message={TagDetails.Tag}
          submessage={isEdit ? 'updated successfully' : "saved successfully "}
        />
      </div>
    </>
  );
};

export default NewTags;
