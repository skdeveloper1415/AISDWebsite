import React from 'react'
import { Montserrat } from "@next/font/google";
import ReactEcharts from "echarts-for-react";
import Image from 'next/image';
import Link from 'next/link';

const myMontserrat = Montserrat({
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: "swap",
})

function OurStudents() {

  const option = {
    legend: {
      show:false,
    },
    title: {
      text: 'AISD',
      subtext: 'has a diverse\nstudent community',
      x: '45%', 
      y: '35%',
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 0, 1)",
      borderWidth:12,
      borderColor: "#E5E7EB",
      borderRadius: [100, 100, 100, 100],
      padding: [60, 50, 60, 40],
      textStyle: {
          fontWeight: '800',
          color:'#FFFFFF',
          fontSize: 38,
      },
      subtextStyle : {
        fontWeight: '500',
        color:'#FFFFFF',
        fontSize: 12,
      }
  },
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: ['30%', '85%'],
        center: ['50%', '50%'],
        roseType: 'area',
        labelLine: {
          length: 40,
          lineStyle : {
            color:'#8F9FB8',
          }
        },
        itemStyle: {
          borderRadius: 0,
          borderWidth: 4,
          borderColor: "#091426",
          borderCap: "round"
        },
        label: {
          fontSize:12,
          lineHeight:16,
          color:'#fff'
        },
        data: [
          {
            value: 14,
            name: 'Hispanic',
            subname: '55.0%',
            image: '/assets/admin/module1.png', 
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
                
              },
              fontSize: "28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#1F3F71"
            }
          },
          {
            value: 18,
            name: 'White',
            subname: '30.1%',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
              },
              fontSize:"28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#1F3F71"
            }
          },
          {
            value: 20,
            name: 'Black',
            subname: '6.6%',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
              },
              fontSize:"28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#1F3F71"
            }
          },
          {
            value: 22,
            name: 'Asian',
            subname: '4.5%',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
              },
              fontSize:"28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#1F3F71"
            }
          },
          {
            value: 24,
            name: 'Other',
            subname: '3.8%',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
              },
              fontSize:"28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#1F3F71"
            }
          },
          {
            value: 25,
            name: 'Special Education',
            subname: '13.4%',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
              },
              fontSize:"28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#35527F"
            }
          },
          {
            value: 28,
            name: 'Emergent Bilingual',
            subname: '28.2%',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
              },
              fontSize:"28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#35527F"
            }
          },
          {
            value: 30,
            name: 'Economically\nDisadvantaged',
            subname: '51.9%',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"16px",
                  color:"#F6EAEB"
                }
              },
              fontSize:"28px",
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#35527F"
            }
          },
          {
            value: 35,
            name: 'Composite SAT/ACT scores\n\nAustin ISD SAT scores exceeded the state\naverage; ACT scores exceeded both state and\n national averages.',
            subname: '1043',
            label: {
              show: true,
              formatter: function (params) {
                return params.data.subname + '\n' + '\n{a|' + params.name + '}';
              },
              rich: {
                a: {
                  fontWeight: 'normal',
                  fontSize:"12px",
                  color:"#F6EAEB"
                }
              },
              fontSize: '28px',
              fontWeight:"bold",
              color: "#FFFF"
            },
            itemStyle: {
              color: "#62789B"
            }
          },
          {
          value: 40,
          name: 'Graduation Rate',
          subname: '93.0%',
          label: {
            show: true,
            formatter: function (params) {
              return params.data.subname + '\n' + '\n{a|' + params.name + '}';
            },
            rich: {
              a: {
                fontWeight: 'normal',
                fontSize:"14px",
                color:"#F6EAEB"
              }
            },
            fontSize:"28px",
            fontWeight:"bold",
            color: "#FFFF"
          },
          itemStyle: {
            color: "#A93439",
          }
        },
        ]
      }
    ]
  }

  return (
  <div className={`${myMontserrat.className}`}>

  <div className='xl:py-[3.604vw] py-[40px] px-[20px] ourstudent-bg'>
      <div className="flex grid grid-cols-3 gap-[18px] xl:gap-[1.083vw] items-center px-[2.604vw]">
       <div className='col-span-3 xl:col-span-2'>
       <div className='xl:h-[37.412vw] h-[690px] w-full relative'>
        {/* <div className='w-[200px] h-[200px] bg-black border-[14px] border-[#E5E7EB] rounded-full absolute inset-x-[39%] inset-y-[35%] z-10 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-white text-center p-3'>
            <div className='xl:text-[2.083vw] text-[20px] font-extrabold'>AISD</div>
            <div className='xl:text-[0.833vw] text-[16px] font-medium'>has a diverse student community</div>
          </div>
        </div> */}
       <ReactEcharts
            option={option}
            style={{ width: '100%', height: '100%' }}
        />
        <div className='absolute bottom-[30.4vw] xl:bottom-[32.2vw] left-[24.6vw] xl:left-[24vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/Graduation_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[26.200vw] xl:bottom-[26.200vw] left-[32.1vw] xl:left-[31.8vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/hispanic_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[23vw] xl:bottom-[23.2vw] left-[37vw] xl:left-[37.4vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/white_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[17.2vw] xl:bottom-[17.2vw] left-[39.2vw] xl:left-[39.2vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/black_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[11.2vw] xl:bottom-[10.6vw] left-[37.5vw] xl:left-[37.8vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/asian_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[7vw] xl:bottom-[6vw] left-[32.6vw] xl:left-[32.2vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/other_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[6.8vw] xl:bottom-[6vw] left-[25.5vw] xl:left-[25vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/eduction_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[10.4vw] xl:bottom-[9.5vw] left-[19.4vw] xl:left-[18.4vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/emergent_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[17.5vw] xl:bottom-[17.2vw] left-[16.4vw] xl:left-[15.5vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/economically_icon.png" alt="icon" width={100} height={100}/>
        </div>
        <div className='absolute bottom-[25.2vw] xl:bottom-[25.8vw] left-[18vw] xl:left-[17vw]'>
          <Image className='h-[3.125vw] w-[3.125vw]' src="/assets/images/composite_icon.png" alt="icon" width={100} height={100}/>
        </div>
        </div>
            </div>
            <div >
                <div className='text-[#fff] text-[24px] lg:text-[35px] xl:text-[1.979vw]  font-semibold  w-full'>Our Students</div>
                <p className='text-[#fff] text-[14px] lg:text-[16px] xl:text-[0.833vw]  font-light xl:w-[26.042vw] w-[600px] mt-2'>AISD has a diverse student community. It includes children from all economic levels and backgrounds, and supports more than 100 languages, with 11 languages other than English taught in our schools, including Chinese, Japanese and American Sign Language.</p>
                <Link href="" className="inline-block items-center gap-2 bg-[#A93439] hover:bg-[#762428] rounded-[8px] xl:rounded-[0.417vw] py-[8px] xl:py-[0.730vw] px-[14px] xl:px-[1.04vw] text-[14px] lg:text-[16px] xl:text-[0.94vw] text-white mt-[20px] xl:mt-[1.56vw] ease-linear duration-200">
                Find your Future
                <i className="austin-arrow-line-right ml-[8px] xl:ml-[0.417vw]"></i>
              </Link>
            </div>
      </div>
     
  </div>
 </div>
  )
}

export default OurStudents