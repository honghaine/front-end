"use client"
import Image from 'next/image'
import Tab from './Tab'
import SearchInput from './SearchInput'
import { useState } from 'react'
import DropdownNotification from './noti'
const Header = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const showReminderPopup = () => {
    setShowPopup(true);
  };

  const hideReminderPopup = () => {
    setShowPopup(false);
  };


  return (
    <header className="bg-[#012E33] py-[31px] px-[41px]">
      <div className="flex justify-between items-center	">
        <div className="flex gap-[10px]">
          <Image
            src="/icons/logo.svg"
            alt="logo icon"
            width={100}
            height={24}
            priority
            className="pr-[10px] border-r border-[#000]"
          />
          <Image
            src="/icons/second-logo.svg"
            alt="second-logo icon"
            width={42}
            height={21}
            priority
          />
        </div>
        <div className="flex gap-8">
          <DropdownNotification></DropdownNotification>
          <div className="flex gap-4 h-[44px]">
            <div className="flex items-center justify-center">
              <Image
                src="https://s3-alpha-sig.figma.com/img/e632/dc20/86efa3df337e8c215dd8095476bb6513?Expires=1703462400&Signature=UwPQiRw~M0PDdcxDWWbbXAC7xBW6ELyrKEZnfod0xwZi0SzrTpRT1rRd-ShBxeByufaAbWbH1f6b4HWXgqoMqY5H1fAkRUlaRHy14B2ckSM9zrXP~tyPnaT8VO~MAiY9sOtCr0kVzI3QCp7j9opembflOWM5bQ5kStbegrqryVfhCFCHiqXTUBVs59mwg-64nBCQFNtz~n11GN3Q0HPQhgx3wlFP5hC7pZRzdS9ONGskD2~CcjhUBxY~bzo2~1nVs5zE0p9KvqSf4B6uravJre-CytSHLUcIMIimc4ViY~uTZXYAEW49dJK~kpVjIbWBxcPy7CNBXaKxhHBzTRQLFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="avatar icon"
                className="rounded-full"
                width={44}
                height={44}
                priority
              />
            </div>

            <div >
              <button className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full cursor-pointer" onClick={showReminderPopup}>
                <Image
                  src="/icons/noti.svg"
                  alt="avatar icon"
                  className="rounded-full"
                  width={44}
                  height={44}
                  priority
                />
              </button>
            </div>

            {showPopup && (
              <div className="fixed bottom-4 right-4 bg-white border border-gray-300 p-4 rounded shadow-lg w-64 z-50 justify-between">
                <div className="flex justify-end mb-4">
                  <p className="font-bold mx-[70px]">Chat Box</p>
                  <button onClick={hideReminderPopup}>&times;</button>
                </div>
                <div className="overflow-y-auto h-40">
                  {/* Chat messages go here */}
                  <div className="mb-2">User: Hello!</div>
                  <div className="mb-2">Bot: Hi there!</div>
                </div>
                <input type="text" placeholder="Type your message" className="border border-gray-300 p-2 w-full" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Send</button>
              </div>
            )}


            <div className="flex flex-col">
              <div className="text-[#EDF6F5] font-medium	">Jason Cheng</div>
              <div className="text-[#EDF6F5] font-light	">Guest</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 bg-[#124247] h-[1px]" />
      <div className="flex justify-between items-center">
        <Tab />
        <SearchInput />
      </div>

    </header>
  )
}

export default Header
