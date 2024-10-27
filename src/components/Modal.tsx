import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const router = useRouter();
    const navAssessment = () => {
        router.push("/assessment");
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-[690px] h-[510px]">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        ✕
                    </button>
                </div>
                <div className="text-center">
                    <img
                        src="/ai-education.svg"
                        alt="AI Illustration"
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-[18px] font-semibold mb-2">Welcome to AI for Inclusive Education</h2>
                    <p className="text-gray-600 mb-6 text-[16px] font-normal">
                        Let’s get started. You can now have a course content curated just for you in area you dearly want to know or learn more about and in accordance to the level of your IQ by the power of AI.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 text-[14px] h-[44px]">
                            Create your course
                            <Image
                                src="/icons/create-course.png" width={21} height={21} alt="create course" className="cursor-pointer"
                            />
                        </button>
                        <button onClick={navAssessment} className="bg-black px-4 py-2 rounded-md flex items-center gap-2 text-[14px] text-white h-[44px]">
                            Start Assessment 
                            <Image
                                src="/icons/arrow_right_white.png" width={18} height={18} alt="start" className="cursor-pointer"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
