import React, { useState, useEffect } from "react";
import { Montserrat } from "@next/font/google";
import { ScrollPanel } from 'primereact/scrollpanel';
import { useRouter } from "next/router";
import Image from 'next/image';
import ViewEvent from "@/components/popup/viewevent"
import fetchAPI from '@/service/api/fetchAPI'

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function Index(props) {

    const { events, isEventsLoaded } = props;
    const [ViewEventpopup, setViewEventpopup] = useState(false);
    const router = useRouter();
    const [eventDetails, setEventDetails] = useState({})

    const closeViewEventPopup = () => {
        setViewEventpopup(false)
    }


    const fetchsingleEvent = async (id) => {
        console.log("getting", id)
        try {
            const response = await fetchAPI(`/event/${id}`, 'GET', {}, 'application/json')
            if (response) {
                setEventDetails(response)
                setViewEventpopup(true)
            }

        } catch (error) {
            console.log("error", error);
        }
    }

    const removeHtmlTags = (str) => {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        return doc.body.textContent || "";
    };

    useEffect(() => {

    }, [])
    return (
        <>
            <div className='grid gap-[6px] xl:gap-[0.365vw]'>
                {
                    isEventsLoaded === true ?
                        events.length > 0 ?
                            <ScrollPanel style={{ width: '100%' }} className="custombarscroll custombaradmin custombarwebsite">
                                {events.map((eventData) => {
                                    return (

                                        <div onClick={() => fetchsingleEvent(eventData.id)} className={`px-[20px] xl:px-[1.67vw] py-[12px] cursor-pointer xl:py-[1.04vw]  bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg mb-[20px] xl:mb-[1.56vw] last:mb-0`}>
                                            <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                                                <div className={`${router.pathname.startsWith('/admin') ? 'xl:col-span-8' : 'xl:col-span-9'} col-span-12 space-y-[4px] xl:space-y-[0.265vw]  grid items-center slick-slider-content`}>
                                                    <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.875vw] font-bold text-[#FFFFFF] text-heading-wrapping`}>{eventData.title}</h3>
                                                    {/* <div className="max-h-50 overflow-y-auto text-[13px] xl:text-[0.730vw] font-light" dangerouslySetInnerHTML={{ __html: eventData.notes }}></div> */}
                                                    <p className="text-[#FFFFFF] xl:text-[0.729vw] font-light text-wrapping text-sm text-ellipsis overflow-hidden min-w-[20px]">
                                                        {removeHtmlTags(eventData.notes)}.{" "} </p>
                                                    {/* <p className='text-[13px] xl:text-[0.730vw] font-light'>{eventData.notes}</p> */}
                                                </div>
                                                <div className={`${router.pathname.startsWith('/admin') ? 'xl:col-span-4' : 'xl:col-span-3'} col-span-12  flex items-center`}>
                                                    <div className='w-[58px] xl:w-[3.021vw] text-center flex flex-col justify-center pr-[10px] xl:pr-[0.833vw] border-[#E5E7EB] border-r'>
                                                        <span className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] text-[#9CA1AB] font-extrabold leading-[1] block mb-[8px] mb-[0.417vw]`}>{eventData.day}</span>
                                                        <b className={`${myMontserrat.className} text-[16px] xl:text-[1.04vw] text-[#9CA1AB] font-extrabold leading-[1] block`}>{eventData.date}</b>
                                                    </div>
                                                    <div className='w-[100%] flex flex-col justify-center pl-[10px] xl:pl-[0.833vw]'>
                                                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] mb-[8px] mb-[0.417vw] flex items-center`}>
                                                            {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                                                            <Image src="/assets/images/svg/clock.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' alt="clock"/>
                                                            {eventData.time}
                                                        </div>
                                                        <div className={`text-[14px] xl:text-[0.833vw] text-[#9CA1AB] flex items-center`}>
                                                            {/* <i className='austin-pin text-[16px] xl:text-[0.833vw] mr-[8px] mr-[0.417vw]'></i> */}
                                                            <Image src="/assets/images/svg/location.svg" width={'16'} height={'16'} className='mr-[8px] mr-[0.417vw]' alt="location"/>
                                                            {eventData.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* No data div */}
                                                {/* <div className='col-span-12 space-y-[4px] xl:space-y-[0.265vw]  grid items-center'>
                                        <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold text-center`}>No Data</h3>
                                    </div> */}
                                            </div>
                                        </div>
                                    )
                                })}

                            </ScrollPanel>
                            : <div className='px-[20px] xl:px-[1.67vw] py-[12px] xl:py-[1.04vw]  bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg'>
                                <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                                    <div className='col-span-12 space-y-[4px] xl:space-y-[0.265vw]  grid items-center'>
                                        <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold text-center text-[#fff]`}>No events found.</h3>
                                    </div>
                                </div>
                            </div>
                        : <div className='px-[20px] xl:px-[1.67vw] py-[12px] xl:py-[1.04vw]  bg-[#263040] border-l-[4px] border-[#982E33] rounded-lg'>
                            <div className='grid grid-cols-12 gap-[20px] xl:gap-[1.67vw]'>
                                <div className='col-span-12 space-y-[4px] xl:space-y-[0.265vw]  grid items-center'>
                                    <h3 className={`${myMontserrat.className} text-[14px] xl:text-[0.833vw] font-bold text-center text-[#fff]`}>Loading...</h3>
                                </div>
                            </div>
                        </div>
                }

            </div>

            <ViewEvent
                visible={ViewEventpopup}
                onHides={closeViewEventPopup}
                eventDetails={eventDetails}
            />

        </>
    );
}
