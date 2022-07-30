import { useState, useEffect, useRef } from "react";
import ToolBar from "./ToolBar";
import { useData } from "../utils/data";
import { Link } from "react-scroll";
import resume from "../public/resume.pdf";

function Navbar() {
  const [hamburger, setHamburger] = useState(true);
  const [active, setActive] = useState(localStorage.getItem("activeTab") || "Home");
  const lastScrollTop = useRef(0);
  const { navigation } = useData();

  const handleNavVisibility = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop.current) {
      document.getElementsByTagName("nav")[0].style.top = "-74px";
    } else {
      document.getElementsByTagName("nav")[0].style.top = "0";
    }
    lastScrollTop.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavVisibility);
    return () => {
      window.removeEventListener("scroll", handleNavVisibility);
    };
  }, []);

  return (
    <nav className="top-0 fixed flex flex-wrap md:flex-nowrap justify-between items-center z-50 backdrop-blur-md opacity-90 transition-all delay-100 gap-2 w-full p-2 text-black dark:bg-gray-800 dark:text-white">
      {/*Brand Name*/}
      <div className="flex items-center justify-center gap-1 pl-2">
        <ToolBar />
      </div>

      {/*Hamburgher Icon for mobile*/}
      <button
        className="w-10 h-10 relative md:hidden p-2 mr-4 text-sm text-gray-500 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setHamburger((prev) => !prev)}>
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              !hamburger ? "rotate-45" : "-translate-y-1.5"
            }`}></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              !hamburger && "opacity-0"
            }`}></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              !hamburger ? "-rotate-45" : "translate-y-1.5"
            }`}></span>
        </div>
      </button>

      {/*Navigation Items*/}
      <div
        className={`${
          hamburger ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"
        }`}>
        <ul className="flex flex-col items-center justify-center space-y-2 mt-2 md:mr-4 md:space-y-0 md:flex-row md:space-x-8 md:mt-0 p-2">
          {navigation.map((navItem, index) =>
            navItem.to !== "#" ? (
              <Link
                key={index}
                className={`text-lg font-medium border-b-4 block cursor-pointer ${
                  active === navItem.name
                    ? "border-b-4 border-b-slate-400 text-slate-400 dark:border-b-cyan-700 dark:text-cyan-700"
                    : "border-b-4 border-b-transparent"
                }`}
                onClick={() => [
                  setActive(navItem.name),
                  localStorage.setItem("activeTab", navItem.name)
                ]}
                to={navItem.to}
                smooth
                duration={500}>
                {navItem.name}
              </Link>
            ) : (
              <button
                key={index}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-lg dark:bg-gr bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500  focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-5 py-2 transition-all ease-in duration-75 text-lg font-medium rounded-md hover:bg-slate-600 dark:hover:bg-cyan-900 bg-slate-400 hover:text-black dark:hover:text-white dark:bg-cyan-700 group-hover:bg-opacity-0">
                  {navItem.name}
                </a>
              </button>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
