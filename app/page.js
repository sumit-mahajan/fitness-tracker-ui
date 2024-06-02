import FontAwesomeIconWrapper from "@/components/FontAwesomeIconWrapper";
import SideBar from "@/components/SideBar";
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
import ActivityTracker from "@/components/ActivityTracker";

import ProfileAvatar from "../public/woman_avatar_1.png";
import KateAvatar from "../public/woman_avatar_2.jpg";
import Shoe from "../public/shoe.svg";

export default function Home() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <main className="w-full">
          <div className="flex justify-between items-center py-5 px-10 w-full">
            <div className="flex items-center">
              <FontAwesomeIconWrapper icon={faLocationDot} />
              <p className="pl-2  text-txt-color-secondary">
                Seattle, United States
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-card-color hover:bg-card-hover-color hover:cursor-pointer rounded-2xl p-2">
                <FontAwesomeIcon
                  className={"text-white  w-[23px] text-center"}
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
          <div className="grid grid-cols-2 gap-5 px-10">
            <div className="bg-tertiary rounded-2xl">
              <div className="flex flex-col items-center m-5">
                <FontAwesomeIconWrapper
                  icon={faClock}
                  className={"text-black"}
                />
                <p className="text-sm text-card-color mt-3">Time</p>
                <p className="text-black text-2xl font-bold">56m</p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl">
              <div className="flex flex-col items-center m-5">
                <FontAwesomeIconWrapper
                  icon={faRoute}
                  className={"text-black"}
                />
                <p className="text-sm text-card-color mt-3">Total Distance</p>
                <p className="text-black text-2xl font-bold">5.3km</p>
              </div>
            </div>
            <div className="bg-primary rounded-2xl">
              <div className="flex flex-col items-center m-5">
                <FontAwesomeIconWrapper
                  icon={faFire}
                  className={"text-black"}
                />
                <p className="text-sm text-card-color mt-3">Energy Burn</p>
                <p className="text-black text-2xl font-bold">1345 kcal</p>
              </div>
            </div>
            <div className="bg-quaternary rounded-2xl">
              <div className="flex flex-col items-center m-5">
                <FontAwesomeIconWrapper
                  icon={faMoon}
                  className={"text-black"}
                />
                <p className="text-sm text-card-color mt-3">Sleep</p>
                <p className="text-black text-2xl font-bold">7h 30m</p>
              </div>
            </div>
          </div>

          <div className="flex my-5 gap-5 mx-10">
            <div className=" bg-card-color p-5 rounded-2xl flex-1">
              <div className="flex flex-col items-center">
                <Image
                  className="rotate-45"
                  height={40}
                  width={40}
                  src={Shoe}
                  alt="left_shoe"
                />
                <p className="text-xs text-txt-color-secondary mt-2">Contact</p>
                <p className="text-sm mt-1">17 min</p>
                <p className="text-xs text-txt-color-secondary mt-2">
                  Flight Time
                </p>
                <p className="text-sm mt-1">17 min</p>
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
                <p className="text-xs text-txt-color-secondary mt-2">Contact</p>
                <p className="text-sm mt-1">17 min</p>
                <p className="text-xs text-txt-color-secondary mt-2">
                  Flight Time
                </p>
                <p className="text-sm mt-1">17 min</p>
              </div>
            </div>
            <div className=" bg-card-color p-5 rounded-2xl flex-1"></div>
          </div>

          <div className="bg-card-color p-5 rounded-2xl my-5 mx-10">
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
              <div className="h-1 w-[18vw] rounded-sm bg-white"></div>
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
