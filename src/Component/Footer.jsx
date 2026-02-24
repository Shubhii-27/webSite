import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo Section */}
        <div>
          <img
            src="https://via.placeholder.com/150x60"
            alt="Website Logo"
            className="mb-4"
          />
          <p className="text-sm">
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
