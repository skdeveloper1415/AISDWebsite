import React from 'react'
import Link from 'next/link';
import AdminLayout from "@/components/adminlayout/layout";
function category() {

  const breadCrumbData = [
    { title: "Home", link: "/admin"},
    { title: "Settings", link: "/admin/category"}
  ];

  return (
    <>
      <AdminLayout pageTitle="Settings" pageName="Manage Setting" breadCrumb = {breadCrumbData}>
        <div className='flex grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-[1.138vw] gap-[30px] mt-[50px] items-center  bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] xl:px-[1.458vw]'>
        
          <div>
            <div className='text-[#374151] text-[15px] xl:text-[0.833vw] leading-[1.2]'>Manage</div>
            <div className='text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] '> <span className='font-extrabold'>Categories</span></div>
          </div>
          
            <div className=''>
              <div className='border border-[#E5E7EB] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[1.033vw]  boxWrapper grow_ellipse'>
                <div className=''></div>
                <div className='text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] '>eLibrary</div>

                <Link
                  href={"/admin/elibrary/category"}
                  className="hover:bg-[#982E33] hover:text-[#fff] font-semibold mt-[24px] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-[#762428] border border-[#982E33]"
                >
                  View
                </Link>
              </div>
            </div>
            <div className=''>
              <div className='border border-[#E5E7EB] bg-[#F5F6F7]  rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[1.033vw]  boxWrapper grow_ellipse'>
                <div className='text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] '>Events</div>
                <Link
                  href={"/admin/manageevents/event"}
                  className=" hover:bg-[#982E33] hover:text-[#fff] font-semibold mt-[24px] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-[#762428] border border-[#982E33]"
                >
                  View
                </Link>
              </div>
            </div>
        
        </div>
        <div>
        <div className='flex grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] xl:gap-[1.138vw] items-center gap-[30px] mt-[50px] items-center  bg-white rounded-[24px] xl:rounded-[1.250vw] py-[24px] xl:py-[1.250vw] px-[28px] xl:px-[1.458vw]'>
        <div>
            <div className='text-[#374151] text-[15px] xl:text-[0.833vw] leading-[1.2]'>Manage</div>
            <div className='text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] '> <span className='font-extrabold'>Message board</span></div>
          </div>
           
            <div className='border border-[#E5E7EB] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] p-[16px]  xl:p-[1.033vw] boxWrapper grow_ellipse'>
            <div className='text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] '>Tags</div>
              <Link
                href={"/admin/messageboardtag/"}
                className=" hover:bg-[#982E33] hover:text-[#fff] font-semibold mt-[24px] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-[#762428] border border-[#982E33]"
              >
                View
              </Link>
            </div>
            <div className=''>
            <div className='border border-[#E5E7EB] bg-[#F5F6F7] rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[1.033vw]  boxWrapper grow_ellipse'>
            <div className='text-[#374151] text-[30px] xl:text-[1.667vw] leading-[1.2] '>Authors</div>
              <Link
                href={"/admin/authors"}
                className=" hover:bg-[#982E33] hover:text-[#fff] mt-[24px] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[16px] xl:text-[0.833vw] text-[#762428] border border-[#982E33] font-semibold"
              >
                View
              </Link>
            </div>
          </div>
          </div>
           
        </div>
      </AdminLayout>
    </>
  )
}

export default category