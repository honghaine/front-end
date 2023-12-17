import Image from 'next/image'
const Card = ({src, customClass, title, description, width, height}:{src: string, customClass: string, title: string, description: string, width: number, height: number}) => {
  return (
    <div className={customClass}>
        <Image
            src={src}
            alt="Image"
            width={width}
            height={height}
            priority
            //fill={true}
        />
        <div className='mt-[24px]' style={{marginTop:"16px"}}>
            <h1 className='mb-[20px] text-[24px]' style={{marginBottom:'0px'}}>{title}</h1>
            <p style={{marginTop:"4px"}}>{description}</p>
        </div>
    </div>
  )
}

export default Card