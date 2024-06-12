import React from "react";
import { iconDown, iconUp } from "../assets/index";

const FollowersCard = ({
  icon,
  name,
  followers,
  title,
  trend,
  trendCount,
  color,
}) => {
  const isGradient = color.startsWith("linear-gradient");

  return (
    <div
      className={`dark:bg-darkdesblue bg-ligrayblue rounded-lg overflow-hidden shadow-lg p-6 ${
        isGradient ? "" : "border-t-4"
      }`}
      style={
        isGradient
          ? { borderTop: `4px solid transparent`, borderImage: `${color} 1` }
          : { borderTopColor: color }
      }>
      <div className="flex items-center justify-center mb-4 gap-3">
        <img src={icon} alt={`${name} icon`} className="w-4 h-4" />
        <span className="text-gray-500 font-bold">{name}</span>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-2 text-vedarkblueB dark:text-white">
          {followers}
        </h2>
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          {title}
        </p>
      </div>
      <div
        className={`flex items-center justify-center mt-4 text-sm ${
          trend === "up" ? "text-green-500" : "text-red-500"
        }`}>
        <img
          src={trend === "up" ? iconUp : iconDown}
          alt={trend === "up" ? "Upward trend" : "Downward trend"}
          className="w-2 h-2 mr-2 "
        />
        <span className="text-xs">{trendCount} Today</span>
      </div>
    </div>
  );
};

export default FollowersCard;
