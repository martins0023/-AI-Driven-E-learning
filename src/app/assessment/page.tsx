"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const navAssessment = () => {
        router.push("/assessment/knowledgeAssessment");
    }

    const handleGoBack = () => {
        router.back();
    }
    return (
        <section className="ml-[159px] mr-[30px] mb-10">
            <div className="flex flex-row items-center gap-[20px]">
                <Image onClick={handleGoBack} src="/west.png" width={28} height={28} alt="back" className="cursor-pointer" />
                <p className="font-bold text-[20px] text-black">Assessment</p>
            </div>

            <div className="mt-[20px] flex flex-row gap-3 items-center">
                <div className="flex flex-row gap-2 items-center">
                    <div className="bg-black rounded-full h-[35px] w-[35px] items-center justify-center flex">
                        <p className="text-white">1</p>
                    </div>
                    <div>
                        <p>Basic Assessment</p>
                    </div>
                </div>

                <Image src="/icons/keyboard_arrow_right.png" width={24} height={24} alt="back" className="cursor-pointer w-[24px] h-[24px]" />

                <div onClick={navAssessment} className="flex flex-row gap-2 items-center cursor-pointer">
                    <div className="bg-white border-[#979797] border rounded-full h-[35px] w-[35px] items-center justify-center flex">
                        <p className="text-black">2</p>
                    </div>
                    <div>
                        <p>Knowledge Assessment Questions</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-35 flex-col mt-[50px] items-center gap-[65px]">
                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">What is your gender?</p>
                        <p className="text-[#777777] font-bold text-[20px]">01</p>
                    </div>
                    <div className="flex flex-row mt-[15px] justify-between">
                        <button className="flex flex-row justify-center items-center gap-2 w-[202px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            <Image
                                src="/icons/male.png"
                                width={18}
                                height={18}
                                alt="male"
                                className="w-[18px] h-[18px]"
                            />
                            Male
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[202px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            <Image
                                src="/icons/female.png"
                                width={18}
                                height={18}
                                alt="female"
                                className="w-[18px] h-[18px]"
                            />
                            Female
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[202px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            <Image
                                src="/icons/transgender.png"
                                width={18}
                                height={18}
                                alt="others"
                                className="w-[18px] h-[18px]"
                            />
                            Others
                        </button>
                    </div>
                </div>

                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">What is your age?</p>
                        <p className="text-[#777777] font-bold text-[20px]">02</p>
                    </div>
                    <div className="flex items-center bg-gray-100 w-full rounded-md px-4 py-2 mt-[15px] border-2 border-[#CFCFCF] shadow-sm">
                        <Image src="/icons/event_note.png" width={18} height={20} alt="age" className="text-black cursor-pointer" />
                        <input
                            type="text"
                            placeholder="please enter a number from 1 - 100"
                            className="bg-transparent ml-2 outline-none w-full text-black text-[14px]" />
                    </div>
                </div>

                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">Please select an attribute that best suits you.</p>
                        <p className="text-[#777777] font-bold text-[20px]">03</p>
                    </div>
                    <div className="flex flex-row mt-[15px] justify-between">
                        <button className="flex flex-row justify-center items-center gap-2 w-[202px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            <Image
                                src="/icons/escalator_warning.png"
                                width={18}
                                height={18}
                                alt="male"
                                className="w-[18px] h-[18px]"
                            />
                            High School
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[202px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            <Image
                                src="/icons/format_shapes.png"
                                width={18}
                                height={18}
                                alt="female"
                                className="w-[18px] h-[18px]"
                            />
                            A Level
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[202px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            <Image
                                src="/icons/assured_workload.png"
                                width={18}
                                height={18}
                                alt="others"
                                className="w-[18px] h-[18px]"
                            />
                            College
                        </button>
                    </div>
                </div>

                <div className="mt-[10px]">
                    <button onClick={navAssessment} className="flex flex-row justify-center items-center gap-2 w-[279px] h-[44px] bg-black hover:bg-[#000000be] text-[14px] font-normal text-white rounded-lg">
                        Next
                        <Image
                            src="/icons/white_keyboard_arrow_right.png"
                            width={24}
                            height={24}
                            alt="next button"
                            className="w-[24px] h-[24px]"
                        />
                    </button>
                </div>
            </div>

        </section>
    )
}

export default page