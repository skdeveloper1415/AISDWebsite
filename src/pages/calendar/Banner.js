import MultilingualEducation from "@/components/admin/popup/MultilingualEducation ";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useRouter } from "next/router";
import { ScrollPanel } from "primereact/scrollpanel";
import { Montserrat } from '@next/font/google';
import fetchAPI from "@/service/api/fetchAPI";
import moment from "moment";
import ViewEvent from "@/components/popup/viewevent"

const myMontserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})


export default function Banner() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [ViewEventpopup, setViewEventpopup] = useState(false);
  const [eventDetails, setEventDetails] = useState({})

  const [addMessageBoard, setAddMessageBoardMessageBoard] = useState(false);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const fetchsingleEvent = async (id) => {
    try {
      const response = await fetchAPI(`/event/${id}`, 'GET', {}, 'application/json')
      if (response) {
        setEventDetails(response)
        setViewEventpopup(true)
      }

    } catch (error) {

    }
  }

  const closeViewEventPopup = () => {
    setViewEventpopup(false)
  }

  const handleMultiple = (id) => {
    console.log("eventData.id", id)
    fetchsingleEvent(id);
    setViewEventpopup(true);
  };

  const removeHtmlTags = (str) => {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.body.textContent || "";
  };

  const formatTime = (timeToFormat) => {
    const [hours, minutes] = timeToFormat.split(':');
    const formattedTime = `${(hours % 12) || 12}:${minutes} ${(hours >= 12) ? 'PM' : 'AM'}`;
    return formattedTime;

  }

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  const featchEvents = async () => {
    let payload = {
      nextEvents: true,
      page:1,
      limit:12
    }
    const response = await fetchAPI('/event/list?next', 'POST', payload, 'application/json')

    if (response && response.rows.length > 0) {
      let newResponseArray = [];
      let sampleArray = [];
      for (let i = 0; i < response.rows.length; i++) {
        const todayDate = moment(response.rows[i].date).format('YYYY-MM-DD'); // Get today's date in 'YYYY-MM-DD' format
        const combinedDateTime = moment(`${todayDate}T${response.rows[i].start_time}`).format();
        const combinedEndDateTime = moment(`${todayDate}T${response.rows[i].end_time}`).format();
        const eventDate = moment(response.rows[i].date).format('DD');
        const m = moment(response.rows[i].date).format('M');
        const d = new Date(response.rows[i].date);
        let day = weekday[d.getDay()];
        let monthName = monthArray[m];

        let textWithoutHtml = removeHtmlTags(response.rows[i].meeting_notes);

        let dataArray = {
          title: response.rows[i].title,
          id: response.rows[i].id,
          start: response.rows[i].is_all_day == 1 ? todayDate : combinedDateTime,
          end: response.rows[i].is_all_day == 1 ? todayDate : combinedEndDateTime,
          backgroundColor: response.rows[i].categoryDetails  ? response.rows[i].categoryDetails.bg_color_code : '#DEF7EC',
          borderColor: response.rows[i].categoryDetails  ? response.rows[i].categoryDetails.color_code : '#DEF7EC',
          textColor: response.rows[i].categoryDetails ? response.rows[i].categoryDetails.color_code : '#046C4E',
          id: response.rows[i].id,
          allDay: response.rows[i].is_all_day,
          notes: textWithoutHtml,
          day: day,
          monthName: monthName,
          eventDate: eventDate,
          location: response.rows[i].is_online === 1 ? 'Online' : response.rows[i].location,
          time: response.rows[i].is_all_day === 1 ? 'All Day' : `${formatTime(response.rows[i].start_time)}-${formatTime(response.rows[i].end_time)}`,
        }
        sampleArray.push(dataArray);

        if (i % 3 === 0 || i === response.rows.length - 1) {

          if (i === response.rows.length - 1) {
            newResponseArray[0].push(dataArray);
          } else {
            newResponseArray.push(sampleArray);
          }

          sampleArray = [];
        }
        if(i > 10)
        {
          break;
        }
      }

      const reversedArray = newResponseArray.slice().reverse();
      setEvents(reversedArray)

    } else {
      setEvents([])
    }

  };

  useEffect(() => {
    featchEvents();
  }, []);

  return (
    <div className="mt-1">
      <div className="text-black">
        {/* <Head>
          <link rel="icon" href="/favicon.ico" />
          {router.pathname.startsWith("/website") &&
            websiteStylesheets.map((stylesheet, index) => (
              <link key={index} rel="stylesheet" href={stylesheet} />
            ))}
        </Head> */}
        <div>
          <div className="calendar-banner-sec xl:pt-[2.30vw] pt-[40px] pb-[15px] lg:pb-[20px] xl:pb-[3.225vw] relative min-h-[600px] overflow-hidden">
            <div className="xl:max-w-[88.3025vw] mx-auto xl:px-[0] px-[20px]">
              <div className="w-[100%] lg:w-[60%] xl:w-[45%] calendar-banner-left relative z-[1]">
                <div className="col">
                  <div className="breadCrumb flex justify-star gap-[16px] xl:gap-[0.833vw] mb-[20px] xl:mb-[1.042vw]">
                    <div className="col">
                      <Link href={"/"}>
                        <i className="austin-home"></i> Home
                      </Link>
                    </div>
                    <div className="col">
                      <i className="austin-arrow-open-right"></i>
                    </div>
                    <div className="col">Calendar of Events</div>
                  </div>
                </div>
                <div className="text-[#374151] text-[26px] lg:text-[40px] xl:text-[2.083vw] font-normal mb-4">
                  Calendar of
                  <span className="font-extrabold"> Events</span>
                </div>
                <p className="text-sm lg:text-base xl:text-[0.833vw] text-[#4B586E] mb-10 text-wrapping min-w-[400px] text-ellipsis overflow-hidden">
                AISD calendar enables users to organize and schedule events, appointments, and tasks, providing a visual representation of time, dates, and activities for efficient time management and planning
                </p>
                <h3 className="text-[20px] xl:text-[1.042vw] text-[#374151]">Next Events</h3>

                <Slider {...settings} className="custslick-slider calendar-slider">
                  {/* Slider 1 */}

                  {
                    events.map((item, index) => {
                      return (
                        <div>
                          <div className="flex flex-col gap-[12px] xl:gap-[0.625vw] mt-4" key={index}>
                            {
                              item.map((eventData, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="flex items-center shadow-sm bg-white border-l-4 border-[#982E33] rounded-lg"
                                  >
                                    <Link href="#" onClick={(e) =>handleMultiple(eventData.id)} className="w-[70%]">
                                      <div className="flex gap-2 flex-col py-4 px-6">
                                        <h4 className="text-[#374151] text-base xl:text-[0.833vw] font-bold min-h-[45px] text-wrapping text-ellipsis overflow-hidden">
                                         {eventData.title}.{" "}
                                        </h4>
                                        <p className="text-[#4B586E] font-light text-wrapping text-sm xl:text-[0.729vw] text-ellipsis overflow-hidden min-w-[250px]">
                                          {eventData.notes}.{" "}
                                        </p>
                                      </div>
                                    </Link>

                                    <div className="border-r border-[#E5E7EB] pr-[12px] xl:pr-[0.625vw]">
                                      <h4 className={`${myMontserrat.className} text-[#4B586E] font-extrabold text-center text-[14px] xl:text-[0.729vw]`}>
                                        {eventData.day} <span className="block text-base xl:text-[0.938vw] "> {eventData.eventDate}</span>{" "}
                                      </h4>
                                      <span className="text-[10px] text-[#4B586E] flex gap-2 justify-center">{eventData.monthName}</span>
                                    </div>
                                    <div className="w-[50%] md:w-[30%] flex flex-col gap-4 pl-[16px] xl:pl-[0.833vw] pr-[8px] xl:pr-[0.417vw]">
                                      <p className="text-[14px] xl:text-[0.833vw] text-[#4B586E] flex gap-2">
                                        <Image
                                          src="/assets/website/ico-clock.svg"
                                          width={17}
                                          height={17}
                                          alt="clock"
                                        />
                                        {eventData.time}
                                      </p>
                                      <p className="text-[14px] xl:text-[0.833vw] text-[#4B586E] flex gap-2">
                                        <Image
                                          src="/assets/website/ico-location.svg"
                                          width={17}
                                          height={17}
                                          alt="location"
                                        />
                                        {eventData.location}
                                      </p>
                                    </div>
                                  </div>
                                )
                              })
                            }

                          </div>
                        </div>
                      )
                    })
                  }

                  {/* Slider 1 end */}
                </Slider>
              </div>
              <div className="calendar-banner-right absolute right-[-55px] top-[-273px] hidden lg:block">
                <Image
                  src={"/assets/website/calendar-banner-image.png"}
                  alt="Calendar"
                  width="1545"
                  height="1146"
                  className="calendar-banner-image"
                />
              </div>
            </div>
          </div>
          <ViewEvent
            visible={ViewEventpopup}
            onHides={closeViewEventPopup}
            eventDetails={eventDetails}
          />
        </div>
      </div>
    </div>
  );
}
