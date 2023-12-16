import Image from 'next/image'
import Card from '@/components/Card/Card';

const WhereToGo= ()=>{
  return <div className='ml-[42px] mt-[32px]'>
    <h1 className='mb-[23.5px] font-medium text-[40px]'>Where to go</h1>
    <div>
        <button className='border-solid border-[1px] border-[#435659] rounded-[45px] w-[133px] text-[16px] p-[16px] mb-[22px]'>
            <Image
              src="/icons/filter.svg"
              alt="filter icon"
              width={18}
              height={18}
              priority
              className="inline mr-[10px]"
            />
            Filter
            <Image
              src="/icons/arrow-down.svg"
              alt="arrow icon"
              width={18}
              height={18}
              priority
              className="inline ml-[10px]"
            />
        </button>
        <div className="mb-[32px]">
            <button className='bg-[#CAE0DD] rounded-[50px] w-fit h-[30px] text-[12px] px-[12px] py-[4px] mr-[12px]'>
                Culture
                <Image
                  src="/icons/close-circle.svg"
                  alt="arrow icon"
                  width={18}
                  height={18}
                  priority
                  className="inline ml-[10px]"
                />
            </button>
            <button className='bg-[#CAE0DD] rounded-[50px] w-fit h-[30px] text-[12px] px-[12px] py-[4px] mr-[12px]'>
                Food
                <Image
                  src="/icons/close-circle.svg"
                  alt="arrow icon"
                  width={18}
                  height={18}
                  priority
                  className="inline ml-[10px]"
                />
            </button>
            <button className='bg-[#CAE0DD] rounded-[50px] w-fit h-[30px] text-[12px] px-[12px] py-[4px] mr-[12px]'>
                Sceneseeing
                <Image
                  src="/icons/close-circle.svg"
                  alt="arrow icon"
                  width={18}
                  height={18}
                  priority
                  className="inline ml-[10px]"
                />
            </button>
        </div>
        <div className="grid grid-rows-1 grid-cols-2 gap-[20px]">
          <div>
            <div className="grid grid-rows-1 grid-cols-2 gap-[20px] mb-[20px]">
              <div>
                <Card src="/images/img1.png" width={445} height={510.47} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass="mb-[20px]"/>
                <Card src="/images/img4.png" width={445} height={378} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass=""/>
              </div>
              <div>
                <Card src="/images/img2.png" width={445} height={378} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass="mb-[20px]"/>
                <Card src="/images/img5.png" width={445} height={510.47} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass=""/>
              </div>
            </div>
            <Card src="/images/img8.png" width={910} height={576} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass="mb-[20px]"/>
          </div>
          <div>
            <Card src="/images/img3.png" width={910} height={576} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass="mb-[20px]"/>
            <div className="grid grid-rows-1 grid-cols-2 gap-[20px] mb-[20px]">
              <div>
                <Card src="/images/img6.png" width={445} height={378} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass="mb-[20px]"/>
                <Card src="/images/img9.png" width={445} height={510.47} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass=""/>
              </div>
              <div>
                <Card src="/images/img7.png" width={445} height={510.47} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass="mb-[20px]"/>
                <Card src="/images/img10.png" width={445} height={378} title="Input category name here" description="The Humanity collection is an exploration into the world of human emotions through the prism of visual art." customClass=""/>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
}

export default WhereToGo