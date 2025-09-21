import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../component/Sidebar.jsx';
import Header from '../component/Header.jsx';
import API from '../src/axios.js';

const CourseForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id); // Change this to true if in edit mode
    const [formData, setFormData] = useState({
        Title: "",
        Discription: "",
        Duration: "",
        Basefee: "",
        Status: "",
    });
useEffect(() => {
    const fetchCourseData = async () => {
        try {
            const res = await API.get(`/auth/course/${id}`);
            setFormData(res.data);
        }   
        catch (error) {
            console.error("Error fetching course data:", error);
        }
    };
    if (isEditMode) {
        fetchCourseData();
    }
}, [id]);

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (isEditMode) {
           const res = await API.put(`/auth/updateCourse/${id}`, formData);
            if (res.status === 200) {
                alert("Course updated successfully");
            }else {
                alert("Failed to update course");
            }
        } else {
            const res =await API.post("/auth/createCourse", formData);
            if(res.data.success){
                alert("Course created successfully");
                setFormData({
                    Title: "",
                    Discription: "",
                    Duration: "",
                    Basefee: "",
                    Status: "",
                });
            } else {   
                alert("Failed to create course");
            }
    }
    navigate("/course");
}catch (error) {
     console.error("Error submitting form:", error);
     alert("An error occurred. Please try again.");
   }          
    }
return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />

      <div className="max-w-4xl mx-auto p-6 ml-100 mt-2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Add New Student
            </h1>
            <p className="text-gray-600">
              Fill in the student information below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Title"
                  value={formData.Title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter course title"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  name="Discription"
                  value={formData.Discription}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter course description"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gender */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Duration
                </label>
                <input
                  name="Duration"
                  value={formData.Duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
                 />
                
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  BaseFee <span className="text-red-500">*</span>
                </label>
                <input
                  name="Basefee"
                  value={formData.Basefee}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Enter base fee"
                />
              </div>
            </div>

           

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Payment Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="payment_status"
                  value={formData.Status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
                >
                  <option value="">Status</option>
                  <option value="Active">active</option>
                  <option value="Inactive">inactive</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    Title: "",
                    Discription: "",
                    Duration: "",
                    Basefee: "",
                    Status: "",
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
                {isEditMode ? "update" : "create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CourseForm
