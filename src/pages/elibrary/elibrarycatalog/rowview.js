import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Filelistcatalog from "@/components/popup/filelistcatalog";
import HTMLTagFromString from "@/service/utils/HTMLTagFromString";
import DateFormat from "@/service/utils/DateFormat";
import FilewithFormat from "@/service/utils/FilewithFormat";
import NoDataFound from "@/components/website/nodatafound";

export default function Index(props) {
  const [filelistcatalog, setfilelistcatalog] = useState(false);
  const [viewFileDetails, setViewFileDetails] = useState({})
  return (
    <>
      {props.data && props.data.length > 0 ?
        <div className="space-y-[16px] xl:space-y-[0.833vw]">
          {/* row */}
          {
            props.data?.map((elm, index) => {
              return (
                <div key={index} className="bg-white border border-[#E5E7EB] shadow-[0px_9px_33px_0px_rgba(196,196,196,0.10)] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw]">
                  <div className="grid grid-cols-12">

                    <div className="col-span-12 md:col-span-6 xl:col-span-5">
                      <div className="space-y-[8px] xl:space-y-[0.417vw]">
                        <div className="col">
                          <div className="flex items-center gap-[10px] xl:gap-[0.521vw]">
                            <div>
                              <Image
                                src={elm.category_icon_url? elm.category_icon_url: FilewithFormat.getFileFormat(elm.Type)}
                                width={"28"}
                                height={"28"}
                                alt={elm?.Type}
                              ></Image>
                            </div>
                            <div className="text-[#BC6D46] text-[12px] xl:text-[0.625vw] font-bold">
                              {elm.category}
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="text-[#374151] text-[16px] text-[0.833vw] font-medium">
                            {elm.DocName}
                          </div>
                        </div>
                        <div className="col">
                          <div className="col">
                            <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                              Create:
                            </span>
                            <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                              {DateFormat.convertDateFormat(elm?.createDate)}
                            </span>
                          </div>
                          <div className="col">
                            <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                              Owner:
                            </span>
                            <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                              {elm.author}
                            </span>
                          </div>
                          <div className="col">
                            <span className="text-[12px] xl:text-[0.625vw] text-[#9CA1AB] min-w-[90px] inline-block">
                              Release Date:
                            </span>
                            <span className="text-[12px] xl:text-[0.625vw] text-[#4B586E] inline-block">
                              {DateFormat.convertDateFormat(elm?.releaseDate)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 xl:col-span-7 border-l border-[#E5E7EB] pl-[10px]">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-[8px] xl:gap-[0.417vw]">
                          <Link
                            href={""}
                            onClick={() => props.downloadFile(elm.file_id, elm.fileName)}
                            className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                          >
                            <i className="austin-file-download ml-[8px] xl:ml-[0.417vw]"></i>
                          </Link>
                          <Link
                            href={""}
                            className="inline-block text-[#4B586E] text-[20px] xl:text-[1.042vw]"
                          >
                            <i className="austin-star-outline ml-[8px] xl:ml-[0.417vw]"></i>
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={""}
                            // onClick={() => ['avi', 'xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx','txt'].includes(elm.fileName.split('.').pop()?.toLowerCase())?props.downloadFile(elm.file_id, elm.fileName):props.viewFile(elm.file_id, elm.fileName)}
                            onClick={() => {
                              setfilelistcatalog(true)
                              setViewFileDetails(elm)
                            }}
                            className="inline-block border border-[#4B586E] hover:border-[#A93439] hover:bg-[#A93439] rounded-[4px] xl:rounded-[0.208vw] text-[#4B586E] hover:text-[#fff] text-[14px] xl:text-[0.833vw] p-[8px] xl:p-[0.417vw] leading-none"
                          >
                            More Details
                            <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="text-[#4B586E] text-[12px] xl:text-[0.625vw] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.417vw] px-[10px] xl:px-[0.521vw] mt-[8px] xl:mt-[0.417vw]">
                        {HTMLTagFromString.removeHTMLTagFromString(elm.description)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        : <div className="text-center h-[400px] bg-[#fff] flex items-center justify-center  rounded-[16px] xl:rounded-[0.833vw] tilesShadow">
           <NoDataFound className="pt-5"/>
        </div>
      }
      <Filelistcatalog
        visible={filelistcatalog}
        viewFileDetails={viewFileDetails}
        onHides={() => setfilelistcatalog(false)}
        downloadFile={props?.downloadFile}
        viewFile={props?.viewFile}
      />
    </>
  );
}
