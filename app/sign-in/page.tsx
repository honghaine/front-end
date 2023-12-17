'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LogIn from '@/components/SignIn/signin'
import Access from '@/components/SignIn/access'

const SignIn = () => {
  const router = useRouter()
  const [state, setState] = useState('email');

  function handleClick(event) {
    event.preventDefault()
    const txtEmail = (document.getElementById('btnLogin') as HTMLInputElement)
      .innerHTML
    const txtEmailValue = (document.getElementById('email') as HTMLInputElement)
      .value
    if (txtEmail == 'Get sign-in code' && txtEmailValue != '') {
      document.getElementById('email').style.display = 'none'
      ;(document.getElementById('btnLogin') as HTMLInputElement).innerHTML =
        'Login'
      document.getElementById('txtMsg').style.display = 'block'
      document.getElementById('txtTitle').className += ' text-center'
      document.getElementById('otpGrp').style.display = 'block'
    } else if (txtEmail == 'Login') {
      router.push('/profile')
    }
  }

  return (
    <main className="">
      <div className="grid h-screen grid-cols-2 grid-flow-col ">
        <div className="bg-slate-100">
          <div className="self-stretch h-[95.86px] px-[42px] py-[31px] flex-col justify-start items-start gap-2.5 flex ">
            <div className="Frame8 justify-start items-center gap-[14.72px] flex">
              <Image
                className="Layer1"
                src="/icons/logoLogin.svg"
                alt="CLV Logo"
                width={139.135}
                height={33.864}
              />
              <div className="Line1 w-[32.13px] h-[0px]  rotate-90 border border-black"></div>
              <Image
                className="Image1"
                src="/icons/Group1.svg"
                alt="CLV Website"
                width={57.1}
                height={28.58}
              />
            </div>
          </div>
          <div className="w-screen h-[120px] " />
          <div className="px-[200px] flex-col justify-start items-start gap-11 flex">
            <div className="WelcomeToOurOffice  text-zinc-800 text-[84px] font-medium font-['Poppins'] leading-[77.28px]">
              Welcome to our office
            </div>
            <div className="Intro self-stretch text-zinc-800 text-base font-normal font-['Poppins'] leading-normal">
              Experience seamless hospitality with our Vietnam office welcome
              app—your personalized guide to a warm reception, local insights,
              and a memorable visit.
            </div>
            {state === 'email'?<LogIn state={state} setState={setState}></LogIn>:<Access></Access>}
          </div>
        </div>
        <div className="relative flex-col justify-start items-start flex">
          <div className="bg-slate-100">
            <div className="">
              <Image
                src="/images/background.png"
                alt=" background "
                layout={'fill'}
                objectFit={'inherit'}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignIn
