import FitnessLogo from "../public/fitness-logo.svg";
import {
  faHouse,
  faCalendar,
  faGear,
  faUser,
  faClock,
  faBolt,
  faFontAwesome,
  faMedal,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIconWrapper from "@/components/FontAwesomeIconWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <aside className="min-h-screen max-w-48 bg-card-color">
        <Image
          src={FitnessLogo}
          height={36}
          width={42}
          className="mx-auto pt-10 pb-4"
          alt={"logo"}
        />

        <div className="flex-col">
          <div className="flex items-center pl-8 pt-6">
            <FontAwesomeIconWrapper icon={faHouse} />
            <p className="ml-4">Overview</p>
          </div>

          <div className="flex items-center pl-8 pt-6 text-txt-color-secondary">
            <FontAwesomeIconWrapper icon={faMedal} />
            <p className="ml-4">Competition</p>
          </div>

          <div className="flex items-center pl-8 pt-6">
            <FontAwesomeIconWrapper icon={faClock} />
            <p className="ml-4">Timer</p>
          </div>

          <div className="flex items-center pl-8 pt-6">
            <FontAwesomeIconWrapper icon={faBolt} />
            <p className="ml-4">Energy</p>
          </div>

          <div className="flex items-center pl-8 pt-6">
            <FontAwesomeIconWrapper icon={faCalendar} />
            <p className="ml-4">Calendar</p>
          </div>

          <div className="flex items-center pl-8 pt-6">
            <FontAwesomeIconWrapper icon={faFontAwesome} />
            <p className="ml-4">Distances</p>
          </div>

          <div className="flex items-center pl-8 pt-6">
            <FontAwesomeIconWrapper icon={faUser} />
            <p className="ml-4">Profile</p>
          </div>

          <div className="flex items-center pl-8 pt-6">
            <FontAwesomeIconWrapper icon={faGear} />
            <p className="ml-4">Settings</p>
          </div>
        </div>

        <div className="flex items-center pl-8 absolute bottom-0 pb-10">
          <FontAwesomeIconWrapper icon={faArrowRightFromBracket} />
          <p className="ml-4">Log Out</p>
        </div>
      </aside>
    </main>
  );
}
