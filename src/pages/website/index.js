import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import Banner from "./banner";
import Whychosseaustinisd from "./whychosseaustinisd";
import LatestNews from "./latestnews";
import SocialMedia from "./socialmedia";
import CalendarEvents from "./calendarevents";
import AisdTv from "./aisdtv";


export default function Index() {


  return (
    <>
      <Layout pageClass="pg-elibrary" pageTitle="eLibrary">
        <div className="banner_wrap">
        <Banner/>
        <Whychosseaustinisd />
        </div>
        <div className="pt-[55px] xl:pt-[2.865vw]">
          <LatestNews />
        </div>
        <SocialMedia />
        <CalendarEvents />
        <AisdTv />
      </Layout>
    </>
  );
}
