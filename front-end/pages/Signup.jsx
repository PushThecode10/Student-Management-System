import { useState } from "react";
import { Link, useNavigate } from "react-router";
import API from "../src/axios.js";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        navigate("/"); // redirect to login
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
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
          <h2 className="text-2xl font-semibold text-[#40a7cf]">signup</h2>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
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
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="text"
              name="Email"
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

          {/*  confirm Password */}
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
          </div>
          {message && (
            <p
              className={`text-sm ${
                message.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-[#da4453] to-[#40a7cf] text-white font-semibold rounded hover:opacity-90 transition"
          >
            Signup
          </button>
          <div className=" flex space-x-6  ">
            <p>Already have an account? </p>
            <Link to="/" className="text-[#40a7cf] underline">
              Login{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
