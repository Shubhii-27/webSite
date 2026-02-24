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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

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
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            CODE LEARN
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about learning to code? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side Text + Image */}
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
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;