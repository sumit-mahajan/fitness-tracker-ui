"use client";

import { useEffect, useState } from "react";
import {
  faCalendar,
  faClock,
  faFire,
  faLocationDot,
  faMoon,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FontAwesomeIconWrapper from "@/components/FontAwesomeIconWrapper";
import SideBar from "@/components/SideBar";
import ActivityTracker from "@/components/ActivityTracker";
import LoadingPage from "@/components/LoadingPage";

import ProfileAvatar from "../public/images/woman_avatar_1.png";
import KateAvatar from "../public/images/woman_avatar_2.jpg";
import Shoe from "../public/images/shoe.svg";
import Symmetry from "../public/images/symmetry.png";
import FitnessLogo from "../public/images/fitness-logo.svg";
import GreenUpIcon from "../public/images/green-up.svg";
import RedDownIcon from "../public/images/red-down.svg";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      {!isMobile ? (
        <SideBar />
      ) : isMenuOpen ? (
        <SideBar setMenuOpen={setMenuOpen} />
      ) : (
        <></>
      )}
      <div className="flex flex-col sm:flex-row">
        <main className="w-full sm:ml-[17vw]">
          <div className="flex justify-between items-center py-5 px-5 sm:px-10 w-full">
            <div className="flex items-center">
              <Image
                src={FitnessLogo}
                height={30}
                width={35}
                className="mr-5 block sm:hidden"
                alt={"logo"}
                onClick={() => {
                  setMenuOpen(true);
                }}
              />
              <FontAwesomeIconWrapper icon={faLocationDot} />
              <p className="pl-2 text-txt-color-secondary">
                Seattle, United States
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-card-color hover:bg-card-hover-color hover:cursor-pointer rounded-2xl p-2">
                <FontAwesomeIcon
                  className={"text-white w-[23px] text-center"}
                  icon={faBell}
                />
              </div>
              <Image
                className="ml-5 rounded-2xl"
                height={40}
                width={40}
                src={ProfileAvatar}
                alt="profile_avatar"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 px-5 py-2 sm:px-10">
            <div className="bg-tertiary rounded-2xl">
              <div className="flex flex-col items-center m-5 my-6">
                <FontAwesomeIconWrapper
                  icon={faClock}
                  className={"text-black"}
                />
                <p className="text-md text-card-color mt-3">Time</p>
                <p className="mt-1 text-black text-2xl font-bold">56m</p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl">
              <div className="flex flex-col items-center m-5 my-6">
                <FontAwesomeIconWrapper
                  icon={faRoute}
                  className={"text-black"}
                />
                <p className="text-md text-card-color mt-3">Total Distance</p>
                <p className="mt-1 text-black text-2xl font-bold">5.3km</p>
              </div>
            </div>
            <div className="bg-primary rounded-2xl">
              <div className="flex flex-col items-center m-5 my-6">
                <FontAwesomeIconWrapper
                  icon={faFire}
                  className={"text-black"}
                />
                <p className="text-md text-card-color mt-3">Energy Burn</p>
                <p className="mt-1 text-black text-2xl font-bold">1345 kcal</p>
              </div>
            </div>
            <div className="bg-quaternary rounded-2xl">
              <div className="flex flex-col items-center m-5 my-6">
                <FontAwesomeIconWrapper
                  icon={faMoon}
                  className={"text-black"}
                />
                <p className="text-md text-card-color mt-3">Sleep</p>
                <p className="mt-1 text-black text-2xl font-bold">7h 30m</p>
              </div>
            </div>
          </div>

          <div className="flex my-5 gap-5 px-5 sm:px-10">
            <div className=" bg-card-color p-5 rounded-2xl flex-1">
              <div className="flex flex-col items-center">
                <Image
                  className="rotate-45"
                  height={40}
                  width={40}
                  src={Shoe}
                  alt="left_shoe"
                />
                <p className="text-xs text-txt-color-secondary mt-4">Contact</p>
                <div className="flex items-end mt-1">
                  <p className="text-sm mr-1">17 min</p>
                  <Image height={15} width={15} src={GreenUpIcon} alt="up" />
                </div>

                <p className="text-xs text-txt-color-secondary mt-2">
                  Flight Time
                </p>
                <div className="flex items-end mt-1">
                  <p className="text-sm mr-1">17 min</p>
                  <Image height={15} width={15} src={RedDownIcon} alt="down" />
                </div>
              </div>
            </div>
            <div className=" bg-card-color p-5 rounded-2xl flex-1">
              <div className="flex flex-col items-center">
                <Image
                  className="-rotate-45"
                  height={40}
                  width={40}
                  src={Shoe}
                  alt="right_shoe"
                />
                <p className="text-xs text-txt-color-secondary mt-4">Contact</p>
                <div className="flex items-end mt-1">
                  <p className="text-sm mr-1">17 min</p>
                  <Image height={15} width={15} src={GreenUpIcon} alt="up" />
                </div>

                <p className="text-xs text-txt-color-secondary mt-2">
                  Flight Time
                </p>
                <div className="flex items-end mt-1">
                  <p className="text-sm mr-1">17 min</p>
                  <Image height={15} width={15} src={RedDownIcon} alt="down" />
                </div>
              </div>
            </div>
            <div className=" bg-card-color p-5 rounded-2xl flex-1">
              <div className="flex flex-col items-center">
                <Image height={40} width={40} src={Symmetry} alt="symmetry" />
                <p className="text-xs text-txt-color-secondary mt-4">
                  Symmetry
                </p>
                <div className="flex items-baseline justify-between my-3.5 sm:my-2 gap-2 sm:gap-3">
                  {Array(isMobile ? 6 : 9)
                    .fill("")
                    .map((obj, idx) => (
                      <div
                        key={idx}
                        style={{
                          height: ((isMobile ? 6 : 9) - idx) / 4 + "rem",
                        }}
                        className={`bg-white w-[2px] rounded-xl`}
                      ></div>
                    ))}
                </div>
                <div className="flex items-end">
                  <p className="text-sm mr-1">95 %</p>
                  <Image height={15} width={15} src={GreenUpIcon} alt="up" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card-color p-5 rounded-2xl my-5 mx-5 sm:mx-10">
            <div className="flex">
              <Image
                className="rounded-2xl"
                height={40}
                width={40}
                src={KateAvatar}
                alt="friend_avatar"
              />
              <div>
                <p className="ml-4 text-md">Running with Kate</p>
                <div className="flex items-center mt-1 ">
                  <FontAwesomeIcon
                    className="ml-4"
                    size={"xs"}
                    icon={faCalendar}
                  />
                  <p className="ml-2 text-xs">9 Sep, 2022</p>
                </div>
              </div>
              <div className="ml-auto text-xs rounded-3xl bg-card-hover-color grid place-content-center px-5 hover:cursor-pointer">
                <p>Details</p>
              </div>
            </div>

            <div className="flex justify-center gap-5 my-5">
              <Image
                className="rotate-45"
                height={50}
                width={50}
                src={Shoe}
                alt="left_shoe_1"
              />
              <Image
                className="-rotate-45"
                height={50}
                width={50}
                src={Shoe}
                alt="right_shoe_2"
              />
            </div>

            <div className="h-1 w-full rounded-sm bg-card-hover-color flex justify-center">
              <div className="h-1 w-48 rounded-sm bg-white"></div>
            </div>

            <p className="text-sm text-center mt-5">Double Walking Time</p>
            <p className=" text-xl text-center font-semibold">34 min</p>
          </div>
        </main>
        <ActivityTracker />
      </div>
    </>
  );
}
