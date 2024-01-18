'use client'
import Image from 'next/image'
import { useState } from 'react'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="relative">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        type="text"
        style={{ outline: 'none', borderRadius: '45px' }}
        className="px-4 py-4 border border-[#435659] leading-4 w-[400px] bg-transparent	pr-10 text-[#FFF]"
      />
      <Image
        src="/icons/search.svg"
        alt="search icon"
        width={20}
        height={20}
        priority
        className="absolute right-4 top-4"
      />
    </div>
  )
}
export default SearchInput
