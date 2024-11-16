import React, { useState, useEffect } from "react";
import { Montserrat } from '@next/font/google';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetchAPI from "@/service/api/fetchAPI";
import moment from "moment";
import LandingPageMonths from "@/components/landingPageComponents/months"
import LandingPageEventList from "@/components/landingPageComponents/eventList"
const myMontserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function CalendarEvents() {
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);
  const d = new Date().getMonth();
  const [activeMonth, setActiveMonth] = useState((d + 1).toString());
  const [isEventsLoaded, setIsEventsLoaded] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);


  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const yearList = [
    { name: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 },
    { name: new Date().getFullYear() - 1, value: new Date().getFullYear() - 1 },
    { name: new Date().getFullYear(), value: new Date().getFullYear() },
    { name: new Date().getFullYear() + 1, value: new Date().getFullYear() + 1 },
  ];

  const [selectedYear, setSelectedYear] = useState(yearList[2].value);

  const categoryClicked = (categoryId) => {
    let categoryArray = [...selectedCategories]
    if (categoryArray.includes(categoryId)) {
      categoryArray = categoryArray.filter(function (item) {
        return item !== categoryId
      })
    }
    else {
      categoryArray.push(categoryId)
    }
    setSelectedCategories(categoryArray)
  }
  const featchCategories = async () => {
    // This is temparary solution
    setTimeout(async () => {
      const response = await fetchAPI('/eventcategory', 'GET', '', 'application/json')
      console.log("response", response)
      if (response && response?.rows?.length > 0) {
        const updatedResponse = response.rows ? response.rows.map((item) => {
          return {
            id: item.en_category_id,
            title: item.title,
            color: item.color_code
          }
        }) : []
        setCategories([...updatedResponse])
      } else {
        setCategories([])
      }
    }, 1000);
  };

  const formatTime = (timeToFormat) => {
    const [hours, minutes] = timeToFormat.split(':');
    const formattedTime = `${(hours % 12) || 12}:${minutes} ${(hours >= 12) ? 'PM' : 'AM'}`;
    return formattedTime;
  }
  const featchEvents = async () => {
    setIsEventsLoaded(false)
    let payload = {
      year: selectedYear,
      // search: '',
      // date: '',
      category: selectedCategories,
      month: activeMonth
    }
    const response = await fetchAPI('/event/list', 'POST', payload, 'application/json')

    if (response && response.rows.length > 0) {
      const updatedResponse = response.rows ? response.rows.map((item) => {
        const eventDate = moment(item.date).format('DD');

        const d = new Date(item.date);
        let day = weekday[d.getDay()];

        return {
          title: item.title,
          start: item.start_time,
          end: item.end_time,
          date: eventDate,
          day: day,
          notes: item.meeting_notes,
          backgroundColor: item.categoryDetails  ? item.categoryDetails.bg_color_code : '#DEF7EC',
          borderColor: item.categoryDetails  ? item.categoryDetails.color_code : '#DEF7EC',
          textColor: item.categoryDetails  ? item.categoryDetails.color_code : '#DEF7EC',
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

  const checkIsSelected = (id) => {
    let isSelected = selectedCategories.find(o => o === id)
    return isSelected ? true : false;
  }

  useEffect(() => {
    featchEvents();
  }, [selectedYear, activeMonth, selectedCategories]);

  useEffect(() => {
    featchCategories();
  }, []);

  return (
    <section className="pt-[60px] xl:pt-[4.18vw] pb-[70px] xl:pb-[5.75vw] text-white">
      <div className='xl:max-w-[88.3025vw] mx-auto px-[20px] xl:px-[0] grid grid-cols-12 gap-[30px] xl:gap-[5.75vw] relative'>
        <div className='col-span-12 xl:col-span-7 xl:order-last'>

          <Slider {...settings} className="calendar-slick-slider">
            {
              yearList.map((year, index) => {
                return (
                  <div className="inline-block" key={index}>
                    <span className='text-center text-[14px] xl:text-[0.730vw] mb-[20px] xl:mb-[1.042vw] inline-block min-w-[140px]'>{year.value}</span>
                    <LandingPageMonths
                      monthChange={monthChange}
                      activeMonth={activeMonth}
                      monthClass={''}
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
          <Link href="/calendar" className="text-white text-[14px] xl:text-[0.833vw] ml-[24px] xl:mt-[1.75vw] mt-[20px] xl:mt-[1.5vw] inline-block">
            <span className="border-b border-[#fff]">Show all</span>
            <i className="autinisd-arrow-right-line text-[14px] ml-[12px] xl:ml-[1.25vw]"></i>
          </Link>
        </div>
        <div className='col-span-12 xl:col-span-5'>
          <h2 className={`${myMontserrat.className} text-[36px] xl:text-[2.92vw] leading-[1.3] mb-[20px] xl:mb-[1.67vw]`}>
            <span className="font-extrabold">Calendar</span> of Events
          </h2>
          <h5 className='text-[14px] xl:text-[0.833vw] mb-[8px] xl:mb-[0.525vw]'>Categories:</h5>
          <div className='flex flex-wrap gap-[8px] xl:gap-[0.525vw] mb-[20px] xl:mb-[1.67vw]'>
            {
              categories.map((item) => {
                let isSelected = checkIsSelected(item.id);
                return (
                  <span onClick={() => categoryClicked(item.id)} className={`bg-[${isSelected ? '#982E33' : '#263040'}] cursor-pointer border-t border-[#BC6D46] rounded pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw]`}>{item.title}</span>
                  // <span className={`bg-[#263040] border-t border-[${item.color}] rounded pt-[8px] xl:pt-[0.417vw] pb-[8px] xl:pb-[0.417vw] px-[14px] xl:px-[0.730vw] text-[14px] xl:text-[0.730vw]`}>{item.title}</span>
                )
              })
            }
          </div>
          <h5 className='text-[#6e7b8e] text-[14px] xl:text-[0.833vw] mb-[20px] xl:mb-[1.67vw] underline underline-offset-4'>How to Subscribe to the Austin ISD Calendar of Events?</h5>
          <p className='text-[12px] xl:text-[0.625vw] mb-[20px] xl:mb-[1.67vw]'>Austin ISD is dedicated to preparing your child for college, career, and life. They provide a safe, academically challenging   ISD is dedicated to preparing your cge, career, and life. They provide a safe, academic</p>
          <Link href="/calendar" className='inline-flex items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded py-[6px] xl:py-[0.365vw] px-[8px] xl:px-[0.417vw] text-[14px] xl:text-[0.730vw] text-white ease-linear duration-200'>
            Open Full Calendar
            <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
          </Link>

        </div>
      </div>
    </section>
  )
}
