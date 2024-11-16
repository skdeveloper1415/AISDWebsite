import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Editor } from "primereact/editor";

const Createnewtopic = (props) => {   
    const [text, setText] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <>
            <div>
            <Sidebar visible={props.visible} position="right" style={{background:'#FFF', borderRadius:'16px 0 0 16px'}} className="custmSidebar width960" onHide={() => props.onHides(false)} >
                <div className="flex flex-col justify-between h-full xl:py-[1.250vw] py-5 xl:px-[1.250vw] px-5">
                    {/**row***/}
                    <div>
                        <div className="text-[#374151] xl:text-[1.250vw] text-xl font-normal xl:leading-[1.250vw] leading-6 -tracking-[0.48px]"><span className="font-extrabold">New</span>Topic</div>
                        <div className="xl:mt-[0.833vw] mt-4 xl:space-y-[0.833vw] space-y-4">
                            <div className="grid grid-cols-12 xl:gap-[0.833vw] gap-4">
                                <div className="col-span-8">
                                    <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Title</label>
                                    <InputText id="username" placeholder="Select" className="placeholder:text-[#9CA1AB] placeholder:font-normal" aria-describedby="username-help" style={{background:'#F5F6F7', border:'1px solid #BECDE3', borderRadius:'8px'}} />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                <div className="flex flex-col">
                                    <label htmlFor="username" className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Select category</label>
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select" className="w-full" style={{background:'#F5F6F7', border:'1px solid #BECDE3', borderRadius:'8px'}} />
                                    </div>
                                </div>
                            </div>
                            {/**Editor**/}
                            <div>
                            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '12.656vw' }} />
                            </div>
                            {/**Attached files**/}
                            <div className="xl:space-y-[0.833vw] space-y-4">
                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Attached files</div>
                                <div className="grid grid-cols-3 xl:gap-[1.250vw] gap-5">
                                    {/*col-1*/}
                                    <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                        <i className="austin-attachment"></i>
                                        <span>LoremIpsumDolorSitAmer.pdf</span>
                                        <i className="austin-close-circle"></i>
                                    </Link>
                                    {/*col-2*/}
                                    <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                        <i className="austin-attachment"></i>
                                        <span>LoremIpsumDolorSitAmer.pdf</span>
                                        <i className="austin-close-circle"></i>
                                    </Link>
                                    {/*col-3*/}
                                    <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                        <i className="austin-attachment"></i>
                                        <span>LoremIpsumDolorSitAmer.pdf</span>
                                        <i className="austin-close-circle"></i>
                                    </Link>
                                    {/*col-4*/}
                                    <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                        <i className="austin-attachment"></i>
                                        <span>LoremIpsumDolorSitAmer.pdf</span>
                                        <i className="austin-close-circle"></i>
                                    </Link>
                                    {/*col-5*/}
                                    <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                        <i className="austin-attachment"></i>
                                        <span>LoremIpsumDolorSitAmer.pdf</span>
                                        <i className="austin-close-circle"></i>
                                    </Link>
                                    {/*col-6*/}
                                    <Link href={''} className="xl:text-[0.729vw] text-xs text-[#4B586E] bg-[#F5F6F7] rounded-lg xl:py-[0.417vw] py-2 xl:px-[0.833vw] px-3 flex items-center justify-between">
                                        <i className="austin-attachment"></i>
                                        <span>LoremIpsumDolorSitAmer.pdf</span>
                                        <i className="austin-close-circle"></i>
                                    </Link>
                                </div>
                            </div>
                            {/**Attached files**/}
                            <div className="xl:space-y-[0.833vw] space-y-4">
                                <div className="text-[#374151] xl:text-[0.833vw] text-base font-medium">Tags Selection (Multiple)</div>
                                <div>
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select" className="w-full" style={{background:'#F5F6F7', border:'1px solid #BECDE3', borderRadius:'8px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**Footer**/}
                    <div className="flex justify-end">
                        <div className="flex items-center xl:gap-[0.833vw] gap-4">
                            <Link href={''} className="text-[#4B586E] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]">Save draft</Link>
                            <Link href={''} className="text-white bg-[#A93439] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5 border border-[#BECDE3] xl:rounded-[0.521vw] rounded-lg xl:px-[1.042vw] xl:py-[0.625vw]">Post</Link>
                        </div>
                    </div>
                </div>
            </Sidebar>

                
            </div>    
        </>
    );
}

export default Createnewtopic;