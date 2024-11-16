import React, { useState } from "react";
import { Montserrat, Inter} from "@next/font/google";
import { BreadCrumb } from "primereact/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import Comments from "@/components/comment";
import RelatedItems from "@/components/relateditems";
import Layout from "@/components/layout/layout";
import Bordmeetingview from "@/components/popup/bordmeetingview";

const myMontserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})
const myInter = Inter({
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})


export default function Index() {
  const items = [
    { label: "Communication" },
    { label: "AISD Council Message Board" },
    { label: "Discussion Details" },
  ];
  const [text, setText] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [bordmeetingviewpopup, setbordmeetingviewpopup] = useState(false);
  const commentsdata=[
    {
      name:'Jerome Bell',
      date:'Mon Sep 25, 2023 9:41 am',
      likecount:'122',
      description:'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name:'Jerome Bell',
      date:'Mon Sep 25, 2023 9:41 am',
      likecount:'122',
      description:'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name:'Jerome Bell',
      date:'Mon Sep 25, 2023 9:41 am',
      likecount:'122',
      description:'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name:'Jerome Bell',
      date:'Mon Sep 25, 2023 9:41 am',
      likecount:'122',
      description:'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    },
    {
      name:'Jerome Bell',
      date:'Mon Sep 25, 2023 9:41 am',
      likecount:'122',
      description:'Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed mauris tempor turpis urna. Sed enim vel tincidunt ut lectus aenean. Enim venenatis volutpat massa euonsectetur amet commodo. Et diam mi id aliquam. In at enim laoreet aliquam id accumsan arcu aliquam urna.Viverra.'
    }
  ]
  const cities = [
    { name: "Relevancy", code: "RE" },
    { name: "Newly", code: "Ne" },
  ];

  const home = { icon: "austin-home", url: "/" };
  return (
    <>
    <Layout pageClass="pg-discussion-details" pageTitle="Discussion Details">
      <div className="discussion-bg px-[15px] lg:px-[20px] xl:px-[1.04vw] pt-[40px] xl:pt-[2.604vw] pb-6 xl:pb-[1.25vw]">
        <div className="xl:max-w-[88.3025vw] mx-auto ">
          <div className={myMontserrat.className}>
            <div className="custom_breadcrumb">
              <BreadCrumb model={items} home={home} />
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <h2 className={`${myMontserrat.className} text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold`}>
                Discussion Details
              </h2>
              <Link
                href="/website/messageboard"
                className="bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
              >
                Back to All Discussions
              </Link>
            </div>

            <div className="xl:mt-[2.604vw] mt-[40px]">
              <div className="bg-[#fff] rounded-[24px] xl:rounded-[1.250vw] xl:p-[1.667vw] p-[30px] relative">
                <div className="absolute -top-5 right-5">
                  <div className="bg-[#F6EAEB] text-[#A93439] text-[16px] xl:text-[0.938vw] font-semibold px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full">
                    <i className="austin-pin-circle  text-[20px] text-[#A93439] mr-1"></i>{" "}
                    Pinned Topic
                  </div>
                </div>
                <div className="xl:space-y-[1.25vw] space-y-[15px]">
                  <div className="flex justify-between items-center flex-wrap">
                    <div className="flex gap-[20px] xl:gap-[1.042vw] mb-[10px] xl:mb-[0px]">
                      <div>
                        <Image
                          src={"/assets/images/svg/active_user.svg"}
                          width={70}
                          height={70}
                          alt="active_user"
                          className="h-[70px] w-[70px] xl:h-[3.646vw] xl:w-[3.646vw] "
                        />
                      </div>
                      <div>
                        <h6 className="text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold">
                          Devon Lane
                        </h6>
                        <p className="text-[#9CA1AB] text-[16pxpx] xl:text-[0.833vw] font-normal">
                          Mon Sep 25, 2023 9:41 am
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-[20px] xl:gap-[1.042vw] text-[#9CA1AB]">
                      <div className="font-light xl:text-[0.833vw] text-[16px] ">
                        {" "}
                        <i className="austin-note  text-[20px]  mr-3"></i>516
                        comments
                      </div>
                      <div className="font-light xl:text-[0.833vw] text-[16px] ">
                        {" "}
                        <i className="austin-eye  text-[20px]  mr-3"></i> 216 Views
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h6 className="text-[#374151] text-[30px] xl:text-[1.667vw] font-semibold leading-6">
                      Council Meeting Schedule 9/21/23
                    </h6>
                  </div>
                  <div className={`${myInter.className} flex xl:gap-[0.625vw] gap-[16px] divide-x divide-[#BECDE3]`}>
                    <p className="text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]">
                      Category: Council
                    </p>

                    <div>
                      <div className="flex gap-2 ml-5">
                        <Link
                          href=""
                          className="bg-[#E8EBF0] rounded-md text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]"
                        >
                          #Tag 1
                        </Link>
                        <Link
                          href=""
                          className="bg-[#E8EBF0] rounded-md text-[#62789B] text-[14px] xl:text-[0.729vw] font-medium px-[12px] xl:px-[0.625vw] py-[6px] xl:py-[0.313vw]"
                        >
                          #Tag 2
                        </Link>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#4B586E9E] text-[18px] xl:text-[1.042vw] font-normal xl:leading-[1.40vw] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Mattis nunc vel sed
                    mauris tempor turpis urna. Sed enim vel tincidunt ut lectus
                    aenean. Enim venenatis volutpat massa eu consectetur amet
                    commodo. Et diam mi id aliquam. In at enim laoreet aliquam id
                    accumsan arcu aliquam urna.<br></br>
                    Viverra et bibendum sed eu. Elit donec arcu ipsum arcu.
                    Ultricies sit semper elit ultricies pulvinar. Turpis erat ac
                    ultricies feugiat cursus rhoncus duis. Vitae facilisi faucibus
                    duis id. Libero imperdiet condimentum id sed varius pharetra
                    pellentesque. Porttitor consectetur pellentesque posuere morbi.
                    Pellentesque tellus maecenas aenean quis hac nisl. Vel ut tempor
                    senectus habitant tellus nullam dui. Diam enim tincidunt ac
                    nulla enim purus. Auctor netus mauris eget risus.
                  </p>

                  <div className="flex gap-[20px] xl:gap-[1.25vw]">
                    <Link
                      href=""
                      className="text-[#4B7E73] text-[18px] xl:text-[1.042vw] font-light"
                    >
                      #Meeting
                    </Link>
                    <Link
                      href=""
                      className="text-[#4B7E73] text-[18px] xl:text-[1.042vw] font-light"
                    >
                      #Record
                    </Link>
                    <Link
                      href=""
                      className="text-[#4B7E73] text-[18px] xl:text-[1.042vw] font-light"
                    >
                      #Lorem Ipsum
                    </Link>
                  </div>

                  <div>
                    <h6 className="text-[#374151] text-[18px] xl:text-[1.042vw] font-medium">
                      Medias
                    </h6>

                    <div className="mt-[8px] xl:mt-[0.417vw]">
                      <div className="grid grid-cols-12 md:grid-cols-12 xl:grid-cols-12 gap-[24px] xl:gap-[1.250vw]">
                        <div className="xl:col-span-9 col-span-12">
                          <div className="flex gap-[24px] xl:gap-[1.25vw]">
                        <div>
                          <div className="relative">
                            <Image
                              src={"/assets/images/media1.png"}
                              width={160}
                              height={102}
                              alt="active_user"
                              className="h-[100px] w-full xl:h-[6.25vw] xl:w-full "
                            />
                            <div className="absolute top-[40%] flex justify-center w-full">
                            <Link href="" onClick={() => setbordmeetingviewpopup(true)}>
                                {" "}
                                <Image
                                  src={"/assets/images/svg/play-circle.svg"}
                                  width={35}
                                  height={35}
                                  alt="playicon"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                              Council Meeting{" "}
                            </p>
                            <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                              Record - 9/21/23
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <Image
                              src={"/assets/images/media1.png"}
                              width={160}
                              height={102}
                              alt="active_user"
                              className="h-[100px] w-full xl:h-[6.25vw] xl:w-full "
                            />
                            <div className="absolute top-[40%] flex justify-center w-full">
                              <Link href="" onClick={() => setbordmeetingviewpopup(true)}>
                                {" "}
                                <Image
                                  src={"/assets/images/svg/play-circle.svg"}
                                  width={35}
                                  height={35}
                                  alt="playicon"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                              Council Meeting{" "}
                            </p>
                            <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                              Record - 9/21/23
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <Image
                              src={"/assets/images/doc_img.png"}
                              width={160}
                              height={102}
                              alt="active_user"
                              className="h-[100px] w-full xl:h-[6.25vw] xl:w-full "
                            />
                          </div>
                          <div className="mt-2">
                            <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                              Council Meeting{" "}
                            </p>
                            <p className="text-[#9CA1AB] text-[13px] xl:text-[0.729vw] font-light leading-tight">
                              Record - 9/21/23
                            </p>
                          </div>
                        </div>
                          </div>
                        </div>
                        <div className="xl:col-span-3 col-span-12 place-self-end">
                        <div className="flex justify-end gap-[14px] xl:gap-[0.833vw]">
                          <Link
                            href=""
                            className="bg-[#F5F6F8] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full"
                          >
                            <i className="austin-like  text-[20px] text-[#1B3865] mr-2"></i>
                            122 likes
                          </Link>
                          <Link
                            href=""
                            className="bg-[#F5F6F8] text-[#4B586E] text-[16px] xl:text-[0.833vw] font-medium px-[16px] xl:px-[0.833vw] py-[8px] xl:py-[0.417vw] rounded-full"
                          >
                            <i className="austin-share  text-[18px] text-[#1B3865] mr-2"></i>
                            Share
                          </Link>
                        </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                 
                </div>
              </div>
            </div>

            <div className="xl:mt-[2.604vw] mt-[40px]">
              <div className="bg-[#fff] rounded-[24px] xl:rounded-[1.250vw] xl:p-[1.667vw] p-[30px] relative xl:space-y-[1.25vw] space-y-[15px]">
                <div className="flex flex-wrap justify-between items-center">
                  <h2 className="text-[#374151] text-[20px] xl:text-[1.25vw] font-semibold">
                    Comments
                  </h2>
                  <div className="chat_dropdown">
                    <Dropdown
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select Order by"
                      className="w-[200px] xl:w-[18.229vw]"
                    />
                  </div>
                </div>
                <div>
                  <div className="custom_editor relative">
                    <Editor
                      value={text}
                      onTextChange={(e) => setText(e.htmlValue)}
                      style={{ height: "6.083vw" }}
                    />
                    <Link href="" className="absolute bottom-2 right-3">
                      <i className="austin-mic text-[#4B586E] text-[22px]"></i>
                    </Link>
                  </div>
                  <div className={`${myInter.className} flex justify-end xl:mt-[0.833vw] mt-[16px]`}>
                    <Link
                      href=""
                      className="bg-[#4F6484] rounded-md text-[#fff] text-[14px] xl:text-[0.833vw] font-normal px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5"
                    >
                      <i className="austin-pluse text-[#fff] text-[20px] mr-2"></i>
                          Add Comment
                    </Link>
                  </div>
                </div>

                <Comments
                data={commentsdata}
                />
              </div>
            </div>
            <div className="">
              <div >
                  <RelatedItems/>
              </div>
            </div>
          </div>
        </div>
        <Bordmeetingview
            visible={bordmeetingviewpopup}
            onHides={() => setbordmeetingviewpopup(false)}
          />
      </div>
      </Layout>
    </>
  );
}
