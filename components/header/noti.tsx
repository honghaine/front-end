import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex gap-4 h-[44px]">
      <div className="flex gap-4 h-[44px]" x-data="{ dropdownOpen: false }">
        <button onClick={toggleDropdown} >
        <Image
            src="/icons/noti.svg"
            alt="second-logo icon"
            width={28}
            height={28}
            priority
            style={{color: 'transparent'}}
          />
        </button>

        {dropdownOpen && (
          <>
            <div onClick={() => setDropdownOpen(false)} className="fixed inset-0 h-full w-full z-10"></div>

            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20" style={{ width: '20rem', top: '78px' }}>
              <div className="py-2">
                <Link href="/schedule" className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                  <Image width={8} height={8} className="h-8 w-8 rounded-full object-cover mx-1" src="/images/img5.png" alt="avatar" ></Image>
                  <p className="text-gray-600 text-sm mx-2">
                    <span className="font-bold">Lunch time</span>
                  </p>
                </Link>
                {/* Add more notification items here */}
              </div>
              <a href="#" className="block bg-gray-800 text-white text-center font-bold py-2">See all notifications</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DropdownNotification;
