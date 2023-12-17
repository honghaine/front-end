import React from 'react'

const LogIn = ({state, setState}) => {
    
    const handleClick = (e) => {
        setState('access');
    }

    return (
        <div className=" self-stretch p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-6 flex">
            <div className="w-full">
                <div
                    className="text-center QuickAccessToYourSchedule text-zinc-1500 text-2xl font-black font-['Poppins'] leading-[28.80px]"
                    id="txtTitle"
                >
                    Quick access to your schedule
                </div>
            </div>

            <div
                className="w-[647px] text-center hidden text-zinc-800 text-base font-normal font-['Poppins'] leading-normal"
                id="txtMsg"
            >
                There is a code was sent to your email, please insert it and
                press login.
            </div>
            <input
                type="text"
                id="email"
                name="email"
                className="w-full text-base font-normal font-['Poppins'] leading-tight self-stretch px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex"
                placeholder="Please Insert Your Email "
            />
            <button
                className="self-stretch px-[77px] py-6 bg-teal-700 rounded-[64px] justify-center items-center gap-2.5 inline-flex text-white text-xl font-medium font-['Poppins'] leading-normal"
                onClick={(e) => handleClick(e)}
                id="btnLogin"
            >
                Get sign-in code
            </button>

        </div>
    )
}

export default LogIn