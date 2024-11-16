import React, { useState, useRef } from "react";
import Layout from "@/components/layout/layout";
import Introbanner from "@/components/introbanner";
import Pinneditems from "@/components/pinneditems";
import Topcontributors from "@/components/topcontributors";
import Unansweredtopics from "@/components/unansweredtopics";
import MessageBoardTable from "@/components/messageboardtable";
import MessageBoardGrid from "@/components/messageboardgrid";
import fetchAPI from '@/service/api/fetchAPI'
import { useEffect } from "react";
import { Toast } from "primereact/toast";
import Createnewtopic from "@/components/popup/createnewtopic";

export default function Index() {
  const toast = useRef(null);

  const [showMessageGrid, setShowMessageGrid] = useState(1);
  const [PinnedLoading, setPinnedLoading] = useState(false);
  const [PinnedList, setPinnedList] = useState([]);
  const [TopicLoading, setTopicLoading] = useState(false);
  const [TopicList, setTopicList] = useState([]);
  const [TopContributorLoading, setTopContributorLoading] = useState(false);
  const [TopContributor, setTopContributor] = useState([]);
  const [UnansweredLoading, setUnansweredLoading] = useState(false);
  const [Unanswered, setUnanswered] = useState([]);
  const [UpdateLatestPosts, setUpdateLatestPosts] = useState(true);
  const [openTopicPopup, setOpenTopicPopup] = useState(false);
  const [editPostDetails, setEditPostDetails] = useState([]);
  const [eventCategoryList, setEventCategoryList] = useState([]);


  const GetPinnedList = async (type) => {
    type != 'noloader' && setPinnedLoading(true)
    let data = {
      "userId": parseInt(sessionStorage.getItem('UserID'))
    }
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic/list`, 'POST', data, 'application/json')
        .then((response) => {
          response?.rows && setPinnedList(response?.rows)
          response?.rows && setPinnedLoading(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }


  // paginator for latest topic starts
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [pagination, setPagination] = useState(0);

  const onPageChange = (event) => {
    setCurrentPage(event.page + 1);
    setPagination(event.first);
    setPageSize(event.rows)
  };
  //paginator for latest topic ends

  const [SearchValue, setSearchValue] = useState('');
  const [date, setDate] = useState(null);
  const [SelectedCategory, setSelectedCategory] = useState(null);

  const GetLatestList = async (type) => {
    let userId = sessionStorage.getItem("UserID")
    type != 'noloader' && setTopicLoading(true)
      let data = {
        "page": currentPage,
        "limit": pageSize,
        "search": SearchValue,
        "category_id": SelectedCategory && SelectedCategory?.id !=='' ? SelectedCategory?.id : null,
        "period": date ? date?.getFullYear() : 2024,
       "userId":userId ? userId : null,
      //  This will returns published post and current user drafts
       "onlyPublished":true
      }
      try {
        await fetchAPI(`/messageboard/posts/list`, 'POST', data, 'application/json',)
          .then((response) => {
            response?.rows && setTopicList(response?.rows)
            setTotalRecords(response?.count)
            response?.rows && setTopicLoading(false)
            setUpdateLatestPosts(false);
          }
          )
      }
      catch (error) {
        console.log(error, 'error logged')
      }
    
  }
  const GetTopContributor = async () => {
    setTopContributorLoading(true)

    let data = {
      "page": 1,
      "limit": 10
    }
    try {
      await fetchAPI(`/messageboard/posts/topcontibotor`, 'POST', data, 'application/json')
        .then((response) => {
          response && setTopContributor(response)
          setTopContributorLoading(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }
  // paginator for unanswered topic starts
  const [unansweredtotalRecords, setunansweredTotalRecords] = useState(0);
  const [unansweredcurrentPage, setunansweredCurrentPage] = useState(1);
  const [unansweredpageSize, setunansweredPageSize] = useState(5);
  const [unansweredpagination, setunansweredPagination] = useState(0);

  const unansweredonPageChange = (event) => {
    setunansweredCurrentPage(event.page + 1);
    setunansweredPagination(event.first);
    setunansweredPageSize(event.rows);

  };
  const GetUnanswered = async () => {
    setUnansweredLoading(true)
    let data = {
      "page": unansweredcurrentPage,
      "limit": unansweredpageSize
    }
    try {
      await fetchAPI(`/messageboard/posts/unansweredtopics`, 'POST', data, 'application/json')
        .then((response) => {
          response?.rows && setUnanswered(response?.rows)
          setunansweredTotalRecords(response?.count)
          setUnansweredLoading(false)
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }

  const categoryList = (list) => {
    setEventCategoryList(list)
  }

  const openEditPost = async(postDetails) => {
    await setEditPostDetails(postDetails);
    setOpenTopicPopup(true)
  }
  useEffect(() => {
    sessionStorage.getItem('IsAuthenticated') && GetPinnedList()
  }, [])
  useEffect(() => {
      GetLatestList()
  }, [currentPage, pageSize])

  useEffect(() => {
      if(UpdateLatestPosts === true){
        GetLatestList()
      }
  }, [UpdateLatestPosts])

  useEffect(() => {
    GetTopContributor()
  }, [])
  useEffect(() => {
    GetUnanswered()
  }, [unansweredcurrentPage, unansweredpageSize])

  const handleShowMessageGrid = (index) => {
    setShowMessageGrid(index);
  }
  const [IsAuthenticated, setIsAuthenticated] = useState('')

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem('IsAuthenticated'))
  }, [])
  return (
    <>
      <Layout pageClass="pg-message-board" pageTitle={"Message board"}>
        <div className="px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[80px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
          <div className="xl:max-w-[88.3025vw] mx-auto">
            <Introbanner handleShowMessageGrid={handleShowMessageGrid}
              // UpdateLatestPosts={UpdateLatestPosts}
              setUpdateLatestPosts={setUpdateLatestPosts}
              SearchValue={SearchValue}
              setSearchValue={setSearchValue}
              date={date}
              setDate={setDate}
              SelectedCategory={SelectedCategory}
              categoryList={categoryList}
              setSelectedCategory={setSelectedCategory} />
            {IsAuthenticated && <div className="mt-[50px] xl:mt-[2.604vw]">
              <Pinneditems
                PinnedLoading={PinnedLoading}
                PinnedList={PinnedList}
                GetPinnedList={GetPinnedList}
                setPinnedLoading={setPinnedLoading}
                GetLatestList={GetLatestList}
              />
            </div>}
            <div className="mt-[50px] xl:mt-[4vw] relative z-[2]">
              {showMessageGrid == 0 ?
                <MessageBoardGrid
                  setPinnedLoading={setPinnedLoading}
                  TopicLoading={TopicLoading}
                  TopicList={TopicList}
                  pagination={pagination}
                  pageSize={pageSize}
                  GetPinnedList={GetPinnedList}
                  totalRecords={totalRecords}
                  onPageChange={onPageChange}
                  GetLatestList={GetLatestList}
                  openEditPost={openEditPost}
                />
                :
                <MessageBoardTable
                  TopicLoading={TopicLoading}
                  TopicList={TopicList}
                  pagination={pagination}
                  pageSize={pageSize}
                  totalRecords={totalRecords}
                  onPageChange={onPageChange}
                  openEditPost={openEditPost}
                />
              }
            </div>

            <div className="mt-[50px] xl:mt-[3.34vw] relative z-[2]">
              <div className="grid grid-cols-12  xl:gap-[2.760vw]">
                <Topcontributors
                  TopContributor={TopContributor}
                  TopContributorLoading={TopContributorLoading} />
                <Unansweredtopics
                  Unanswered={Unanswered}
                  UnansweredLoading={UnansweredLoading}
                  unansweredpagination={unansweredpagination}
                  unansweredpageSize={unansweredpageSize}
                  unansweredtotalRecords={unansweredtotalRecords}
                  unansweredonPageChange={unansweredonPageChange}
                // unansweredRowsChange={unansweredRowsChange}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Toast ref={toast}></Toast>

      <Createnewtopic
        visible={openTopicPopup}
        onHides={() => {
          setOpenTopicPopup(false);
        }}
        postDetails={editPostDetails}
        Category={eventCategoryList}
        // ClearTopicForm={ClearTopicForm}
        // setClearTopicForm={setClearTopicForm}
        setUpdateLatestPosts={setUpdateLatestPosts}
        // Category={Category}
        // setCategory={setCategory}
      />

    </>
  );
}
