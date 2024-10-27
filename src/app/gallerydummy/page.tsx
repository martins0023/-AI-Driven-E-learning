"use client"
import { ThemeToggle } from "@/components/ThemeToggle";
import CourseCard from '@/components/CourseCard';
import Image from "next/image";
import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const page: React.FC = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  }
  const courses = [
    {
      imageSrc: '/course1.png',
      title: 'Full stack development is a combination of frontend and backend development',
      instructor: 'Miracle',
      rating: 4.8,
      duration: '12hrs',
    },
    {
      imageSrc: '/course2.jpg',
      title: 'Master modern JavaScript frameworks like React and Node.js',
      instructor: 'Miracle',
      rating: 4.9,
      duration: '15hrs',
    },
    {
      imageSrc: '/course3.jpg',
      title: 'Explore the world of UI/UX design for web and mobile applications and learn how to do design yourself',
      instructor: 'Miracle',
      rating: 4.7,
      duration: '10hrs',
    },
    {
      imageSrc: '/course3.jpg',
      title: 'Explore the world of UI/UX design for web and mobile applications and learn how to do design yourself',
      instructor: 'Miracle',
      rating: 4.7,
      duration: '10hrs',
    },
    {
      imageSrc: '/course3.jpg',
      title: 'Explore the world of UI/UX design for web and mobile applications and learn how to do design yourself',
      instructor: 'Miracle',
      rating: 4.7,
      duration: '10hrs',
    },
    {
      imageSrc: '/course1.png',
      title: 'Full stack development is a combination of frontend and backend development',
      instructor: 'Miracle',
      rating: 4.8,
      duration: '12hrs',
    },
    {
      imageSrc: '/course2.jpg',
      title: 'Master modern JavaScript frameworks like React and Node.js',
      instructor: 'Miracle',
      rating: 4.9,
      duration: '15hrs',
    },
  ];
  return (
    <section className="ml-[159px] mr-[30px] mb-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-[20px]">
          <Image onClick={handleGoBack} src="/west.png" width={28} height={28} alt="back" className="cursor-pointer" />
          <p className="font-bold text-[20px] text-black">Gallery</p>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <Image
            src="/notifications_active.png"
            width={28}
            height={28}
            alt="notification"
            className="cursor-pointer"
          />
          <ThemeToggle className="" />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center bg-gray-100 w-full rounded-md px-4 py-2 gap-5">
          <FaSearch className="text-gray-500 cursor-pointer" />
          <input
            type="text"
            placeholder="Search courses"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      <div className="flex flex-row gap-[20px] mt-4">
        <p className="font-black text-[12px] cursor-pointer">All Courses</p>
        <p className="font-extrabold text-[12px] text-gray-400 cursor-pointer">The Newest</p>
        <p className="font-extrabold text-[12px] text-gray-400 cursor-pointer">Top Rated</p>
        <p className="font-extrabold text-[12px] text-gray-400 cursor-pointer">Most Popular</p>
        <p className="font-extrabold text-[12px] text-gray-400 cursor-pointer">Trending</p>
        <p className="font-extrabold text-[12px] text-gray-400 cursor-pointer">
          Long time ago
        </p>
      </div>

      {/**courses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px] mt-[20px] w-full">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default page;
