import { useState } from "react";
import API from "../src/axios.js";
import { Link, useNavigate } from "react-router-dom"; // Corrected import for `Link`

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Initialized with an empty string
  const [password, setPassword] = useState(""); // Initialized with an empty string

  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("accessToken", res.data.accessToken); // Store access token in localStorage
        localStorage.setItem("refreshToken", res.data.refreshToken);
        setMessage("Login successful");
        navigate("/dashboard"); // Redirect user after successful login
      } else {
        setMessage(res.data.message); // Display server error message
      }
    } catch (err) {
      setMessage("Login failed, please try again."); // Display generic error message
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
          <h2 className="text-2xl font-semibold text-[#40a7cf]">Login</h2>
        </div>

        {/* Login Form */}
        <form className="space-y-5 " onSubmit={handleLogin}>
          {/* Email */}
          <div className="relative">
            <input
              type="email" // Changed input type to email
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
          </div>

          {/* Display error/success message */}
          {message && (
            <p
              className={`text-sm ${
                message.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* Forgot Password Link */}
          <Link to="/resetpassword" className="text-[#40a7cf] underline">
            Forget Password
          </Link>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-[#da4453] to-[#40a7cf] text-white font-semibold rounded hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="flex space-x-6">
            <p>Don’t have an account? </p>
            <Link to="/signup" className="text-[#40a7cf] underline">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
