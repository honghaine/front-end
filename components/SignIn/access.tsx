import { useRouter } from 'next/navigation'

const Access = () => {
  const router = useRouter()

  const handleClick = (e) => {
    router.push('/profile')
  }

  return (
    <div className=" self-stretch p-10 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-6 flex">
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
          onChange={() => document.getElementById('input2').focus()}
          id="input1"
        />
        <input
          type="text"
          className="Frame3 w-[54px] px-6 py-[18px] rounded border border-gray-300 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight"
          style={{ width: '60px' }}
          placeholder="0"
          maxLength={1}
          id="input2"
          onChange={() => document.getElementById('input3').focus()}
        />
        <input
          type="text"
          className="Frame3 w-[54px] px-6 py-[18px] rounded border border-gray-300 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight"
          style={{ width: '60px' }}
          placeholder="0"
          maxLength={1}
          id="input3"
          onChange={() => document.getElementById('input4').focus()}
        />
        <input
          type="text"
          className="Frame3 w-[54px] px-6 py-[18px] rounded border border-gray-300 text-zinc-500 text-base font-normal font-['Poppins'] leading-tight"
          style={{ width: '60px' }}
          placeholder="0"
          maxLength={1}
          id="input4"
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
