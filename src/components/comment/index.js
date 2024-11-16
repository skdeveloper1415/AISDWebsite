import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";

const Comments = (props) => {
  return (
    <div>
      {props.data.map((elm) => {
        return (
          <>
            <div className="mt-[24px] xl:mt-[1.25vw]">
              <div className="flex flex-wrap justify-between">
                <div className="flex gap-[12px] xl:gap-[0.625vw] mb-[10px] xl:mb-[0px]  items-center">
                  <Image
                    src={"/assets/images/userprofile.png"}
                    width={40}
                    height={40}
                    alt="active_user"
                  />
                  <h6 className="text-[#374151] text-[16px] xl:text-[0.938vw] font-semibold">
                    {elm.name}
                  </h6>
                  <span className="austin-dot text-[#A93439] text-[7px]"></span>
                  <p className="text-[#9CA1AB] text-[14px] xl:text-[0.729vw] font-light">
                  {elm.date}
                  </p>
                </div>
                <div className="flex justify-end xl:w-[9.813vw] w-[230px]">
                  <div className="px-[18px] xl:px-[1.042vw] py-[12px] xl:py-[0.433vw] bg-[#1F3F71] text-[#fff] rounded-l-full cursor-pointer">
                    <i className="austin-like text-[20px]"></i>
                  </div>
                  <div className="px-[18px] xl:px-[1.042vw] py-[12px] xl:py-[0.433vw] bg-[#E8EBF0] text-[#1F3F71] rounded-r-full ">
                  {elm.likecount} likes
                  </div>
                </div>
              </div>
              <div className="xl:mt-[0.833vw] mt-[16px]">
                <div className="bg-[#F5F6F8] rounded-md p-[14px] xl:p-[0.833vw] text-[#4B586E] text-[14px] xl:text-[0.833vw] font-light xl:ml-[2.604vw] ml-[0px]">
                {elm.description} 
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Comments;
