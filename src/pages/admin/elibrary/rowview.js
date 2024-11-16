import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RemoveUser from "@/components/admin/popup/removeUser";
import DateFormat from "@/service/utils/DateFormat";
import FilewithFormat from "@/service/utils/FilewithFormat";

export default function RowView(props) {
    const { data, handleDelete, handleEditClick, downloadFile,toast } = props;

    const [deleteUser, setDeleteUser] = useState(false);

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
            <div className="space-y-[16px] xl:space-y-[0.833vw]">
                {/* row */}
                {data?.map((elm, index) => {

                    return (
                        <div key={index} className="bg-white border border-[#E5E7EB] dark:bg-[#13161B] dark:border-[#13161B] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
                            <div className="flex items-center justify-between mb-[14px] xl:mb-[0.729vw]">
                                <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                                    <div>
                                        <Image
                                            src={elm.category_icon_url? elm.category_icon_url: FilewithFormat.getFileFormat(elm.Type)}
                                            width={"24"}
                                            height={"24"}
                                            alt=""
                                            className="w-[24px] h-[24px] xl:w-[1.25vw] xl:h-[1.25vw] dark:bg-[#fff]"
                                        ></Image>
                                    </div>
                                    <div className="text-[#4B586E] dark:text-[#FFFFFF] text-[16px] xl:text-[0.833vw] font-semibold">
                                        {elm.DocName}
                                    </div>
                                </div>
                                <div className="flex gap-[8px] xl:gap-[0.417vw]">
                                    <span
                                        onClick={() => ['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx', 'txt'].includes(elm.fileName.split('.').pop()?.toLowerCase()) ? downloadFile(elm.file_id, elm.fileName,toast) : props?.viewFile(elm.file_id, elm.fileName,elm.DocName)}
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
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="text-[14px] xl:text-[0.729vw] text-[#344151] dark:text-[#AAAAAA] inline-block font-semibold">
                                        Create: <span className="font-light dark:text-[#fff]">{DateFormat.convertDateFormat(elm?.createDate)}</span>
                                    </div>
                                    <div className="text-[14px] xl:text-[0.729vw] text-[#344151]  dark:text-[#AAAAAA] inline-block font-semibold">
                                        Release date: <span className="font-light dark:text-[#fff]">{DateFormat.convertDateFormat(elm?.releaseDate)}</span>
                                    </div>
                                </div>
                                <div className='bg-[#1F3F71] rounded-md text-[#fff] text-[10px] xl:text-[0.625vw] px-[8px] py-[2px]'>
                                    {elm.category}
                                </div>
                            </div>
                        </div>
                    )
                })}


                <RemoveUser
                    visible={deleteUser}
                    onHides={() => setDeleteUser(false)}
                    message="Are you sure you want to delete this File?"
                    icon="autinisd-info-circle-fill"
                // url={'/messageboard/posts/'}
                // id={id}
                // setId={setId}
                // fetchPost={fetchPost}
                // setEditMessageBoard={setEditMessageBoard}
                />
            </div>
        </>
    );
}
