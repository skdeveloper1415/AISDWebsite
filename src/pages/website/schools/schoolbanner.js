import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import PreviousNextMethods from "@/components/website/PreviousNextMethods"

export default function Schoolbanner() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    
    const [visible, setVisible] = useState(false);

    

  return (
    <div className='school_banner_wrap'>
        <div className='xl:pt-[2.344vw] pt-[40px] xl:px-[5.990vw] px-[100px] pb-[300px]'>
            <div className='flex justify-center xl:pt-[1.042vw] pt-5 xl:px-[17.396vw] px-[300px]'>
                <div className='text-center'>
                    <div className="breadCrumb flex justify-center gap-[16px] mb-[20px] xl:mb-[1.04vw]">
                    <div className="col">
                    <Link href={""}><i className="austin-home"></i> Home</Link>
                    </div>
                    <div className="col">
                    <i className="austin-arrow-open-right"></i>
                    </div>
                    <div className="col">
                    Austin Schools
                    </div>
                    </div>
                    <div className='xl:text-[2.500vw] text-[40px] font-extrabold text-[#374151]'>Austin <span className='font-medium'>Schools</span> </div>
                    <div className='text-[#4B586E] xl:text-[1.042vw] text-lg font-[400]'>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging environment from Pre-K to 12th grade, emphasizing social-emotional learning. </div>
                    <div className='text-[#374151] xl:text-[1.042vw] text-lg font-[600]'> We're ready! Are you?</div>
                </div>
            </div>
            <div className='flex items-center justify-between xl:gap-[1.250vw] gap-5 xl:px-[5.208vw] xl:mt-[1.875vw] mt-[30px]'>
                {/*col*/}
                <div className="grow xl:w-[32.083vw]">
                <div className="p-inputgroup flex-1 custmSearch">
                <Button icon="austin-search" />
                <InputText placeholder="Search" style={{height:"54px"}} />
                <Button icon="austin-close" />
              </div>
                </div>
                {/*col*/}
                <div className="flex items-center xl:gap-[0.417vw] gap-2">
                    <div><Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="All Schools" className="w-full md:w-14rem" style={{height:"54px"}} /></div>
                    <div><Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Program Selection" className="w-full md:w-14rem" style={{height:"54px"}} /></div>
                </div>
                {/*col*/}
                <div>
                <div className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] text-[14px] xl:text-[0.938vw] text-white flex justify-center min-h-full items-center h-[54px] cursor-pointer" onClick={() => setVisible(true)}>Advanced School Search</div>
                </div>
            </div>
        </div>

        <div className="w-full">
        <Dialog header="Header" showHeader={false} visible={visible} className="Cust_Dialog" onHide={() => setVisible(false)}>
        <div>
            <div className="flex justify-center xl:mt-[3.385vw] mt-[50px]"><Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>Cancel</span><i className="autinisd-close-circle"></i></Link></div>
        <div className="flex flex-col items-center text-center xl:mt-[3.281vw] mt-[50px]">
        <div className="xl:w-[25.625vw] xl:space-y-[0.668vw] space-y-2">
            <div className="text-[#374151] xl:text-[1.527vw] text-[20px] font-semibold">Advanced Search</div>
            <div className="text-[#4B586E] xl:text-[0.859vw] text-[14px] font-light">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu</div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>Zip: 59632</span><i className="autinisd-close-circle"></i></Link>
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>Pre K</span><i className="autinisd-close-circle"></i></Link>
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>AVID</span><i className="autinisd-close-circle"></i></Link>
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>Creative Learning Iniciative</span><i className="autinisd-close-circle"></i></Link>
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>GearUp</span><i className="autinisd-close-circle"></i></Link>
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>After Schools Meals</span><i className="autinisd-close-circle"></i></Link>
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>Communities in Schools</span><i className="autinisd-close-circle"></i></Link>
        <Link href={''} className="text-[#374151] text-xs font-medium bg-[#F5F6F7] rounded-md flex items-center gap-2 py-1 px-2" onClick={() => setVisible(false)}><span>Communities in Schools</span><i className="autinisd-close-circle"></i></Link>
        </div>
        </div>
        <div className="flex items-center justify-center xl:mt-[4.042vw] mt-[100px]">
        <div className="xl:w-[28.594vw]">                    
        <PreviousNextMethods />
        </div>
        </div>
        </div>
        </Dialog>
        </div>
    </div>
  )
}
