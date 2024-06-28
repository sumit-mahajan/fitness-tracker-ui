"use client";

import {
  faClock,
  faFire,
  faPlus,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function ActivityTracker() {
  const datesList = [
    { weekday: "Sun", date: 18, runningTime: 24 },
    { weekday: "Mon", date: 19, runningTime: 30 },
    { weekday: "Tue", date: 20, runningTime: 8 },
    { weekday: "Wed", date: 21, runningTime: 18 },
    { weekday: "Thu", date: 22, runningTime: 24 },
    { weekday: "Fri", date: 23, runningTime: 40 },
    { weekday: "Sat", date: 24, runningTime: 30 },
  ];

  const timePerDay = [24, 30, 40, 18, 24, 8, 30];

  const [selectedDayIndex, setSelectedDayIndex] = useState(4);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createRandomArray(size, min, max) {
    let randomArray = [];
    for (let i = 0; i < size; i++) {
      randomArray.push(generateRandomNumber(min, max));
    }
    return randomArray;
  }

  const lineChartData = {
    labels: new Array(12).fill(""),
    datasets: [
      {
        label: "",
        data: createRandomArray(12, 60, 90),
        borderColor: "white",
      },
    ],
  };

  return (
    <>
      <div className="bg-card-color sm:rounded-3xl sm:my-5 sm:mx-0 sm:mr-8 right-0">
        <div className="flex justify-between items-center px-7 py-5">
          <div>
            <p className="text-2xl font-medium">Activity Tracking</p>
            <p className="text-sm mt-2">Thursday, 22 Sep</p>
          </div>
          <div className="rounded-2xl">
            <FontAwesomeIcon
              className={
                "text-white hover:cursor-pointer border border-gray-500 rounded-2xl p-3 hover:bg-card-hover-color"
              }
              icon={faPlus}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between px-7 gap-1">
            {datesList.map((day, idx) => (
              <div
                key={day.weekday}
                onClick={() => {
                  setSelectedDayIndex(idx);
                }}
                className={`${
                  idx === selectedDayIndex ? "bg-card-hover-color" : ""
                } flex flex-col items-center p-3 hover:bg-card-hover-color hover:cursor-pointer rounded-xl w-[45px]`}
              >
                <p className="text-sm">{day.weekday}</p>
                <p className="font-medium mt-4">{day.date}</p>
              </div>
            ))}
          </div>

          <div className="h-[140px] mt-6 px-7">
            <Line
              options={{ maintainAspectRatio: false }}
              data={lineChartData}
            />
          </div>

          <p className="mb-6 text-sm text-center">Heart Rate</p>

          <div className="bg-card-hover-color p-5 rounded-2xl mx-7">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} />
              <p className="text-sm ml-3 text-txt-color-secondary">
                Total Running Time
              </p>
            </div>
            <p className="text-lg font-semibold ml-7">2 h 45 m</p>
            <div className="flex justify-between">
              {datesList.map((day, idx) => {
                const calculatedHeight = Math.round(
                  (50 * day.runningTime) / 40
                );
                return (
                  <div
                    key={day.weekday}
                    className={`flex flex-col items-center w-[35px]`}
                  >
                    <div
                      className={`relative bg-card-hover-color my-4 h-[50px] w-[5px] rounded-xl`}
                    >
                      <div
                        style={{ height: calculatedHeight + "px" }}
                        className={`absolute bottom-0 bg-white w-[5px] rounded-xl`}
                      ></div>
                    </div>
                    <p className="text-sm text-txt-color-secondary">
                      {day.weekday}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex my-5">
            <div className="bg-card-hover-color p-5 rounded-2xl ml-7 mr-5 flex-1">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faRoute} />
                <p className="text-sm ml-3 text-txt-color-secondary">
                  Distance Goal
                </p>
              </div>
              <p className="text-lg font-semibold ml-7">70 km</p>
              <CircularProgressbar
                className="h-28 mt-4"
                value={55}
                text={`37.1 km`}
              />
            </div>

            <div className="bg-card-hover-color p-5 rounded-2xl mr-7 flex-1">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFire} />
                <p className="text-sm ml-3 text-txt-color-secondary">
                  Average Speed
                </p>
              </div>
              <p className="text-lg font-semibold ml-7">13 km/hr</p>
              <div className="flex items-baseline justify-around mt-10 mr-3">
                {Array(9)
                  .fill("")
                  .map((obj, idx) => (
                    <div
                      key={idx}
                      style={{ height: (idx + 1) / 2 + "rem" }}
                      className={`bg-quaternary w-[5px] rounded-xl`}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityTracker;
