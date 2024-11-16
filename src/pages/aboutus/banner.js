import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montserrat } from "@next/font/google";
import axios from "axios";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Banner() {

  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  const [aboutUs, setAboutUs] = useState([])
  const [testmonialsData, setTestmonialsData] = useState([])
  async function getApiFetching(url) {
    let resp = null;
    let loading = true;
    let errorMessage = null;

    try {
      const token = sessionStorage.getItem("AccessToken");
      const response = await axios.get(url);

      resp = response.data;
      loading = false;
    } catch (error) {
      errorMessage = error.message;
      loading = false;
    }

    let result = { resp, loading, errorMessage };
    return result;
  }

  // Get All  values
  useEffect(() => {
    aboutUsData();
    testmonials()
  }, []);

  // About Us
  const aboutUsData = async () => {
    const url = process.env.STRAPI_URL + "/about-us";
    const response = await getApiFetching(url);
     setAboutUs( response?.resp?.data);
  };
  // Testmonials
  const testmonials = async () => {
    const url = process.env.STRAPI_URL + "/testmonials";
    const response = await getApiFetching(url);
    let responseData = response?.resp?.data;

    let testimonialArray = [];
    if(responseData){
      // For showing maximum 4 records (As per Ganesh sir suggestion 22nd Jan 2024)
      testimonialArray = responseData.slice(0, 4);
    }
    
     setTestmonialsData(testimonialArray);
  };


  return (
    <div className='about-banner-sec xl:pt-[2.30vw] pt-[40px] xl:pb-[5.225vw] pb-[40px] relative min-h-[1200px] overflow-hidden'>
      <div className="xl:px-[5.990vw] px-[10px]">
        <div className='xl:max-w-[88.3025vw] mx-auto xl:px-[0] px-[20px]'>
          <div className="about-banner-info md:w-[60%] xl:w-[40%] relative z-[1]">
            <div className="breadCrumb flex gap-[16px] mb-[20px] xl:mb-[1.04vw]">
              <div className="col">
                <Link href={"/"}><i className="austin-home"></i> Home</Link>
              </div>
              <div className="col">
                <i className="austin-arrow-open-right"></i>
              </div>
              <div className="col">
                Our District
              </div>
            </div>
            <div className={myMontserrat.className}>
              <div className="text-[#374151] text-[34px] lg:text-[48px] xl:text-[2.500vw] font-extrabold">
                {aboutUs.headline}
              </div>
            </div>
            <div className="w-full ">
              <div className="text-[#4B586E] text-[14px] lg:text-[16px] xl:text-[0.833vw] mt-[10px] xl:mt-[0.521vw] leading-[20px] xl:leading-[1.042vw]">
              {aboutUs.about}
                {/* Austin ISD educates more than 73,000 students and embraces 116 diverse school communities in one of the fastest-growing metroplexes in the country. In partnership with our families and our community, Austin ISD's mission is to prepare every student with the knowledge and skills to thrive in college, career, and life. We partner with world-class universities, innovative businesses, nonprofit organizations and engaged community leaders to is to provide a comprehensive educational experience that is high-quality, challenging and inspires all students to make a positive contribution to their community. */}
              </div>
              <Link href="/aboutus/acadamics" className="inline-flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.730vw] px-[14px] xl:px-[1.04vw] text-[14px] lg:text-[16px] xl:text-[0.94vw] text-white mt-[20px] xl:mt-[1.56vw] ease-linear duration-200">
                Find your Future
                <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-banner-right absolute right-[-275px] top-[-265px]">
        <Image src="/assets/website/about-banner2.png" className="about-banner-right-image max-w-[none]" alt="About" width="1610" height="1596" />
        <div className="about-banner-grid-info absolute flex left-[408px] bottom-[465px] items-end">
          <div className={`${myMontserrat.className} about-banner-grid-col bg-[#D84718] w-[92px] h-[475px] relative z-[7] flex flex-col justify-between gap-2 items-center text-white text-center`}>
            <span className="about-banner-grid-col-arrow absolute left-0 top-[-91px] border-[46px] border-l-[transparent] border-r-[transparent] border-t-[transparent] border-b-[#D84718]"></span>
            <div className="text-[16px] xl:text-[0.938vw] font-bold mt-[16px] xl:mt-[1.04vw] uppercase">SPORTS</div>
            <i>
              <Image src="/assets/website/ico-sports.svg" alt="SPORTS" width="58" height="58" />
            </i>
            <div className="text-center mb-[20px] xl:mb-[1.6vw]">
              <span className="text-[20px] xl:text-[1.354vw]">34.4%</span>
              <div className="text-[14px] xl:text-[0.833vw]">growth</div>
            </div>
          </div>
          <div className={`${myMontserrat.className} about-banner-grid-col bg-[#F05B2B] w-[121px] h-[445px] relative z-[6] flex flex-col justify-between gap-2 items-center text-white text-center`}>
            <span className="about-banner-grid-col-arrow absolute left-[1px] top-[-120px] border-[60px] border-l-[transparent] border-r-[transparent] border-t-[transparent] border-b-[#F05B2B]"></span>
            <div className="text-[16px] xl:text-[0.938vw] font-bold mt-[16px] xl:mt-[1.04vw] uppercase">Arts</div>
            <i>
              <Image src="/assets/website/ico-arts.svg" alt="Arts" width="58" height="58" />
            </i>
            <div className="text-center mb-[20px] xl:mb-[1.6vw]">
              <span className="text-[20px] xl:text-[1.354vw]">34.5%</span>
              <div className="text-[14px] xl:text-[0.833vw]">growth</div>
            </div>
          </div>
          <div className={`${myMontserrat.className} about-banner-grid-col bg-[#F6EAEB] w-[123px] h-[410px] relative z-[5] flex flex-col justify-between gap-2 items-center text-[#374151] text-center`}>
            <span className="about-banner-grid-col-arrow absolute left-[-1px] top-[-123px] border-[62px] border-l-[transparent] border-r-[transparent] border-t-[transparent] border-b-[#F6EAEB]"></span>
            <div className="text-[16px] xl:text-[0.938vw] font-bold mt-[16px] xl:mt-[1.04vw] uppercase">Diversity</div>
            <i>
              <Image src="/assets/website/ico-diversity.svg" alt="Diversity" width="58" height="58" />
            </i>
            <div className="text-center mb-[20px] xl:mb-[1.6vw]">
              <span className="text-[20px] xl:text-[1.354vw]">35%</span>
              <div className="text-[14px] xl:text-[0.833vw]">growth</div>
            </div>
          </div>
          <div className={`${myMontserrat.className} about-banner-grid-col bg-[#ECEFF3] w-[122px] h-[360px] relative z-[4] flex flex-col justify-between gap-2 items-center text-[#374151] text-center`}>
            <span className="about-banner-grid-col-arrow absolute left-[-2px] top-[-123px] border-[62px] border-l-[transparent] border-r-[transparent] border-t-[transparent] border-b-[#ECEFF3]"></span>
            <div className="text-[16px] xl:text-[0.938vw] font-bold mt-[16px] xl:mt-[1.04vw] uppercase">Equity</div>
            <i>
              <Image src="/assets/website/ico-equity.svg" alt="Equity" width="58" height="58" />
            </i>
            <div className="text-center mb-[20px] xl:mb-[1.6vw]">
              <span className="text-[20px] xl:text-[1.354vw]">32.4%</span>
              <div className="text-[14px] xl:text-[0.833vw]">growth</div>
            </div>
          </div>
          <div className={`${myMontserrat.className} about-banner-grid-col bg-[#BECDE3] w-[122px] h-[305px] relative z-[3] flex flex-col justify-between gap-2 items-center text-[#374151] text-center`}>
            <span className="about-banner-grid-col-arrow absolute left-[-2px] top-[-123px] border-[62px] border-l-[transparent] border-r-[transparent] border-t-[transparent] border-b-[#BECDE3]"></span>
            <div className="text-[16px] xl:text-[0.938vw] font-bold mt-[16px] xl:mt-[1.04vw] uppercase ">Pre-KG</div>
            <i>
              <Image src="/assets/website/ico-prekg.svg" alt="Pre-KG" width="58" height="58" />
            </i>
            <div className="text-center mb-[20px] xl:mb-[1.6vw] ">
              <span className="text-[20px] xl:text-[1.354vw]">28.4%</span>
              <div className="text-[14px] xl:text-[0.833vw]">growth</div>
            </div>
          </div>
          <div className={`${myMontserrat.className} about-banner-grid-col bg-[#42536D] w-[122px] h-[265px] relative z-[2] flex flex-col justify-between gap-2 items-center text-white text-center`}>
            <span className="about-banner-grid-col-arrow absolute left-[-2px] top-[-123px] border-[62px] border-l-[transparent] border-r-[transparent] border-t-[transparent] border-b-[#42536D]"></span>
            <div className="text-[16px] xl:text-[0.938vw] font-bold mt-[16px] xl:mt-[1.04vw] uppercase  text-[#DBE1EA]">College Prep</div>
            <i>
              <Image src="/assets/website/ico-college-prep.svg" alt="College Prep" width="58" height="58" />
            </i>
            <div className="text-center mb-[20px] xl:mb-[1.6vw]">
              <span className="text-[20px] xl:text-[1.354vw]">26.1%</span>
              <div className="text-[14px] xl:text-[0.833vw]">growth</div>
            </div>
          </div>
          <div className={`${myMontserrat.className} about-banner-grid-col bg-[#263040] w-[92px] h-[225px] relative z-[1] flex flex-col justify-between gap-2 items-center text-white text-center`}>
            <span className="about-banner-grid-col-arrow absolute left-0 top-[-91px] border-[46px] border-l-[transparent] border-r-[transparent] border-t-[transparent] border-b-[#263040]"></span>
            <div className="text-[16px] xl:text-[0.938vw] font-bold mt-[16px] xl:mt-[1.04vw] uppercase text-[#ECEFF3]">P-tech</div>
            <i>
              <Image src="/assets/website/ico-ptech.svg" alt="P-tech" width="58" height="58" />
            </i>
            <div className="text-center mb-[20px] xl:mb-[1.6vw]">
              <span className="text-[20px] xl:text-[1.354vw]">22.5%</span>
              <div className="text-[14px] xl:text-[0.833vw] text">growth</div>
            </div>
          </div>
        </div>
        <div className={`${myMontserrat.className} about-banner-right-title absolute flex left-[430px] bottom-[275px] bg-[#263040] px-[8px] xl:px-[0.417vw] py-[8px] xl:py-[0.625vw] text-[#F5F6F8] flex items-center justify-center gap-2 uppercase w-[752px]`}>
          <span className="font-extrabold text-[24px] xl:text-[1.667vw]">Have it All</span>
          <Image src="/assets/website/in.svg" width="39" height="39" />
          <span className="text-[24px] xl:text-[1.667vw] text-[#BECDE3]">Austin ISD</span>
        </div>
      </div>
      <div className="about-banner-left w-[50%] mt-[40px] xl:mt-[6.25vw] relative z-[1] ml-[-230px]">
        <h4 className="text-[#9CA1AB] text-[18px] xl:text-[1.25vw] font-semibold mb-[7px] text-center">Testmonials</h4>
        <Slider {...settings} className="about-slick-slider">
          {testmonialsData?.map((elm, index)=>{
            return(
              <div className="pt-[50px] pb-[60px]" key={index}>
              <div className="about-slick-item bg-white shadow rounded-lg px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
                <Image src= {elm.image.url} width="181" height="181" alt="Patrick Salinas - Principal"
                  className="mt-[-50px] mb-[25px] mx-auto rounded-full w-[180px] h-[180px] xl:w-[9.375vw] xl:h-[9.375vw] object-cover border-[5px] xl:border-[0.260vw] border-[#E5E7EB]"
                />
                <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">{elm.comment}</p>
                <div className="mt-[35px]">
                  <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">{elm.name} - {elm.designation}</h6>
                  <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">{elm.award}</p>
                </div>
              </div>
            </div>
            ) 
          })}
          {/* <div className="pt-[50px] pb-[60px]">
            <div className="about-slick-item bg-white shadow rounded-lg px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
              <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                className="mt-[-50px] mb-[25px] mx-auto"
              />
              <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
              <div className="mt-[35px]">
                <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
              </div>
            </div>
          </div>
          <div className="pt-[50px] pb-[60px]">
            <div className="about-slick-item bg-white shadow rounded-lg px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
              <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                className="mt-[-50px] mb-[25px] mx-auto"
              />
              <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
              <div className="mt-[35px]">
                <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
              </div>
            </div>
          </div>
          <div className="pt-[50px] pb-[60px]">
            <div className="about-slick-item bg-white shadow rounded-lg px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
              <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                className="mt-[-50px] mb-[25px] mx-auto"
              />
              <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
              <div className="mt-[35px]">
                <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
              </div>
            </div>
          </div>
          <div className="pt-[50px] pb-[60px]">
            <div className="about-slick-item bg-white shadow rounded-lg px-[12px] xl:px-[0.625vw] pt-[1px] pb-[16px] xl:pb-[1.25vw] relative text-center">
              <Image src="/assets/website/user-testimonial1.svg" width="181" height="181" alt="Patrick Salinas - Principal"
                className="mt-[-50px] mb-[25px] mx-auto"
              />
              <p className="text-[14px] xl:text-[0.730vw] text-[#4B586E] font-light">I want to make a positive impact on the community I lead by working alongside them to show that education truly is a connecting piece to many opportunities life has to offer.</p>
              <div className="mt-[35px]">
                <h6 className="text-[#374151] text-[16px] xl:text-[0.833vw] font-medium mb-[4px]">Patrick Salinas - Principal</h6>
                <p className="text-[#4B586E] text-[12px] xl:text-[0.625vw]">Norman-Sims Elementary School Assistant Principal of the Year, 2022</p>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>

    </div>
  )
}
