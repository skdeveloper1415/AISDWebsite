import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Createnewtopic from "@/components/popup/createnewtopic";



const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Index(props) {

  const [Createnewtopicpopup, setCreatenewtopicpopup] = useState(false);

  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
      <Tabs defaultIndex={tabIndex} onSelect={(index) =>{
        setTabIndex(index);
        props.handleShowMessageGrid(index);
      }}>
        <div className="text-center mt-[10px] xl:mt-[1.042vw]">
          <div className="col">
            <div className="breadCrumb flex justify-center gap-[16px] mb-[20px] mb-[1.04vw]">
              <div className="col">
                <Link href={""}><i className="austin-home"></i> Home</Link>
              </div>
              <div className="col">
              <i className="austin-arrow-open-right"></i>
              </div>
              <div className="col">
              Enroll
              </div>
            </div>
          </div>
          <div className={myMontserrat.className}>
            <div className="text-[#374151] text-[48px] xl:text-[2.500vw] font-extrabold">
              AISD Council <span className="font-semibold">Message Board</span>
            </div>
          </div>
          <div className="w-full max-w-[1024px] mx-auto">
            <div className="text-[#9CA1AB] text-[20px] xl:text-[1.042vw] mt-[10px] xl:mt-[0.521vw]">
              Austin ISD is dedicated to preparing your child for college,
              career, and life. They provide a safe, academically challenging
              environment from Pre-K to 12th grade, emphasizing social-emotional
              learning.
              <span className="text-[#374151] block font-semibold">
                We're ready! Are you?
              </span>
            </div>
          </div>
        </div>   
        <div>
          <div className="grid grid-cols-12 gap-[24px] xl:gap-[1.250vw] mt-[50px] xl:mt-[2.604vw] xl:max-w-[57.893vw] mx-auto">
            <div className="col-span-6">
              <div className="p-inputgroup flex-1 custmSearch">
                <Button icon="austin-search" />
                <InputText placeholder="Search" />
                <Button icon="austin-close" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="flex gap-[24px] xl:gap-[1.250vw]">
                <div className="col">
                  <Link
                    href={""}
                    className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[18px] xl:text-[0.938vw] text-white"
                    onClick={() => setCreatenewtopicpopup(true)}
                  >
                    Create New Topic
                  </Link>
                </div>
                <div className="col">
                  <Link
                    href={""}
                    className="hover:bg-[#a2a6ac] border border-[#1F3F71] rounded-[8px] xl:rounded-[0.417vw] py-[12px] xl:py-[0.625vw] px-[20px] xl:px-[1.042vw] inline-block text-[18px] xl:text-[0.938vw] text-[#1F3F71]"
                  >
                    Filters
                  </Link>
                </div>
                <div className="col">
                  <div className="custTabs">
                    <TabList>
                      <Tab>
                        <i className="austin-grid"></i>
                      </Tab>
                      <Tab>
                        <i className="austin-group"></i>
                      </Tab>
                    </TabList>
                  </div>
                </div>
              </div>
            </div>                 

            <Createnewtopic
                visible={Createnewtopicpopup}
                onHides={() => setCreatenewtopicpopup(false)}
              />

          </div>
        </div>
        {/* <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel> */}
      </Tabs>
    </>
  );
}
