import React, { useState } from "react";
import API from "../src/axios";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/send-reset-otp", { email });
      if (res.data.success) {
        setOtpSent(true); // ✅ show OTP form
        setMessage(" OTP sent to your email");
        setError(false);
      } else {
        setMessage(`${res.data.message}`);
        setError(true);
      }
    } catch (error) {
      setMessage(" Something went wrong");
      setError(true);
    }
  };

  // Step 2: Submit OTP and new password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/reset-password", {
        email,
        otp,
        newpassword: newPassword,
      });

      if (res.data.success) {
        setMessage(" Password has been reset successfully.");
        setError(false);
        setTimeout(() => {
        navigate("/"); // or "/" if that's your login route
      }, 2000);
      } else {
        setMessage(` ${res.data.message}`);
        setError(true);
      }
    } catch (error) {
      setMessage(" Failed to reset password");
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#40a7cf] px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <img
            src="../src/assets/logo.png"
            alt="logo"
            className="h-12 w-auto mr-2"
          />
          <h2 className="text-2xl font-semibold text-[#40a7cf]">Reset Password</h2>
        </div>

        {/* Feedback */}
        {message && (
          <p className={`mb-4 text-sm ${error ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}

        {/* STEP 1: Send OTP Form */}
        {!otpSent && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#40a7cf] peer"
                placeholder=" "
                value={email ?? ""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#40a7cf] bg-white px-1">
                Email
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Send OTP
            </button>
          </form>
        )}

        {/* STEP 2: Reset Password Form */}
        {otpSent && (
          <form onSubmit={handleResetPassword} className="space-y-5 mt-6">
            <div className="relative">
              <input
                type="text"
                name="otp"
                required
                className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#40a7cf] peer"
                placeholder=" "
                value={otp ?? ""}
                onChange={(e) => setOtp(e.target.value)}
              />
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#40a7cf] bg-white px-1">
                OTP
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                name="newpassword"
                required
                className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#40a7cf] peer"
                placeholder=" "
                value={newPassword ?? ""}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#40a7cf] bg-white px-1">
                New Password
              </label>
            </div>

            <button 
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
