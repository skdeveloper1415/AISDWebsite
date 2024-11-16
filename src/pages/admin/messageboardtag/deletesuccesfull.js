import React, { useRef, useState } from "react";
import Link from "next/link";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import fetchAPI from "@/service/api/fetchAPI";

export default function Deletesuccesfull(props) {
    const {visible, onHides, id, pageRefresh} = props;
    const toast = useRef()

    const deleteTag = async () => {
      try{

        let response = await fetchAPI(`/tags/${id}`,'DELETE',{},'application/json')
        if(response){
          pageRefresh(true);
          onHides()
        }else{
          toast.current.show({severity:'error', detail:'Something went wrong', life: 3000})
        }
      }catch(error){
      toast.current.show({severity:'error', detail:'Something went wrong', life: 3000})
      }
    }

    const cancelDelete = async () => {
      pageRefresh(false);
      onHides();
    };

  return (
    <>
      <div>
        <Dialog
          header="Header"
          showHeader={false}
          style={{ width: "25vw" }}
          visible={visible}
          onHide={() => onHides()}
          contentStyle={{
            padding: 0,
            borderRadius: "8px",
            border: "1px solid #DBE1EA",
            background: "#fff",
          }}
        >
          <Toast ref={toast}></Toast>
          <div
            onClick={() => onHides(false)}
            className="flex justify-end px-[16px] xl:px-[0.833vw] pt-[16px] xl:pt-[0.833vw] text-[16px] xl:text-[0.833vw] text-[#A9B9D0] cursor-pointer"
          >
            <i className="autinisd-cross "></i>
          </div>
          <div className="flex flex-col items-center px-[24px] xl:px-[1.250vw] py-[20px] xl:py-[1.042vw]">
            <div className="text-[42px] xl:text-[2.188vw] text-[#A9B9D0]">
              <i className={`${props.icon}`}></i>
            </div>
            <div className="text-[16px] xl:text-[0.833vw] font-normal text-[#4B586E]">
              {props.message}
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 px-[24px] xl:px-[1.250vw] pb-[24px] xl:pb-[1.250vw]">
            <div
              className="bg-[#C81E1E] text-[#FFFFFF] rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium cursor-pointer"
              onClick={deleteTag}
            >
              Yes, I’m sure
            </div>
            <div
              onClick={cancelDelete}
              className="rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium border border-[#DBE1EA] text-[#4B586E] cursor-pointer"
            >
              No, cancel
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
