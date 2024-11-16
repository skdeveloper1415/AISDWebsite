import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Schoolbanner from "./schoolbanner";

import Image from "next/image";
import Schools from "@/components/website/schools";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const schoolsdata = [
    {
      schoollogo: "school-logo1.png",
      schoolname: "Akins Early College High School",
      schooladdress: "10701S.first St Austin TX 8748",
      principalname: "Michael Herbin",
      gradelevels: "9-12",
      button: "compare",
    },
    {
      schoollogo: "school-logo2.png",
      schoolname: "Allison Elementary School",
      schooladdress: "515 Vargas Road Austin, TX 78741",
      principalname: "Lupe Molina",
      gradelevels: "PK–6",
      button: "added",
    },
    {
      schoollogo: "school-logo3.png",
      schoolname: "Alternative Learning Center",
      schooladdress: "4900 Gonzales St.Austin, TX 78702",
      principalname: "Chris Jones",
      gradelevels: "6–12",
      button: "compare",
    },
    {
      schoollogo: "school-logo4.png",
      schoolname: "Anderson High School",
      schooladdress: "8403 Mesa Drive Austin, TX 78759",
      principalname: "Brian Lancaster",
      gradelevels: "9-12",
      button: "compare",
    },
    {
      schoollogo: "school-logo5.png",
      schoolname: "Andrews Elementary School",
      schooladdress: "6801 Northeast Drive Austin, TX 78723",
      principalname: "Audrey Guerrero",
      gradelevels: "PK–5",
      button: "compare",
    },
    {
      schoollogo: "school-logo6.png",
      schoolname: "Ann Richards School for Young",
      schooladdress: "2309 Panther Trail Austin, TX 78704",
      principalname: "Ramona Trevino",
      gradelevels: "PK–5",
      button: "added",
    },
    {
      schoollogo: "school-logo7.png",
      schoolname: "Austin High School",
      schooladdress: "1715 W. Cesar Chavez St.Austin, TX 78703",
      principalname: "Melvin Bedford",
      gradelevels: "9–12",
      button: "compare",
    },
    {
      schoollogo: "school-logo8.png",
      schoolname: "Bailey Middle School",
      schooladdress: "4020 Lost Oasis Hollow Austin, TX 78739",
      principalname: "Bradley Lancaster",
      gradelevels: "9–12",
      button: "compare",
    },
    {
      schoollogo: "school-logo9.png",
      schoolname: "Baldwin Elementary School",
      schooladdress: "12200 Meridian Park Blvd Austin, TX 78739",
      principalname: "Jennifer Murray",
      gradelevels: "9–12",
      button: "compare",
    },
    {
      schoollogo: "school-logo10.png",
      schoolname: "Baranoff Elementary School",
      schooladdress: "12009 Buckingham Gate Road Austin, TX 78748",
      principalname: "Beth Cantu",
      gradelevels: "K–5",
      button: "added",
    },
  ];

  return (
    <>
      <Layout pageTitle="Schools">
        <Schoolbanner />
        <div className="xl:px-[5.990vw] px-[100px] xl:my-[1.563vw] my-[30px]">
          <div className="grid grid-cols-12 gap-[18px] xl:gap-[1.083vw]">
            <div className="col-span-10">
              <div className="flex items-center justify-between mb-[40px] xl:mb-[2.083vw]">
                <div
                  className={`${myMontserrat.className} flex items-center gap-2`}
                >
                  <div className="text-[#374151] text-[36px] xl:text-[1.354vw] leading-[1.2]">
                    Highlighted
                  </div>
                  <div className="text-[#374151] text-[36px] xl:text-[1.354vw] leading-[1.2] font-extrabold">
                    Schools
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-end xl:text-[0.729vw] text-[14px]">
                    <div className="px-[8px] xl:px-[0.417vw] py-[8px] xl:py-[0.417vw] bg-[#1F2A37] font-light text-[#fff]  rounded-l-xl cursor-pointer  shadow-lg">
                      List + Map
                    </div>
                    <div className="px-[8px] xl:px-[0.417vw] py-[8px] xl:py-[0.417vw] bg-[#fff] text-[#9CA1AB] cursor-pointer  shadow-lg">
                      List
                    </div>
                    <div className="px-[8px] xl:px-[0.417vw] py-[8px] xl:py-[0.417vw] bg-[#fff] text-[#9CA1AB] rounded-r-xl shadow-lg cursor-pointer ">
                      Map
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Schools
                  data={schoolsdata}
                  className="grid grid-cols-4 gap-[24px] xl:gap-[1.25vww]"
                />

                <div className="flex justify-center xl:mt-[1.823vw] mt-[35px]">
                  <Link
                    href=""
                    className="border border-[#BECDE3] bg-[#fff] rounded-[8px] xl:text-[0.729vw] text-[14px] text-[#4B586E] 
                    xl:px-[0.625vw] px-[12px] xl:py-[0.521vw] py-[10px]"
                  >
                    Load More...
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-[#fff] rounded-xl h-full xl:p-[1.146vw] p-[22px]">
                <div className="flex-col justify-center">
                  <div className={myMontserrat.className}>
                    <div className="text-[#374151] text-[22px] xl:text-[1.146vw] leading-[1.2]">
                      Schools
                    </div>
                    <div className="text-[#374151] text-[22px] xl:text-[1.146vw] leading-[1.2] font-extrabold">
                      Comparison
                    </div>
                  </div>

                  <Link
                    href={"javascript:void(0);"}
                    className="mt-4 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw]
                                 inline-block text-[12px] xl:text-[0.725vw] text-white font-light"
                  >
                    Compare{" "}
                    <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                  </Link>
                </div>
                <div className="xl:mt-[1.667vw] mt-[30px]">
                <div className="bg-[#F5F6F7] rounded-lg compare_card_shadow mb-4">
                    <div className="flex gap-1">
                      <div className="bg-[#fff] rounded-r-full relative">
                        <div className="flex justify-center items-center w-[3.906vw] h-[3.906vw] ">
                          <Image
                            src="/assets/website/school-logo2.png"
                            width="60"
                            height="45"
                            className="mx-auto"
                          />
                        </div>
                        <Link href='' className="absolute top-[10px] -right-[10px] xl:top-[0.521vw] xl:-right-[0.521vw] bg-[#fff] shadow-sm rounded-full p-1">
                             <Image  src="/assets/website/delete_icon.svg"  width="14" height="14" className="mx-auto xl:w-[14px] xl:-right-[14px]"
                          />
                        </Link>
                      </div>
                      <div className="xl:p-[0.677vw] p-[12px]">
                        <div className="text-[#374151] text-[10px] xl:text-[0.621vw]  font-semibold">
                          Allison Elementary School
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] text-[10px] xl:text-[0.521vw] font-light">
                        Grade Levels
                      </div>
                      <div className="text-[#4B586E] text-[10px] xl:text-[0.521vw] font-semibold">
                        PK–6
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2   text-[9px] xl:text-[0.469vw]  p-[10px] xl:p-[0.521vw]">
                      <Link
                        href=""
                        className=" p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[20px] flex items-center"
                      >
                        Dual Language
                      </Link>
                      <Link
                        href=""
                        className="p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light  h-[20px] flex items-center"
                      >
                        SEL
                      </Link>
                      <Link
                        href=""
                        className="p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[20px] flex items-center"
                      >
                        AVID
                      </Link>
                    </div>
                  </div>
                  <div className="bg-[#F5F6F7] rounded-lg compare_card_shadow mb-4">
                    <div className="flex gap-1">
                      <div className="bg-[#fff] rounded-r-full relative">
                        <div className="flex justify-center items-center w-[3.906vw] h-[3.906vw] ">
                          <Image
                            src="/assets/website/school-logo7.png"
                            width="60"
                            height="45"
                            className="mx-auto"
                          />
                        </div>
                        <Link href='' className="absolute top-[10px] -right-[10px] xl:top-[0.521vw] xl:-right-[0.521vw] bg-[#fff] shadow-sm rounded-full p-1">
                             <Image  src="/assets/website/delete_icon.svg"  width="14" height="14" className="mx-auto xl:w-[14px] xl:-right-[14px]"
                          />
                        </Link>
                      </div>
                      <div className="xl:p-[0.677vw] p-[12px]">
                        <div className="text-[#374151] text-[10px] xl:text-[0.621vw]  font-semibold">
                        Austin High School
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] text-[10px] xl:text-[0.521vw] font-light">
                        Grade Levels
                      </div>
                      <div className="text-[#4B586E] text-[10px] xl:text-[0.521vw] font-semibold">
                        PK–6
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2   text-[9px] xl:text-[0.469vw]  p-[10px] xl:p-[0.521vw]">
                      <Link
                        href=""
                        className=" p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[20px] flex items-center"
                      >
                        Dual Language
                      </Link>
                      <Link
                        href=""
                        className="p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light  h-[20px] flex items-center"
                      >
                        SEL
                      </Link>
                      <Link
                        href=""
                        className="p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[20px] flex items-center"
                      >
                        AVID
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
