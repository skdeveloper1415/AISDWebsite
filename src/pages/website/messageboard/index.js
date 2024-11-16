import React, { useState } from "react";
import Layout from "@/components/layout/layout";
import Introbanner from "@/components/introbanner";
import Pinneiitems from "@/components/pinneiitems";
import Topcontributors from "@/components/topcontributors";
import Unansweredtopics from "@/components/unansweredtopics";
import MessageBoardTable from "@/components/messageboardtable";
import MessageBoardGrid from "@/components/messageboardgrid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Index() {  

  const [showMessageGrid, setShowMessageGrid] = useState(1);

  const handleShowMessageGrid = (index) =>{
    setShowMessageGrid(index);
  }

  return (
    <>
      <Layout pageClass="pg-message-board" pageTitle="Message board">
        <div className="px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[80px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
          <div className="xl:max-w-[88.3025vw] mx-auto">
            <Introbanner handleShowMessageGrid={handleShowMessageGrid} />
            <div className="mt-[50px] xl:mt-[2.604vw]">
              <Pinneiitems />
            </div>
            <div className="mt-[50px] xl:mt-[4vw]">
              { showMessageGrid == 0 ?
                <MessageBoardGrid />
                :
                <MessageBoardTable />
              }
            </div>
            <div className="mt-[50px] xl:mt-[3.34vw]">
              <div className="grid grid-cols-12 gap-[53px] xl:gap-[2.760vw]">
                <Topcontributors />
                <Unansweredtopics />
              </div>
            </div> 
          </div>
        </div>
      </Layout>
    </>
  );
}
