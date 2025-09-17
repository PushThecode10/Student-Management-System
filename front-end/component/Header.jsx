import React from 'react';
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="ml-65 bg-blue-400 shadow px-4 py-3">
      <div className="flex  items-center justify-between">
        {/* Menu Icon */}
        <div className="text-[25px] cursor-pointer">
          <IoMenu />
        </div>

        {/* Search Input */}
        <div className="w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search here"
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Logo */}
        <div>
          <img
            src="../src/assets/logo.png"
            alt="logo"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
