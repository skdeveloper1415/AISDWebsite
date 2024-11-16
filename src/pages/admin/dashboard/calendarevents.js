import React, { useState, useEffect } from "react";
import { Montserrat } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPageMonths from "@/components/landingPageComponents/months"
import LandingPageEventList from "@/components/landingPageComponents/eventList"
import fetchAPI from "@/service/api/fetchAPI";
import moment from "moment";

const myMontserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function CalendarEventsAdmin() {
  const [events, setEvents] = useState([]);
  const d = new Date().getMonth();
  const [activeMonth, setActiveMonth] = useState((d + 1).toString());
  const [isEventsLoaded, setIsEventsLoaded] = useState(false);

  const yearList = [
    { name: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 },
    { name: new Date().getFullYear() - 1, value: new Date().getFullYear() - 1 },
    { name: new Date().getFullYear(), value: new Date().getFullYear() },
    { name: new Date().getFullYear() + 1, value: new Date().getFullYear() + 1 },
  ];

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [selectedYear, setSelectedYear] = useState(yearList[2].value);

  const settings = {
    // dots: true,
    fade: true,
    nextArrow: false,
    prevArrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    afterChange: (currentSlide) => {
      setSelectedYear(yearList[currentSlide].value)
    },

  };


  const monthChange = (monthCount) => {
    setActiveMonth(monthCount)
  }

  const formatTime = (timeToFormat) => {
    const [hours, minutes] = timeToFormat.split(':');
    const formattedTime = `${(hours % 12) || 12}:${minutes} ${(hours >= 12) ? 'PM' : 'AM'}`;
    return formattedTime;
  }



  const featchEvents = async () => {

    setIsEventsLoaded(false)
    let payload = {
      year: selectedYear,
      month: activeMonth
    }
    const response = await fetchAPI('/event/list', 'POST', payload, 'application/json')

    if (response && response.rows.length > 0) {
      const updatedResponse = response.rows ? response.rows.map((item) => {
        const eventDate = moment(item.date).format('DD');
        const eventDay = moment(item.date).format('DD');

        const d = new Date(item.date);
        let day = weekday[d.getDay()];

        return {
          title: item.title,
          start: item.start_time,
          end: item.end_time,
          date: eventDate,
          day: day,
          notes: item.meeting_notes,
          backgroundColor: item.categoryDetails ? item.categoryDetails.bg_color_code : '#DEF7EC',
          borderColor: item.categoryDetails ? item.categoryDetails.color_code : '#DEF7EC',
          textColor: item.categoryDetails ? item.categoryDetails.color_code : '#046C4E',
          id: item.id,
          
          allDay: item.is_all_day,
          location: item.is_online === 1 ? 'Online' : item.location,
          time: item.is_all_day === 1 ? 'All Day' : `${formatTime(item.start_time)}-${formatTime(item.end_time)}`,
          color: item.categoryDetails?.color_code,
        }
      }) : []
      setIsEventsLoaded(true)
      setEvents([...updatedResponse])
    } else {
      setIsEventsLoaded(true)
      setEvents([])
    }


  };


  useEffect(() => {
    featchEvents();
  }, [selectedYear, activeMonth]);


  return (
    <section className="pt-[20px] xl:pt-[1.18vw] pb-[20px] xl:pb-[1.75vw] text-[#374151] calendar-slick-slider">
      <div className='xl:max-w-[88.3025vw] mx-auto px-[20px] xl:px-[0] grid grid-cols-12 gap-[30px] xl:gap-[5.75vw] relative'>
        <div className='col-span-12 xl:col-span-7 xl:order-last'>
          <Slider {...settings} className="calendar-slick-slider">
            {
              yearList.map((year, index) => {
                return (
                  <div className="inline-block" key={index}>
                    <span className='text-center dark:text-[#F8F7F4] text-[14px] xl:text-[0.730vw] mb-[6px] xl:mb-[0.365vw] inline-block min-w-[140px]'>{year.value}</span>
                    <LandingPageMonths
                      monthChange={monthChange}
                      activeMonth={activeMonth}
                      monthClass={'admin-calendar-months'}
                    />
                    <LandingPageEventList
                      events={events}
                      isEventsLoaded={isEventsLoaded}
                    />
                  </div>
                )
              })
            }
          </Slider>
        </div>

      </div>
    </section>
  )
}
