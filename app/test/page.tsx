import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <div
                className="Frame7"
                style={{
                    width: "100%",
                    height: "100%",
                    paddingLeft: 41,
                    paddingRight: 41,
                    paddingTop: 31,
                    paddingBottom: 31,
                    background: "#012E33",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 24,
                    display: "inline-flex"
                }}
            >
                <div
                    className="Frame22"
                    style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 48,
                        display: "inline-flex"
                    }}
                >
                    <div
                        className="Frame8"
                        style={{
                            flex: "1 1 0",
                            height: "24.18px",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "10.51px",
                            display: "flex"
                        }}
                    >
                        <Image src={'/icons/Layer_1.svg'} width={150} height={24.18} alt={''}></Image>
                        <div
                            className="Line1"
                            style={{
                                width: "22.94px",
                                height: 0,
                                transform: "rotate(90deg)",
                                transformOrigin: "0 0",
                                border: "0.53px black solid"
                            }}
                        />
                        <Image src={'/icons/Group_1.svg'} width={100} height={20.41} alt={''}></Image>
                    </div>
                    <div
                        className="Frame11"
                        style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 32,
                            display: "flex"
                        }}
                    >

                        <button className="NotificationStatus w-7 h-7 relative">
                            <Image src={'/icons/notification-status.svg'} width={100} height={20.41} alt={''}></Image>
                        </button>

                        <div
                            className="Frame35"
                            style={{
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 16,
                                display: "flex"
                            }}
                        >
                            <Image className="Ellipse1 w-11 h-11 rounded-full" width={44} height={44} src={'/icons/avatar.svg'} alt={''} />

                            <div
                                className="Frame10"
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    gap: 8,
                                    display: "inline-flex"
                                }}
                            >
                                <div
                                    className="JasonCheng"
                                    style={{
                                        color: "#EDF6F5",
                                        fontSize: 16,
                                        fontFamily: "Poppins",
                                        fontWeight: 500,
                                        lineHeight: "14.72px",
                                        wordWrap: "break-word"
                                    }}
                                >
                                    Jason Cheng
                                </div>
                                <div
                                    className="Guest"
                                    style={{
                                        color: "#EDF6F5",
                                        fontSize: 14,
                                        fontFamily: "Poppins",
                                        fontWeight: 300,
                                        lineHeight: "12.88px",
                                        wordWrap: "break-word"
                                    }}
                                >
                                    Guest
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="Line2"
                    style={{ width: 1838, height: 0, border: "1px #124247 solid" }}
                />
                <div
                    className="Frame34"
                    style={{
                        alignSelf: "stretch",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 24,
                        display: "inline-flex"
                    }}
                >
                    <div
                        className="Frame21"
                        style={{
                            flex: "1 1 0",
                            height: 47,
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 25,
                            display: "flex"
                        }}
                    >
                        <button
                            className="Frame18"
                            style={{
                                padding: 16,
                                background: "#FD5B2F",
                                borderRadius: 45,
                                overflow: "hidden",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 10,
                                display: "flex"
                            }}
                        >
                            <div
                                className="PersonalInformation"
                                style={{
                                    color: "#333333",
                                    fontSize: 16,
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    lineHeight: "14.72px",
                                    wordWrap: "break-word"
                                }}
                            >
                                Personal information
                            </div>
                        </button>
                        <button
                            className="Frame19"
                            style={{
                                padding: 16,
                                borderRadius: 45,
                                overflow: "hidden",
                                border: "1px #435659 solid",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 10,
                                display: "flex"
                            }}
                        >
                            <div
                                className="PersonalInformation"
                                style={{
                                    color: "white",
                                    fontSize: 16,
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    lineHeight: "14.72px",
                                    wordWrap: "break-word"
                                }}
                            >
                                Your schedule
                            </div>
                        </button>
                        <button
                            className="Frame20"
                            style={{
                                padding: 16,
                                borderRadius: 45,
                                overflow: "hidden",
                                border: "1px #435659 solid",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 10,
                                display: "flex"
                            }}
                        >
                            <div
                                className="PersonalInformation"
                                style={{
                                    color: "white",
                                    fontSize: 16,
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    lineHeight: "14.72px",
                                    wordWrap: "break-word"
                                }}
                            >
                                Where to go
                            </div>
                        </button>
                    </div>
                    <div
                        className="Frame23"
                        style={{
                            width: 397,
                            height: 47,
                            padding: 16,
                            borderRadius: 45,
                            overflow: "hidden",
                            border: "1px #435659 solid",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            display: "flex"
                        }}
                    >
                        <div
                            className="Search"
                            style={{
                                flex: "1 1 0",
                                color: "white",
                                fontSize: 16,
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                lineHeight: "14.72px",
                                wordWrap: "break-word"
                            }}
                        >
                            Search
                        </div>
                        <div
                            className="VuesaxTwotoneSearchNormal"
                            style={{
                                width: "20.49px",
                                height: "20.49px",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex"
                            }}
                        >
                            <div
                                className="SearchNormal"
                                style={{ width: "20.49px", height: "20.49px", position: "relative" }}
                            >
                                <div
                                    className="Vector"
                                    style={{
                                        width: "16.22px",
                                        height: "16.22px",
                                        left: "1.71px",
                                        top: "1.71px",
                                        position: "absolute",
                                        border: "1.54px white solid"
                                    }}
                                />
                                <div
                                    className="Vector"
                                    style={{
                                        width: "1.71px",
                                        height: "1.71px",
                                        left: "17.08px",
                                        top: "17.08px",
                                        position: "absolute",
                                        opacity: "0.40",
                                        border: "1.54px white solid"
                                    }}
                                />
                                <div
                                    className="Vector"
                                    style={{
                                        width: "20.49px",
                                        height: "20.49px",
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        opacity: 0,
                                        border: "1.02px white solid"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PersonalInformation text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[36.80px]" style={{ marginTop: '32px', marginLeft: '41px' }}>Personal information</div>
            <div className="Rectangle7 w-[290px] h-[681.53px] rounded-[20px] border border-gray-300" style={{ marginTop: '32px', marginLeft: '41px' }} >
                <div className="Frame29 w-[289px] h-[119.48px] flex-col justify-start items-start inline-flex" style={{ marginTop: '42px' }}>
                    <button className="Frame27 w-[289px] px-6 py-2.5 bg-gray-300 border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                        <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
                        </Image>

                        <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Visa information</div>
                    </button>
                    <button className="Frame28 w-[289px] px-6 py-2.5 bg-slate-100 border border-gray-300 justify-start items-center gap-2.5 inline-flex">
                        <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
                        </Image>

                        <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Flight information</div>
                    </button>
                    <button className="Frame29 w-[289px] px-6 py-2.5 bg-slate-100 border border-gray-300 justify-start items-center gap-2.5 inline-flex">

                        <Image src={'/icons/arrow-right.svg'} width={20.5} height={20.5} alt={''} className="VuesaxTwotoneArrowRight w-[20.49px] h-[20.49px] justify-center items-center flex">
                        </Image>


                        <div className="VisaInformation text-zinc-800 text-base font-medium font-['Poppins'] leading-tight">Accomodation</div>
                    </button>
                </div>
            </div>

        </div>


    )
}

export default page


