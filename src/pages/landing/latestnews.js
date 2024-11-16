import Link from 'next/link'
import React from 'react'
import { Montserrat } from "@next/font/google";
import LastestNewsCard from '@/components/website/lastestnews';

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function LatestNews() {
    const LastestCardData = [
        {
            id: 1,
            image:'austinnews.png',
            date:'September, 26',
            heading: 'Why Choose Austin ISD?',
            title:' Montserrat Garibay',
            description:'Austin ISD is committed to ensuring your child is college, career, and life ready. Every day and in every classroom from Pre-K to 12th grade, we offer a safe and healthy school environment that is academically rigorous and supported by a nationally-recognized focus on social-emotional learning. Were ready - are you?'
        },
        {
            id: 2,
            image:'aisdimg4.png',
            date:'September, 26',
            heading: 'Calendar of Events Looking for an event?',
            title:' Montserrat Garibay',
            description:'Austin ISD hosts a variety of events, meetings, educational opportunities, happenings, and more throughout the district. There is something for everyone: students, families, partners, and the community. Join us for an event today!'
        },
        {
            id: 3,
            image:'aisdimg2.png',
            date:'September, 26',
            heading: 'Lets Talk Have a question? We are here to help',
            title:' Montserrat Garibay',
            description:'Austin ISD Cares Team uses the Lets Talk platform to answer questions more quickly and efficiently in order to provide the best customer service. We put you in touch with an actual person and subject matter expert. We answer questions for everyone: families, students, staff, and the community!.'
        }
    ]

    return (
        <div>
            <div className="z-[1] relative mb-[39px] xl:mb-[2.031vw] rounded-[24px] xl:rounded-[1.250vw] p-5 md:pl-[41px] xl:pl-[7.344vw] md:pr-[114] xl:pr-[5.938vw]">
                <div className="flex flex-col md:flex-row items-start lg:items-center md:gap-[67px] xl:gap-[3.49vw] space-y-5 md:space-y-0">
                    <div className="col">
                        <div className={myMontserrat.className}>
                            <div className="text-[#374151] text-3xl md:text-[46px] xl:text-[2.396vw] leading-[1.2]">
                                Latest
                            </div>
                            <div className="text-[#374151] text-3xl md:text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                                News
                            </div>
                        </div>
                        <div className="mt-[24px]">
                            <Link
                                href={"/morenews"}
                                className="bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-2 md:py-[12px] xl:py-[0.625vw] px-2 md:px-[20px] xl:px-[1.042vw] inline-block text-xs md:text-[16px] xl:text-[0.833vw] text-white"
                            >
                                More News{" "}
                                <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col ">
                        <div className='bg-[#FFFFFF] rounded-[36px] xl:rounded-[1.979vw] p-[40px] xl:p-[2.083vw] '>
                            <LastestNewsCard 
                                data={LastestCardData}
                                className="grid grid-cols-1 xl:grid-cols-3 gap-[32px] xl:gap-[1.667vw] z-[2] relative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
