import { useState, useEffect } from "react";
import Header from "./components/Header";

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
      <div className="bg-white text-white min-h-screen dark:bg-vedarkblueB pt-5">
        <div className="max-w-5xl mx-auto w-11/12 pt-5">
          <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
        </div>
      </div>
    </>
  );
}
