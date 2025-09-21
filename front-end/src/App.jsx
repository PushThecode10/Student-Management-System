import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Sidebar from "../component/Sidebar.jsx";
import Login from "../pages/Login.jsx";
import StudentForm from "../pages/StudentForm.jsx";
import PrivateRoute from "./layout/PrivateLayout.jsx";
import Student from "../pages/Student.jsx";
import Teacher from "../pages/Teacher.jsx";
import TeacherForm from "../pages/TeacherForm.jsx";
import CourseForm from "../pages/CourseForm.jsx";
import Course from "../pages/Course.jsx";
const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/sidebar"
        element={
          <PrivateRoute>
            <Sidebar />
          </PrivateRoute>
        }
      />
      <Route
        path="/createForm"
        element={
          <PrivateRoute>
            <StudentForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/student"
        element={
          <PrivateRoute>
            <Student />
          </PrivateRoute>
        }
      />
      <Route
        path="/createForm/:id"
        element={
          <PrivateRoute>
            <StudentForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/teacher"
        element={
          <PrivateRoute>
            <Teacher />
          </PrivateRoute>
        }
      />
      <Route
        path="/teacherForm"
        element={
          <PrivateRoute>
            <TeacherForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/teacherForm/:id"
        element={
          <PrivateRoute>
            <TeacherForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/course"
        element={
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        }
      />
      <Route
        path="/courseForm"
        element={
          <PrivateRoute>
            <CourseForm />
          </PrivateRoute>
        }
      />
       <Route
        path="/courseForm/:id"
        element={
          <PrivateRoute>
            <CourseForm />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
