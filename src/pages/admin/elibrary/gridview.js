import React from "react";
import Link from "next/link";
import Image from "next/image";
import FilewithFormat from "@/service/utils/FilewithFormat";

export default function GridView(props) {
    const { data, handleDelete, handleEditClick, downloadFile,toast } = props;
    const formatDate = (isoDateString) => {
        const dateObject = new Date(isoDateString);
        const formattedDate = dateObject.toLocaleDateString('en-GB');
        return formattedDate;
    }
    const ImageSrc=(elm)=>{
        return  elm.category_icon_url? elm.category_icon_url: FilewithFormat.getFileFormat(elm?.Type)
    }

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 xl:gap-[0.833vw] mb-[18px] xl:mb-[1.25vw]">
                {
                    data?.map((elm, index) => {
                        return (
                            <div key={index} className="bg-[#fff] dark:bg-[#13161B] dark:border-[#13161B] shadow rounded-[8px] xl:rounded-[0.833vw] p-[12px] xl:p-[0.833vw]">
                                <div className="flex items-center justify-between mb-[14px] xl:mb-[0.729vw]">
                                    <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                                        <div>
                                            <Image
                                                src={ImageSrc(elm)}
                                                width={"24"}
                                                height={"24"}
                                                alt=""
                                                className="w-[24px] h-[24px] xl:w-[1.45vw] xl:h-[1.4s5vw] dark:bg-[#fff]"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div className="flex gap-[8px] xl:gap-[0.417vw]">
                                        <span
                                            onClick={() => ['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx','txt'].includes(elm.fileName.split('.').pop()?.toLowerCase())?downloadFile(elm.file_id, elm.fileName,toast):props?.viewFile(elm.file_id, elm.fileName,elm.DocName)}
                                            className="cursor-pointer inline-block text-[#4B586E] dark:text-[#818181] text-[20px] xl:text-[1.042vw]"
                                        >
                                            <i className="autinisd-eye ml-[8px] xl:ml-[0.417vw]"></i>
                                        </span>
                                        <Link
                                            href={""}
                                            onClick={() => downloadFile(elm.file_id, elm.fileName,toast)}
                                            className="inline-block text-[#4B586E] dark:text-[#818181] text-[20px] xl:text-[1.042vw]"
                                        >
                                            <i className="autinisd-download ml-[8px] xl:ml-[0.417vw]"></i>
                                        </Link>
                                        <Link
                                            href={""}
                                            onClick={() => handleEditClick(elm.document_id)}
                                            className="inline-block text-[#4B586E] dark:text-[#818181] text-[20px] xl:text-[1.042vw]"
                                        >
                                            <i className="autinisd-edit ml-[8px] xl:ml-[0.417vw]"></i>
                                        </Link>

                                        <Link
                                            href={""}
                                            onClick={() => {
                                                handleDelete(elm.document_id)
                                            }}
                                            className="inline-block text-[#4B586E] dark:text-[#818181] text-[20px] xl:text-[1.042vw]"
                                        >
                                            <i className="autinisd-trash ml-[8px] xl:ml-[0.417vw]"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-[14px] xl:text-[0.729vw] text-[#4B586E] dark:text-[#fff] font-normal mb-[16px] xl:mb-[0.833vw]">{elm.DocName}</div>

                                <div className="text-[14px] xl:text-[0.729vw] text-[#344151]  dark:text-[#818181] font-semibold">
                                    Create: <span className="font-light dark:text-[#FFFFFF]">{formatDate(elm.createDate)}</span>
                                </div>
                                <div className="text-[14px] xl:text-[0.729vw] text-[#344151] dark:text-[#818181] font-semibold mb-[16px] xl:mb-[0.833vw]">
                                    Release date: <span className="font-light dark:text-[#FFFFFF]">{formatDate(elm.releaseDate)}</span>
                                </div>
                                <div className='min-w-24 inline-block bg-[#1F3F71] rounded-md text-[#fff] text-[10px] xl:text-[0.625vw] px-[8px] py-[2px]'>
                                    {elm.category}
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    );
}
