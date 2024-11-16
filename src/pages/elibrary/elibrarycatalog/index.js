import React, { useEffect, useRef, useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Layout from "@/components/layout/layout";
import Advancedsearch from "./advancedsearch";
import Rowview from "./rowview";
import Gridview from "./gridview";
import Tabsview from "./tabsview";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import fetchAPI from "@/service/api/fetchAPI";
import Image from 'next/image'
import { Toast } from 'primereact/toast';
import { Paginator } from "primereact/paginator";
import View from "@/pages/elibrary/elibrarycatalog/view";
import { toast as ReactToast } from "react-toastify";
import DateFormat from "@/service/utils/DateFormat";
import FilewithFormat from "@/service/utils/FilewithFormat";
import { searchTypes } from "@/service/helper/enum";
import { useRouter } from "next/router";
import {downloadActions} from "@/service/helper/actions/downloadActions";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index(props) {
  const toast = useRef(null);
  const [filters, setFilters] = useState(null);
  const [first, setFirst] = useState(0);
  const [view, setView] = useState("List");
  const [rows, setRows] = useState(10);
  const [lazyState, setlazyState] = useState({
    sortField: "createdAt",
    sortOrder: -1,
  });
  const [loading, setLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [docList, setDocList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(1);
  const [categoryDropdown, setCategoryDropdown] = useState([]);
  const [typeDropdown, setTypeDropdown] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFormat, setSelectedFormat] = useState([]);
  const [recordId, setRecordId] = useState();
  const [isEdit, setIsEdit] = useState(false)
  const [page, setPage] = useState(1);
  const [ViewModal, setViewModal] = useState(false)
  const [FileURL, setFileURL] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [FileType, setFileType] = useState('')
  const [FileName, setFileName] = useState('')
  const [base64Data, setbase64Data] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleSearchType = (type) => {
    if (type === 'all') {
      setSelectedTypes(searchTypes.map((searchType) => searchType.type));
    } else {
      if (selectedTypes.includes(type)) {
        setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
      } else {
        setSelectedTypes([...selectedTypes, type]);
      }
    }
  };


  const viewFile = async (id, fileName,DocName) => {
    const extension = fileName.split('.').pop()
    ReactToast.loading(['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx', 'txt','js'].includes(extension.split('.').pop()?.toLowerCase()) ? 'Downloading...' : 'Loading...', { className: 'custom-toast' })

    setFileName(DocName)
    setFileType(extension)
    let data = {
      "fileId": id,
    }
    let mimeType = extension == "pdf" ? 'application/pdf' : (['xlsx', 'xls'].includes(extension)) ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : (['png', 'jpg', 'jpeg', 'svg', 'webp', 'bmp'].includes(extension)) ? `image/${extension}` : `application/octet-stream`;

    try {
      const response = await fetchAPI(`/elibrary/document/download`, 'POST', data, 'application/json',)
      id && response && setViewModal(true)
      const binaryData = atob(response);
      setbase64Data(response)
      const arrayBuffer = new ArrayBuffer(binaryData.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
      }
      const blob = new Blob([arrayBuffer], { type: mimeType });;
      const blobUrl = URL.createObjectURL(blob)
      setFileURL(blobUrl)
      response && ReactToast.dismiss()
    }
    catch (error) {
      console.log(error)
      ReactToast.dismiss()
      // ReactToast.error("Something went wrong!");
    }
  }

  const actionBodyTemplate = (rowData) => {
    return <><div className="flex justify-center text-[17px] gap-[10px] xl:gap-[1.042vw] w-full">
      <Link href='' onClick={() => ['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx', 'txt'].includes(rowData.fileName.split('.').pop()?.toLowerCase()) ? downloadActions(rowData.file_id, rowData.fileName) : viewFile(rowData.file_id, rowData.fileName,rowData?.DocName)} className="bg-[#fff] p-1 rounded-full h-8 w-8"> <i className='austin-eye'></i></Link>
      <Link href='' onClick={() => downloadActions(rowData.file_id, rowData.fileName)} className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='austin-file-download'></i></Link>
      <Link href='' className="bg-[#fff] p-1  h-8 w-8 rounded-full"> <i className='austin-star-outline'></i></Link>
    </div></>;
  };

  const handleSort = (e) => {
    setlazyState((prevState) => ({
      ...prevState,
      sortField: e.sortField,
      sortOrder: e.sortOrder,
    }));
    setSelectedCategory(0)
  }

  const onPageChange = (event) => {
    if (page != event.page + 1) {
      getTableData({ page: event.page + 1 })
    }
    setPage(event.page + 1);
    setFirst(event.first);
    setRows(event.rows)
  };

  const handleChildData = (data) => {
    setRecordId(data);
    setIsEdit(true)
  };

  const base64ToBlob = (base64Data) => {
    const binaryData = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: 'application/octet-stream' });
  };

  const CategoryForSort = [
    {
      label: "All",
      value: 0,
    },
    ...(categoryDropdown?.map((item) => ({
      label: item.el_category,
      value: item.el_category_id,
    })) || []),
  ];

  //Sending Data to index (parent)
  const handleEditClick = (data) => {
    handleChildData(data)
  }

  const router = useRouter();

  //sending data to the index (parent)
  useEffect(() => {
    getTableData()
    const { categoryId } = router.query;
    if (parseInt(categoryId)) {
      setSelectedCategories([parseInt(categoryId)])
    }
    const { fileType } = router.query;
    if ((fileType)) {
      setSelectedTypes([fileType])
    }else{
      setSelectedTypes(["video", "audio", "image", "document"])
    }

  }, [])

  const TableImage = (rowData) => {
    const capitalizedType = rowData?.Type ? rowData.Type.charAt(0).toUpperCase() + rowData.Type.slice(1) : '';
    const imageSrc = FilewithFormat.getFileFormat(rowData.Type)

    return (
      <div className="flex gap-2 items-center">
        <Image
          src={imageSrc}
          className="w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]"
          width={48}
          height={48}
          alt="avatar"
        />
        <div>{capitalizedType}</div>
      </div>
    );
  };
  const CategoryBody = (rowData) => {
    return (
      <>
        <div className="w-auto bg-[#1F3F71] rounded-md text-[#fff] text-[10px] xl:text-[0.625vw] px-[8px] py-[2px]">
          {rowData?.category}
        </div>
      </>
    );
  };

  async function apiFetching(url, method = 'GET', payload = {}) {
    let resp = null;
    let loading = true;
    let errorMessage = null;

    try {
      const response = await fetchAPI(url, method, payload, 'application/json')

      resp = response;
      loading = false;
    } catch (error) {
      console.log('error.message', error);
      errorMessage = error.message;
      loading = false;
    }

    let result = { resp, loading, errorMessage };
    return result;
  }

  // Get All  values
  useEffect(() => {
    categoryListFetch();
    typeListFetch();
  }, [selectedTypes]);

  //type 
  const typeListFetch = async (value) => {
    const url = `/elibrary/document/filetype`;
    const payload = {
      type: selectedTypes,
    };

    const response = await apiFetching(url, 'POST', payload);
    setSelectedFormat(response?.resp?.document)
    setTypeDropdown(response?.resp?.document);

    return response?.resp?.document
  };

  const categoryListFetch = async () => {
    const url = `/elibrary/elcategory`;
    const response = await apiFetching(url, 'GET');
    setCategoryDropdown(response?.resp?.rows);
  };


  // Data
  const handleCatCheckbox = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      const isSelected = prevSelectedCategories?.includes(category);
      if (isSelected) {
        return prevSelectedCategories?.filter((item) => item !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const handleFormatCheckbox = (category) => {
    setSelectedFormat((prevSelectedCategories) => {
      const isSelected = prevSelectedCategories.includes(category);
      if (isSelected) {
        return prevSelectedCategories.filter((item) => item !== category);

      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  // table values
  useEffect(() => {
    // Get the categoryId parameter from the URL
    getTableData();

  }, [rows, selectedCategories, selectedFormat, lazyState, selectedTypes]);

  const colEnum = {
    'createDate': 'createdAt',
    'Type': 'Type',
    'releaseDate': 'releaseDate',
  }

  const getTableData = async (filter) => {
    const url = `/elibrary/document/search/filter`;
    try {
      setLoading(true)
      let data = {
        "page": filter && filter['page'] != undefined && filter['page'] != null ? filter['page'] : 1,
        "limit": rows,
        "sortColumn": colEnum[lazyState.sortField] ?? 'createdAt',
        "sortOrder": lazyState.sortOrder,
        "searchTxt": filter && filter['searchVal'] != undefined && filter['searchVal'] != null ? filter['searchVal'] : searchValue,
        "categoryId": selectedCategories,
        "fileType": selectedFormat,
        "type": selectedTypes,
        "categorySortColumn": "categoryId",
        "sortCategoryId": selectedCategory
      }

      const response = await apiFetching(url, 'POST', data);
      console.log('responseresponse',response)
      setDocList(response?.resp?.document?.rows);
      setTotalRecords(response?.resp?.document?.count);
      setPage(data?.page)
      setFirst((data?.page - 1) * rows)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };
  const doccumentList = docList?.map((elm, index) => {
    const extension = elm.fileName.split('.').pop()

    let mimeType = extension == "pdf" ? 'application/pdf' : (['xlsx', 'xls'].includes(extension)) ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : (['png', 'jpg', 'jpeg', 'svg', 'webp', 'bmp'].includes(extension)) ? `image/${extension}` : `application/octet-stream`;

    let blobUrl = '';
    if (elm.filesData) {
      const binaryData = atob(elm?.filesData);
      const arrayBuffer = new ArrayBuffer(binaryData.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
      }
      const blob = new Blob([arrayBuffer], { type: mimeType });;
      blobUrl = URL.createObjectURL(blob)
    }

    return {
      id:elm.document_file_id,
      Type: elm.type,
      DocName: elm.document.title,
      description: elm.document.description,
      createDate: elm.document.createdAt,
      releaseDate: elm.document.published_Date,
      category: elm.category,
      category_id: elm.document.category_id,
      document_id: elm.document.document_id,
      fileName: elm.fileName,
      file_id: elm.file_id,
      FileType: mimeType,
      blobUrl: blobUrl,
      base64Data: elm.filesData,
      author: elm?.document?.authorDetails?.title,
      category_icon_url: elm?.category_icon_url,
      fileExtension: elm?.file_type
    };
  });

  const searchRef = useRef('')
  const handleSearch = (e) => {

    if (searchRef.current) {
      clearTimeout(searchRef.current)
    }
    searchRef.current = setTimeout(() => {
      getTableData({ searchVal: e.target.value });
    }, [300])

    setSearchValue(e.target.value)
  }

  const handleCategorySorting = (e) => {
    setSelectedCategory(e.value)
    if (e.value == 0) {
      setlazyState({
        sortField: "createDate",
        sortOrder: -1,
      })
    } else {
      setlazyState({
        sortField: "",
        sortOrder: -1,
      })
    }
  }

  return (
    <>
      <Layout
        pageClass="pg-discussion-details"
        pageTitle="AISD eLibrary Catalog"
      >
        <div className="discussion-bg px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[40px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw] relative z-[2]">
          <div className="xl:max-w-[88.3025vw] mx-auto ">
            <div className={myMontserrat.className}>
              <div className="breadCrumb flex items-center gap-[16px]">
                <div className="col">
                  <Link href={"/"}>
                    <i className="austin-home"></i> Home
                  </Link>
                </div>
                <div className="col">
                  <i className="austin-arrow-open-right"></i>
                </div>
                <div className="col">
                  <Link href={"/elibrary"}>eLibrary</Link>
                </div>
                {/* <div className="col">
                  <i className="austin-arrow-open-right"></i>
                </div>
                <div className="col">Catalog / Search</div> */}
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <h2
                  className={`${myMontserrat.className} text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold`}
                >
                  AISD <span className="font-extrabold">eLibrary</span> Catalog
                </h2>
                <Link
                  href="/elibrary"
                  className="bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
                >
                  Back to eLibrary Home
                </Link>
              </div>
            </div>
            <div className="mt-[50px] xl:mt-[2.604vw]">
              <div className="grid grid-cols-12 gap-[40px] xl:gap-[2.083vw]">
                <div className="col-span-12 xl:col-span-4">
                  <Advancedsearch handleSearch={handleSearch} handleSearchType={handleSearchType} selectedTypes={selectedTypes} searchValue={searchValue} categoryDropdown={categoryDropdown} typeDropdown={typeDropdown ? typeDropdown : []} handleCatCheckbox={handleCatCheckbox} selectedCategories={selectedCategories} handleFormatCheckbox={handleFormatCheckbox} selectedFormat={selectedFormat} selectedCategory={selectedCategory} searchTypes={searchTypes} />
                </div>

                <div className="col-span-12 xl:col-span-8">
                  <Tabsview handleCategorySorting={handleCategorySorting} setView={setView} view={view} Category={CategoryForSort} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} selectedCategories={selectedCategories} filteredDoccumentList={doccumentList} totalRecords={totalRecords} />
                  {view === "Row" ? <Rowview viewFile={viewFile} downloadFile={downloadActions} handleEditClick={handleEditClick} toast={toast} data={doccumentList} /> : null}
                  {view === "Grid" ? <Gridview viewFile={viewFile} downloadFile={downloadActions} handleEditClick={handleEditClick} toast={toast} data={doccumentList} /> : null}
                  {view === "List" ? (
                    <div>
                      <DataTable
                        value={doccumentList}
                        totalRecords={totalRecords}
                        className="custTable tableCust custCheckBox"
                        scrollable
                        responsiveLayout="scroll"
                        style={{ width: "100%" }}
                        rows={rows}
                        loading={loading}
                        filters={filters}
                        onSort={handleSort}
                        sortField={lazyState?.sortField}
                        sortOrder={lazyState?.sortOrder}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        selectionMode={rowClick ? null : "checkbox"}
                        selection={selectedProducts}
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
                          field="Type"
                          header="Type"
                          sortable
                          style={{ minWidth: "15rem" }}
                          body={TableImage}
                        ></Column>
                        <Column
                          field="DocName"
                          header="Document Name"
                          style={{ minWidth: "26rem" }}
                        ></Column>
                        <Column
                          field="createDate"
                          header="Create Date"
                          style={{ minWidth: "12rem" }}
                          body={(rowData) => DateFormat.convertDateFormat(rowData.createDate)}
                          sortable
                        ></Column>
                        <Column
                          field="releaseDate"
                          header="Release Date"
                          style={{ minWidth: "12rem" }}
                          body={(rowData) => DateFormat.convertDateFormat(rowData.releaseDate)}
                          sortable
                        ></Column>
                        <Column
                          field="category"
                          header="Category"
                          style={{ minWidth: "12rem" }}
                          body={CategoryBody}
                        ></Column>
                        <Column
                          field="action"
                          header="Actions"
                          className="action-shadow-table"
                          frozen
                          alignFrozen="right"
                          align="center"
                          style={{ minWidth: "10rem" }}
                          body={actionBodyTemplate}
                        ></Column>
                      </DataTable>
                    </div>

                  ) : null}

                  {doccumentList && doccumentList.length != 0 && <div className='tableCust'>
                    <Paginator
                      template={`RowsPerPageDropdown  PrevPageLink PageLinks  ${totalRecords > 1 && 'CurrentPageReport'} NextPageLink`}
                      className="bg-transparent"
                      currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
                      first={first}
                      rows={rows}
                      onPageChange={onPageChange}
                      totalRecords={totalRecords} rowsPerPageOptions={[5, 10, 25, 50]} />
                  </div>}
                </div>
                {ViewModal && <View base64Data={base64Data} FileName={FileName} ViewModal={ViewModal} setViewModal={setViewModal} FileType={FileType} FileURL={FileURL} />}
              </div>
            </div>
          </div>
        </div>
        <Toast ref={toast}></Toast>
      </Layout>
    </>
  );
}
