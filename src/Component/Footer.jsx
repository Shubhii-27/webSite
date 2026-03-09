import React from "react";
import img from "../assets/images/codelearn.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo Section */}
        <div>
           <img
              src={img}
              alt="Website Logo"
              className="w-20 h-20 rounded-full"
            />
          <p className="text-md font-size Class	Color
text-blue-500	Red
text-blue-500 ">
            Simple React website for beginners.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <p className="hover:text-white cursor-pointer mb-1">Home</p>
          <p className="hover:text-white cursor-pointer mb-1">About</p>
          <p className="hover:text-white cursor-pointer">Contact</p>
        </div>

        {/* Footer Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Info</h4>
          <p className="text-sm mb-1">© 2026 React Dummy Website</p>
          <p className="text-sm">Built for learning and practice</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <p className="hover:text-white cursor-pointer">LinkedIn</p>
          <p className="hover:text-white cursor-pointer">GitHub</p>
          <p className="hover:text-white cursor-pointer">Twitter</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
