import React from "react";
import { Montserrat } from "@next/font/google";
import Image from "next/image";


const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

function NoDataFound() {
  return (
    <div className={myMontserrat.className}>
      <div className="text-[#374151] text-[36px] xl:text-[1.875vw] font-bold">
        <Image
          src="/assets/website/d-img.png"
          className="mx-auto"
          width="150"
          height="150"
        />
        Sorry ! No Result Found
      </div>
      <div className="text-[#374151] text-[20px] xl:text-[0.875vw] font-light">
        We could’t find what you searched for. Try searching again.
      </div>
    </div>
  );
}

export default NoDataFound;
