import React from "react";
import { Montserrat } from "@next/font/google";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import Link from "next/link";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  return (
    <>
    <div className="bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] px-[1.458vw]">
      <div className="md:flex items-start lg:items-center gap-[26px] xl:gap-[1.354vw] space-y-5 md:space-y-0">
        <div className="col">
          <div className={myMontserrat.className}>
            <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
              Pinned
            </div>
            <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
              Items
            </div>
          </div>
          <div className="mt-[24px]">
            <Link
              href={""}
              className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-white"
            >
              See All{" "}
              <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.250vw]">
            <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
              <div className="relative">
                <div className="col">
                  <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                  </span>
                  <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                  </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer pinWapper">
                  <span className="inline-flex items-center justify-center w-[40px] xl:w-[2.083vw] h-[40px] xl:h-[2.083vw] rounded-full bg-[#A93439]">
                  <i className="text-white text-[20px] austin-pin"></i>
                  </span>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                  Questions Regarding Item 83 for the September 14th, 2023,
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
            </div>
            <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
              <div className="relative">
                <div className="col">
                  <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                  </span>
                  <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                  </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer pinWapper">
                  <span className="inline-flex items-center justify-center w-[40px] xl:w-[2.083vw] h-[40px] xl:h-[2.083vw] rounded-full bg-[#A93439]">
                  <i className="text-white text-[20px] austin-pin"></i>
                  </span>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                  Questions Regarding Item 83 for the September 14th, 2023,
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
            </div>
            <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
              <div className="relative">
                <div className="col">
                  <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                  </span>
                  <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                  </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer pinWapper">
                  <span className="inline-flex items-center justify-center w-[40px] xl:w-[2.083vw] h-[40px] xl:h-[2.083vw] rounded-full bg-[#A93439]">
                  <i className="text-white text-[20px] austin-pin"></i>
                  </span>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                  Questions Regarding Item 83 for the September 14th, 2023,
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
            </div>
            <div className="border border-[#E5E7EB] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] boxWrapper grow_ellipse">
              <div className="relative">
                <div className="col">
                  <span className="text-[#374151] text-[14px] xl:text-[0.729vw]">
                    Mackenzie Kelly
                  </span>
                  <span className="text-[#4B586E] text-[12px] xl:text-[0.625vw] ml-2">
                    Mon Sep 11, 2023
                  </span>
                </div>
                <div className="absolute right-0 top-0 cursor-pointer pinWapper">
                  <span className="inline-flex items-center justify-center w-[40px] xl:w-[2.083vw] h-[40px] xl:h-[2.083vw] rounded-full bg-[#A93439]">
                  <i className="text-white text-[20px] austin-pin"></i>
                  </span>
                </div>
                <div className="text-[#374151] text-[16px] xl:text-[0.729vw] font-medium mt-[16px] xl:mt-[0.833vw] min-h-[76px] xl:min-h-[3.958vw]">
                  Questions Regarding Item 83 for the September 14th, 2023,
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
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
