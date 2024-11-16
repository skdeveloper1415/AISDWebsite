import { Inter, Montserrat } from "@next/font/google";
import React from "react";
import Link from "next/link";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function OurPrograms() {
  return (
    <div className="pt-[25px] xl:pt-[1.302vw] pb-[25px] xl:pb-[1.302vw] bg-[#F0F2F6]">
      <div className="grid gap-[15px] lg:gap-[36px] xl:gap-[1.875vw] pt-[0] lg:pt-[36px] xl:pt-[1.875vw] px-[15px] lg:px-[40px] xl:px-[7.031vw]">
        <div
          className={`${myMontserrat.className}grid gap-[12px] xl:gap-[0.625vw] w-full`}
        >
          <div className="flex justify-center items-center text-2xl lg:text-3xl xl:text-[1.667vw] font-semibold text-[#374151]">
            Our Programs
          </div>
          <div className="flex justify-center items-center flex-col w-full text-[#9CA1AB] text-[14px] lg:text-[16px] xl:text-[1.042vw]">
            <span>
              Austin ISD offers a variety of robust educational opportunities at
              every level to meet each student’s unique
            </span>
            <span>
              learning interests. The listings below offer a way to learn more
              about a few of our programs:
            </span>
          </div>
        </div>
        <div
          className={`${myMontserrat.className} grid grid-cols-1 xl:grid-cols-2 gap-[15px] lg:gap-[24px] xl:gap-[2.5vw] relative z-[2]`}
        >
          <div className="p-[32px] xl:p-[1.667vw] bg-[#FFF] rounded-3xl flex flex-col justify-center items-start gap-[36px] xl:gap-[1.875vw]">
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <div>
                <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              </div>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Creative Learning Initiative
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Digital Media
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Dual Language
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Early College High School Program
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Early College Prep Middle Schools
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Fine Arts Academies
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                International Baccalaureate/Middle Years Program
              </div>
            </div>
          </div>
          <div className="p-[32px] xl:p-[1.667vw] bg-[#FFF] rounded-3xl flex flex-col justify-center items-start gap-[36px] xl:gap-[1.875vw]">
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <div>
                <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              </div>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Magnet Programs
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                MicroSociety
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                P-TECH
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Social and Emotional Learning
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Single-Gender Campuses
                </div>
              </div>
               <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                Science, Technology, Engineering and Math
              </div>
            </div>
            <div className="flex justify-start cursor-pointer items-center gap-[16px] xl:gap-[0.833vw]">
              <i className="autinisd-export-file text-[16px] xl:text-[0.833vw] text-[#A93439]"></i>
              <div className="text-[16px] xl:text-[0.833vw] font-medium text-[#4B586E]">
                World Languages
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </div>
   
  );
}
