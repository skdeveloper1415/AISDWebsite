import React, { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import Image from "next/image";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import AdminLayout from "@/components/adminlayout/layout";
import DeleteAuthor from "./delete";
import fetchAPI from "@/service/api/fetchAPI";
import Loader from "@/components/loader";
import NewAuthor from "./create";
import { Paginator } from "primereact/paginator";

export default function Index() {
  // const [paginationPayload, setPaginationPayload] = useState({ pageaddNewAuthor: 1, limit: 10, toatalRecords: 0 })
  const [addNewAuthor, setaddNewAuthor] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setloading] = useState(false);
  const [recordID, setRecordId] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [searchdata, setSearchdata] = useState("");
  const [authors, setAuthors] = useState([]);
  const [authorNameForEdit, setAuthorNameForEdit] = useState("");
  const [lazyState, setlazyState] = useState({
    sortField: "",
    sortOrder: 1,
  });
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);
  const [first, setFirst] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageRefresh, setPageRefresh] = useState(true);

  const getAllAuthors = async (search) => {
    setloading(true);
    try {
      const payload = {
        page: page,
        limit: rows,
        search: searchdata,
        sortColumn: lazyState?.sortField,
        sortOrder: lazyState?.sortOrder,
      };

      const response = await fetchAPI(
        "/messageboard/author/list",
        "POST",
        payload,
        "application/json"
      );

      if (response) {
        const rows = response?.rows ?? [];
        const recordsCount = response?.count ?? 0;
        setTotalRecords(recordsCount);
        setAuthors(rows);
      }
      setloading(false);
    } catch (error) {
      console.log("error", error);
      setloading(false);
    }
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
          <button
            onClick={() => handleupdate(rowData)}
            className="bg-[#fff] p-1  h-8 w-8 rounded-full"
          >
            {" "}
            <i className="autinisd-edit"></i>
          </button>
          <button
            disabled={rowData.is_record_used}
            style={{ opacity: rowData.is_record_used ? 0.5 : 1 }}
            onClick={() => handleDelete(rowData)}
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
    const { title } = rowData;
    return (
      <>
        <div className="xl:text-[0.729vw] font-normal xl:leading-[1.042vw] leading-[20px]">
          <div className="flex items-center xl:gap-[0.417vw] gap-2">
            {/* <div><Image src="/assets/admin/autinisd-folder-icon.svg" width={20} height={20} alt="Picture of the author" className="xl:w-[1.250vw] xl:h-[1.250vw]" /></div> */}
            <div className="capitalize text-xl rounded-full w-7 h-7 flex items-center justify-center bg-gray-500 text-white">
              {title?.charAt(0)}
            </div>
            <div>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    if (pageRefresh == true) {
      getAllAuthors();
    }
  }, [searchdata, rows, page, lazyState, pageRefresh]);

  const handleDelete = async (rowData) => {
    setRecordId(rowData.authar_id);
    setVisible(true);
    setPageRefresh(false);
  };

  const closeDeleteModal = () => {
    setVisible(false);
    setRecordId("");
    if (pageRefresh == true) {
      getAllAuthors();
    }
  };

  const handleupdate = async (rowData) => {
    setRecordId(rowData.authar_id);
    setAuthorNameForEdit(rowData.title);
    setIsEdit(true);
    setaddNewAuthor(true);
  };

  const closeUpdateModal = (isUpdate) => {
    setIsEdit(false);
    setRecordId("");
    setaddNewAuthor(false);
    if (isUpdate) {
      getAllAuthors();
    }
  };

  //Date Format
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };

  const handlePageChange = (e) => {
    setRows(e.rows);
    setPage(e.page + 1);
    setFirst(e.first);
  };

  const handleSort = (e) => {
    setPageRefresh(true);
    setlazyState((prevState) => ({
      ...prevState,
      sortField: e.sortField,
      sortOrder: lazyState?.sortOrder === -1 ? 1 : -1,
    }));
  };

  const onPageChange = (event) => {
    setPageRefresh(true);
    setPage(event.page + 1);
    setFirst(event.first);
    setRows(event.rows);
  };

  const breadCrumbData = [
    { title: "Home", link: "/admin"},
    { title: "Settings", link: "/admin/category"},
    { title: "Message Board Authors",  link: "/admin/authors"},
  ];
  return (
    <>
      <AdminLayout pageTitle="Manage Authors" pageName="Message Board Authors" breadCrumb = {breadCrumbData}>
        <div className=" xl:py-[1.146vw] py-[22px] mb-[18px] xl:mb-[0.938vw]">
          <div className="flex justify-between w-full items-center">
            <div className="custom_search_input">
              <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText
                  value={searchdata}
                  onChange={(e) => setSearchdata(e.target.value)}
                  placeholder="Quick Search"
                  className="placeholder:text-[#9CA1AB] placeholder:font-[300] xl:text-[0.833vw] text-[16px]  xl:w-[15.625vw] w-[200px] "
                />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between xl:mt-[2.083vw] mt-[35px]">
            <div className="xl:text-[1.563vw] text-[30px] text-[#374151] font-bold xl:leading-[1.771vw] leading-9">
              Authors
            </div>

            <div className="flex items-center  gap-4">
              <Link
                href={"/admin/category"}
                className="text-[#4B586E] text-[16px] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[18px] xl:py-[0.8vw]"
              >
                Back
              </Link>
              <Link
                href=""
                onClick={() => setaddNewAuthor(true)}
                className="bg-[#A93439] hover:bg-[#762428] hover:text-white rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5"
              >
                New Author
              </Link>
            </div>
          </div>

          {loading ? (
            <div className="card flex justify-center">
              <Loader />
            </div>
          ) : (
            <div className="bg-white  xl:mt-[0.938vw] mt-[18px] rounded-md ">
              <DataTable
                // value={categoryList}
                value={authors}
                totalRecords={totalRecords}
                className="custTable tableCust custCheckBox"
                scrollable
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                // paginator
                paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
                currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
                rowsPerPageOptions={[5, 10, 25, 50]}
                rows={rows}
                first={first}
                dataKey="id"
                onSort={handleSort}
                onPage={handlePageChange}
                onPageChange={onPageChange}
                sortField={lazyState?.sortField}
                sortOrder={lazyState?.sortOrder}
              >
                <Column
                  field="title"
                  header="Author"
                  style={{ minWidth: "26rem" }}
                  body={CategoryBody}
                  sortable
                ></Column>

                <Column
                  field="createdAt"
                  header="Date Created"
                  style={{ minWidth: "12rem" }}
                  body={(rowData) => formatDate(rowData.createdAt)}
                  sortable
                ></Column>
                <Column
                  field="updated_at"
                  header="Updated On"
                  style={{ minWidth: "12rem" }}
                  body={(rowData) => formatDate(rowData.updated_at)}
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
          )}
          <div className="tableCust">
            <Paginator
              className="mt-4 bg-transparent"
              template={`RowsPerPageDropdown  PrevPageLink PageLinks  ${
                totalRecords > 1 && "CurrentPageReport"
              } NextPageLink`}
              first={first}
              rows={rows}
              currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
              totalRecords={totalRecords}
              onPageChange={onPageChange}
              rowsPerPageOptions={[5, 10, 25, 50]}
            />
          </div>
        </div>

        <NewAuthor
          visible={addNewAuthor}
          isEdit={isEdit}
          recordID={recordID}
          authorName={authorNameForEdit}
          onHides={closeUpdateModal}
          setVisible={setVisible}
        />
        <DeleteAuthor
          visible={visible}
          onHides={closeDeleteModal}
          id={recordID}
          icon="autinisd-info-circle-fill"
          message="Are you sure want to delete Author?"
          pageRefresh={setPageRefresh}
        />
      </AdminLayout>
    </>
  );
}
