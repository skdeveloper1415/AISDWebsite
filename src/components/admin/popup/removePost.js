import React, { useRef, useState } from "react";
import { Dialog } from 'primereact/dialog';
import fetchAPI from "@/service/api/fetchAPI";
import { Toast } from 'primereact/toast';

export default function RemovePost(props) {

    const toast = useRef(null);

    const handleDelete = async () => {
        console.log(props?.id,'deletResp')
        await fetchAPI(`/messageboard/posts/${props?.id}`, 'DELETE', {}, 'application/json')
            .then((data) => 
            {
                props.onHides(true)
                props.fetchPost()
                if (data?.message?.includes("successfully deleted")) {
                    return toast.current.show({ severity: 'success', detail: "Post deleted successfully.", life: 3000 });
                }
                else{
                    toast.current.show({ severity: 'error', detail: "Something went wrong..", life: 3000 });
                } 
            })
            .catch((err) => {
                props.onHides(true)
                toast.current.show({ severity: 'error', detail: "Something went wrong..", life: 3000 });
                console.log('Error Logged',err)
            })
    }

    return (
        <>
            <div>
                <Dialog header="Header" showHeader={false} style={{ width: '25vw' }} visible={props.visible}
                    onHide={() => props.onHides(false)} className="custmDialog" contentStyle={{ padding: 0, borderRadius: "8px", }}>
                    <div onClick={() => props.onHides(false)} className="flex justify-end px-[16px] xl:px-[0.833vw] pt-[16px] xl:pt-[0.833vw] text-[16px] xl:text-[0.833vw] text-[#A9B9D0] cursor-pointer dark:text-white" ><i className="autinisd-cross " ></i></div>
                    <div className="flex flex-col items-center gap-4 px-[24px] xl:px-[1.250vw] py-[20px] xl:py-[1.042vw]">
                        <div className="text-[42px] xl:text-[2.188vw] text-[#62789B] dark:text-[#CFC9B8]"><i className={`${props.icon}`}></i></div>
                        <div className="text-[16px] xl:text-[0.833vw] font-normal text-[#4B586E] dark:text-white">{props.message}</div>
                    </div>
                    <div className="flex justify-center items-center gap-4 px-[24px] xl:px-[1.250vw] pb-[24px] xl:pb-[1.250vw]">
                        <div className="bg-[#C81E1E] text-[#FFFFFF] rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium cursor-pointer" onClick={handleDelete}>Yes, I’m sure</div>
                        <div onClick={() => props.onHides(false)} className="rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium border border-[#DBE1EA] text-[#4B586E] cursor-pointer dark:text-[#F5747C] dark:border-[#F5747C]">No, cancel</div>
                    </div>
                </Dialog>
            </div>
            <Toast ref={toast}></Toast>
        </>
    )
}
