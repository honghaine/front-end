'use client'
import { usePathname, useRouter } from 'next/navigation'

const Tab = () => {
  const menu = [
    {
      key: '/profile',
      text: 'Personal information',
    },
    {
      key: '/schedule',
      text: 'Your schedule',
    },
    {
      key: '/where-to-go',
      text: 'Where to go',
    },
  ]
  const path = usePathname()
  const router = useRouter()

  return (
    <div className="flex gap-6">
      {menu.map((item) => (
        <div
          key={item.key}
          className={`cursor-pointer px-4 py-4 font-medium leading-4 ${
            path === item.key
              ? 'bg-[#FD5B2F] text-[#333]'
              : 'border border-[#435659] text-[#FFF]'
          }`}
          onClick={() => router.push(item.key)}
          style={{ borderRadius: '45px' }}
        >
          {item.text}
        </div>
      ))}
    </div>
  )
}

export default Tab
