import Layout from "@/components/layout/layout";
import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import Link from "next/link";
import MoreNewsCard from "@/components/website/morenews";
import SocialMediaCard from "@/components/website/socialmedia";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});


export default function Index() {

    const SocialMediaCardData = [
        {
            id: 1,
            image: 'aisdimg11.jpg',
            date: 'September, 26',
            heading: 'Board Names Matias Segura as Austin ISD Superintendent',
            title: '',
            description: 'Dear Austin ISD community, At the January 25 voting meeting of the Austin ISD Board of Trustees, the board hired Matias Segura as the new Austin ISD Superintendent, approving his contract with a unanimous vote. This is an important moment for our district'
        },
        {
            id: 2,
            image: 'aisdimg2.png',
            date: 'September, 26',
            heading: 'Repurposing update: Rosedale to temporarily open as law enforcement training site',
            title: '',
            description: 'The former Rosedale School campus is set to temporarily open its door again as a training facility for law enforcement officials, with a goal of training as many as 750 officers in the first phase.  Training agencies will include the Austin ISD Police'
        },
        {
            id: 3,
            image: 'aisdimg3.jpg',
            date: 'September, 26',
            heading: 'Austin ISD works toward reducing budget deficit for next fiscal year',
            title: '',
            description: 'The budget process for the 2024-25 school year has begun!'
        },
        {
            id: 4,
            image: 'aisdimg4.png',
            date: 'September, 26',
            heading: 'Eyes on Safety: A walkthrough of Austin ISDs security protocols',
            title: '',
            description: 'As we step into the new semester, lets take a moment to go over our safety guidelines together, ensuring a safe and enjoyable continuation of the school year for all students and staff. Keeping campuses secure: Access to all doors at our schools is'
        },
        {
            id: 5,
            image: 'aisdimg5.jpg',
            date: 'September, 26',
            heading: 'All Austin ISD classes, offices delayed two hours Jan. 17 ',
            title: '',
            description: 'Dear Austin ISD community, Due to ongoing freezing temperatures, all Austin ISD classes will be on a two hour delay Wednesday, Jan. 17. All district offices will also be on a two hour delay. All after-school and/or outdoor activities will be brought indoors'
        },
        {
            id: 6,
            image: 'aisdimg6.png',
            date: 'September, 26',
            heading: 'All Austin ISD classes, offices delayed two hours Tuesday, Jan. 16',
            title: '',
            description: 'Dear Austin ISD community, To ensure the safety of our students and staff, all Austin ISD classes will be on a two hour delay Tuesday, Jan. 16. All district offices will also be on a two hour delay. All after-school and/or outdoor activities will be brought'
        },
        {
            id: 7,
            image: 'aisdimg7.jpg',
            date: 'September, 26',
            heading: 'Past Due Special Education Evaluations Decreased by 82% Over Last Year ',
            title: '',
            description: 'Roughly a year into implementing our comprehensive plan to address the backlog of Special Education evaluations to better meet the needs of students with signs that the plan is working.  By the Numbers: The district'
        },
        {
            id: 8,
            image: 'aisdimg8.png',
            date: 'September, 26',
            heading: 'Austin ISD community invited to Superintendent Lone Finalist Public Forums',
            title: '',
            description: 'The Austin ISD community will have an opportunity to meet and ask questions at two public forums with Superintendent Lone Finalist Matias Segura next week. '
        },
        {
            id: 9,
            image: 'aisdimg5.jpg',
            date: 'September, 26',
            heading: 'All Austin ISD classes, offices delayed two hours Jan. 17 ',
            title: '',
            description: 'Dear Austin ISD community, Due to ongoing freezing temperatures, all Austin ISD classes will be on a two hour delay Wednesday, Jan. 17. All district offices will also be on a two hour delay. All after-school and/or outdoor activities will be brought indoors'
        },
     
    ]

    return (
        <>
            <Layout pageClass="pg-home" pageTitle="Home">
                <div className="mb-[24px] xl:mb-[1.25vw] xl:pt-[2.344vw] pt-10 xl:px-[5.990vw] px-[100px]">
                    <div className="flex justify-between items-center mb-[39px] xl:mb-[2.031vw]">
                        <div className={`${myMontserrat.className} flex items-center gap-2`}>
                            <div className="text-[#374151] text-[46px] xl:text-[2.396vw] leading-[1.2]">
                                Social
                            </div>
                            <div className="text-[#374151] text-[56px] xl:text-[2.917vw] leading-[1.2] font-extrabold">
                                Media
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="bg-[#DBE1EA] hover:bg-[#762428] hover:text-white rounded-md text-[#1F3F71] text-[14px] xl:text-[0.833vw] font-medium px-[20px] xl:px-[1.042vw] py-[16px] xl:py-[0.733vw] leading-5 ease-linear duration-200"
                        >
                            Back to Home
                        </Link>
                    </div>
                    <div className=" ">
                    <SocialMediaCard 
                        data={SocialMediaCardData}
                        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[32px] xl:gap-[1.667vw] z-[2] relative"
                    />

                    </div>
                </div>

            </Layout>
        </>
    );
}
