import React, { useState, useEffect } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Createnewtopic from "@/components/popup/createnewtopic";
import { useRouter } from "next/router";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index(props) {
  const { monthChange, activeMonth, monthClass } = props;


  useEffect(() => {

  }, [])
  return (
    <>
      <div className={`flex flex-wrap gap-[8px] xl:gap-[0.525vw] mb-[18px] xl:mb-[0.938vw] dark:text-[#818181] ${monthClass}`}>
        <span onClick={() => monthChange('1')} className={` cursor-pointer text-[${activeMonth === '1' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '1' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Jan</span>
        <span onClick={() => monthChange('2')} className={` cursor-pointer text-[${activeMonth === '2' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '2' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Feb</span>
        <span onClick={() => monthChange('3')} className={` cursor-pointer text-[${activeMonth === '3' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '3' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Mar</span>
        <span onClick={() => monthChange('4')} className={` cursor-pointer text-[${activeMonth === '4' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '4' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Apr</span>
        <span onClick={() => monthChange('5')} className={` cursor-pointer text-[${activeMonth === '5' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '5' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>May</span>
        <span onClick={() => monthChange('6')} className={` cursor-pointer text-[${activeMonth === '6' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '6' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Jun</span>
        <span onClick={() => monthChange('7')} className={` cursor-pointer text-[${activeMonth === '7' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '7' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Jul</span>
        <span onClick={() => monthChange('8')} className={` cursor-pointer text-[${activeMonth === '81' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '8' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Aug</span>
        <span onClick={() => monthChange('9')} className={` cursor-pointer text-[${activeMonth === '9' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '9' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Sep</span>
        <span onClick={() => monthChange('10')} className={` cursor-pointer text-[${activeMonth === '10' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '10' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Oct</span>
        <span onClick={() => monthChange('11')} className={` cursor-pointer text-[${activeMonth === '11' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '11' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Nov</span>
        <span onClick={() => monthChange('12')} className={` cursor-pointer text-[${activeMonth === '12' ? '#FFFFFF' : 'transparent'}] bg-[${activeMonth === '12' ? '#982E33' : 'transparent'}] rounded-[8px] xl:rounded-[0.417vw] pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw] `}>Dec</span>
      </div>
    </>
  );
}
