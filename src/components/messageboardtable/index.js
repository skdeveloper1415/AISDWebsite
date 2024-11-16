import React, { useState } from 'react';
import { DataView } from 'primereact/dataview';
import Image from 'next/image';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Montserrat } from "@next/font/google";
import Link from "next/link";

const myMontserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
  });

export default function MessageBoardTable() {

    const products = [
        {
            id: 1,
            image: 'active_user',
            message: 'A message for my colleagues',
            name: "Devon Lane",
        },
        {
            id: 2,
            image: 'user1',
            message: 'Item 55 Notification & Joint Public Hearing',
            name: "Devon Lane",
        },
        {
            id: 3,
            image: 'user2',
            message: 'Item 101 Version 2',
            name: "Jenny Wilson",
        },
        {
            id: 4,
            image: 'user3',
            message: 'Item 103 Palm District Plan Amendment',
            name: "Kathryn Murphy",
        },
        {
            id: 5,
            image: 'user4',
            message: 'Item 55 Notification & Joint Public Hearing',
            name: "Devon Lane",
        },
        {
            id: 6,
            image: 'user5',
            message: 'Council Meeting Schedule 9/21/23',
            name: "Brooklyn Simmons",
        },
        {
            id: 7,
            image: 'user6',
            message: 'Item 53 - Land Management Plan',
            name: "Wade Warren",
        },
        {
            id: 7,
            image: 'user6',
            message: 'Item 53 - Land Management Plan',
            name: "Wade Warren",
        },
        {
            id: 7,
            image: 'user6',
            message: 'Item 53 - Land Management Plan',
            name: "Wade Warren",
        },
    ]

    const itemTemplate = (product) => {
        return (
            <div className={myMontserrat.className}>
                <Link href={'/website/messageboard/discussiondetails'} className='flex-wrap md:flex xl:flex justify-between gap-1 xl:mt-[0.833vw] mt-[16px] xl:mb-[0.833vw] mb-[16px]'>
                    <div className='flex justify-between gap-5'>
                        <Image src={`/assets/images/svg/${product.image}.svg`} width={56} height={56} alt='' className='w-[56px] h-[56px] xl:w-[2.917vw] xl:h-[2.917vw]' />
                        <div className='flex items-start gap-2'>
                            {product.message === 'Item 101 Version 2' ?
                                <div className='h-2 w-2 bg-[#BBC5D4] mt-[7px] rounded-full '></div>
                                :
                                <div className='h-2 w-2 bg-[#1F3F71] mt-[7px] rounded-full '></div>
                            }

                            <div>
                                <div className='text-[16px] xl:text-[0.833vw] text-[#374151] font-medium mb-[8px]'>{product.message}</div>
                                <div className='flex items-center gap-2'>
                                    <div className='text-[14px] xl:text-[0.729vw] text-[#4B586E] font-medium'>{product.name}</div>
                                    <div className='text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal'>Mon Sep 25, 2023 9:41 am</div>
                                    <div className='text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal'>4 replies</div>
                                    <div className='text-[14px] xl:text-[0.729vw] text-[#4B586E] font-normal'>892 views</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='custAvatar'>
                        <AvatarGroup>
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" size='50px' />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" shape="circle" />
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                            <Avatar label="+2" shape="circle" />
                        </AvatarGroup>
                    </div>
                </Link>
            </div>
        );

    }


    return (
        <>
            <div className='px-[32px] pb-[32px] xl:px-[1.667vw] xl:pb-[1.667vw] pt-[16px] xl:pt-[0.833vw] rounded-[24px] bg-[#FFFFFF] xl:rounded-[1.25vw]'>
                <DataView
                    value={products}
                    itemTemplate={itemTemplate}
                    currentPageReportTemplate="Rows per page {first}-{last} of {totalRecords}"
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                    className='tableCust'
                    paginator rows={5}
                />
            </div>
        </>
    )
}