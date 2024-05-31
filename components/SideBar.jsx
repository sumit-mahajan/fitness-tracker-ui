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

function SideBar() {
  return (
    <aside className="min-h-screen min-w-52 bg-card-color">
      <Image
        src={FitnessLogo}
        height={30}
        width={35}
        className="mx-auto pt-12 pb-6"
        alt={"logo"}
      />

      <div className="flex-col">
        <div className="flex items-center pl-8 pt-6">
          <FontAwesomeIconWrapper icon={faHouse} />
          <p className="ml-4">Overview</p>
        </div>

        <div className="flex items-center pl-8 pt-6 text-txt-color-secondary hover:text-white cursor-pointer">
          <FontAwesomeIconWrapper icon={faMedal} />
          <p className="ml-4">Competition</p>
        </div>

        <div className="flex items-center pl-8 pt-6  text-txt-color-secondary hover:text-white cursor-pointer">
          <FontAwesomeIconWrapper icon={faClock} />
          <p className="ml-4">Timer</p>
        </div>

        <div className="flex items-center pl-8 pt-6  text-txt-color-secondary hover:text-white cursor-pointer">
          <FontAwesomeIconWrapper icon={faBolt} />
          <p className="ml-4">Energy</p>
        </div>

        <div className="flex items-center pl-8 pt-6  text-txt-color-secondary hover:text-white cursor-pointer">
          <FontAwesomeIconWrapper icon={faCalendar} />
          <p className="ml-4">Calendar</p>
        </div>

        <div className="flex items-center pl-8 pt-6  text-txt-color-secondary hover:text-white cursor-pointer">
          <FontAwesomeIconWrapper icon={faFontAwesome} />
          <p className="ml-4">Distances</p>
        </div>

        <div className="flex items-center pl-8 pt-6  text-txt-color-secondary hover:text-white cursor-pointer">
          <FontAwesomeIconWrapper icon={faUser} />
          <p className="ml-4">Profile</p>
        </div>

        <div className="flex items-center pl-8 pt-6  text-txt-color-secondary hover:text-white cursor-pointer">
          <FontAwesomeIconWrapper icon={faGear} />
          <p className="ml-4">Settings</p>
        </div>
      </div>

      <div className="flex items-center pl-8 absolute bottom-0 pb-10  text-txt-color-secondary hover:text-white cursor-pointer">
        <FontAwesomeIconWrapper icon={faArrowRightFromBracket} />
        <p className="ml-4">Log Out</p>
      </div>
    </aside>
  );
}

export default SideBar;
