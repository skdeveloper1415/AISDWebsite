import React, { useState, useEffect, useRef } from "react";
import { Montserrat, Inter } from "@next/font/google";
import { BreadCrumb } from "primereact/breadcrumb";
import Link from "next/link";
// import Image from "next/image";
import { Image } from 'primereact/image';
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import Comments from "@/components/comment";
import RelatedItems from "@/components/relateditems";
import Bordmeetingview from "@/components/popup/bordmeetingview";
import fetchAPI from "@/service/api/fetchAPI";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import { Toast } from "primereact/toast";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import axios from "axios";
import { useSpeechRecognition } from "react-speech-kit";
import { ShareSocial } from "react-share-social";
import { DatewithTime } from "@/service/utils/DatewithTime";
import { Dialog } from 'primereact/dialog';
import adminFetchAPI from "@/service/api/adminFetchApi";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FacebookShareButton, TwitterShareButton, EmailShareButton, WhatsappShareButton, LinkedinShareButton } from 'react-share';
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon, } from "react-share";
import { badWordFilter } from "@/components/badWords";
import PublishPost from "@/components/admin/popup/publishPost";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const myInter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index(props) {
  const [IsAuthenticated, setIsAuthenticated] = useState("");

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem("IsAuthenticated"));
  }, []);
  const router = useRouter();
  const { post_id } = router.query;

  const toast = useRef(null);

  const [visible, setVisible] = useState(false);

  const [DiscussionDetailLoading, setDiscussionDetailLoading] = useState(false);
  const [DiscussionDetail, setDiscussionDetail] = useState("");
  const [PostComment, setPostComment] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [RelatedTopicLoading, setRelatedTopicLoading] = useState(false);
  const [RelatedTopic, setRelatedTopic] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [userId, setUserId] = useState("");
  const [openPublish, setOpenPublish] = useState(false);

  const [sortby, setSortby] = useState("");

  // function to load post details
  const shareUrl = 'https://example.com';
  const title = 'Check out this cool website!';
  const handleCopy = () => {

    // alert('URL copied to clipboard!');
  };
  const GetDiscussionDetail = async (type) => {
    type != "noloader" && setDiscussionDetailLoading(true);
    let data = {
      userId: IsAuthenticated
        ? JSON.parse(sessionStorage.getItem("UserID"))
        : 0, //if user logged in pass userId or else pass 0
      commentOrder: sortby ? sortby.code : 'date', // default date  or releavant anything you pass
    };
    try {
      await fetchAPI(
        `/messageboard/posts/postdetails/${post_id}`,
        "POST",
        data,
        "application/json"
      ).then((response) => {
        response && setDiscussionDetail(response);
        response && setCategory_id(response?.post?.category_id)
        response?.post && setDiscussionDetailLoading(false);
      });
    } catch (error) {
      console.log(error, "error logged");
    }
  };
  const [seeAll, setSeeAll] = useState(false)
  const GetRelatedItems = async (type) => {
    type != "noloader" && setRelatedTopicLoading(true);
    let data = {
      page: 1,
      limit: seeAll ? 60 : 4,
      category_id: parseInt(category_id),
      userId: IsAuthenticated ? parseInt(sessionStorage.getItem("UserID")) : null
    };
    try {
      category_id && await fetchAPI(
        `/messageboard/posts/relatedTopics`,
        "POST",
        data,
        "application/json"
      ).then((response) => {
        response && setRelatedTopic(response);
        setRelatedTopicLoading(false);
      });
    } catch (error) {
      console.log(error, "error logged");
    }
  };
  //Add comment function start
  const addComment = async () => {
    let data = JSON.stringify({
      topic_id: DiscussionDetail?.post?.topic_id,
      created_by: parseInt(sessionStorage.getItem("UserID")),
      post: badWordFilter(PostComment),
    });
    const checkComment = PostComment === null;
    if (checkComment) {
      toast.current.show({
        severity: "error",
        summary: "Enter Comment",
        detail: "",
      });
    }
    !checkComment &&
      (await fetchAPI(
        `/messageboard/posts/comment`,
        "POST",
        data,
        "application/json"
      ).then((resp) => {
        if (resp?.message?.includes("successfully")) {
          GetDiscussionDetail("noloader");
          setPostComment(null);
          // toast.current.show({
          //   severity: "success",
          //   summary: "Comment Added",
          //   detail: "",
          // });
        } else if (resp?.error?.post.includes("missing")) {
          // toast.current.show({
          //   severity: "error",
          //   summary: "Enter Comment",
          //   detail: "",
          // });
        } else {
          console.log("Error logged");
        }
      }));
  };

  //Add comment function end

  //edit comment start

  const editComment = (editId) => {
    const commentToEdit = DiscussionDetail?.comments.find(comment => comment.post_id === editId);
    setPostComment(commentToEdit?.post || '');
    setEditingCommentId(editId);
  };
  const cancelEditComment = () => {
    setPostComment(null);
    setEditingCommentId(null);
  };

  const saveComment = async (editId) => {
    let data = JSON.stringify({
      updated_by: parseInt(sessionStorage.getItem("UserID")),
      post: badWordFilter(PostComment),
    });
    const checkComment = PostComment?.length <= 1;
    if (checkComment) {
      toast.current.show({
        severity: "error",
        summary: "Enter Comment to Update",
        detail: "",
        life: 3000
      });
    }
    !checkComment && (await fetchAPI(`/messageboard/posts/comment/${editId}`, "PUT", data, "application/json")
      .then((resp) => {
        console.log("commentResp", resp, resp?.length);
        if (resp?.message?.includes('successfully')) {
          GetDiscussionDetail("noloader");
          setPostComment(null);
          setEditingCommentId(null);
        } else {
          console.log("Error logged");
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Unable to Update Comment",
            life: 3000
          });
        }
      }));
  };
  //edit comment end

  //Publish and UnPublish start
  const handlePublishUnpublish = async () => {
    const body = DiscussionDetail?.topicDetails?.isPublished === 0 ? {
      "isPublished": 1
    } : {
      "isPublished": 0
    }
    await fetchAPI(`/messageboard/topics/ispublish/${DiscussionDetail?.post?.topic_id}`, "PUT", body, 'application/json')
      .then(({ message }) => {
        toast.current.show({ severity: 'success', detail: message, life: 3000 });
        setOpenPublish(false);
        GetDiscussionDetail("noloader");
      })
      .catch((err) => {
        toast.current.show({ severity: 'error', detail: "Something went wrong..", life: 3000 });
        setOpenPublish(false);
        console.log('Error Logged')
      })
  }
  //Publish and UnPublish end

  // function to pin and unpin the posts

  const Unpin = async (topic_id, action) => {
    // setDiscussionDetailLoading(true)
    let data = {
      topic_id: topic_id,
      isPined: action == "pin" ? 1 : 0,
      viewer_user_id: IsAuthenticated
        ? parseInt(sessionStorage.getItem("UserID"))
        : 0,
    };
    try {
      await fetchAPI(
        `/messageboard/topicview/pinnedunpinnedtopic`,
        "POST",
        data,
        "application/json"
      ).then((response) => {
        response?.message?.includes("successfully") &&
          GetDiscussionDetail("noloader");
        if (response?.message?.includes("topic pinned")) {
          // toast.current.show({
          //   severity: "success",
          //   summary: "Post has been pinned",
          //   detail: "",
          // });
        } else if (response?.message?.includes("unpinned")) {
          // toast.current.show({
          //   severity: "success",
          //   summary: "Post has been unpinned",
          //   detail: "",
          // });
        }
      });
    } catch (error) {
      console.log(error, "error logged");
    }
  };

  // function to update view count of post
  const UpdateViewCount = async () => {
    let data = {
      topic_id: parseInt(localStorage.getItem("topic_id")),
      isPined: parseInt(localStorage.getItem("pinnedStatus")),
      viewer_user_id: IsAuthenticated
        ? parseInt(sessionStorage.getItem("UserID"))
        : 0,
    };
    try {
      await fetchAPI(
        `/messageboard/topicview/pinnedunpinnedtopic`,
        "POST",
        data,
        "application/json"
      );
    } catch (error) {
      console.log(error, "error logged");
    }
  };

  const [pinnedStatus, setPinnedStatus] = useState("");
  const [topic_id, setTopic_id] = useState("");

  useEffect(() => {
    post_id && GetDiscussionDetail();
  }, [post_id, topic_id, sortby]);
  useEffect(() => {
    setUserId(sessionStorage.getItem("UserID"));
  }, []);

  useEffect(() => {
    post_id && UpdateViewCount();
  }, [post_id]);
  useEffect(() => {
    seeAll ? GetRelatedItems('no-loader') : GetRelatedItems();
  }, [category_id, seeAll]);


  const checkLocalStorage = () => {
    setPinnedStatus(localStorage.getItem("pinnedStatus"));
    setTopic_id(localStorage.getItem("topic_id"));
  };
  useEffect(() => {
    checkLocalStorage();
  });
  const items = [
    {
      label: "AISD Council Message Board", url: "/messageboard",
      template: () => (
        <Link href="/messageboard">
          AISD Council Message Board
        </Link>
      ),
    },
    {
      // label: "Discussion Details",
      url: `/messageboard/discussiondetails?post_id=${post_id}&category_id=${category_id}`,
      template: () => (
        <Link className="text-[#A93439]" href="/messageboard/discussiondetails">
          Discussion Details
        </Link>
      ),
    },
  ];
  const [bordmeetingviewpopup, setbordmeetingviewpopup] = useState(false);

  const sortbyOption = [{ code: 'Relevant', name: "By: Relevancy" }, { code: 'date', name: "By: Date" }];
  const home = { icon: "austin-home", url: "/" };

  const { listen, listening, stop, transcript } = useSpeechRecognition({
    onResult: (result) => {
      const newValue = result;
      setPostComment(PostComment + newValue);
      setInitiallyTypedValue(PostComment + newValue)
    },
  });
  // function to like comments/post
  const like = async (id, type, action) => {
    let data = {
      likeStatus: action == 'like' ? 1 : 0,
      post_id: type == "comment" ? id : 0,
      topic_id: type == "topic" ? id : 0,
      user_id: IsAuthenticated
        ? JSON.parse(sessionStorage.getItem("UserID"))
        : 0,
    };

    try {
      IsAuthenticated ? await fetchAPI(
        `/messageboard/posts/like`,
        "POST",
        data,
        "application/json"
      ).then((response) => {
        response?.message?.includes("successfully") && GetDiscussionDetail('noloader');
      }) : toast.current.show({ severity: 'error', detail: 'Please login to perform like.', life: 3000 });

    } catch (error) {
      console.log(error, "error logged");
    }
  }
  const [initiallyTypedValue, setInitiallyTypedValue] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState('Translate to')

  const languagesList = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'tr', name: 'Turkish' },
    { code: 'nl', name: 'Dutch' },
    { code: 'sv', name: 'Swedish' },
    { code: 'fi', name: 'Finnish' },
    { code: 'da', name: 'Danish' },
    { code: 'no', name: 'Norwegian' },
    { code: 'pl', name: 'Polish' },
    { code: 'cs', name: 'Czech' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'ro', name: 'Romanian' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'el', name: 'Greek' },
    { code: 'he', name: 'Hebrew' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ms', name: 'Malay' },
    { code: 'th', name: 'Thai' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'sq', name: 'Albanian' },
    { code: 'hy', name: 'Armenian' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'eu', name: 'Basque' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'ca', name: 'Catalan' },
    { code: 'hr', name: 'Croatian' },
    { code: 'et', name: 'Estonian' },
  ]

  useEffect(() => {
    // To Trigger translation whenever selectedLanguageKey changes
    if (selectedLanguageKey !== 'Translate to') {
      PostComment && handleTranslate();
    }
  }, [selectedLanguageKey]);


  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value)
  }

  const handleTranslate = async () => {
    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: PostComment,
            // source: 'en', // source language (English in this example)
            target: selectedLanguageKey, // target language (Spanish in this example)
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Translation failed');
      }
      const data = await response.json();
      setPostComment(data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating:', error);
    }
  };



  async function deleteComment(deleteId) {
    try {
      const apiUrl = `/messageboard/posts/comment/${deleteId}`;

      const response = await adminFetchAPI(apiUrl, "DELETE", {}, "application/json");

      if (response.status === 200) {
        console.log(`Comment with ID ${deleteId} deleted successfully`);

        return response.data;
      } else {
        console.error(`Failed to delete comment with ID ${deleteId}. Status code: ${response.status}`);

      }
      GetDiscussionDetail()
    } catch (error) {
      console.error(`Error deleting comment with ID ${deleteId}: ${error.message}`);
    }
  }


  const [currentURL, setcurrentURL] = useState("");
  const [sharePopup, setsharePopup] = useState(false);

  useEffect(() => {
    setcurrentURL(window.location.href);
  });

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        // Clicked outside the div
        setsharePopup(false);
        // Perform your false action here
        console.log('Clicked outside the div');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInsideDivClick = () => {
    // Clicked inside the div
    setsharePopup(true);
    // Perform your true action here
    console.log('Clicked inside the div');
  };
  return (
    <>
      {" "}
      <Layout
        pageClass="discussion-board"
        pageTitle={
          DiscussionDetail?.post?.post
            ? DiscussionDetail?.post?.post
            : "Message board"
        }
      >
        <div className=" lg:px-[20px] xl:px-[1.04vw] pt-[30px] xl:pt-[1vw] pb-6 xl:pb-[1.25vw]">
          <div className="xl:max-w-[88.3025vw] mx-auto">
            <div className="discussion-bg px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[20px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw] relative z-[2]">
              <div className="xl:max-w-[88.3025vw] mx-auto ">
                <div className={myMontserrat.className}>
                  <div className="custom_breadcrumb">
                    <BreadCrumb model={items} home={home} />
                  </div>
                  <div className="flex  justify-between items-center">
                    <h2
                      className={`${myMontserrat.className} text-[#374151] text-[16px] xl:text-[1.25vw] font-semibold`}
                    >
                      Discussion Details
                    </h2>
                    <Link
                      href="/messageboard"
                      className="cursor-pointer bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[12px] xl:text-[0.833vw] font-medium px-[10px] xl:px-[1.042vw] py-[6px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
                    >
                      Back to All Discussions
                    </Link>
                  </div>
                  {DiscussionDetailLoading ? (
                    <Loader height="100vh" />
                  ) : (
                    <div className="xl:mt-[1.604vw] mt-[40px]">
                      <div className="bg-[#fff] rounded-[24px] xl:rounded-[1.250vw] xl:p-[1.667vw] p-[20px] relative">
                        {IsAuthenticated && <div className="absolute -top-5 right-5">
                          <div
                            onClick={() =>
                              Unpin(
                                DiscussionDetail?.post?.topic_id,
                                DiscussionDetail?.post?.pinnedStatus == 0
                                  ? "pin"
                                  : "unpin"
                              )
                            }
                            className={`cursor-pointer text-[#fff] text-[16px] xl:text-[0.938vw] font-semibold px-[10px] xl:px-[0.833vw] py-[10px]  rounded-full ${DiscussionDetail?.post?.pinnedStatus == 1
                              ? "bg-[#a93439]"
                              : "bg-[#dbe1ea]"
                              }`}
                          >
                            <i
                              className={`text-[20px] ${DiscussionDetail?.post?.pinnedStatus == 1
                                ? "text-[#fff]"
                                : "text-[grey]"
                                } mr-1 austin-pin`}
                            ></i>
                            {DiscussionDetail?.post?.pinnedStatus == 1
                              ? "Pinned Topic"
                              : ""}
                          </div>
                        </div>
                        }
                        <div className="xl:space-y-[1.25vw] space-y-[15px]">
                          <div className="flex justify-between items-center flex-wrap">
                            <div className="flex gap-[20px] xl:gap-[1.042vw] mb-[10px] xl:mb-[0px]">
                              <div>
                                {DiscussionDetail?.post?.user?.profile_pic ?
                                  <Image
                                    src={
                                      DiscussionDetail?.post?.user?.profile_pic
                                    }
                                    width={70}
                                    height={70}
                                    alt="active_user"
                                    className="h-[70px] w-[70px] xl:h-[3.646vw] xl:w-[3.646vw] "
                                    onError={handleImageError}
                                  />
                                  :
                                  <div className="capitalize text-xl rounded-full w-11 h-11 flex items-center justify-center bg-gray-500 text-white">
                                    {DiscussionDetail?.post?.user?.firstName?.charAt(
                                      0
                                    )}
                                  </div>
                                }
                              </div>
                              <div>
                                <h6 className="capitalize text-[#374151] text-[16px] xl:text-[1.25vw] font-semibold">
                                  {DiscussionDetail?.post?.user?.firstName +
                                    " " +
                                    DiscussionDetail?.post?.user?.lastName}
                                </h6>
                                <p className="text-[#9CA1AB] text-[14px] xl:text-[0.833vw] font-normal">
                                  {DatewithTime(DiscussionDetail?.post?.createdAt)
                                    // + ' ' + convertTimeFormat(DiscussionDetail?.post?.createdAt)
                                  }
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-[20px] xl:gap-[1.042vw] text-[#9CA1AB]">
                              {DiscussionDetail?.topicDetails?.created_by == userId && (
                                <div
                                  onClick={() => setOpenPublish(true)}
                                  className="cursor-pointer flex items-center font-light xl:text-[0.833vw] text-[16px] bg-[#FDF6B2] px-[16px] xl:px-[0.833vw] py-[0.417vw] xl:py-[8px]  rounded-full leading-none"
                                >
                                  <i className="autinisd-warning  text-[15px]  mr-2"></i>
                                  {DiscussionDetail?.topicDetails?.isPublished === 0 ? (
                                    <>
                                      Unpublish
                                    </>
                                  ) : (
                                    <>
                                      Publish
                                    </>
                                  )}
                                </div>
                              )}

                              <div className="font-light flex items-center xl:text-[0.833vw] text-[14px] ">
                                {" "}
                                <div>
                                  <i className="austin-note flex text-[20px]  mr-3"></i>
                                </div>
                                <div className="">
                                  {" "}
                                  {DiscussionDetail?.commentCount} Comments{" "}
                                </div>
                              </div>
                              <div className="font-light flex items-center xl:text-[0.833vw] text-[14px] ">
                                {" "}
                                <div>
                                  <i className="austin-eye flex text-[20px]  mr-3"></i>
                                </div>
                                <div className="">
                                  {DiscussionDetail?.post?.viewCount} Views
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <h6 className="text-[#374151] text-[18px] xl:text-[1.667vw] font-semibold leading-6">
                              {DiscussionDetail?.post?.post}
                            </h6>
                          </div>
                          <div
                            className={`${myInter.className} flex  xl:gap-[0.625vw] gap-[16px] divide-x divide-[#BECDE3]`}
                          >
                            <p className="text-[#62789B] text-[12px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]">
                              Category:{" "}
                              {DiscussionDetail?.category?.topic_category}
                            </p>

                            <div>
                              <div className="flex flex-col md:flex-row gap-2 ml-5">
                                {DiscussionDetail?.tagRes?.map((item) => (
                                  <span
                                    href=""
                                    className="bg-[#E8EBF0] rounded-md text-[#62789B] text-[12px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]"
                                  >
                                    {item?.title}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <p className="text-[#4B586E] text-[14px] xl:text-[1.042vw] font-normal xl:leading-[1.40vw] leading-6">
                            {DiscussionDetail?.post?.description}
                          </p>
                          <div>
                            {DiscussionDetail.postCoverImage?.coverImgUrl ? (
                              <h6 className="text-[#374151] text-[18px] xl:text-[1.042vw] font-medium">
                                Media
                              </h6>
                            ) : ''}
                            <div className="mt-[8px] xl:mt-[0.417vw]">
                              <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 gap-[24px] xl:gap-[1.250vw]">
                                <div className="xl:col-span-9 col-span-12">
                                  <div className="grid grid-cols-3 xl:gap-[1.250vw] gap-5 font-light">
                                    {
                                      DiscussionDetail?.postCoverImage?.coverImgUrl ? (
                                        <div className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg py-2 px-2 flex items-center justify-between msgmedia-image h-[208px]">
                                          <div className="relative w-full h-full">
                                            <Image
                                              src={DiscussionDetail?.postCoverImage?.coverImgUrl}
                                              layout='fill'
                                              objectFit='contain'
                                              alt="Preview"
                                              className="w-full h-full block"
                                              preview
                                            />
                                            <div className="absolute top-[40%] flex justify-center w-full">
                                              <Link
                                                href=""
                                                onClick={() =>
                                                  setbordmeetingviewpopup(true)
                                                }
                                              >
                                                {" "}
                                              </Link>
                                            </div>
                                          </div>

                                        </div>

                                      ) : ''
                                    }
                                    {DiscussionDetail?.postFilesList?.map(
                                      (item) => {
                                        const fileExtension = item?.fileurl
                                          .split(".")
                                          .pop()
                                          ?.toLowerCase();
                                        console.log(
                                          "fileExtension",
                                          fileExtension,
                                          item?.fileurl
                                        );
                                        if (
                                          [
                                            "xlsx",
                                            "xls",
                                            "csv",
                                            "doc",
                                            "docx",
                                            "txt",
                                            "pdf",
                                          ].includes(fileExtension)
                                        ) {
                                          return (
                                            <div className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg py-2 px-2 flex items-center justify-between h-[208px]">
                                              <iframe
                                                key={item?.fileurl}
                                                // ref={iframeRef}
                                                className="iframeFullSize"
                                                title="PDF Viewer"
                                                // onLoad={onIframeLoaded}
                                                width="100%"
                                                height="192"
                                                // src={item?.fileurl}
                                                src={`https://docs.google.com/gview?url=${item?.fileurl}&embedded=true`}
                                              />
                                            </div>
                                          );
                                        } else if (
                                          [
                                            "jpg",
                                            "jpeg",
                                            "png",
                                            "gif",
                                            "bmp",
                                            "svg",
                                          ].some((extension) =>
                                            item?.fileurl.includes(extension)
                                          )
                                        ) {
                                          // Assuming item.fileurl contains the image URL
                                          return (
                                            <div
                                              key={item?.fileurl}
                                              className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg py-2 px-2 flex items-center justify-between h-[208px] msgmedia-image"
                                            >
                                              {/*  <i className="austin-attachment"></i> */}
                                              {/* <span>{item?.fileName}</span> */}
                                              <Image
                                                src={item?.fileurl}
                                                layout='fill'
                                                objectFit='contain'
                                                alt="Preview"
                                                className="w-full"
                                                preview
                                              />
                                              {/* <i className="austin-close-circle"></i> */}
                                            </div>
                                          );
                                        } else if (
                                          ["mp3"].includes(fileExtension)
                                        ) {
                                          return (
                                            <span
                                              onClick={() => { }}
                                              key={item?.fileurl}
                                              className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg py-2 px-2 flex items-center justify-between h-[208px]"
                                            >
                                              <audio
                                                src={item?.fileurl}
                                                controls
                                                type={`audio/${fileExtension}`}
                                              ></audio>
                                            </span>
                                          );
                                        } else if (
                                          ["mp4", "webm"].includes(
                                            fileExtension
                                          )
                                        ) {
                                          return (
                                            <span
                                              onClick={() => { }}
                                              key={item?.fileurl}
                                              className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg py-2 px-2 flex items-center justify-between h-[208px]"
                                            >
                                              <video
                                                src={item?.fileurl}
                                                controls
                                                height="192"
                                              ></video>
                                            </span>
                                          );
                                        } else {
                                          return (
                                            <span
                                              onClick={() => { }}
                                              key={item?.fileurl}
                                              className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg py-2 px-2 flex items-center justify-between h-[208px]"
                                            >
                                              <i className="austin-attachment"></i>
                                              <span>{item?.fileName}</span>
                                              <i className="austin-close-circle"></i>
                                            </span>
                                          );
                                        }
                                      }
                                    )}
                                  </div>
                                </div>

                                <div className="xl:col-span-3 col-span-12 place-self-end">
                                  <div className="flex justify-end gap-[14px] xl:gap-[0.833vw]">
                                    <span className="relative bg-[#F5F6F8] text-[#4B586E] text-[14px] xl:text-[0.833vw] font-medium px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full">
                                      <i
                                        onClick={() =>
                                          like(
                                            DiscussionDetail?.post?.topic_id,
                                            "topic",
                                            DiscussionDetail?.post?.topicUserLikes == 0 ? 'like' : 'unlike'
                                          )
                                        }
                                        className={`${DiscussionDetail?.post?.topicUserLikes
                                          ? "text-[#1F3F71] cursor-pointer austin-like-fill  text-[15px]  mr-2"
                                          : "text-[#1B3865] cursor-pointer austin-like  text-[15px]  mr-2"
                                          } `}
                                      ></i>
                                      {DiscussionDetail?.post?.topicLikes} Likes
                                    </span>
                                    <span
                                      ref={divRef}
                                      onClick={handleInsideDivClick}
                                      className="cursor-pointer bg-[#F5F6F8] text-[#4B586E] text-[14px] xl:text-[0.833vw] font-medium px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full"
                                    >
                                      <i className="austin-share  text-[15px] text-[#1B3865] mr-2"></i>
                                      Share
                                      {sharePopup && (
                                        <div className="share_media absolute bottom-0 right-0">
                                          {/* <ShareSocial
                                            url={currentURL}
                                            socialTypes={[
                                              "whatsapp",
                                              "email",
                                              "facebook",
                                              "twitter",
                                              "linkedin",
                                            ]}
                                            onSocialButtonClicked={(data) =>
                                              console.log(data)
                                            }
                                          /> */}
                                          <div>
                                            <WhatsappShareButton url={currentURL} title={title}>
                                              <WhatsappIcon size={32} round={true} />
                                            </WhatsappShareButton>
                                            <EmailShareButton url={currentURL} title={title}>
                                              <EmailIcon size={32} round={true} />
                                            </EmailShareButton>
                                            <FacebookShareButton url={currentURL} quote={title}>
                                              <FacebookIcon size={32} round={true} />
                                            </FacebookShareButton>
                                            <TwitterShareButton url={currentURL} title={title}>
                                              <TwitterIcon size={32} round={true} />
                                            </TwitterShareButton>
                                            <LinkedinShareButton url={currentURL} title={title}>
                                              <LinkedinIcon size={32} round={true} />
                                            </LinkedinShareButton>

                                            <CopyToClipboard text={currentURL} onCopy={handleCopy}>
                                              <div className="copyurl flex w-full">
                                                <input type="text" value={currentURL} readOnly className="bg-transparent  w-[400px] text-[#fff] overflow-x-auto" />
                                                <button className="text-[#fff] px-4">Copy</button>
                                              </div>

                                            </CopyToClipboard>

                                          </div>
                                        </div>
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {DiscussionDetailLoading ? null : (
                    <div className="xl:mt-[2.604vw] mt-[40px]">
                      <div className="bg-[#fff] rounded-[24px] xl:rounded-[1.250vw] xl:p-[1.667vw] p-[10px] relative xl:space-y-[1.25vw] space-y-[15px]">
                        <div className="flex flex-wrap justify-between items-center">
                          <h2 className="text-[#374151] text-[18px] xl:text-[1.25vw] font-semibold">
                            Comments
                          </h2>
                          {/* <div className="chat_dropdown">
                            <Dropdown
                              value={sortby}
                              onChange={(e) => setSortby(e.value)}
                              options={sortbyOption}
                              optionLabel="name"
                              placeholder="Select Order by"
                              className="w-[250px] text[-14px] p-[-0px]"
                            />
                          </div> */}
                        </div>
                        <div>
                          {IsAuthenticated && (
                            <>
                              <div className="custom_editor relative topic-editor">
                                <Editor
                                  value={PostComment}
                                  onTextChange={(e) => {
                                    setPostComment(e.textValue)
                                    setInitiallyTypedValue(e.textValue)
                                  }
                                  }
                                  style={{ minHeight: "20vh", height: "100%" }}
                                />
                                <span
                                  onMouseDown={listen}
                                  onMouseUp={stop}
                                  className="cursor-pointer absolute bottom-5 right-8"
                                >
                                  <i
                                    style={{ color: listening && "#2d35b9" }}
                                    className="austin-mic text-[#4B586E] text-[22px]"
                                  ></i>
                                </span>
                                {listening && (
                                  <p className="text-[12px] absolute bottom-0 right-3">
                                    Listening...
                                  </p>
                                )}
                                <span className="cursor-pointer flex items-center absolute top-2 right-3">
                                  <select
                                    className="flex items-center bg-gray-200 rounded-full p-1 text-xs mr-2 language-select"
                                    onChange={(event) => languageKey(event)}
                                  >
                                    <option>Translate to</option>
                                    {languagesList.map((language) => {
                                      return (
                                        <option value={language.code}>
                                          {language.name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </span>
                              </div>
                              <div
                                className={`${myInter.className} flex justify-end xl:mt-[0.833vw] mt-[16px] gap-3`}
                              >
                                {!editingCommentId && (<span
                                  onClick={() => {
                                    addComment();
                                  }}
                                  className="cursor-pointer bg-[#4F6484] rounded-md text-[#fff] text-[12px] xl:text-[0.833vw] font-normal px-[12px] xl:px-[1.042vw] py-[6px] xl:py-[0.733vw] leading-5"
                                >
                                  <i className="austin-pluse text-[#fff] text-[12px] xl:text-[0.833vw] mr-2"></i>
                                  Add Comment
                                </span>)}
                                {editingCommentId &&
                                  (
                                    <span
                                      onClick={() => {
                                        saveComment(editingCommentId)
                                      }}
                                      className="bg-[#A93439] cursor-pointer hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[16px] xl:py-[0.833vw] px-[20px] xl:px-[1.042vw] inline-block text-[18px] xl:text-[0.938vw] text-white"
                                    >
                                      Save
                                    </span>)}
                                {editingCommentId &&
                                  (<span
                                    onClick={() => {
                                      cancelEditComment()
                                    }}
                                    className="text-[#4B586E] text-[18px] xl:text-[0.938vw] cursor-pointer text-base font-normal border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg px-[20px] xl:px-[1.042vw] py-[12px] xl:py-[0.625vw]">
                                    Cancel
                                  </span>)}
                              </div>
                            </>
                          )}
                        </div>
                        {DiscussionDetail?.comments?.length === 0 ?
                          <div className="bg-[#F5F6F8] text-center rounded-md p-[14px] xl:p-[0.833vw] text-[#4B586E] w-full text-[12px] xl:text-[0.833vw] font-light">
                            No Comments Available
                          </div>
                          :
                          <Comments
                            like={like}
                            deleteComment={deleteComment}
                            data={DiscussionDetail?.comments}
                            editComment={editComment}
                          />
                        }
                        <PublishPost
                          visible={openPublish}
                          onHides={() => setOpenPublish(false)}
                          icon="autinisd-info-circle-fill"
                          message={`Are you sure you want to ${DiscussionDetail?.topicDetails?.isPublished === 0 ? "Unpublish" : "Publish"} this Post?`}
                          action={handlePublishUnpublish}
                        />
                      </div>
                    </div>
                  )}
                  <div className="">
                    <div>
                      {RelatedTopicLoading ? (
                        <Loader height="20vh" />
                      ) : (
                        RelatedTopic?.count > 0 && <RelatedItems
                          data={RelatedTopic}
                          GetRelatedItems={GetRelatedItems}
                          checkLocalStorage={checkLocalStorage}
                          seeAll={seeAll}
                          setSeeAll={setSeeAll}
                          IsAuthenticated={IsAuthenticated}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <Bordmeetingview
                visible={bordmeetingviewpopup}
                onHides={() => setbordmeetingviewpopup(false)}
              />
            </div>
            <Toast ref={toast}></Toast>
          </div>
        </div>
      </Layout>
    </>
  );
}
