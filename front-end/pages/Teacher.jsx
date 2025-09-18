import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar.jsx";
import Header from "../component/Header.jsx";
import { useNavigate } from "react-router-dom";
import API from "../src/axios.js";

const Teacher = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await API.post("/auth/getallteacher");
        setTeachers(res.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTeacher();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirmed) return;
    try {
      const res = await API.delete(`/auth/deleteTeacher/${id}`);
      if (res.status === 200) {
        alert("teacher delete successfully");
        setTeachers((prev) => prev.filter((student) => student._id !== id));
      } else {
        alert("Failed to delete student");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <Sidebar />
      <Header />
      <div className="max-w-7xl mx-auto p-6 lg:ml-72 mt-6 relative z-10">
        {/* header section */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
            {/* Card decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 tracking-tight">
                  Teacher Management
                </h1>
                <p className="text-gray-600 text-xl font-medium">
                  Manage and view all teacher information with style
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>{teachers.length} teachers registered</span>
                </div>
              </div>

              {/* add teacher button */}
              <button
                onClick={() => navigate("/teacherForm")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-purple-500/25 font-bold text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span>Add New Teacher</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative">
          {/* Table header decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>

          {/* Table Header */}
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 px-8 py-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
            <h2 className="text-2xl font-bold text-white relative z-10 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              Teachers Directory
              <div className="ml-auto text-sm font-normal opacity-75">
                {teachers.length} Total Records
              </div>
            </h2>
          </div>

          <div className="overflow-x-auto relative">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200 text-center">
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider bg-gradient-to-r from-blue-100 to-purple-100">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      ID
                    </div>
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Name
                    </div>
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
                      Gender
                    </div>
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      Phone
                    </div>
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                      Email
                    </div>
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-0.5 h-1 bg-red-500 rounded-full"></div>
                      Address
                    </div>
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider bg-gradient-to-r from-purple-100 to-pink-100">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                      Courses
                    </div>
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-black text-gray-700 uppercase tracking-wider bg-gradient-to-r from-purple-100 to-pink-100">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                      Action
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/50 backdrop-blur-sm text-center">
                {teachers.map((teacher, index) => (
                  <tr
                    key={teacher._id}
                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50/50 hover:via-purple-50/50 hover:to-pink-50/50 transition-all duration-300 group"
                  >
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                          {index + 1}
                        </div>
                        <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center shadow-inner group-hover:shadow-lg transition-all duration-300">
                          <svg
                            className="w-7 h-7 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {`${teacher.first_name || ""} ${
                              teacher.last_name || ""
                            }`}
                          </div>
                          <div
                            className="text-sm text-gray-500"
                            title={`Teacher ID: #${teacher._id}`}
                          >
                            Teacher ID: #{teacher._id?.slice(-6)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span
                        className={`inline-flex px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all duration-300 group-hover:scale-105 ${
                          teacher.gender === "Male"
                            ? "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 group-hover:shadow-blue-500/25"
                            : teacher.gender === "Female"
                            ? "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 group-hover:shadow-pink-500/25"
                            : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
                        }`}
                      >
                        {teacher.gender || "N/A"}
                      </span>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">
                          {teacher.phone || "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        <div className="w-4 h-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium break-all">
                          {teacher.email && teacher.email.length > 5
                            ? teacher.email.substring(0, 5) + "..."
                            : teacher.email || "N/A"}
                        </span>
                      </div>
                    </td>

                    <td className="px-8 py-6">
                      <div className="flex items-start gap-3 max-w-xs">
                        <div className="w-4 h-4 bg-gradient-to-r from-red-100 to-red-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="w-4 h-4 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900 leading-relaxed">
                          {teacher.address || "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300 group-hover:scale-105">
                          {teacher.courses || "No courses"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        {/* Edit Button */}
                        <button
                          onClick={() =>
                            navigate(`/teacherForm/${teacher._id}`)
                          }
                          className="group flex items-center px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <svg
                            className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(teacher._id)}
                          className="group flex items-center px-3 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          <svg
                            className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Teacher;
