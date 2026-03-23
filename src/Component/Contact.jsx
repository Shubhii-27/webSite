import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const startTime = Date.now(); // ⏱️ start time

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // ⏳ Ensure minimum 3 sec loader
      const elapsedTime = Date.now() - startTime;
      const remainingTime = 3000 - elapsedTime;

      if (remainingTime > 0) {
        await new Promise((resolve) =>
          setTimeout(resolve, remainingTime)
        );
      }

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        navigate("/success");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Server Error ❌");
    }

    setLoading(false);
  };

  return (
    <>
      {/* 🔥 Full Screen Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl flex items-center gap-3 shadow-lg">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="font-semibold text-gray-700">Please wait...</p>
          </div>
        </div>
      )}

      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              CODE LEARN
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Have questions about learning to code? Feel free to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Side */}
            <div className="text-white space-y-4">
              <h1 className="text-3xl font-bold flex flex-col items-center">
                Learn Coding With Confidence
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z2HYGZAvAJyniiKoIou5Jq0GkfbG0P25sQ&s"
                  alt="coding"
                  className="w-96 h-80 mt-2 object-cover rounded-lg"
                />
              </h1>
            </div>

            {/* Right Side Form */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/20 text-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/20 text-white"
                />

                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/20 text-white"
                ></textarea>

                {/* ✅ Button with Loader */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Please wait...
                    </>
                  ) : (
                    "Send Message 🚀"
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;