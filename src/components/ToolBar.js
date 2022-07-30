import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const ToolBar = () => {
  return (
    <div className="flex justify-center items-center space-x-6 p-2">
      <LocaleSwitcher />
      <ThemeSwitcher />
    </div>
  );
};

export default ToolBar;
