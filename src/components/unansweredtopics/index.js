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
      
        <div className="col-span-8">
          <div className="bg-white h-full rounded-[24px] xl:rounded-[1.250vw] p-[32px] xl:p-[1.667vw]">
            <div className="mb-[24px] xl:mb-[1.250vw]">
              <div className={myMontserrat.className}>
                <div className="text-[#374151] text-[32px] xl:text-[1.667vw] font-semibold leading-[1.3]">
                  Unanswered Topics
                </div>
                <div className="text-[#9CA1AB] text-[16px] xl:text-[0.833vw] font-medium">
                  Discussions with no comments. Be first to post a comment.
                </div>
              </div>
            </div>

            <div className="space-y-[18px] xl:space-y-[0.938vw]">
              {/* row */}
              <div className="border-b border-[#E5E7EB] pb-[16px] pb-[0.833vw]">
                <div className="flex justify-between">
                  <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
                    <div className="col">
                      <div className="userpic">
                        <Image
                          src={"/assets/images/userpic1.png"}
                          width={"32"}
                          height={"32"}
                          className="rounded-full object-cover min-w-[32px] min-h-[32px]"
                        />
                      </div>
                    </div>
                    <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                      <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-semibold">
                        Floyd Miles
                      </span>
                      <span className="text-[#9CA1AB] text-[18px] xl:text-[0.938vw]">
                        posted
                      </span>
                    </div>
                  </div>
                  <div className={`${myMontserrat.className} col text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    <i className="austin-chat mr-[8px] xl:mr-[0.417vw]"></i>0
                    comments
                  </div>
                </div>
                <div className="text-[#4B586E] text-[20px] xl:text-[1.042vw] font-medium mt-[16px] xl:mt-[0.833vw]">
                  Lorem ipsum dolor sit amet consectetur. Tellus amet facilisis
                  nibh.
                </div>
              </div>
               {/* row */}
               <div className="border-b border-[#E5E7EB] pb-[16px] pb-[0.833vw]">
                <div className="flex justify-between">
                  <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
                    <div className="col">
                      <div className="userpic">
                        <Image
                          src={"/assets/images/userpic1.png"}
                          width={"32"}
                          height={"32"}
                          className="rounded-full object-cover min-w-[32px] min-h-[32px]"
                        />
                      </div>
                    </div>
                    <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                      <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-semibold">
                        Floyd Miles
                      </span>
                      <span className="text-[#9CA1AB] text-[18px] xl:text-[0.938vw]">
                        posted
                      </span>
                    </div>
                  </div>
                  <div className={`${myMontserrat.className} col text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    <i className="austin-chat mr-[8px] xl:mr-[0.417vw]"></i>0
                    comments
                  </div>
                </div>
                <div className="text-[#4B586E] text-[20px] xl:text-[1.042vw] font-medium mt-[16px] xl:mt-[0.833vw]">
                  Lorem ipsum dolor sit amet consectetur. Tellus amet facilisis
                  nibh.
                </div>
              </div>
               {/* row */}
               <div className="border-b border-[#E5E7EB] pb-[16px] pb-[0.833vw]">
                <div className="flex justify-between">
                  <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
                    <div className="col">
                      <div className="userpic">
                        <Image
                          src={"/assets/images/userpic1.png"}
                          width={"32"}
                          height={"32"}
                          className="rounded-full object-cover min-w-[32px] min-h-[32px]"
                        />
                      </div>
                    </div>
                    <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                      <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-semibold">
                        Floyd Miles
                      </span>
                      <span className="text-[#9CA1AB] text-[18px] xl:text-[0.938vw]">
                        posted
                      </span>
                    </div>
                  </div>
                  <div className={`${myMontserrat.className} col text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    <i className="austin-chat mr-[8px] xl:mr-[0.417vw]"></i>0
                    comments
                  </div>
                </div>
                <div className="text-[#4B586E] text-[20px] xl:text-[1.042vw] font-medium mt-[16px] xl:mt-[0.833vw]">
                  Lorem ipsum dolor sit amet consectetur. Tellus amet facilisis
                  nibh.
                </div>
              </div>
               {/* row */}
               <div className="border-b border-[#E5E7EB] pb-[16px] pb-[0.833vw]">
                <div className="flex justify-between">
                  <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
                    <div className="col">
                      <div className="userpic">
                        <Image
                          src={"/assets/images/userpic1.png"}
                          width={"32"}
                          height={"32"}
                          className="rounded-full object-cover min-w-[32px] min-h-[32px]"
                        />
                      </div>
                    </div>
                    <div className="col space-x-[8px] xl:space-x-[0.417vw]">
                      <span className="text-[#374151] text-[18px] xl:text-[0.938vw] font-semibold">
                        Floyd Miles
                      </span>
                      <span className="text-[#9CA1AB] text-[18px] xl:text-[0.938vw]">
                        posted
                      </span>
                    </div>
                  </div>
                  <div className={`${myMontserrat.className} col text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium`}>
                    <i className="austin-chat mr-[8px] xl:mr-[0.417vw]"></i>0
                    comments
                  </div>
                </div>
                <div className="text-[#4B586E] text-[20px] xl:text-[1.042vw] font-medium mt-[16px] xl:mt-[0.833vw]">
                  Lorem ipsum dolor sit amet consectetur. Tellus amet facilisis
                  nibh.
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
