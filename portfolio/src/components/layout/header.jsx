import { useEffect, useState } from "react";
export const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("DarkMode") === "true") {
      console.log("hello");
    }
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
    localStorage.setItem("hello", "leap");
  }, [isDarkMode]);
  return (
    <div className="flex justify-between items-center self-stretch px-[80px] py-[16px]">
      <div className="flex w-full justify-between items-center px-[32px]">
        <div>
          <img className="" src="_.png" alt="" />
        </div>
        <div className="flex gap-4">
          <button>About</button>
          <button>Work</button>
          <button>Testimonials</button>
          <button>Contact</button>
          <div className="border-l-black border-l-[1px]"></div>
          <button onClick={() => setDarkMode((prevState) => !prevState)}>
            <img src="moon.png" alt="" />
          </button>
          <button className="bg-black text-white rounded-xl dark:bg-white">
            <div className="px-[16px] py-[6px] dark:text-black">Download CV</div>
          </button>
        </div>
      </div>
    </div>
  );
};
