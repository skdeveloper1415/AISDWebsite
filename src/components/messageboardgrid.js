import React from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Link from "next/link";

export default function MessageBoardGrid() {
  return (
    <>
        <div className="flex justify-between mb-[40px] xl:mb-[2.09vw]">
            <h2 className="text-[#374151] text-[32px] xl:text-[1.667vw] leading-[1.3]">Latest <span className="font-bold">Topics</span></h2>
            <button className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] flex gap-2 items-center text-[16px] xl:text-[0.833vw] text-white">See All <i className="austin-arrow-line-right"></i></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]">
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
            <Link href="/website/messageboard/discussiondetails" className="shadow border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
                <div className="relative">
                <div className="col">
                    <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                    </span>
                    <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                    </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer">
                    <i className="text-[#E5E7EB] bg-[#9CA1AB] rounded-full text-[40px] xl:text-[2.083vw] austin-pin-circle"></i>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                    Questions Regarding Item 83 for the<br/> September 14th, 2023,
                    Council Meeting
                </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-[12px] xl:pt-[0.625vw]">
                <div>
                    <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">
                    <i className="austin-eye text-[14px] xl:text-[0.729vw] mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                    614
                    </div>
                </div>
                <div className="custmAvatar">
                    <AvatarGroup>
                    <Avatar
                        image="/assets/images/userpic1.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic2.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic3.png"
                        shape="circle"
                    />
                    <Avatar
                        image="/assets/images/userpic4.png"
                        shape="circle"
                    />
                    <Avatar label="+4" shape="circle" />
                    </AvatarGroup>
                </div>
                </div>
            </Link>
        </div>
    </>
  );
}
