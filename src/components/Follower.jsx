import React from "react";
import Followers from "../data/Followers";
import FollowersCard from "./FollowersCard";

const Follower = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
      {Followers.map((data, index) => (
        <FollowersCard
          key={index}
          icon={data.icon}
          name={data.name}
          followers={data.followers}
          title={data.title}
          trend={data.trend}
          trendCount={data.trendCount}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default Follower;
