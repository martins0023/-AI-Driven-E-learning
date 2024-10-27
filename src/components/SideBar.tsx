"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { FaHome, FaGraduationCap, FaUser, FaCog, FaSignOutAlt, FaRegEdit, FaBookReader } from 'react-icons/fa';
import Modal from './Modal';

const SideBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const pathname = usePathname(); // Get the current route path

    // Function to determine if the route is active
    const isActive = (path: string) => pathname === path;

    return (
        <div className=" ml-[31px]">
            {/* Top Section with Logo and Navigation Icons */}
            <div className="bg-black rounded-2xl w-24 h-screen items-center py-5 flex flex-col justify-between fixed top-0 z-[10]">
                <div className="flex flex-col items-center gap-10">
                    {/* Placeholder for Logo */}
                    <Link href="/" className=" text-black flex justify-center items-center mt-5">
                        <Image
                            src="/logo.svg" width={28} height={28} alt="logo" className="cursor-pointer"
                        />
                    </Link>
                    {/* Navigation Icons */}
                    <div className="flex flex-col items-center gap-12 mt-14 justify-center">
                        <Link href="/" passHref>
                            <FaHome
                                className={`text-2xl cursor-pointer ${isActive('/') ? 'text-white' : 'text-gray-400'
                                    }`}
                            />
                        </Link>
                        <Link href="/gallerydummy" passHref>
                            <FaBookReader
                                className={`text-2xl cursor-pointer ${isActive('/gallerydummy') ? 'text-white' : 'text-gray-400'
                                    }`}
                            />
                        </Link>
                        <Link href="/profile" passHref>
                            <FaUser
                                className={`text-2xl cursor-pointer ${isActive('/profile') ? 'text-white' : 'text-gray-400'
                                    }`}
                            />
                        </Link>
                        <Link href="" passHref onClick={openModal}>
                            <FaRegEdit
                                className={`text-2xl cursor-pointer ${isActive('/assessment' || '/create-course') ? 'text-white' : 'text-gray-400'
                                    }`}
                            />
                        </Link>
                        <Link href="/settings" passHref>
                            <FaCog
                                className={`text-2xl cursor-pointer ${isActive('/settings') ? 'text-white' : 'text-gray-400'
                                    }`}
                            />
                        </Link>
                    </div>
                </div>
                {/* Bottom Section with Logout Icon */}
                <div className="flex justify-center mb-10">
                    <Link href="/logout" passHref>
                        <FaSignOutAlt
                            className={`text-2xl cursor-pointer ${isActive('/logout') ? 'text-white' : 'text-gray-400'
                                }`}
                        />
                    </Link>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default SideBar;
