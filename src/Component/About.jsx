import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">CodeMaster</h2>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Transform Your Skills. <span className="text-indigo-400">Code with Confidence.</span>
          </h1>

          <p className="text-gray-300 text-lg mb-4">
            At CodeMaster, we empower aspiring developers with practical skills, real-world projects, and hands-on guidance to excel in the tech industry.
          </p>

          <p className="text-gray-400">
            Whether you're a beginner or looking to upgrade your career, our structured courses help you move from concepts to real applications with confidence.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
            alt="Developer learning"
            className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
        {[
          { number: "12+", label: "Programming Languages" },
          { number: "60+", label: "Real Projects" },
          { number: "2000+", label: "Active Learners" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-4xl font-bold text-indigo-400 mb-2">
              {item.number}
            </h3>
            <p className="text-gray-300">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Why Choose CodeMaster */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose CodeMaster?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Hands-on Projects",
              desc: "Learn by building real applications that mirror industry standards.",
            },
            {
              title: "Structured Curriculum",
              desc: "Step-by-step learning paths designed for beginners and intermediate learners.",
            },
            {
              title: "Career-Oriented",
              desc: "Focused on interview skills, portfolio projects, and professional growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Coding Journey Today
        </h2>
        <p className="text-lg text-gray-100 mb-6">
          Learn the skills that matter. Build projects that impress. Join thousands of learners transforming their careers.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-3 bg-black/30 hover:bg-black/40 rounded-lg text-lg transition"
        >
          Get Started
        </button>
      </section>

      <Outlet />
    </div>
  );
};

export default About;