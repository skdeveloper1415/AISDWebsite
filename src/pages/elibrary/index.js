import React, { useLayoutEffect, useState, useEffect,useRef } from "react";
import Layout from "@/components/layout/layout";
import Introbanner from "@/components/elibrary/introbanner"
import LatestFiles from "@/components/elibrary/latestfiles";
import TrendingCategories from "@/components/elibrary/trendingcategories";
import CatalogeLibrary from "@/components/elibrary/catalogelibrary";
import { useRouter } from "next/router";
import fetchAPI from "@/service/api/fetchAPI";
import { toast } from "react-toastify";
import View from "@/pages/elibrary/elibrarycatalog/view";

export default function Index() {
  const videoRef = useRef(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const router = useRouter()

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuth = sessionStorage?.getItem("AccessToken");
      if (isAuth === null || isAuth === undefined) {
        router.push("/")
      }
    }
  }, [router]);

  const [SearchValue, setSearchValue] = useState('');
  const [TriggerSearch, setTriggerSearch] = useState(false);
  const [ViewModal, setViewModal] = useState(false)
  const [FileURL, setFileURL] = useState('')
  const [FileType, setFileType] = useState('')
  const [FileName, setFileName] = useState('')
  const [base64Data, setbase64Data] = useState('')

  const viewFile = async (id, fileName,DocName) => {
    setFileName(DocName)
    const extension = fileName.split('.').pop()
    setFileType(extension)
    let data = {
      "fileId": id,
    }
    toast.loading('Loading...',{className:'custom-toast'})

    let mimeType = extension == "pdf" ? 'application/pdf' : (['png', 'jpg', 'jpeg'].includes(extension)) ? `image/${extension}` : `application/octet-stream`;
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
      response && toast.dismiss()
    }
    catch (error) {
      toast.dismiss()
      toast.error("Something went wrong!");
    }
  }
  const [IsAuthenticated, setIsAuthenticated] = useState('')

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('IsAuthenticated'))
    const isAuth = sessionStorage?.getItem("IsAuthenticated");
    !isAuth && router.push("/login")
    !isAuth && toast.error('Please Login to visit eLibrary')
  }, [])

  const [lazyState, setlazyState] = useState({
    sortField: "createdAt",
    sortOrder: -1,
  });
  const [rows, setRows] = useState(13);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [docList, setDocList] = useState([]);

  // table values
  useEffect(() => {
    // Get the categoryId parameter from the URL
    getTableData();
  }, [page,rows, lazyState]);

  const getTableData = async (filter) => {
    const url = `/elibrary/document/search/filter`;
    try {
      setLoading(true)
      let data = {
        "page": page,
        "limit": rows,
        "sortColumn": lazyState.sortField,
        "sortOrder": lazyState.sortOrder,
        "type": "all",
        "searchTxt": ''
      }

      const response = await fetchAPI(url, 'POST', data,'application/json');

      setDocList(response?.document?.rows);
      setTotalRecords(response?.document?.count);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  const doccumentList = docList?.map((elm, index) => {
    const extension = elm.fileName.split('.').pop()
    let mimeType = extension == "pdf" ? 'application/pdf' : (['png', 'jpg', 'jpeg'].includes(extension)) ? `image/${extension}` : `application/octet-stream`;
    let blobUrl = '';
    /* if (elm.filesData) {
      const binaryData = atob(elm?.filesData);
      const arrayBuffer = new ArrayBuffer(binaryData.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
      }
      const blob = new Blob([arrayBuffer], { type: mimeType });;
      blobUrl = URL.createObjectURL(blob)
    } */

    return {
      id: elm.document_file_id,
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
      author: elm?.document?.authorDetails?.title,
      category_icon_url: elm?.category_icon_url,
    };
  });

  return (
    <>
      <Layout pageClass="pg-elibrary" pageTitle="eLibrary">
        <div className="px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[40px] xl:pt-[5.90vw] pb-70px xl:pb-[5.225vw] relative z-[2]">
          <div className="xl:max-w-[88.3025vw] mx-auto">
            <Introbanner
              SearchValue={SearchValue}
              setSearchValue={setSearchValue}
              setTriggerSearch={setTriggerSearch}
            />
            <div className="mt-[30px] xl:mt-[2.09vw]">
              <LatestFiles SearchValue={SearchValue}
                TriggerSearch={TriggerSearch}
                setTriggerSearch={setTriggerSearch}
                viewFile={viewFile}
                
              />
            </div>
            <div className="mt-[30px] xl:mt-[2.09vw]">
              <TrendingCategories />
            </div>
            <div className="mt-[30px] xl:mt-[2.09vw]">
              <CatalogeLibrary doccumentList={doccumentList} setRows={setRows} viewFile={viewFile} totalRecords={totalRecords}/>
            </div>

          </div>
        </div>
        {ViewModal && <View base64Data={base64Data} FileName={FileName} ViewModal={ViewModal} setViewModal={setViewModal} FileType={FileType} FileURL={FileURL} />}
      </Layout>
    </>
  );
}
