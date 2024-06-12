import React from "react";
import OverviewCard from "./OverviewCard";
import overviewData from "../data/Overview";

const OverviewToday = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Overview - Today</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewData.map((data, index) => (
          <OverviewCard
            key={index}
            icon={data.icon}
            metric={data.metric}
            count={data.count}
            trend={data.trend}
            trendCount={data.trendCount}
          />
        ))}
      </div>
    </div>
  );
};

export default OverviewToday;
