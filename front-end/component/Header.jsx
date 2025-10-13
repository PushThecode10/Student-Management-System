import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility when user clicks on the icon
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
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
        <div className="p-1 cursor-pointer">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 crsor-pointer relative"
            onClick={toggleDropdown}>
            <h1 name="person-circle-outline" className="text-2xl text-black">
              <FaUser />
            </h1>
          </div>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg rounded-lg w-40 mt-2 right-0 p-2 z-50">
              <ul className="space-y-2 crsor-pointer">
                <li>
                  <Link
                    className="w-full text-left text-black"
                    to="/logout">
                    Logout
                    </Link>
                  </li>
                {/* You can add other menu items here */}
                <li>
                  <button className="w-full text-left text-black">
                    Profile
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
