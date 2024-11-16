import React, { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import Image from 'next/image';
import FilterComponent from "@/components/filtercomponent";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AdminLayout from "@/components/adminlayout/layout";
import NewCategory from "@/components/admin/popup/newCategory";
import Deletesuccesfull from "@/components/admin/popup/deletesuccesfull";
import { ProgressSpinner } from 'primereact/progressspinner';
import fetchAPI from "@/service/api/fetchAPI";
import Loader from "@/components/loader";

export default function Index() {

  const [serachValue, setSearchValue] = useState('')
  const [categoryList, setCategoryList] = useState([])
  const [paginationPayload, setPaginationPayload] = useState({page: 1, limit: 10, toatalRecords: 0})
  const [addNewCategory, setAddNewCategory] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading,setloading]=useState(false)
  const [recordID,setRecordId]=useState()
  const [isEdit, setIsEdit] = useState(false)

  const getAllCategoriesList =async (search) => {
    setloading(true)
    try{
      const payload = {
        "page":1,
        "limit":10,
        "search": search != null && search != undefined ? search : serachValue
      }

      const response = await fetchAPI('/elibrary/elcategory/list','POST', payload, 'application/json')

      if(response){
        const rows = response?.rows ?? []
        const count = response?.count ?? 0
        setCategoryList(rows)
        setPaginationPayload({...paginationPayload,toatalRecords: count})
      }
      setloading(false)
    }catch(error){
      setloading(false)
    }
  }

  let debounceTimer = useRef(null)
  const debounce = (func, delay) => {
    if(debounceTimer.current){
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(func, delay);
  }

  const handleSearch = (event) => {
    const {value} = event.target;
    debounce(() => getAllCategoriesList(value), 300)
    setSearchValue(value)
  }

  const handlePageChange = () => {

  }


  const actionBodyTemplate = (rowData) => {
    const{el_category_id}=rowData
    return (
      <>
        <div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
          <button
            onClick={()=>handleupdate(el_category_id)}
            className="bg-[#fff] p-1  h-8 w-8 rounded-full"
          >
            {" "}
            <i className="autinisd-edit"></i>
          </button>
          <button
            onClick={()=>handleDelete(el_category_id)}
            className="bg-[#fff] p-1 rounded-full h-8 w-8"
          >
            {" "}
            <i className="autinisd-trash"></i>
          </button>
        </div>
      </>
    );
  };

  const CategoryBody = (rowData) => {
      // console.log("rowData",rowData);
      const{el_category}=rowData

    return (
      <>
        <div className="text-[#A93439] xl:text-[0.729vw] font-normal xl:leading-[1.042vw] leading-[20px]">
         <div className="flex items-center xl:gap-[0.417vw] gap-2">
          <div><Image src="/assets/admin/autinisd-folder-icon.svg" width={20} height={20} alt="Picture of the author" className="xl:w-[1.250vw] xl:h-[1.250vw]" /></div>
          <div><span>{el_category}</span></div>
          </div>
        </div>
      </>
    );
  };


  const formatDate = (dateStrings) => {
      const date = new Date(dateStrings);
      return date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      });
  
  };

  useEffect(()=>{
    getAllCategoriesList()
  },[])

  const handleDelete= async(id)=>{
    setRecordId(id)
    setVisible(true)
  }

  const closeDeleteModal = () => {
    setVisible(false)
    setRecordId('')
    getAllCategoriesList()
  }

  const handleupdate=async(id)=>{
    setRecordId(id)
    setIsEdit(true)
    setAddNewCategory(true)
  }

  const closeUpdateModal = (isUpdate) => {
    setIsEdit(false)
    setRecordId('')
    setAddNewCategory(false)
    if(isUpdate){
      getAllCategoriesList()
    }
  }

  const breadCrumbData = [];


  return (
    <>
      <AdminLayout pageTitle="Manage Events" breadCrumb = {breadCrumbData}>
        <div className=" xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw]">
          <div className="flex justify-between w-full items-center">
            <div className="custom_search_input">
              <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText
                  value={serachValue}
                  onChange={handleSearch}
                  placeholder="Quick Search"
                  className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px] "
                />
              </span>
            </div>
          </div>

          <div className="xl:pt-[0.833vw] pt-4">
                      <FilterComponent />
          </div>

          <div className="flex items-center justify-between xl:mt-[2.083vw] mt-[35px]">
            <div className="xl:text-[1.563vw] text-[30px] text-[#374151] font-bold xl:leading-[1.771vw] leading-9">Events</div>
            
           
            <div className="flex items-center  gap-4">
              <Link
                href={"/admin/elibrary"}
                className="text-[#4B586E] text-[16px] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]"
              >
                Back
              </Link>
              <Link
                href=""
                onClick={() => setAddNewCategory(true)}
                className="bg-[#A93439] hover:bg-[#762428] hover:text-white rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5"
              >
                New Events 
              </Link>
            </div>
          </div>

{loading?
  <div className="card flex justify-center">
            <Loader/>
        </div>:<div className="bg-white  xl:mt-[0.938vw] mt-[18px] rounded-md ">
            <DataTable
              value={categoryList}
              totalRecords={30}
              className="custTable tableCust custCheckBox"
              scrollable
              responsiveLayout="scroll"
              style={{ width: "100%" }}
              paginator
              paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
              currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
              rowsPerPageOptions={[5, 10, 25, 50]}
              rows={paginationPayload['limit']}
              // onSelectionChange={(e) => {setSelectedProducts(e.value)}}
              // selectionMode={rowClick ? null : "checkbox"}
              // selection={selectedProducts}
              globalFilterFields={[
                "Groupname",
                "Groupdescription",
                "representative.name",
                "Groupcreateddate",
                "Lastmodifieddate",
              ]}
              dataKey="id"
            >
              <Column
                field="el_category"
                header="Events"
                style={{ minWidth: "26rem" }}
                body={CategoryBody}
              ></Column>
              {/* Once confirm need to add title */}
              {/* <Column
                field="el_category"
                header="Title"
                style={{ minWidth: "26rem" }}
              ></Column> */}
              <Column
                field="createdAt"
                header="Date Created"
                style={{ minWidth: "12rem" }}
                sortable
              ></Column>
              <Column
                field="updated_At"
                header="Updated On"
                style={{ minWidth: "12rem" }}
                sortable
              ></Column>

              <Column
                field="action"
                header="Actions"
                className="action-shadow-table"
                frozen
                alignFrozen="right"
                align="center"
                style={{ minWidth: "7rem", maxWidth: "7rem" }}
                body={actionBodyTemplate}
              ></Column>
            </DataTable>
          </div>

}


          
        </div>

        <NewCategory
          visible={addNewCategory}
          isEdit={isEdit}
          recordID={recordID}
          onHides={closeUpdateModal}
        />
        <Deletesuccesfull
          visible={visible}
          onHides={closeDeleteModal}
          id={recordID}
          icon="autinisd-info-circle-fill"
          message="Deleted successfully "
        />
      </AdminLayout>
    </>
  );
}
