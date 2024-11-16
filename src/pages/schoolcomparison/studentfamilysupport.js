import { Inter, Montserrat } from "@next/font/google";
import { Divider } from "primereact/divider";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const myInter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function StudentFamilySupport(props) {
  return (
    <div className="xl:px-[6.042vw] px-[20px] grid xl:gap-[1.25vw] gap-[24px]">
      <div className={`${myMontserrat.className} mt-[24px] xl:mt-[1.25vw]`}>
        <div className="flex justify-center items-center w-full bg-[#F0F2F6] text-[24px] xl:text-[1.25vw] gap-[8px] xl:gap-[0.417vw]">
          <Divider />
          <span className="font-normal xl:w-[43%] 2xl:w-[43%] lg:w-[170%] w-[180%] md:w-[1500%]">
            Students and Family
          </span>
          <span className="font-semibold">Programs</span>
          <Divider />
        </div>
      </div>
      <div className={myInter.className}>
        <div className="bg-[#F0F2F6] grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 xl:gap-[1.667vw] gap-[32px]">
          {props?.data?.slice(0, 4).map((school, schoolIndex) => (
            <div key={schoolIndex}>
              {school?.benefits?.map((benefit, benefitIndex) => (
                <div
                  key={benefitIndex}
                  className="bg-[#FFF] border rounded-2xl gap-[4px] xl:gap-[0.208vw] py-[8px] xl:py-[0.417vw] px-[16px] xl:px-[0.833vw]"
                >
                  <div className="flex justify-between items-center">
                    <div className="py-[16px] xl:py-[0.833vw] text-[14px] xl:text-[0.729vw]">
                      {benefit}
                    </div>
                    <div>
                      <i
                        className={`autinisd-${
                          benefit.status === "approved" ? "tick" : "sub-circle"
                        }`}
                        style={{
                          color:
                            benefit.status === "approved"
                              ? "#31C48D"
                              : "#A9B9D0",
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
