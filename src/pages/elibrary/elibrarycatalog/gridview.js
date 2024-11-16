import React from "react";
import Link from "next/link";
import Image from "next/image";
import HTMLTagFromString from "@/service/utils/HTMLTagFromString";
import DateFormat from "@/service/utils/DateFormat";
import FilewithFormat from "@/service/utils/FilewithFormat";
import NoDataFound from "@/components/website/nodatafound";

export default function Index(props) {

    return (
        <>
            {props.data && props.data.length > 0 ?
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 xl:gap-[0.833vw] mb-[18px] xl:mb-[1.25vw]">
                    {props.data?.map((elm, index) => {
                        return (
                            <div key={index} className="bg-[#fff] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                                <div className="flex items-center gap-2 xl:gap-[0.417vw] mb-[12px] xl:mb-[0.730vw]">
                                    <Image src={elm.category_icon_url? elm.category_icon_url: FilewithFormat.getFileFormat(elm.Type)} width="32" height="32" alt={elm?.Type}/>
                                    <Link href={""} className="font-medium text-[14px] xl:text-[0.94vw] text-[#374151] leading-tight">{elm.DocName}</Link>
                                </div>
                                <div className="flex gap-2 xl:gap-[0.625vw]">
                                    <div className="grid gap-[0.104vw] w-[calc(100%-108px)]">
                                        <h4 className="font-bold text-[12px] xl:text-[0.625vw] text-[#A93439]">{elm.category}</h4>
                                        <p className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB]"> {DateFormat.convertDateFormat(elm?.createDate)}</p>
                                        <p className="font-light text-[12px] xl:text-[0.625vw] text-[#4B586E] ">{HTMLTagFromString.removeHTMLTagFromString(elm.description)}</p>
                                    </div>
                                    <div onClick={() => ['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx', 'txt'].includes(elm.fileName.split('.').pop()?.toLowerCase()) ? props.downloadFile(elm.file_id, elm.fileName,props.toast) : props.viewFile(elm.file_id, elm.fileName,elm.DocName)} className="flex justify-center items-center bg-[#B4B4B4] w-[96px] h-[96px] rounded-[8px] xl:rounded-[0.625vw] overflow-hidden">
                                        {/* src={`data:image/svg+xml;base64,${props.base64Data}`} */}
                                        {/* src={elm.Type ? elm.Type ==='image' ? elm?.blobUrl: FilewithFormat.getFileFormat(elm.Type) :`/assets/admin/svg/document.svg`} */}
                                        <Image src={FilewithFormat.getFileFormat(elm.Type)} width="96" height="96" alt={elm?.Type}/>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                : <div className="text-center h-[400px] bg-[#fff] flex items-center justify-center  rounded-[16px] xl:rounded-[0.833vw] tilesShadow">
                    <NoDataFound className="pt-5" />
                </div>
            }
        </>
    );
}
