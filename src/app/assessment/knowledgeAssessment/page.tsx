"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const navAssessment = () => {
        router.push("/assessment/knowledgeAssessment");
    }

    const navback = () => {
        router.push("/assessment");
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
                <div onClick={navback} className="flex flex-row gap-2 items-center cursor-pointer">
                    <div className="bg-white border-[#979797] border rounded-full h-[35px] w-[35px] items-center justify-center flex">
                        <p className="text-black">1</p>
                    </div>
                    <div>
                        <p>Basic Assessment</p>
                    </div>
                </div>

                <Image src="/icons/keyboard_arrow_right.png" width={24} height={24} alt="back" className="cursor-pointer w-[24px] h-[24px]" />

                <div className="flex flex-row gap-2 items-center cursor-pointer">
                    <div className="bg-black rounded-full h-[35px] w-[35px] items-center justify-center flex">
                        <p className="text-white">2</p>
                    </div>
                    <div>
                        <p>Knowledge Assessment Questions</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-35 flex-col mt-[50px] items-center gap-[65px]">
                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">What is the Capital of France?</p>
                        <p className="text-[#777777] font-bold text-[20px]">01</p>
                    </div>
                    <div className="flex flex-row mt-[15px] justify-between">
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Berlin
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Madrid
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Paris
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Rome
                        </button>
                    </div>
                </div>

                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">Solve the equation: 2x + 3 = 11. What is x?</p>
                        <p className="text-[#777777] font-bold text-[20px]">02</p>
                    </div>
                    <div className="flex flex-row mt-[15px] justify-between">
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            3
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            10
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            4
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            5
                        </button>
                    </div>
                </div>

                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">Which planet is known as the Red Planet?</p>
                        <p className="text-[#777777] font-bold text-[20px]">03</p>
                    </div>
                    <div className="flex flex-row mt-[15px] justify-between">
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Pluto
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Venus
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Mars
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Earth
                        </button>
                    </div>
                </div>

                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">What is the Chemical symbol for water?</p>
                        <p className="text-[#777777] font-bold text-[20px]">04</p>
                    </div>
                    <div className="flex flex-row mt-[15px] justify-between">
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            NACL
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            H20
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            C02
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            H30
                        </button>
                    </div>
                </div>

                <div className="w-[687px]">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-black font-bold text-[20px]">Who wrote “To kill a mockingbird”?</p>
                        <p className="text-[#777777] font-bold text-[20px]">05</p>
                    </div>
                    <div className="flex flex-row mt-[15px] justify-between">
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Harper Lee
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            J.K Rowling
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Aristotle
                        </button>
                        <button className="flex flex-row justify-center items-center gap-2 w-[150.02px] h-[44px] bg-[#F6F6F6] hover:bg-[#000000be] hover:text-white rounded-lg">
                            Stephen Hawking
                        </button>
                    </div>
                </div>

                <div className="mt-[10px]">
                    <button className="flex flex-row justify-center items-center gap-2 w-[279px] h-[44px] bg-black hover:bg-[#000000be] text-[14px] font-normal text-white rounded-lg">
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