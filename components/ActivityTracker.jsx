"use client";

import {
  faClock,
  faFire,
  faPlus,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    { weekday: "Sun", date: 18 },
    { weekday: "Mon", date: 19 },
    { weekday: "Tue", date: 20 },
    { weekday: "Wed", date: 21 },
    { weekday: "Thu", date: 22 },
    { weekday: "Fri", date: 23 },
    { weekday: "Sat", date: 24 },
  ];

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
      <div className="bg-card-color rounded-3xl my-5 mr-8 right-0">
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
          <div className="flex justify-between px-7">
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
          <div className="h-[120px] px-7 mt-7 mb-4">
            <Line
              options={{ maintainAspectRatio: false }}
              data={lineChartData}
            />
          </div>
          <div className="bg-card-hover-color p-5 rounded-2xl mx-7">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} />
              <p className="text-sm ml-3 text-txt-color-secondary">
                Total Running Time
              </p>
            </div>
            <p className="text-lg font-semibold ml-7">2 h 45 m</p>
            <div className="flex justify-between px-7">
              {datesList.map((day, idx) => (
                <div
                  key={day.weekday}
                  className={`flex flex-col items-center w-[35px]`}
                >
                  <div
                    className={`bg-white my-3 h-[25px] w-[5px] rounded-lg`}
                  ></div>
                  <p className="text-sm text-txt-color-secondary">
                    {day.weekday}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-5">
            <div className="bg-card-hover-color p-5 rounded-2xl mx-7">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faRoute} />
                <p className="text-sm ml-3 text-txt-color-secondary">
                  Distance Goal
                </p>
              </div>
              <p className="text-lg font-semibold ml-7">70 km</p>
            </div>
            <div className="bg-card-hover-color p-5 rounded-2xl mx-7">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFire} />
                <p className="text-sm ml-3 text-txt-color-secondary">
                  Average Speed
                </p>
              </div>
              <p className="text-lg font-semibold ml-7">13 km/hr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityTracker;
