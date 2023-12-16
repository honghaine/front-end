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
        <div className='mt-[24px]'>
            <h1 className='mb-[20px] text-[24px]'>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card