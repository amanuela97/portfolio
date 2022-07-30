import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../utils/useDarkSide";

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={36} />
      </div>
    </>
  );
};

export default ThemeSwitcher;
