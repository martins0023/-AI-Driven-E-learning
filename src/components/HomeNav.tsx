import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaBell } from 'react-icons/fa';
import SignInButton from "@/components/SignInButton";
import { getAuthSession } from "@/lib/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Typewriter } from "react-simple-typewriter";

// Sample data for the graph
const data = [
  { name: 'Mon', Completed: 2, InProgress: 3 },
  { name: 'Tue', Completed: 5, InProgress: 2 },
  { name: 'Wed', Completed: 6, InProgress: 4 },
  { name: 'Thu', Completed: 3, InProgress: 6 },
  { name: 'Fri', Completed: 7, InProgress: 5 },
  { name: 'Sat', Completed: 8, InProgress: 7 },
  { name: 'Sun', Completed: 4, InProgress: 6 },
];

type Props = {};

const HomeNav = async (props: Props) => {
  //const session = await getAuthSession();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <section className="mr-[30px]">
      <nav className=" ml-[159px] inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit justify-center">
        <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between">
          <div className="bg-gray-100 relative rounded-xl w-full h-[150px] mr-36 p-3 flex flex-row justify-between items-center">
            <div className="p-5">
              <div className="text-[24px] font-black">
              <Typewriter
                words={['Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Ola']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              </div>
              <p className="text-black font-medium text-[18px]">You're Welcome, It's Good To See You.</p>
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
              <div className="flex items-center bg-gray-100 w-full rounded-md px-4 py-2">
                <FaSearch className="text-gray-500 cursor-pointer" />
                <input
                  type="text"
                  placeholder="Search courses"
                  className="bg-transparent ml-2 outline-none w-full" />
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src="/notifications_active.png"
                  width={32}
                  height={32}
                  alt="hello"
                  className="w-[31px] h-[31px] rounded-md"
                />
                <Image
                  src="/profile.png"
                  width={31}
                  height={32}
                  alt="hello"
                  className="w-[31px] h-[31px] rounded-md"
                />

                <Image
                  src="/down.png"
                  width={18}
                  height={18}
                  alt="dropdown"
                  className="w-[18px] h-[18px] cursor-pointer"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute top-6 right-0 mt-2 bg-white shadow-md rounded-md p-2 z-10 cursor-pointer">
                    <SignInButton />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-10 mt-5 justify-between">
              <div className="bg-gray-100 h-[100px] w-full p-3 rounded-xl items-center justify-center flex flex-row gap-3">
                <p className="text-black font-black text-[42px]">11</p>
                <p className="text-black font-bold">Courses<br />Completed</p>
              </div>
              <div className="bg-gray-100 h-[100px] p-3 w-full rounded-xl items-center justify-center flex flex-row gap-3">
                <p className="text-black font-black text-[42px]">10</p>
                <p className="text-black font-bold">Courses<br />In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="ml-[159px] mt-5 px-8 mx-auto flex flex-row sm:justify-between">
        <div className="flex flex-col">
          <div>
            <div className="bg-gray-100 relative justify-between rounded-xl w-[500px] h-fit items-center mr-32 p-2 flex flex-row">
              <div className="flex flex-row gap-10">
                <div className="bg-white p-2 w-fit h-fit rounded-md">
                  <Image
                    src="/solar.jpeg"
                    width={40}
                    height={30}
                    alt="solar- system"
                    className="w-[40px] h-[30px] rounded-full"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-black font-semibold text-[14px]">Solar System</p>
                  <p className="text-black font-normal text-[12px]">by .Miracle Oladapo</p>
                </div>
              </div>

              <div>
                <p>83%</p>
              </div>
              <button className="bg-black text-white px-5 py-2 rounded-lg h-fit text-[14px]">Continue</button>
            </div>
          </div>

          <div className="flex flex-col mt-7">
            <p className="text-black font-black text-[18px]">Courses</p>

            <div className="flex flex-row gap-[20px] mt-4">
              <p className="font-black text-[12px]">All Courses</p>
              <p className="font-extrabold text-[12px] text-gray-400">The Newest</p>
              <p className="font-extrabold text-[12px] text-gray-400">Top Rated</p>
              <p className="font-extrabold text-[12px] text-gray-400">Most Popular</p>
            </div>

            {/**courses section */}
            <div className="grid grid-cols-2 mt-[14px] gap-[26px]">
              <div className="flex flex-col gap-[11px] w-[261px]">
                <Image
                  src="/course1.png"
                  width={400}
                  height={400}
                  alt="course"
                  className="w-[261px] h-[115px] rounded-lg"
                />
                <p className="w-[261px] text-black font-semibold text-[12px]">Full stack development is a combination of frontend and backend development</p>

                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-black font-normal text-[12px] ">by <span className="text-black font-semibold ">{` `} Miracle</span></p>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="items-center flex flex-row gap-1">
                      <Image
                        src="/streak.png"
                        width={15}
                        height={15}
                        alt="time"
                        className="w-[15px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">4.8</p>
                    </div>
                    <div className="items-center flex flex-row">
                      <Image
                        src="/time.png"
                        width={23.77}
                        height={15}
                        alt="time"
                        className="w-[23.77px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">12hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/**course 2 */}
              <div className="flex flex-col gap-[11px] w-[261px]">
                <Image
                  src="/course3.jpg"
                  width={400}
                  height={400}
                  alt="course"
                  className="w-[261px] h-[115px] rounded-lg"
                />
                <p className="w-[261px] text-black font-semibold text-[12px]">Full stack development is a combination of frontend and backend development</p>

                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-black font-normal text-[12px] ">by <span className="text-black font-semibold ">{` `} Miracle</span></p>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="items-center flex flex-row gap-1">
                      <Image
                        src="/streak.png"
                        width={15}
                        height={15}
                        alt="time"
                        className="w-[15px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">4.8</p>
                    </div>
                    <div className="items-center flex flex-row">
                      <Image
                        src="/time.png"
                        width={23.77}
                        height={15}
                        alt="time"
                        className="w-[23.77px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">12hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[11px] w-[261px]">
                <Image
                  src="/course2.jpg"
                  width={400}
                  height={400}
                  alt="course"
                  className="w-[261px] h-[115px] rounded-lg"
                />
                <p className="w-[261px] text-black font-semibold text-[12px]">Full stack development is a combination of frontend and backend development</p>

                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-black font-normal text-[12px] ">by <span className="text-black font-semibold ">{` `} Miracle</span></p>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="items-center flex flex-row gap-1">
                      <Image
                        src="/streak.png"
                        width={15}
                        height={15}
                        alt="time"
                        className="w-[15px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">4.8</p>
                    </div>
                    <div className="items-center flex flex-row">
                      <Image
                        src="/time.png"
                        width={23.77}
                        height={15}
                        alt="time"
                        className="w-[23.77px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">12hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/**course 2 */}
              <div className="flex flex-col gap-[11px] w-[261px]">
                <Image
                  src="/course3.jpg"
                  width={400}
                  height={400}
                  alt="course"
                  className="w-[261px] h-[115px] rounded-lg"
                />
                <p className="w-[261px] text-black font-semibold text-[12px]">Full stack development is a combination of frontend and backend development</p>

                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-black font-normal text-[12px] ">by <span className="text-black font-semibold ">{` `} Miracle</span></p>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="items-center flex flex-row gap-1">
                      <Image
                        src="/streak.png"
                        width={15}
                        height={15}
                        alt="time"
                        className="w-[15px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">4.8</p>
                    </div>
                    <div className="items-center flex flex-row">
                      <Image
                        src="/time.png"
                        width={23.77}
                        height={15}
                        alt="time"
                        className="w-[23.77px] h-[15px]"
                      />
                      <p className="text-black font-normal text-[12px]">12hrs</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex justify-center mt-10">
              <button className="text-white bg-black rounded-md w-[212px] h-[42px] text-[12px] mt-[12px]">See all</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20 ml-[125px] mb-10">
          <div className="flex-start justify-start">
            <p className="text-black font-extrabold text-[18px]">Your Statistics</p>

            <div className="flex flex-row gap-[40px] w-[580px] mt-3">
              <p className="text-black font-black text-[12px]">Learning Hours</p>
              <p className="text-[#B7B7B7] font-black text-[12px]">My Courses</p>
            </div>

            {/* Graph Section */}
            <div className=" mt-5">
              <div className="">
                <Image
                  src="/graph.png"
                  width={600}
                  height={200}
                  alt="time"
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F7] h-[158px] w-full rounded-xl p-5 flex flex-row items-center justify-between">
            <div>
              <p className="text-black font-black text-[16px]">Learn even more</p>
              <p className="text-black font-normal text-[14px] w-[189px] mt-2">Unlock premium features
                only for $10.99 per month.</p>

              <button className="text-white bg-black rounded-md w-[112px] h-[42px] text-[12px] mt-[12px]">Go premium</button>
            </div>

            <div>
              <Image
                src="/bolt.png"
                width={125}
                height={125}
                alt="premium"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNav;
