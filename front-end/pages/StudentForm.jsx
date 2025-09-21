import React, { useEffect, useState } from "react";
import API from "../src/axios.js";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../component/Sidebar.jsx";
import Header from "../component/Header.jsx";

const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  // true if there's an ID in the URL
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    course: "",
    payment_status: "",
  });

  // State to store all available courses
  const [courses, setCourses] = useState([]);

  // Fetch courses data from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/auth/getallcourse");
        setCourses(res.data);  // Set courses in state
      } catch (error) {
        console.error("Error fetching courses:", error);
        alert("Failed to load courses.");
      }
    };

    fetchCourses();

    // If it's an edit mode, fetch student data
    if (isEditMode) {
      const fetchStudent = async () => {
        try {
          const res = await API.get(`/auth/student/${id}`);
          setFormData(res.data);
        } catch (error) {
          console.error("Error fetching student:", error);
          alert("Failed to load student data.");
        }
      };
      fetchStudent();
    }
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (create or update student)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        const res = await API.put(`/auth/update/${id}`, formData);
        if (res.status === 200) {
          alert("Student updated successfully!");
        } else {
          alert("Failed to update student.");
        }
      } else {
        const res = await API.post("/auth/createStudent", formData);
        if (res.data.success) {
          alert("Student added successfully!");
          setFormData({
            first_name: "",
            last_name: "",
            gender: "",
            phone: "",
            email: "",
            address: "",
            course: "",
            payment_status: "",
          });
        } else {
          alert("Failed to add student.");
        }
      }
      navigate("/student");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <div className="max-w-4xl mx-auto p-6 ml-100 mt-2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isEditMode ? "Edit" : "Add New"} Student
            </h1>
            <p className="text-gray-600">
              {isEditMode ? "Update" : "Fill in"} the student information below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter first name"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gender */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Course Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course.Title}>
                    {course.Title}
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Status */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Payment Status
              </label>
              <select
                name="payment_status"
                value={formData.payment_status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
              >
                <option value="">Select Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
                <option value="Partial">Partial</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    first_name: "",
                    last_name: "",
                    gender: "",
                    phone: "",
                    email: "",
                    address: "",
                    course: "",
                    payment_status: "",
                  })
                }
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 shadow-sm"
              >
                {isEditMode ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
