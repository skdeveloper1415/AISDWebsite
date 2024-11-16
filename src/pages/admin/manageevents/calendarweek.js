import React, { useState,useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from "moment";

export default function Index(props) {
    const {activeTab,setActiveTab,events, setEvents,fetchsingleEvent,year} = props;
    const [updateMonth, setUpdateMonth] = useState(false)
    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    const getFullDetials = (event) => {
        fetchsingleEvent(event.event.id)
    }

    const eventRender = (eventd) => {
        const { event, timeText } = eventd
        console.log('event',event, timeText)
        let formattedTime
        const time = event.title.split('[start_time]')
        if(!event.allDay){
          console.log('even',time)
          formattedTime = event.start.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true, // To use 12-hour format
          });
      
          formattedTime = formattedTime.replace('p.m.', 'PM').replace('a.m.', 'AM');
         
        }
  
          return (
            <div style={{display: 'flex', flexDirection: 'column', rowGap: '5px', textWrap: 'wrap'}}>
              <div style={{fontWeight: '600'}}>{event.allDay ? 'All day' : formattedTime } </div>
              <div>{time.length == 1 ? event.title : time[2]}</div>
            </div>
          );
        };

    const currentYear = moment().format('YYYY')
    const firstDate = moment([year?.name ?? currentYear,activeTab]).format('YYYY-MM-DD');

    return (
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <TabList>
                <div className="grid grid-cols-12">
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 0
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Jan
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 1
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Feb
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 2
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Mar
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 3
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Apr
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 4
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                     May
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 5
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Jun
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 6
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Jul
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 7
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Aug
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 8
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Sep
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 9
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Oct
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 10
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                     Nov
                    </div>
                </Tab>
                <Tab>
                    <div
                    className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                            activeTab == 11
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px] dark:bg-[#EC4751] dark:border-[#AF1E27]"
                            : "text-[#9CA1AB] bg-[#F5F6F7] dark:bg-[#13161B] dark:text-[#AAA] dark:border-[#374151]"
                        }`}
                    >
                    Dec
                    </div>
                </Tab>
                </div>
            </TabList>
            <div>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        key={updateMonth}
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                        eventContent={eventRender}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>
                <TabPanel>
                <div className="full-calendar-sec full-calendar-week bg-white dark:bg-[#13161B] py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
                    <FullCalendar 
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek" 
                        initialDate={firstDate}
                        customButtons= {{
                            eventweek: {
                              text: 'Today',
                            }
                          }}
                        headerToolbar= {{
                            left: 'title',
                            center: '',
                            right: 'prev,eventweek,next',
                          }}
                        showNonCurrentDates= {true}
                        weekends= {true}
                        events={events}
                        editable={true}
                        eventClick={(e) => getFullDetials(e)}
                    />
                </div>
                </TabPanel>

            </div>
        </Tabs>
    );
}