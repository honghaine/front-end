import Image from 'next/image'
import Card from '@/components/Card/Card';

const WhereToGo= ()=>{
  return <div className='mx-[42px] mt-[32px]'>
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
                <Card src="/images/img1.png" width={445} height={510.47} title="Notre-Dame Cathedral Basilica of Saigon" description="Established by French colonists who initially named it the Church of Saigon, the cathedral was constructed between 1863 and 1880." customClass="mb-[20px]"/>
                <Card src="/images/img4.png" width={445} height={378} title="Landmark 81" description="Landmark 81 is a supertall skyscraper in Ho Chi Minh City, Vietnam. It is primarily invested and developed by Vinhomes, the largest Vietnamese real-estate developer. " customClass=""/>
              </div>
              <div>
                <Card src="/images/img2.png" width={445} height={378} title="Bui Vien walking street" description="Bui Vien walking street is a symbol of the history and culture of Ho Chi Minh City, as well as a witness to many important events in the nation's past." customClass="mb-[20px]"/>
                <Card src="/images/img5.png" width={445} height={510.47} title="Bun bo Nam Bo" description="The Vietnamese dish bun bo nam bo quite literally means 'noodles with beef from the south'.The dish is most popular in the Vietnamese capital, where both locals and tourists seek it out as a street food favourite." customClass=""/>
              </div>
            </div>
            <Card src="/images/img8.png" width={910} height={576} title="Saigon River" description="The Saigon River is a river located in southern Vietnam that rises near Phum Daung in southeastern Cambodia, flows south and south-southeast for about 225 kilometres and empties into the Nha Be River." customClass="mb-[20px]"/>
          </div>
          <div>
            <Card src="/images/img3.png" width={910} height={576} title="Saigon Central Post Office" description="The building was constructed when Vietnam was part of French Indochina in the late 19th century. It counts with Gothic, Renaissance and French influences." customClass="mb-[20px]"/>
            <div className="grid grid-rows-1 grid-cols-2 gap-[20px] mb-[20px]">
              <div>
                <Card src="/images/img6.png" width={445} height={378} title="The Cafe Apartments, Nguyen Hue" description="Among the many interesting architectural sights on Ho Chi Minh City’s Nguyen Hue Walking Street, the cafe apartment at No.42 certainly stands out as one of the more unique." customClass="mb-[20px]"/>
                <Card src="/images/img9.png" width={445} height={510.47} title="Bun rieu" description="It is a traditional Vietnamese soup of clear stock and rice vermicelli. There are several varieties of bun rieu, including bun rieu cua (minced crab), bun rieu ca (fish) and bun rieu oc (snail)." customClass=""/>
              </div>
              <div>
                <Card src="/images/img7.png" width={445} height={510.47} title="Cho lon" description="It lies on the west bank of the Saigon River, having Binh Tay Market as its central market. Cho Lon consists of the western half of District 5 as well as several adjoining neighborhoods in District 6 and District 11." customClass="mb-[20px]"/>
                <Card src="/images/img10.png" width={445} height={378} title="Pho" description="A traditional Vietnamese soup consists of rice noodles in a delicate beef broth, seasoned with star anise, cinnamon, and cloves. Served with lime, basil, Jalapeno and bean sprout." customClass=""/>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
}

export default WhereToGo