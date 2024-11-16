import { useEffect, useState } from "react";
import Layout from "@/components/layout/layout";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import Schoolbanner from "./schoolbanner";
import Schools from "@/components/website/schools";
import ComparisonSchools from "@/components/website/comparisonschools";
import axios from "axios";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index() {
  const [schoolsdata, setschoolsdata] = useState([]);

  const [compareLength, setCompareLength] = useState(0);
  const [loadMoreCount, setLoadMoreCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true)
    setLoadMoreCount(1)
  }

  const loadMoreReset = () => {
    
    setLoadMoreCount(0)
  }

  const appendSchoolList = (schoolList) => {
    let oldSchools = [...schoolsdata];
    oldSchools.push(...schoolList.data);

    setschoolsdata(oldSchools)
    setIsLoading(false)
    setLoadMoreCount(2)
  }
  
  const updateSchoolList = (newSchoolList) => {
    // Check if newSchoolList is defined and not null
    if (newSchoolList && newSchoolList.data !== undefined) {
      setschoolsdata(newSchoolList.data);
      // console.log("newSchoolList",newSchoolList)
    }
  };

  useEffect(() => {
    const handleComparisonArrayUpdate = () => {
      const newcomp = JSON.parse(localStorage.getItem("comparisonArray"));
      if (newcomp && newcomp.length > 0) {
        setCompareLength(newcomp.length);
      }
    };

    // Listen for the custom event
    window.addEventListener(
      "comparisonArrayUpdated",
      handleComparisonArrayUpdate
    );

    // Initial setup when component mounts
    handleComparisonArrayUpdate();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener(
        "comparisonArrayUpdated",
        handleComparisonArrayUpdate
      );
    };
  }, []);

  return (
    <>
      <Layout pageTitle="Schools">
        <Schoolbanner 
        updateSchoolList={updateSchoolList} 
        appendSchoolList={appendSchoolList} 
        loadMoreCount={loadMoreCount}
        loadMoreReset={loadMoreReset}
        />
        <div className="xl:px-[5.990vw] md:px-[40px] px-[20px] xl:mb-[1.563vw] mb-[30px] xl:mt-[5.563vw] mt-[30px] relative z-[2]">
          <div className="grid grid-cols-12 gap-[18px] xl:gap-[1.083vw]">
            <div className="col-span-12 xl:col-span-10">
              <div className="flex flex-wrap items-center justify-between mb-[20px] xl:mb-[2.083vw]">
                <div
                  className={`${myMontserrat.className} flex items-center gap-2 w-[100%] sm:w-[auto] mb-[10px] sm:mb-[0]`}
                >
                  <div className="text-[#374151] text-[24px] xl:text-[1.354vw] leading-[1.2]">
                    Highlighted
                  </div>
                  <div className="text-[#374151] text-[24px] xl:text-[1.354vw] leading-[1.2] font-extrabold">
                    Schools
                  </div>
                </div>
                <div className="flex xl:justify-center xl:text-[0.729vw] text-[13px] gap-2 w-[100%] sm:w-[auto] ">
                  <span className="px-[8px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] bg-[#A93439] text-[#fff] cursor-pointer  shadow rounded-full">Elementry School</span>
                  <span className="px-[8px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] bg-[#fff] text-[#374151] cursor-pointer  shadow rounded-full">High School</span>
                  <span className="px-[8px] xl:px-[0.625vw] py-[8px] xl:py-[0.417vw] bg-[#fff] text-[#374151] cursor-pointer  shadow rounded-full">Middle School</span>
                </div>
                <div className="w-[100%] md:w-[auto] mt-[5px] md:mt-[0]">
                  <div className="flex justify-end xl:text-[0.729vw] text-[14px]">
                    <div className="px-[8px] xl:px-[0.417vw] py-[8px] xl:py-[0.417vw] bg-[#1F2A37] font-light text-[#fff]  rounded-l-xl cursor-pointer  shadow-lg">
                      List + Map
                    </div>
                    <div className="px-[8px] xl:px-[0.417vw] py-[8px] xl:py-[0.417vw] bg-[#fff] text-[#9CA1AB] cursor-pointer  shadow-lg">
                      List
                    </div>
                    <div className="px-[8px] xl:px-[0.417vw] py-[8px] xl:py-[0.417vw] bg-[#fff] text-[#9CA1AB] rounded-r-xl shadow-lg cursor-pointer ">
                      Map
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Schools
                  data={schoolsdata}
                  loadMore={loadMore}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] xl:gap-[1.25vww]"
                />
  <div className="text-center flex justify-center pl-52  w-full">
      <div onClick={loadMore} className="bg-[#fff] hover:bg-[#A93439] rounded-[8px] xl:rounded-[0.417vw] py-[10px] xl:py-[0.525vw] px-[12px] xl:px-[0.625vw] block text-[14px] xl:text-[0.730vw] text-[#4B586E] hover:text-white flex justify-center min-h-full items-center ease-linear duration-200 mx-auto cursor-pointer ">{isLoading ? 'Loading...' : 'Load more'}</div>
      </div>
                <div className="flex justify-center xl:mt-[1.823vw] mt-[35px]">
                  <Link href="">
                    {schoolsdata.length > 0 ? "" : "No results found"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-2">
              <div className="bg-[#fff] rounded-xl  xl:p-[1.146vw] p-[22px]">
                <div className="flex-col justify-center">
                  <div className={myMontserrat.className}>
                    <div className="text-[#374151] text-[22px] xl:text-[1.146vw] leading-[1.2]">
                      Schools
                    </div>
                    <div className="text-[#374151] text-[22px] xl:text-[1.146vw] leading-[1.2] font-extrabold">
                      Comparison
                    </div>
                  </div>
                  {compareLength >= 2 ? (
                    <Link
                      href={{
                        pathname: "/schoolcomparison",
                        // query: { schoolData: JSON.stringify(schoolsdata) }, // Pass the data as a query parameter
                      }}
                      passHref
                      className="mt-4 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[10px] xl:py-[0.521vw] px-[16px] xl:px-[0.833vw] inline-block text-[12px] xl:text-[0.725vw] text-white font-light"
                    >
                      Compare
                      <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                    </Link>
                  ) : null}
                </div>
                <div className="xl:mt-[1.667vw] mt-[30px]">
                  <ComparisonSchools />

                  <div className="bg-[#F5F6F7] rounded-lg border-dashed border-[#E5E7EB] xl:h-[8.458vw] h-[200px]  w-full">
                    <div className="flex justify-center items-center h-full">
                      <div className="text-[#9CA1AB] text-[10px] xl:text-[0.625vw] leading-[1.2] font-light">
                        Add a new School
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
