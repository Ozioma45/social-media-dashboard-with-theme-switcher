import React from "react";
import { iconDown, iconUp } from "../assets/index";

const OverviewCard = ({ icon, metric, count, trend, trendCount }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg p-6 dark:bg-darkdesblue bg-ligrayblue">
      <div className="flex items-center justify-between mb-4">
        <div className="flex  w-full justify-between">
          <span className="text-xs font-bold text-gray-500">{metric}</span>
          <img src={icon} alt={metric} className="w-6 h-6" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-vedarkblueB dark:text-white">
            {count}
          </h2>
        </div>

        <div
          className={`flex items-center justify-center mt-4 text-sm ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}>
          <img
            src={trend === "up" ? iconUp : iconDown}
            alt={trend === "up" ? "Upward trend" : "Downward trend"}
            className="w-2 h-2"
          />
          <span className="text-xs">{trendCount}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
