import React from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  return (
    <>
      
        <div className="col-span-4">
          <div className="bg-white h-full rounded-[24px] xl:rounded-[1.250vw] p-[32px] xl:p-[1.667vw]">
            <div className="mb-[24px] xl:mb-[1.250vw]">
              <div className={myMontserrat.className}>
                <div className="text-[#374151] text-[32px] xl:text-[1.667vw] font-semibold leading-[1.3]">
                  Top Contributors
                </div>
                <div className="text-[#9CA1AB] text-[16px] xl:text-[0.833vw] font-medium">
                  People who started the most disucussions on Talks.
                </div>
              </div>
            </div>

            <div className="space-y-[18px] xl:space-y-[0.938vw]">
              {/* row */}
              <div className="flex items-center gap-[16px] xl:gap-[0.833vw] border-b border-[#E5E7EB] pb-[8px] pb-[0.417vw]">
                <div className="col">
                  <div className="userpic">
                    <Image
                      src={"/assets/images/userpic1.png"}
                      width={"48"}
                      height={"48"}
                      className="rounded-full object-cover min-w-[48px] min-h-[48px]"
                    />
                  </div>
                </div>
                <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                  <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-medium">
                    Robert Fox
                  </span>
                  <span>
                    <i className="austin-chat"></i>
                  </span>
                  <span className={`${myMontserrat.className} text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    154
                  </span>
                </div>
              </div>
              {/* row */}
              <div className="flex items-center gap-[16px] xl:gap-[0.833vw] border-b border-[#E5E7EB] pb-[8px] pb-[0.417vw]">
                <div className="col">
                  <div className="userpic">
                    <Image
                      src={"/assets/images/userpic2.png"}
                      width={"48"}
                      height={"48"}
                      className="rounded-full object-cover min-w-[48px] min-h-[48px]"
                    />
                  </div>
                </div>
                <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                  <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-medium">
                    Esther Howard
                  </span>
                  <span>
                    <i className="austin-chat"></i>
                  </span>
                  <span className={`${myMontserrat.className} text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    154
                  </span>
                </div>
              </div>
              {/* row */}
              <div className="flex items-center gap-[16px] xl:gap-[0.833vw] border-b border-[#E5E7EB] pb-[8px] pb-[0.417vw]">
                <div className="col">
                  <div className="userpic">
                    <Image
                      src={"/assets/images/userpic3.png"}
                      width={"48"}
                      height={"48"}
                      className="rounded-full object-cover min-w-[48px] min-h-[48px]"
                    />
                  </div>
                </div>
                <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                  <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-medium">
                    Dianne Russell
                  </span>
                  <span>
                    <i className="austin-chat"></i>
                  </span>
                  <span className={`${myMontserrat.className} text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    154
                  </span>
                </div>
              </div>
              {/* row */}
              <div className="flex items-center gap-[16px] xl:gap-[0.833vw] border-b border-[#E5E7EB] pb-[8px] pb-[0.417vw]">
                <div className="col">
                  <div className="userpic">
                    <Image
                      src={"/assets/images/userpic4.png"}
                      width={"48"}
                      height={"48"}
                      className="rounded-full object-cover min-w-[48px] min-h-[48px]"
                    />
                  </div>
                </div>
                <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                  <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-medium">
                    Jenny Wilson
                  </span>
                  <span>
                    <i className="austin-chat"></i>
                  </span>
                  <span className={`${myMontserrat.className} text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    154
                  </span>
                </div>
              </div>
              {/* row */}
              <div className="flex items-center gap-[16px] xl:gap-[0.833vw] border-b border-[#E5E7EB] pb-[8px] pb-[0.417vw]">
                <div className="col">
                  <div className="userpic">
                    <Image
                      src={"/assets/images/userpic5.png"}
                      width={"48"}
                      height={"48"}
                      className="rounded-full object-cover min-w-[48px] min-h-[48px]"
                    />
                  </div>
                </div>
                <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                  <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-medium">
                    Dianne Russell
                  </span>
                  <span>
                    <i className="austin-chat"></i>
                  </span>
                  <span className={`${myMontserrat.className} text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    154
                  </span>
                </div>
              </div>
              {/* row */}
              <div className="flex items-center gap-[16px] xl:gap-[0.833vw] border-b border-[#E5E7EB] pb-[8px] pb-[0.417vw]">
                <div className="col">
                  <div className="userpic">
                    <Image
                      src={"/assets/images/userpic1.png"}
                      width={"48"}
                      height={"48"}
                      className="rounded-full object-cover min-w-[48px] min-h-[48px]"
                    />
                  </div>
                </div>
                <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                  <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-medium">
                    Ronald Richards
                  </span>
                  <span>
                    <i className="austin-chat"></i>
                  </span>
                  <span className={`${myMontserrat.className} text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    154
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
