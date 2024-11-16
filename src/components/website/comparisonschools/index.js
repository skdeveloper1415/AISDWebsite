import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";


const comparisonschools = (props) => {


  return (
    <div>
      {props.data.map((elm) => {
        return (
          <>
            {/* <div  className="cardshadow rounded-[16px] bg-white hover:border hover:border-[#C27074] cursor-pointer border">
              <div className="xl:h-[8.896vw] h-[300px]  p-[16px] xl:p-[0.833vw]">
                <div className="flex justify-end">
                  {elm.button == "compare" ? (
                    <Link
                      href={""}
                      className="bg-[#F5F6F7] text-[#4B586E] border border-[#4B586E] 
                    rounded-md xl:px-[0.417vw] px-[8px] xl:py-[0.417vw] py-[8px] text-[16px] xl:text-[0.729vw] font-light text-center leading-none"
                    >
                      <i className="austin-pluse text-[14px]"></i> Compare
                    </Link>
                  ) : (
                    <Link
                      href={""}
                      className="bg-[#1F2A37] text-[#fff] border border-[#1F2A37] 
                          rounded-md xl:px-[0.417vw] px-[8px] xl:py-[0.417vw] py-[8px] text-[16px] xl:text-[0.729vw] font-light text-center leading-none"
                    >
                      <i className="austin-pluse text-[14px]"></i> Added
                    </Link>
                  )}
                </div>
                <div className="flex justify-center mt-3">
                  <Image
                    src={`/assets/website/${elm.schoollogo}`}
                    width="150"
                    height="120"
                  />
                </div>
              </div>
              <div className="bg-[#F5F6F7] rounded-b-[16px] ">
                <div className="p-[16px] xl:p-[0.833vw]">
                  <h5 className="text-[#374151] text-[17px] xl:text-[0.838vw] font-semibold">
                    {elm.schoolname}
                  </h5>
                  <div className="flex justify-between items-center mt-[10px] xl:mt-[0.417vw]">
                    <h6 className="text-[#374151] text-[14px] xl:text-[0.729vw] font-normal leading-4 w-[150px]">
                      {elm.schooladdress}
                    </h6>

                    <div className="flex  gap-2">
                      <Image
                        src="/assets/website/map.svg"
                        width="16"
                        height="16"
                      />{" "}
                      <Link
                        href=""
                        className="text-[#1B3865] text-[12px] xl:text-[0.625vw] font-normal"
                      >
                        {" "}
                        Map View
                      </Link>
                    </div>
                  </div>
                  <div className="mt-[24px] xl:mt-[1.25vw]">
                    <div className="flex justify-between px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-light">
                        Principal
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-semibold">
                        {elm.principalname}
                      </div>
                    </div>
                    <div className="flex justify-between px-[16px] xl:px-[0.833vw] py-[12px] xl:py-[0.625vw] border-b border-[#E5E7EB]">
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-light">
                        Grade Levels
                      </div>
                      <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-semibold">
                        {elm.gradelevels}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 my-3">
                    <Link
                      href=""
                      className="text-[12px] xl:text-[0.625vw] p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[30px] flex items-center"
                    >
                      Dual Language
                    </Link>
                    <Link
                      href=""
                      className="text-[12px] xl:text-[0.625vw] p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light  h-[30px] flex items-center"
                    >
                      SEL
                    </Link>
                    <Link
                      href=""
                      className="text-[12px] xl:text-[0.625vw] p-[8px] xl:p-[0.417vw] bg-[#F6EAEB] rounded-md text-[#4B586E] font-light h-[30px] flex items-center"
                    >
                      AVID
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

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

          </>
        );
      })}

     
    </div>
  );
};
export default comparisonschools;
