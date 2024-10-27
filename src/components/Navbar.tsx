import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaSearch, FaBell } from 'react-icons/fa';
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { ThemeToggle } from "./ThemeToggle";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();
  console.log(session);
  return (
    <nav className=" ml-[150px] inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit justify-center">
      <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between">
        <div className="bg-gray-100 relative rounded-xl w-full h-[150px] mr-32 p-3 flex flex-row justify-between items-center">
          <div>
            <p className="text-black font-black text-[32px]">Hello Josh!</p>
            <p className="text-black font-medium text-[18px]">It's good to see you again.</p>
          </div>
          <div className="absolute right-5 bottom-0 z-10 mr-10">
            <Image
              src="/doodle.png"
              width={150}
              height={350}
              alt="hello"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col w-full">
          <div className="flex flex-row items-center gap-4 justify-between">
            <div className="flex items-center bg-gray-100 w-[450px] rounded-md px-4 py-2">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder=""
                className="bg-transparent ml-2 outline-none" />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <FaBell className="text-gray-500 cursor-pointer w-[25px] h-[25px]" />
              <ThemeToggle className="" />
            </div>
          </div>

          <div className="flex flex-row gap-10 mt-5 justify-between">
            <div className="bg-gray-100 h-[100px] w-full p-3 rounded-xl items-center flex flex-row gap-3">
              <p className="text-black font-black text-[42px]">11</p>
              <p className="text-black font-bold">Courses<br />Completed</p>
            </div>
            <div className="bg-gray-100 h-[100px] p-3 w-full rounded-xl items-center flex flex-row gap-3">
              <p className="text-black font-black text-[42px]">11</p>
              <p className="text-black font-bold">Courses<br />In Progress</p>
            </div>
          </div>

          {session?.user && (
            <>
              <Link href="/create" className="mr-3">
                Create Course
              </Link>
              <Link href="/settings" className="mr-3">
                Settings
              </Link>
            </>
          )}

          {/**
          <div className="flex items-center">
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton />
            )}
          </div>
           */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
