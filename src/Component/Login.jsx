import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👁️ state

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
        // 🔹 LOGIN
        res = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        setTimeout(() => {
          localStorage.setItem("token", res.data.token);
          setMessage("Login Successful ✅");
          setLoading(false);
          navigate("/dashboard");
        }, 2000);
      } else {
        // 🔹 REGISTER
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
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || "Operation Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-800">
      <div className="w-full flex items-center justify-center p-12">
        <div className="bg-white w-full max-w-md p-12 rounded-2xl shadow-2xl">

          <h1 className="text-3xl font-bold mb-6 text-center">
            {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
          </h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border rounded-lg"
                required
                disabled={loading}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-lg"
              required
              disabled={loading}
            />

            {/* 👁️ Password Field with Eye Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border rounded-lg w-full pr-10"
                required
                disabled={loading}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center"
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

          {/* ✅ Message */}
          {message && !loading && (
            <p className="mt-4 text-center font-semibold text-green-600">
              {message}
            </p>
          )}

          {/* Toggle Login/Register */}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
            className="mt-6 text-blue-600 underline block mx-auto"
          >
            {isLogin
              ? "New user? Register here"
              : "Already have an account? Login"}
          </button>

          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className="mt-2 text-blue-600 underline block mx-auto"
          >
            ← Go to Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default Auth;