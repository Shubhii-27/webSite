import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();

  // ✅ Login by default true rakha
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (isLogin) {
        // 🔹 LOGIN API
        res = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        // ✅ Token save only on login
        localStorage.setItem("token", res.data.token);

        setMessage("Login Successful ✅");

        // ✅ Dashboard sirf login ke baad
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

      } else {
        // 🔹 REGISTER API
        await axios.post(
          "http://localhost:5000/api/auth/register",
          { name, email, password }
        );

        setMessage("Registration Successful ✅ Please Login");

        // 👇 Register ke baad login page dikhao
        setIsLogin(true);

        // Clear form
        setName("");
        setEmail("");
        setPassword("");
      }

    } catch (error) {
      setMessage(error.response?.data?.message || "Operation Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
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
              />
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-lg"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center font-semibold text-green-600">
              {message}
            </p>
          )}

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