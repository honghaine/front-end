import router, { useRouter } from 'next/navigation'
import React from 'react'

const Access = () => {
  const router = useRouter()

  const handleClick = (e) => {
    router.push('/profile')
  }

  return (
    <div className=" self-stretch p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-6 flex">
      <div className="w-full">
        <div
          className="text-left  text-zinc-1500 text-2xl font-black font-['Poppins'] leading-[28.80px]"
          id="txtTitle"
        >
          Quick access to your schedule
        </div>
      </div>

      <div
        className="w-full text-center text-zinc-800 text-base font-normal font-['Poppins'] leading-normal"
        id="txtMsg"
      >
        There is a code was sent to your email, please insert it and press
        login.
      </div>
      <div className="Frame33 w-full h-[54px] justify-center items-center gap-4 inline-flex">
        <input
          type="text"
          className="Frame3 w-[54px] px-6 py-[18px] rounded border border-gray-300 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight"
          style={{ width: '60px' }}
          placeholder="0"
          maxLength={1}
        />
        <input
          type="text"
          className="Frame3 w-[54px] px-6 py-[18px] rounded border border-gray-300 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight"
          style={{ width: '60px' }}
          placeholder="0"
          maxLength={1}
        />
        <input
          type="text"
          className="Frame3 w-[54px] px-6 py-[18px] rounded border border-gray-300 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight"
          style={{ width: '60px' }}
          placeholder="0"
          maxLength={1}
        />
        <input
          type="text"
          className="Frame3 w-[54px] px-6 py-[18px] rounded border border-gray-300 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight"
          style={{ width: '60px' }}
          placeholder="0"
          maxLength={1}
        />
      </div>
      <button
        className="self-stretch px-[77px] py-6 bg-teal-700 rounded-[64px] justify-center items-center gap-2.5 inline-flex text-white text-xl font-medium font-['Poppins'] leading-normal"
        onClick={(e) => handleClick(e)}
        id="btnLogin"
      >
        Login
      </button>
    </div>
  )
}

export default Access
