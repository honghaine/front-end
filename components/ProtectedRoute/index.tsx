'use client'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

import { useBoundStore } from '@/store'
import { IMe } from '@/store/me-slice'

import httpClient from '@/configs/AxiosClient'
import Image from 'next/image'
import { URLEnum } from '@/constants'

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { auth, setMe, me } = useBoundStore((state) => state)
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: () => httpClient.get<{ data: { result: IMe } }>(URLEnum.ME),
    enabled: auth,
  })

  useEffect(() => {
    if (!auth) {
      router.push('/sign-in')
    }
  }, [auth, router])

  useEffect(() => {
    if (data) {
      setMe(data.data.data.result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  if (auth && me) {
    return <>{children}</>
  }

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

export default ProtectedRoute
