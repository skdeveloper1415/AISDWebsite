import { Montserrat } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});
export default function Banner() {



    return (
        <>
            <div className="enrollimg h-[450px] lg:h-[48.021vw] relative w-full">
                <div className={myMontserrat.className}>
                    <div className="text-[40px] text-[#F5F6F8] text-center font-extrabold lg:text-[3.698vw]">Have it All</div>
                    <div className="text-center items-center flex justify-center">
                        <Image
                            src={"/assets/images/enroll_In.svg"}
                            width={76}
                            height={76}
                            className="lg:w-[3.958vw] lg:h-[3.958vw] w-[20px] h-[20px]"
                            alt='enrollimg'
                        />
                        <div className="text-[#BECDE3] text-[15px] lg:text-[3.333vw] ml-[12px]  lg:ml-[0.625vw]">AUSTIN ISD</div>
                    </div>

                    <div className="flex justify-center mt-[10px] lg:mt-[1.302vw]">
                        <Image
                            src={"/assets/images/startenrollimg.svg"}
                            width={459}
                            height={66}
                            className="xl:w-[23.438vw] xl:h-[3.49vw] w-[250px] h-[67]"
                            alt='enrollimg'
                        />

                    </div>

                </div>
                <div className="text-center text-[#FFFFFF] mt-[10px] lg:mt-[3.542vw] font-medium text-[20px] lg:text-[1.563vw]">Welcome to Austin ISD!</div>
                <div className="w-full max-w-[300px] lg:max-w-[500px] mx-auto text-center text-[#FFFFFF] font-light mt-[10px] text-[10px] lg:mt-[0.729vw] lg:text-[0.938vw]">Whether you're longtime learners or new to the district, we're glad you're here. To enroll for the 2023–24 school year, please be sure you have an AISD Portal account. Visit portal.austinisd.org to create one or log in.</div>
                <div className="flex justify-center items-center mt-[20px] lg:mt-[2.292vw]">
                    <div className="inline-block text-[#fff] py-[10px] px-[52px] lg:py-[0.885vw] lg:px-[4.271vw] bg-[#A93439] rounded-full shadow-lg shadow-[#0000000A]">
                        <Link href={""} className=" flex items-center gap-2 justify-center text-[16px] lg:text-[0.938vw] ">Enrol today

                            <Image
                                src={"/assets/images/arrow-right.svg"}
                                width={24}
                                height={24}
                                className="lg:w-[1.25vw] lg:h-[1.25vw] w-[24px] h-[24px]"
                                alt='enrollimg'
                            />
                        </Link>
                    </div>
                </div>

                <div className="">
                <Image
                    src={"/assets/images/enrollimg3.png"}
                    width={350}
                    height={941}
                    className="absolute right-0 bottom-[-34%] xl:z-[10]"
                    alt='enrollimg'

                />
            </div>
            </div>

            <div className={myMontserrat.className}>
                <div className=" ">
                    <div className="mx-[15px] lg:mx-[5.208vw] rounded-2lg bg-[#FFFFFF] grid grid-cols-12 items-center mb-[36px] lg:mb-[1.875vw] relative z-[2]">
                        <div className="col-span-12 lg:col-span-3 text-[#374151] text-[56px] pl-[59px] lg:pl-[2.604vw] py-[32px] lg:py-[1.667vw] lg:text-[2.917vw] font-normal ">Find your <span className="font-bold">School</span>
                            <div className="">
                                <div className="bg-[#A93439] inline-block   text-[#fff] text-[16px] lg:text-[0.833vw] rounded-[8px]">
                                    <Link href={""} className=" text-[16px] lg:text-[rounded-[8px]] flex items-center py-[8px] px-[10px] ">
                                        Find  <Image
                                            src={"/assets/images/arrow-right1.svg"}
                                            width={24}
                                            height={18}
                                            className="ml-[5px]"
                                            alt='enrollimg'
                                        />
                                    </Link>


                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7 text-[#4B586E] text-[24px] leading-[24px] lg:text-[0.950vw] px-[70px] lg:px-[3.646vw] mr-[40px] py-[20px] pb-[52px] lg:py-[2.708vw] ">From Pre-K through their senior year, Austin ISD students can explore their interests with dozens of programs that prepare them for college, careers and life. From fine arts academies and dual language to earning free college credits, you can have it all in Austin ISD. Explore below, or use our new School Finder to find the school near you that best matches your child's interests.</div>
                    </div>
             
                </div>
            </div>
        




        </>
    )
}