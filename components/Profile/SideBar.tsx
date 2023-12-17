"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const SideBar = ({ name, setName }) => {

    const menu = [
        {
            key: '/profile/visa',
            text: 'Visa information',
            name: 'visa'
        },
        {
            key: '/profile/flight',
            text: 'Flight information',
            name: 'flight'

        },
        {
            key: '/profile/accomodation',
            text: 'Accomodation',
            name: 'accomodation'

        },
    ]
    // #CCDCDA
    return (
        <div className="Rectangle7 w-[290px] h-[681.53px] rounded-[20px] border border-gray-300" style={{ marginTop: '32px', marginLeft: '41px' }} >
            <div className="Frame29 w-[289px] h-[119.48px] flex-col justify-start items-start inline-flex" style={{ marginTop: '42px' }}>
                {menu.map((item) => (
                    <button key={item.key}
                        className={` 'bg-slate-100'} Frame27 w-[289px] px-6 py-2.5 border justify-start items-center gap-2.5 inline-flex`}
                        style={{backgroundColor: item.name === name.key ? '#CCDCDA' : '#EDF6F5' }}

                        onClick={() => setName({ key: item.name })}
                        name={item.name}
                    >
                        <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
                        </Image>
                        <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight" style={{fontWeight: 600}}>{item.text}</div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SideBar