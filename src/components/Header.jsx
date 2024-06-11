import React from "react";
import { FaCircle } from "react-icons/fa";

const Header = ({ theme, handleThemeSwitch }) => {
  return (
    <div id="Header" className="w-full justify-between pt-5 block md:flex">
      <div>
        <h1 className="text-2xl font-bold text-black">
          Social Media Dashboard
        </h1>
        <p className="dark:text-desBlue text-dagrayblue font-bold text-sm">
          Total Followers : 23,004
        </p>
      </div>
      <hr className="my-3 md:none" />
      <div className="flex gap-4 items-center justify-between md:justify-center">
        <p className="text-dagrayblue dark:text-white font-bold text-sm">
          Dark Theme
        </p>
        <div>
          <div
            onClick={handleThemeSwitch}
            className="bg-togglelight dark:bg-toggledark text-lg flex dark:justify-start justify-end w-10 items-center rounded-md cursor-pointer ">
            <FaCircle className="text-white dark:text-darkdesblue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
