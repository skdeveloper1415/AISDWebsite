import React  from 'react'
import Link from 'next/link'
import { Montserrat } from "@next/font/google";
import SocialMediaCard from '@/components/website/socialmedia';

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});
export default function SocialMedia() {


    const SocialMediaCardData = [
        {
            id: 1,
            image:'aisdimg3.jpg',
            date:'Sep, 26',
            heading: 'Board Names Matias Segura as Austin ISD Superintendent ',
            title:'',
            description:'Dear Austin ISD community, At the January 25 voting meeting of the Austin ISD Board of Trustees, the board hired Matias Segura as the new Austin ISD Superintendent, approving his contract with a unanimous vote. This is an important moment for our district'
        },
        {
            id: 2,
            image:'aisdimg4.png',
            date:'Sep, 26',
            heading: 'Austin ISD Board appoints Matias Segura as first homegrown superintendent',
            title:'',
            description:'The Austin ISD School Board of Trustees appointed Matias Segura as the district’s superintendent at its regular board voting meeting Thursday. Seguras deep roots in the Austin ISD community, as both a former student and the son of a longtime teacher, make'
        },
        {
            id: 3,
            image:'aisdimg5.jpg',
            date:'Sep, 26',
            heading: 'Austin ISD Students Participate in "We Love Austin Music Week" ',
            title:'',
            description:'Austin ISD students are participating in “We Love Austin Music Week”, an initiative by the non-profit Texas Cultural Trust.  TCT is an advocate for arts in education. Several schools in the district are participating in the week-long event. WLAM provides'
        },
        {
            id: 4,
            image:'aisdimg6.png',
            date:'Sep, 26',
            heading: 'Austin ISD Students Are Ready to Use Their Voices in the Texas Primary',
            title:'',
            description:'With the Texas primary voter registration deadline fast approaching on February 5, Eli Eskew, an 18-year-old Senior at Crockett Early College High School, is not wasting any time. On Friday, January 19, Eskew seized the opportunity to register to vote at a'
        },
        {
            id: 5,
            image:'aisdimg7.jpg',
            date:'Sep, 26',
            heading: 'Repurposing update: Rosedale to temporarily open as law enforcement training site',
            title:'',
            description:'The former Rosedale School campus is set to temporarily open its door again as a training facility for law enforcement officials, with a goal of training as many as 750 officers in the first phase.  Training agencies will include the Austin ISD Police'
        },
        {
            id: 6,
            image:'aisdimg8.png',
            date:'Sep, 26',
            heading: 'Austin ISD works toward reducing budget deficit for next fiscal year',
            title:'',
            description:'As we step into the new semester, lets take a moment to go over our safety guidelines together, ensuring a safe and enjoyable continuation of the school year for all students and staff. Keeping campuses secure: Access to all doors at our schools is'
        },
    ]

    return (
        <div className="z-[2] relative pt-[64px] xl:pt-[3.333vw] px-5 md:px-[120px] xl:px-[6.25vw] pb-[64px] xl:pb-[3.333vw]">
            <div className="flex flex-wrap items-center justify-between mb-[40px] xl:mb-[2.083vw]">
                <div className={`${myMontserrat.className} flex items-center gap-4`}>
                    <div className="text-[#374151] text-3xl md:text-[46px] xl:text-[2.917vw] leading-[1.2]">
                        Social <span className='font-extrabold'>Media</span>
                    </div>
                </div>
                <div className="">
                    <Link
                        href={"/viewmoresocialmedia"}
                        className="flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-2 md:py-[12px] xl:py-[0.625vw] px-2 md:px-[20px] xl:px-[1.042vw] text-xs md:text-[16px] xl:text-[0.833vw] text-white"
                    >
                        View More{" "}
                        <i className="austin-arrow-line-right  ml-[8px] xl:ml-[0.417vw]"></i>
                    </Link>
                </div>
            </div>
            <div className="col relative">
                    <SocialMediaCard 
                        data={SocialMediaCardData}
                        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[32px] xl:gap-[1.667vw]"
                    />
            </div>
            
        </div>
    )
}
