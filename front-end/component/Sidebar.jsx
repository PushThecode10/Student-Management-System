import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdDashboard,MdMenuBook, MdOutlineLibraryBooks } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";
import { Link, useNavigate } from "react-router";



const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Sidebar Container */}
      <div className="fixed w-65 h-full bg-slate-900 shadow-2xl overflow-y-auto z-50">
        {/* Header */}
        <div className="p-6 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-orange-500 hover:to-pink-600 transition-all duration-500 cursor-pointer group">
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
              <h1 name="person-circle-outline" className="text-2xl text-black">
                <FaUser />
              </h1>
            </div>
            <h2 className="text-white font-bold text-xl">Admin Panel</h2>
            <p className="text-blue-200 text-sm">Management System</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="px-4 space-y-2">
          {/* Dashboard */}
          <div className="group cursor-pointer">
            <div className=" w-full flex items-center space-x-4 px-4 py-3 rounded-xl bg-gradient-to-r bg-blue-600 hover:bg-white text-white font-semibold  rounded-xl hover:translate-x-2 transition-all duration-300 relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <MdDashboard className="text-xl text-black" />
              </div>
              <span className="text-white font-semibold group-hover:text-orange-500 transition-colors duration-300  group-hover:scale-110 transition-all duration-300">
                Dashboard
              </span>
            </div>
          </div>

          {/* Students */}
          <div className="group cursor-pointer">
            <div
            onClick={()=>navigate("/student")}  
            className="w-full px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r bg-blue-600 hover:bg-white text-white hover:translate-x-2 transition-all duration-300 relative ">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center  group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <PiStudentBold className="text-xl text-black" />
              </div>
              <span
               className="text-white font-semibold group-hover:text-orange-500">
                Student
              </span>
            </div>
          </div>

          {/* Teachers */}
          <div className="group cursor-pointer">
            <div
            onClick={() => navigate("/teacher")} 
            className="w-full px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r bg-blue-600 hover:bg-white text-white hover:translate-x-2 transition-all duration-300 relative ">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center  group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <FaRegUser  className="text-xl text-black" />
              </div>
              <span className="text-white font-semibold group-hover:text-orange-500">
                Teachers
              </span>
            </div>
          </div>

          {/* Courses */}
          <div className="group cursor-pointer">
            <div
            onClick={() => navigate("/course")} 
            className="w-full px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r bg-blue-600 hover:bg-white text-white hover:translate-x-2 transition-all duration-300 relative ">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center  group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <MdMenuBook className="text-xl text-black" />
              </div>
              <span className="text-white font-semibold group-hover:text-orange-500">
                Courses
              </span>
            </div>
          </div>

          {/* Attendance */}
          <div className="group cursor-pointer">
            <div className="w-full px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r bg-blue-600 hover:bg-white text-white hover:translate-x-2 transition-all duration-300 relative ">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center  group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <MdOutlineLibraryBooks className="text-xl text-black" />
              </div>
              <span className="text-white font-semibold group-hover:text-orange-500">
                Attendance
              </span>
            </div>
          </div>

          {/* Shifts */}
          <div className="group cursor-pointer">
            <div className="w-full px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r bg-blue-600 hover:bg-white text-white hover:translate-x-2 transition-all duration-300 relative ">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center  group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                <LuNotebook className="text-xl text-black" />
              </div>
              <span className="text-white font-semibold group-hover:text-orange-500">
                Shift
              </span>
            </div>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="h-px bg-white bg-opacity-20"></div>
          <div className="mt-4 text-center">
            <p className="text-white opacity-60 text-xs">
              School Management System
            </p>
            <div className="flex justify-center items-center mt-2 space-x-1">
              <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
