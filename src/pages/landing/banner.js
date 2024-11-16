import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montserrat } from "@next/font/google";
const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function Banner() {

    const settings = {
        autoplay:true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        infinite: true,
        nextArrow:false,
        prevArrow:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 968,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };

  return (
    <div className='xl:pt-[2.344vw] pt-10 xl:px-[5.990vw] lg:px-[100px] px-[20px]'>
    <div className='bg-white xl:rounded-[1.250vw] rounded-3xl text-black xl:p-[2.083vw] md:p-[20px] p-[12px] relative z-[1]'>
    <Slider {...settings} className="custslick-slider custslick-slider1">
    {/**col**/}
    <div className="lg:h-[23.090vw] h-[150px] md:h-[200px] relative z-10">
    <div className="flex items-center xl:gap-[4.010vw] gap-3">
    <div className="xl:pl-[1.667vw] md:pl-[5px] pl-2">
       <div className={myMontserrat.className}><div className="text-[#374151] xl:text-[2.500vw] md:text-[18px] text-xs font-semibold leading-normal tracking-[0.96px]">Lets Work Together</div></div> 
        <div className="text-[#4B586E] xl:text-[1.042vw] md:text-sm text-[9px] font-normal xl:leading-[1.250vw] leading-2 md:leading-[24px] xl:mt-[0.833vw] mt-1">Austin ISD is hosting a series of Mental Health and School Safety Community Conversations over the next month.</div>
        <div className="flex flex-wrap xl:mt-[1.823vw] md:mt-[10px] mt-1 xl:space-x-[0.729vw] gap-y-2 md:gap-2">
            <Link href="/aboutus" className="text-white xl:text-[0.729vw] md:text-sm text-[9px] font-normal xl:leading-[0.938vw] leading-3 md:leading-[18px] xl:p-[0.417vw] p-1 bg-[#A93439] xl:rounded-[0.313vw] rounded-md flex items-center xl:gap-[0.521vw] md:gap-4 gap-2"><span>Learn More</span> <i className="autinisd-arrow-right-line"></i></Link>
            <Link href="/calendar" className="text-[#9CA1AB] xl:text-[0.729vw] md:text-sm text-[9px] font-normal xl:leading-[0.938vw] leading-3 md:leading-[18px] xl:p-[0.417vw] p-1 bg-white xl:rounded-[0.313vw] rounded-md border border-[#9CA1AB] flex items-center xl:gap-[0.521vw] md:gap-4 gap-2"><span>Add to my Calendar</span> <i className="autinisd-arrow-right-line"></i></Link>
        </div>
    </div>
    <div className="xl:pr-[2.500vw] md:pr-[20px] pr-2">
        <Image src={'/assets/website/banner_img.png'} width={949} height={451} className="xl:w-[100.942vw] w-[400px] md:w-[900px]" alt="Banner" />
    </div>
    </div>
    </div>
    {/**col**/}
    {/**col**/}
    <div className="lg:h-[23.090vw] h-[150px] md:h-[200px] relative z-10">
      <div className="flex items-center xl:gap-[4.010vw] banner_bgwraptow h-full xl:mr-[2.604vw] mr-0 md:mr-8">
    <div className="xl:pl-[1.667vw] md:pl-[30px] pl-3 xl:py-[1.667vw] md:py-[20px] py-3">
      <div className="bg-[#F5F6F8]/[0.85] xl:rounded-[0.833vw] rounded-2xl xl:p-[1.250vw] md:p-3 p-2 w-[180px] md:w-[300px] xl:w-[24.375vw]">
      <div className={myMontserrat.className}>  <div className="text-[#374151] xl:text-[2.100vw] text-xs md:text-[14px] font-semibold md:leading-5 leading-4 xl:leading-10">Austin ISD Honor Storiest</div></div>
        <div className="text-[#9CA1AB] xl:text-[0.942vw] md:text-xs text-[9px] font-normal xl:leading-[1.250vw] md:leading-[18px] leading-2 xl:mt-[0.833vw] md:mt-2 mt-1">We invite you to honor an Austin ISD teacher or staff member by telling the story of their impact on you.</div>
        <div className="flex xl:mt-[1.523vw] md:mt-[10px] mt-2 xl:space-x-[0.729vw] space-x-[14px]">
            <Link href="/aboutus" className="text-white xl:text-[0.729vw] md:text-sm text-[9px] font-normal xl:leading-[0.938vw] leading-3 md:leading-[18px] xl:p-[0.417vw] md:p-1.5 p-1 bg-[#A93439] xl:rounded-[0.313vw] rounded-md flex items-center xl:gap-[0.521vw] md:gap-4 gap-2"><span>Learn More</span> <i className="autinisd-arrow-right-line max-md:text-[7px]"></i></Link>
        </div>
        </div>
    </div>
    </div>
    </div>
    {/**col**/}
    {/**col**/}
    <div className="lg:h-[23.090vw] h-[150px] md:h-[200px]">
    <div className="flex xl:gap-[4.010vw] banner_bgwrapthree xl:mr-[2.604vw] md:mr-8 h-full">
    <div className="xl:pl-[1.667vw] pl-2 md:pl-[30px] xl:py-[1.667vw] md:py-[30px] py-2 flex flex-col justify-center">
      <div className="bg-[#F5F6F8] xl:rounded-[0.833vw] rounded-2xl xl:p-[1.250vw] md:p-5 p-3 w-[200px] md:w-[300px] xl:w-[26.875vw] relative lg:h-[11.979vw] boxshadow03">
      <div className={myMontserrat.className}> <div className="text-[#374151] xl:text-[2.083vw] text-xs md:text-[20px] font-[600] leading-10">No Classes-October 9t</div></div>
        <div className="text-[#9CA1AB] xl:text-[0.942vw] md:text-sm text-xs font-normal xl:leading-[1.250vw] md:leading-[18px] leading-4 xl:mt-[0.833vw] md:mt-4">Staff Development /Student Holiday (Indigenous Peoples Day).</div>
        <div className="flex xl:mt-[1.823vw] md:mt-[10px] mt-1 xl:space-x-[0.729vw] space-x-[14px] lg:absolute lg:-bottom-3">
            <Link href="/calendar" className="text-white xl:text-[0.729vw] md:text-sm text-[9px] font-normal xl:leading-[0.938vw] leading-3 md:leading-[18px] xl:p-[0.417vw] md:p-2 p-1 bg-[#A93439] xl:rounded-[0.313vw] rounded-md flex items-center xl:gap-[0.521vw] md:gap-4 gap-2"><span>View Calendar</span> <i className="autinisd-arrow-right-line"></i></Link>
        </div>
        </div>
    </div>
    </div>
    </div>
    {/**col**/}
    
    </Slider>
    </div>
    </div>
  )
}
