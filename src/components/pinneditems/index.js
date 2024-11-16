import React, { useState, useRef } from "react";
import { Montserrat } from "@next/font/google";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Loader from "@/components/loader";
import { convertDateFormat } from "@/service/utils/DateConversion";
import fetchAPI from '@/service/api/fetchAPI'
import { Toast } from "primereact/toast";
import Link from "next/link";


const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index(props) {
  const toast = useRef(null);

  const [SeeAll, setSeeAll] = useState(false)

  const PinnedList = SeeAll ? props?.PinnedList : props?.PinnedList?.slice(0, 4)

  // function to pin and unpin the posts
  const Unpin = async (topic_id, action) => {
    // props?.setPinnedLoading(true)
    let data = {
      topic_id: topic_id,
      isPined: action == 'pin' ? 1 : 0,
      viewer_user_id: parseInt(sessionStorage.getItem('UserID'))
    }
    try {
      await fetchAPI(`/messageboard/topicview/pinnedunpinnedtopic`, 'POST', data, 'application/json')
        .then((response) => {
          response?.message?.includes('successfully') && props?.GetPinnedList('noloader'), props?.GetLatestList('noloader')
          // if (response?.message?.includes('topic pinned')) {
          //   toast.current.show({ severity: 'success', summary: 'Post has been pinned', detail: '' });
          // }
          // else if (response?.message?.includes('unpinned')) {
          //   toast.current.show({ severity: 'success', summary: 'Post has been unpinned', detail: '' });
          // }
        }
        )
    }
    catch (error) {
      console.log(error, 'error logged')
    }
  }

  return (
    <>
      {props?.PinnedList.length > 0 && <div className="bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] px-[1.458vw]">
        <div className="md:flex gap-[26px] xl:gap-[1.354vw] space-y-5 md:space-y-0">
          <div className="col">
            <div className={myMontserrat.className}>
              <div className="text-[#374151] text-[24px] xl:text-[2.396vw] leading-[1.2]">
                Pinned
              </div>
              <div className="text-[#374151] text-[35px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                Items
              </div>
            </div>
            {props?.PinnedList.length > 4 && <div className="cursor-pointer mt-[24px]">
              <span
                onClick={() => setSeeAll(!SeeAll)}
                className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-white"
              >
                {SeeAll ? 'See Less' : 'See All'}
                <i className={`${SeeAll ? 'austin-arrow-open-up' : 'austin-arrow-open-down'} ml-[8px] xl:ml-[0.417vw]`}></i>
              </span>
            </div>}
          </div>
          {props.PinnedLoading ? <div className="w-full"><Loader height='100%' /></div> :
            props?.PinnedList.length == 0 ? <div className="flex items-center justify-center col w-full">No records found</div> : <div className="col w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]">
                {PinnedList?.map(item =>
                  <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                    <div className="relative">
                      <Link href={{ pathname: '/messageboard/discussiondetails', query: { post_id: item?.posts?.post_id } }} onClick={() => { localStorage.setItem('post_id', item?.posts?.post_id), localStorage.setItem('category_id', item?.category_id), localStorage.setItem('pinnedStatus', item?.isPined), localStorage.setItem('topic_id', item?.topic_id) }} className="col cursor-pointer boxContent">
                        <span className="capitalize text-[#374151] text-[14px] xl:text-[0.729vw]">
                          {item?.posts?.user.firstName + ' ' + item?.posts?.user?.lastName}
                        </span>
                        <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                          {convertDateFormat(item?.viewed_on)}
                        </span>
                      </Link>
                      <div onClick={() => Unpin(item?.topic_id, item?.isPined == 0 ? 'pin' : 'unpin')} className="absolute right-0 top-0 cursor-pointer pinWapper">
                        <span className={`inline-flex items-center justify-center w-[30px] xl:w-[2.083vw] h-[30px] xl:h-[2.083vw] rounded-full ${item?.isPined ? 'bg-[#A93439] hover:bg-[#F6EAEB] text-white hover:text-[#B1484C]' : 'bg-[#F0F2F6] text-[#9CA1AB] hover:text-[blue]'}`}>
                          <i className="text-[14px] xl:text-[1.042vw] hover:bg-[#F6EAEB] austin-pin"></i>
                        </span>
                      </div>
                      <div className="boxContent">
                      <div className="text-[#374151] text-[16px] xl:text-[0.833vw] font-semibold mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                        <Link href={{ pathname: '/messageboard/discussiondetails', query: { post_id: item?.posts?.post_id} }} onClick={() => { localStorage.setItem('post_id', item?.posts?.post_id), localStorage.setItem('category_id', item?.category_id), localStorage.setItem('pinnedStatus', item?.isPined), localStorage.setItem('topic_id', item?.topic_id) }} className="cursor-pointer">
                          {item?.topic?.topic}
                        </Link>
                      </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                      <div className="boxContent">
                        <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                          <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                          {item?.viewCount}
                        </div>
                      </div>
                      <div className="custmAvatar">
                        <AvatarGroup>
                          {item?.CommentDetails?.commentUser?.map(itr =>
                            itr?.user?.profile_pic ? <Avatar
                              image={itr?.user?.profile_pic}
                              shape="circle"
                            />
                              :
                              <div className="capitalize text-sm rounded-full w-6 h-6 flex items-center justify-center bg-gray-500 text-white">
                                {itr?.user?.firstName?.charAt(0)}
                              </div>
                          )}
                          {item?.CommentDetails?.commentCount > 3 && <div className="capitalize text-sm rounded-full w-6 h-6 flex items-center justify-center bg-[#232b25] text-white">+{item?.CommentDetails?.commentCount - 3}</div>}
                        </AvatarGroup>
                      </div>
                    </div>
                  </div>
                )
                }
              </div>
            </div>

          }
        </div>
      </div>
      }
      <Toast ref={toast}></Toast>
    </>
  );
}
