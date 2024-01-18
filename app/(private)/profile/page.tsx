"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import SideBar from '@/components/Profile/SideBar'
import Visa from '../../../components/Profile/Visa'
import Flight from '../../../components/Profile/Flight'
import Accomodation from '../../../components/Profile/Accomodation'

const Profile = () => {
    const [name, setName] = useState({
        key: 'visa'
    });
    return (
        <div>
            <div className="PersonalInformation text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[36.80px]" style={{ marginTop: '32px', marginLeft: '41px', letterSpacing:'-2.4px', fontWeight:'600' }}>Personal information</div>
            <div className='flex'>
                <SideBar name={name} setName={setName} ></SideBar>
                {name.key === 'visa' && <Visa/>}
                {name.key === 'flight' && <Flight/>}
                {name.key === 'accomodation' && <Accomodation/>}
            </div>
        </div>

    )
}

export default Profile
