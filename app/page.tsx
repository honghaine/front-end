'use client'
import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  useLayoutEffect(() => {
    router.push('/profile')
  }, [router])
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        src="/icons/spinner.svg"
        alt="loading icon"
        width={64}
        height={64}
        priority
      />
    </div>
  )
}
