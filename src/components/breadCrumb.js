import React, { useState, useRef, useEffect } from "react";
import "simplebar-react/dist/simplebar.min.css";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";

const myInter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function BreadCrumbComponent(props) {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className="flex items-center gap-2 text-[12px] xl:text-[0.625vw] text-[#888] mb-1 xl:mb-[0.208vw]">
      {props.dataArray.map((item,index) => {
        if (index === props.dataArray.length - 1) {
          // Skip rendering for the last item
          return ( 
          <>
              <div className="cursor-pointer text-[#262626] dark:text-white" >{item.title}</div>
          </>);
        }
        return (
          <>
            <Link href={item.link}>
              <div className="cursor-pointer dark:[#818181] ">{item.title}</div>
            </Link>
            <i className="autinisd-right text-[8px] xl:text-[0.417vw] dark:[#818181] "></i>
          </>
        );
      })}
    </div>
  );
}
