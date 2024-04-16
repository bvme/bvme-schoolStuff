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
		<div className="flex w-full justify-between items-center px-[110px] py-[10px] fixed">
			<div>
				<img src="icon-nextjs.png" alt="" />
			</div>
			<div className="flex gap-4 right-20">
				<button>About</button>
				<button>Work</button>
				<button>Testimonials</button>
				<button>Contact</button>
				<div className="border-l-black border-l-[1px]"></div>
				<button onClick={() => setDarkMode((prevState) => !prevState)}>
					<img className=" hidden dark:flex" src="moon.png" alt="" />
					<img className=" dark:hidden" src="sun.png" alt="" />
				</button>
				<button className="bg-black text-white rounded-xl dark:bg-white">
					<div className="px-[16px] py-[6px] dark:text-black">Download CV</div>
				</button>
			</div>
		</div>
	);
};
