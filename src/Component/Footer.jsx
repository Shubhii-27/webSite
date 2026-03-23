import React from "react";
import img from "../assets/images/codelearn.png"
import { Link } from "react-router-dom";

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

  <Link to="/" className="block hover:text-white cursor-pointer mb-1">
    Home
  </Link>

  <Link to="/about" className="block hover:text-white cursor-pointer mb-1">
    About
  </Link>

  <Link to="/contact" className="block hover:text-white cursor-pointer mb-1">
    Contact
  </Link>

  <Link to="/login" className="block hover:text-white cursor-pointer">
    Login
  </Link>

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

  <a 
    href="https://www.linkedin.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block hover:text-white cursor-pointer"
  >
    LinkedIn
  </a>

  <a 
    href="https://github.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block hover:text-white cursor-pointer"
  >
    GitHub
  </a>

  <a 
    href="https://twitter.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block hover:text-white cursor-pointer"
  >
    Twitter
  </a>

</div>

      </div>
    </footer>
  );
};

export default Footer;
