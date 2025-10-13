import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Make sure 'react-router-dom' is used
import API from "../src/axios.js";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // General message for success or error
  const [errors, setErrors] = useState({}); // Specific field errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match locally before sending the request
    if (password !== confirmPassword) {
      setMessage(""); // Clear previous message
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
      return;
    }

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        setMessage("Signup successful!"); // Clear message if successful
        navigate("/"); // Redirect to login
      } else {
        setErrors({}); // Clear previous errors
        setMessage(""); // Clear general message
        // Display errors from the server
        setErrors(res.data.errors || {}); // Assuming server returns an object with field errors
      }
    } catch (err) {
      setErrors({}); // Clear field errors on unexpected errors
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#40a7cf] px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
        {/* Logo & Title */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="../src/assets/logo.png"
            alt="logo"
            className="h-12 w-auto mr-2"
          />
          <h2 className="text-2xl font-semibold text-[#40a7cf]">Signup</h2>
        </div>

        {/* Signup Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="full name"
              required
              className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#40a7cf] peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#40a7cf] bg-white px-1">
              Full Name
            </label>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p> // Display name errors
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#40a7cf] peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#40a7cf] bg-white px-1">
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p> // Display email errors
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#40a7cf] peer"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#40a7cf] bg-white px-1">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p> // Display password errors
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              name="confirm password"
              required
              className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#40a7cf] peer"
              placeholder=" "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#40a7cf] bg-white px-1">
              Confirm Password
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p> // Display confirm password errors
            )}
          </div>

          {/* General Error or Success Message */}
          {message && (
            <p
              className={`text-sm ${message.includes("successful") ? "text-green-500" : "text-red-500"}`}
            >
              {message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-[#da4453] to-[#40a7cf] text-white font-semibold rounded hover:opacity-90 transition"
          >
            Signup
          </button>

          {/* Login Redirect Link */}
          <div className="flex space-x-6">
            <p>Already have an account?</p>
            <Link to="/" className="text-[#40a7cf] underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
