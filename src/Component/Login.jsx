import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      let res;

      if (isLogin) {
        // LOGIN
        res = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        setTimeout(() => {
          localStorage.setItem("token", res.data.token);
          setMessage("Login Successful ✅");
          setLoading(false);
          navigate("/dashboard");
        }, 1500);
      } else {
        // REGISTER
        await axios.post(
          "http://localhost:5000/api/auth/register",
          { name, email, password }
        );

        setTimeout(() => {
          setMessage("Registration Successful ✅ Please Login");
          setIsLogin(true);
          setLoading(false);

          setName("");
          setEmail("");
          setPassword("");
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || "Operation Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700">
      
      <div className="w-full max-w-md p-6">
        
        {/* ✅ FIXED HEIGHT CARD */}
        <div className="bg-slate-800 w-full p-8 mt-20 rounded-2xl shadow-2xl min-h-[200px] flex flex-col justify-center transition-all duration-300">

          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            {/* Name Field */}
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border border-white bg-transparent text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
                disabled={loading}
              />
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-white bg-transparent text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
              disabled={loading}
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border border-white bg-transparent text-white placeholder-gray-300 rounded-lg w-full pr-10 focus:outline-none focus:ring-2 focus:ring-white"
                required
                disabled={loading}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex justify-center items-center transition"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                  Please wait...
                </span>
              ) : (
                isLogin ? "Login" : "Register"
              )}
            </button>

          </form>

          {/* Message */}
          {message && !loading && (
            <p className="mt-4 text-center font-semibold text-green-400">
              {message}
            </p>
          )}

          {/* Toggle */}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
            className="mt-6 text-blue-400 underline block mx-auto"
          >
            {isLogin
              ? "New user? Register here"
              : "Already have an account? Login"}
          </button>

          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className="mt-2 text-blue-400 underline block mx-auto"
          >
            ← Go to Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default Auth;