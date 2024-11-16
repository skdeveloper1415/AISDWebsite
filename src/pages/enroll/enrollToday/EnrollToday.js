import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Image from 'next/image'
// const websiteStylesheets = [
//   "/styles/website/vkstyle.css",
//   "/styles/website/banner.css",
//   "/styles/website/astyle.css",
//   "/styles/website/nstyle.css",
//   "/styles/website/skstyle.css",
//   "/styles/website/systyle.css",
//   "/styles/website/vsstyle.css",
//   "/styles/website/enroll.css",
// ];

const EnrollToday = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [tabsecond, setTabsecond] = useState(0);

  const handleTabSecond = (index) => {
    setTabsecond(index);
  };

  const [tabThree, setTabThree] = useState(0);
  const handleTabClick3 = (index) => {
    setTabThree(index);
  };
  return (
    <div className="mb-[-150px]">
      <div className="enroll-bg flex items-center flex-col py-20 relative z-[2]">
        {/* <Head>
          <link rel="icon" href="/favicon.ico" />
          {router.pathname.startsWith("/website") &&
            websiteStylesheets.map((stylesheet, index) => (
              <link key={index} rel="stylesheet" href={stylesheet} />
            ))}
        </Head> */}

        <div className="flex w-11/12 flex-col justify-center items-center gap-5">
          <h1 className="text-5xl lg:text-[2.5vw] text-white">
            Enroll <span className="font-bold">today</span>
          </h1>
          <p className="text-2xl lg:text-[1.25vw] font-light text-white opacity-[0.6] text-center">
            <span className="font-medium">We’re glad to have you here!</span> Let us know what you need and we can
            guide you through the enrollment process
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1352"
              height="2"
              viewBox="0 0 1352 2"
              fill="none"
            >
              <path
                opacity="0.5"
                d="M0.53125 1H1351.47"
                stroke="url(#paint0_linear_1522_30825)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1522_30825"
                  x1="1352.14"
                  y1="1.01146"
                  x2="0.53125"
                  y2="0.990977"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.29" />
                  <stop offset="0.484164" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex w-11/12 mt-14 flex-col justify-center items-center gap-9">
          <h1 className="text-[32px] lg:text-[1.667vw] text-white">
            What better describe your current status?
          </h1>

          <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <TabList className={`flex flex-wrap justify-center gap-3`}>
              <Tab>
                <div
                  className={`text-2xl xl:text-[1.25vw] font-medium py-4 lg:py-[0.833vw] px-6 lg:px-[1.25vw] text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${activeTab == 0
                      ? "text-[#E5E7EB] bg-[#A93439]"
                      : "border border-solid border-[#4B5563]"
                    }`}
                >
                  Register for a Neighborhood School
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-2xl xl:text-[1.25vw] font-medium py-4 lg:py-[0.833vw] px-6 lg:px-[1.25vw] text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${activeTab == 1
                      ? "bg-[#A93439]"
                      : "border border-solid border-[#4B5563]"
                    }`}
                >
                  Transfer to other AISD School
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-2xl xl:text-[1.25vw] font-medium py-4 lg:py-[0.833vw] px-6 lg:px-[1.25vw] text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${activeTab == 2
                      ? "bg-[#A93439]"
                      : "border border-solid border-[#4B5563]"
                    }`}
                >
                  Out-of-District Transfer
                </div>
              </Tab>
            </TabList>
            <div>
              <TabPanel>
                <div className="mt-[48px] xl:mt-[2.5vw] flex flex-col gap-9 xl:gap-[1.875vw]">
                  <p className="text-[32px] lg:text-[1.667vw] text-center font-bold text-white">
                    Are you looking for Pre-K or K-12?
                  </p>
                  <Tabs selectedIndex={tabsecond} onSelect={handleTabSecond}>
                    <TabList className={`flex justify-center gap-3`}>
                      <Tab>
                        <div
                          className={`text-2xl xl:text-[1.25vw] font-medium py-4 lg:py-[0.833vw] px-6 lg:px-[1.25vw] text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${tabsecond == 0
                              ? "text-[#E5E7EB] bg-[#A93439]"
                              : "border border-solid border-[#4B5563]"
                            }`}
                        >
                          Pre-K
                        </div>
                      </Tab>
                      <Tab>
                        <div
                          className={`text-2xl xl:text-[1.25vw] font-medium py-4 lg:py-[0.833vw] px-6 lg:px-[1.25vw] text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${tabsecond == 1
                              ? "bg-[#A93439]"
                              : "border border-solid border-[#4B5563]"
                            }`}
                        >
                          K-12
                        </div>
                      </Tab>
                    </TabList>
                    <div>
                      <TabPanel>
                        <div className="mt-12 xl:mt-[2.5vw] flex flex-col items-center">
                          <Image width={50} height={50} className="lg:w-[2.5vw] lg:h-[2.5vw] w-[48px] h-[48px]" src="/assets/website/arrow-right.svg"
                            alt="Banner" />

                          <h3 className="text-[32px] xl:text-[1.667vw] font-bold text-white mt-12 xl:mt-[2.5vw]">
                            Steps to apply to Pre-K:
                          </h3>

                          <div className="flex mt-[63px] xl:mt-[3.281vw] flex-wrap items-center justify-center gap-6 xl:gap-[1.25vw]">
                            <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                              <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-white text-xl">
                                1
                              </span>
                              <Image width={70} height={70}
                                className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                                src="/assets/website/monitor.svg"
                                alt="Banner" />

                              <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                                Complete{" "}
                                <span className="text-[#A93439] underline">
                                  online registration
                                </span>{" "}
                                for the 2023-2024 school year
                              </p>
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                              <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-xl text-white">
                                2
                              </span>
                              <Image width={70} height={70}
                                className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                                src="/assets/website/complete_list_icon.svg"
                                alt="Banner" />

                              <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                                Complete the Pre-K <br />Application
                              </p>
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                              <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-center text-white">
                                3
                              </span>
                              <Image width={70} height={70}
                                className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                                src="/assets/website/translate.svg"
                                alt="Banner" />

                              <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                                Complete the Dual Language section of the Pre-K application
                              </p>
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                              <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-white text-xl">
                                4
                              </span>
                              <div className="flex items-center justify-center gap-[17px] xl:gap-[0.885vw] absolute -bottom-3">
                              <span className=" bg-[#42536D] rounded-full text-white px-[24px] lg:px-[1.25vw] py-[8px] xl:py-[0.417vw]">
                                <Image width={28} height={21}
                                  className="xl:w-[1.458vw] w-[28px]"
                                  src="/assets/website/us_flag_icon.svg"
                                  alt="Banner" />
                              </span>
                              <span className="flex items-center justify-center bg-[#42536D] rounded-full text-white px-[24px] lg:px-[1.25vw] py-[8px] xl:py-[0.417vw]">
                                <Image width={28} height={21}
                                  className="xl:w-[1.458vw] w-[28px]"
                                  src="/assets/website/spain_flag_icon.svg"
                                  alt="Banner" />
                              </span>

                              </div>

                              <Image width={70} height={70}
                                className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                                src="/assets/website/document-normal.svg"
                                alt="Banner" />

                              <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                                Complete the paper Pre-K 4 Dual Language Application:
                              </p>
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                              <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-xl text-white">
                                5
                              </span>
                              <Image width={70} height={70}
                                className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                                src="/assets/website/tick-square.svg"
                                alt="Banner" />

                              <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                                Submit required documents as requested
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>

                      <TabPanel>
                        <div className="mt-12 xl:mt-[2.5vw] flex flex-col items-center">
                          <Image width={50} height={50} className="lg:w-[2.5vw] lg:h-[2.5vw] w-[48px] h-[48px]" src="/assets/website/arrow-right.svg"
                            alt="Banner" />

                          <h3 className="text-[32px] xl:text-[1.667vw] font-bold text-white mt-12 xl:mt-[2.5vw]">
                            Steps to apply to K-12:
                          </h3>

                          <div className="flex mt-[63px] xl:mt-[3.281vw] flex-wrap items-center justify-center gap-6 xl:gap-[1.25vw]">
                            <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                              <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] flex items-center text-[22px] xl:text-[1.146vw] text-white justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                                1
                              </span>
                              <Image width={70} height={70} className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]" src="/assets/website/monitor.svg"
                                alt="Banner" />

                              <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                                An{" "}
                                <span className="text-[#A93439] underline">
                                  online transfer application
                                </span>{" "}
                                can be submitted at that time
                              </p>
                            </div>
                            <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                              <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] text-white flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3">
                                2
                              </span>

                              <Image width={70} height={70}
                                className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                                src="/assets/website/sms.svg"
                                alt="Banner"
                              />
                              <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                                An{" "}
                                <span className="text-[#A93439] underline">
                                  online transfer application
                                </span>{" "}
                                can be submitted at that time
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </div>
                  </Tabs>
                </div>
              </TabPanel>

              <TabPanel>
                <p className="text-[32px] lg:text-[1.667vw] text-center font-bold text-white mt-[48px] xl:mt-[2.5vw]">
                  Are you looking for Pre-K or K-12?
                </p>
                <Tabs selectedIndex={tabThree} onSelect={handleTabClick3}>
                  <TabList className={`flex justify-center gap-3 mt-[36px] xl:mt-[1.875vw]`}>
                    <Tab>
                      <div
                        className={`text-2xl xl:text-[1.25vw] font-medium py-4 lg:py-[0.833vw] px-6 lg:px-[1.25vw] text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${tabThree == 0
                            ? "text-[#E5E7EB] bg-[#A93439]"
                            : "border border-solid border-[#4B5563]"
                          }`}
                      >
                        Pre-K
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        className={`text-2xl xl:text-[1.25vw] font-medium py-4 lg:py-[0.833vw] px-6 lg:px-[1.25vw] text-[#E5E7EB] text-center rounded-full cursor-pointer
                     ${tabThree == 1
                            ? "bg-[#A93439]"
                            : "border border-solid border-[#4B5563]"
                          }`}
                      >
                        K-12
                      </div>
                    </Tab>
                  </TabList>
                  <div>
                    <TabPanel>
                      <div className="mt-12 xl:mt-[2.5vw] flex flex-col items-center">
                        <Image width={50} height={50} className="lg:w-[2.5vw] lg:h-[2.5vw] w-[48px] h-[48px]" src="/assets/website/arrow-right.svg"
                          alt="Banner" />

                        <h3 className="text-[32px] xl:text-[1.667vw] font-bold text-white mt-12 xl:mt-[2.5vw]">
                          Steps to transfer to Pre-K:
                        </h3>

                        <div className="flex mt-[63px] xl:mt-[3.281vw] flex-wrap items-center justify-center gap-6 xl:gap-[1.25vw]">
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-white text-xl">
                              1
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/monitor.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-xl text-white">
                              2
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/global-search.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-center text-white">
                              3
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/translate.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-white text-xl">
                              4
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/document-normal.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center bg-[#263040] absolute -top-3 rounded-full right-3 text-xl text-white">
                              5
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/tick-square.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white text-center">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="mt-12 xl:mt-[2.5vw] flex flex-col items-center">
                        <Image width={50} height={50} src="/assets/website/arrow-right.svg"
                          className="lg:w-[2.5vw] lg:h-[2.5vw] w-[48px] h-[48px]"
                          alt="Banner" />

                        <h3 className="text-[32px] xl:text-[1.667vw] font-bold text-white mt-12 xl:mt-[2.5vw]">
                          Steps to apply to K-12:
                        </h3>

                        <div className="flex mt-[63px] xl:mt-[3.281vw] flex-wrap items-center justify-center gap-6 xl:gap-[1.25vw]">
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center text-white bg-[#263040] absolute -top-3 rounded-full right-3">
                              1
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/monitor.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center text-white bg-[#263040] absolute -top-3 rounded-full right-3">
                              2
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/sms.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center text-white bg-[#263040] absolute -top-3 rounded-full right-3">
                             3
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/translate.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center text-white bg-[#263040] absolute -top-3 rounded-full right-3">
                              4
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/tick-square.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                          <div className="flex flex-col gap-5 lg:gap-[1.146vw] items-center relative w-72 xl:w-[14.792vw] p-5 xl:p-[1.146vw] pb-[32px] xl:pb-[1.667vw] bg-[#111928] rounded-[22px] xl:rounded-[1.146vw]">
                            <span className="w-10 h-10 xl:w-[2.135vw] xl:h-[2.135vw] text-[22px] xl:text-[1.146vw] flex items-center justify-center text-white bg-[#263040] absolute -top-3 rounded-full right-3">
                              5
                            </span>
                            <Image width={70} height={70}
                              className="xl:w-[3.646vw] xl:h-[3.646vw] w-[70px] h-[70px]"
                              src="/assets/website/sms-tracking.svg"
                              alt="Banner" />

                            <p className="text-[16px] xl:text-[0.833vw] text-white">
                              An{" "}
                              <span className="text-[#A93439] underline">
                                online transfer application
                              </span>{" "}
                              can be submitted at that time
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </Tabs>
              </TabPanel>

              <TabPanel>
                <div className="full-calendar-sec py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                  mndmsndmsdnmm
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default EnrollToday;
