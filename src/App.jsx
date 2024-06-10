import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-togglelight dark:bg-toggledark text-lg flex dark:justify-start justify-end
    w-10  rounded-md">
        <FaCircle className=" text-white dark:text-darkdesblue" />
        {/*  {theme === "dark" ? <FaToggleOn /> : <FaToggleOff />} */}
      </div>
      <div className=" bg-white text-white min-h-screen dark:bg-vedarkblueB">
        <h1>Hello World</h1>
      </div>
    </>
  );
}
