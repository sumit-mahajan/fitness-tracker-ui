import FontAwesomeIconWrapper from "@/components/FontAwesomeIconWrapper";
import SideBar from "@/components/SideBar";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ProfileAvatar from "../public/woman_avatar_1.png";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActivityTracker from "@/components/ActivityTracker";

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
            <div className="bg-tertiary h-28 rounded-2xl"></div>
            <div className="bg-secondary h-28 rounded-2xl"></div>
            <div className="bg-primary h-28 rounded-2xl"></div>
            <div className="bg-quaternary h-28 rounded-2xl"></div>
          </div>
        </main>
        <ActivityTracker />
      </div>
    </>
  );
}
