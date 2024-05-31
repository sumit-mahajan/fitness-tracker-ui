import FontAwesomeIconWrapper from "@/components/FontAwesomeIconWrapper";
import SideBar from "@/components/SideBar";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ProfileAvatar from "../public/woman_avatar_1.png";

export default function Home() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <main className="w-full">
          <div className="flex justify-between items-center py-5 pl-10 pr-6 w-full">
            <div className="flex items-center">
              <FontAwesomeIconWrapper icon={faLocationDot} />
              <p className="pl-2  text-txt-color-secondary">
                Seattle, United States
              </p>
            </div>
            <Image
              className="rounded-2xl"
              height={40}
              width={40}
              src={ProfileAvatar}
              alt="profile_avatar"
            />
          </div>
        </main>
        <div className="bg-card-color rounded-3xl m-5 right-0 min-h-screen min-w-[400px]"></div>
      </div>
    </>
  );
}
