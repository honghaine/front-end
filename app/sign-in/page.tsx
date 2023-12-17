'use client'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [state, setState] = useState(0);
  const router = useRouter();



  function handleClick(event) {
    event.preventDefault();
    var txtEmail = (document.getElementById('btnLogin') as HTMLInputElement).innerHTML;
    var txtEmailValue = (document.getElementById('email') as HTMLInputElement).value;
    console.log(txtEmail);
    console.log(txtEmailValue);
    if (txtEmail == "Get sign-in code" && txtEmailValue != '') {
      document.getElementById("email").style.display = "none";
      (document.getElementById("btnLogin") as HTMLInputElement).innerHTML = "Login";
      document.getElementById("txtMsg").style.display = "block";
      document.getElementById("txtTitle").className += ' text-center';
      document.getElementById("otpGrp").style.display = "block";

    } else if (txtEmail == "Login") {
      router.push('/profile');
    }

  }


  return (
    <main className="">
      <div className="grid h-screen grid-cols-[1127px_minmax(785px,_1fr)_0px] gap-2 grid-flow-col ">
        <div className="grid1">
          <div className="Frame7 self-stretch h-[95.86px] px-[42px] py-[31px] flex-col justify-start items-start gap-2.5 flex ">
            <div className="Frame8 justify-start items-center gap-[14.72px] flex">
              <Image className="Layer1" src="/icons/logoLogin.svg" alt="CLV Logo" width={139.135} height={33.864} />
              <div className="Line1 w-[32.13px] h-[0px]  rotate-90 border border-black"></div>
              <Image className="Image1" src="/icons/Group1.svg" alt="CLV Website" width={57.1} height={28.58} />
            </div>
          </div>
          <div className="w-screen h-[120px] " />
          <div className="Frame5 px-[200px] flex-col justify-start items-start gap-11 flex">
            <div className="WelcomeToOurOffice  text-zinc-800 text-[84px] font-medium font-['Poppins'] leading-[77.28px]">Welcome to our office</div>
            <div className="Intro self-stretch text-zinc-800 text-base font-normal font-['Poppins'] leading-normal">Experience seamless hospitality with our Vietnam office welcome app—your personalized guide to a warm reception, local insights, and a memorable visit.</div>
            <div className=" self-stretch p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-6 flex">
              <div className="w-[647px]">
                <div className="QuickAccessToYourSchedule text-zinc-1500 text-2xl font-black font-['Poppins'] leading-[28.80px]" id="txtTitle">Quick access to your schedule</div>
              </div>

              <div className="w-[647px] text-center hidden text-zinc-800 text-base font-normal font-['Poppins'] leading-normal" id="txtMsg">There is a code was sent to your email, please insert it and press login.</div>
              <div className="hidden" id="otpGrp">
                <div className="Frame33 w-[647px] h-14 justify-center items-center gap-4 inline-flex">
                  <div className="Frame3 w-14 px-6 py-4 rounded border border-gray-300 justify-center items-center gap-2.5 flex">
                    <div className=" text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">1</div>
                  </div>
                  <div className="Frame5 w-14 h-14 px-6 py-4 rounded border border-gray-300 justify-center items-center gap-2.5 flex">
                    <div className=" text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">2</div>
                  </div>
                  <div className="Frame6 w-14 h-14 px-6 py-4 rounded border border-gray-300 justify-center items-center gap-2.5 flex">
                    <div className=" text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">3</div>
                  </div>
                  <div className="Frame7 w-14 h-14 px-6 py-4 rounded border border-gray-300 justify-center items-center gap-2.5 flex">
                    <div className=" text-zinc-500 text-base font-normal font-['Poppins'] leading-tight">4</div>
                  </div>
                </div>
              </div>

              <input type="text" id="email" name="email" className="w-full text-base font-normal font-['Poppins'] leading-tight self-stretch px-6 py-[18px] rounded border border-gray-300 justify-start items-start gap-2.5 inline-flex" placeholder="Please Insert Your Email " />
              <button className="self-stretch px-[77px] py-6 bg-teal-700 rounded-[64px] justify-center items-center gap-2.5 inline-flex text-white text-xl font-medium font-['Poppins'] leading-normal" onClick={(e) => handleClick(e)} id="btnLogin">Get sign-in code</button>
            </div>
          </div>
        </div>
        <div className="Grid2 relative flex-col justify-start items-start flex">
          <div className="Frame1 bg-slate-100">
            <div className="">
              <Image className="absolute" src="/icons/background.svg" alt=" Rectangle2 " width={785} height={945} />

            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default SignIn