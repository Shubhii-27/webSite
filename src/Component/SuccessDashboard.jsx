import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-700 flex items-center justify-center px-4">

      <div className="bg-white rounded-xl shadow-2xl p-10 text-center max-w-md w-full">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-500 p-6 rounded-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Your message has been successfully sent
        </h2>

        <p className="text-gray-500 mb-6">
          Thank you for contacting us. We will get back to you shortly.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Go Back Home
        </button>

      </div>
    </div>
  );
};

export default SuccessDashboard;