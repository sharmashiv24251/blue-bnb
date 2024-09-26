import React from "react";
import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import ModeToggle from "./DarkMode";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border-b sticky top-0 z-50 bg-background/30 backdrop-blur-md">
      <div className="container pt-4 pb-0 sm:pb-4 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/4 flex justify-between sm:justify-start items-center mb-4 sm:mb-0">
            <Logo />
            <div className="flex items-center gap-4 sm:hidden">
              <ModeToggle />
              <LinksDropdown />
            </div>
          </div>

          <div className="w-full sm:w-1/2 order-last sm:order-none mb-4 sm:mb-0">
            <NavSearch />
          </div>

          <div className="hidden sm:flex w-1/4 justify-end items-center gap-4">
            <ModeToggle />
            <LinksDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
