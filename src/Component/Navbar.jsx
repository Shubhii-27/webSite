import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import img from "../assets/images/codelearn.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "block text-blue-400 font-semibold"
      : "block hover:text-blue-400 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md h-20">
      <div className="max-w-7xl mx-auto px-6 py- flex items-center justify-between">
        
        {/* Logo */}
      <div className="flex items-center gap-3">
  <img
    src={img}
    alt="Website Logo"
    className="w-20 h-20 rounded-full"
  />

  {/* <h1 className="text-3xl font-bold text-blue-400">
    <Link to="/">CodeLearn</Link>
  </h1> */}
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          <NavLink to="/login" className={navLinkStyle}>Login</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  right-0 bg-gray-500 px-6 overflow-hidden transition-all duration-300 text-2xl text-center ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <NavLink onClick={() => setIsOpen(false)} to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/projects" className={navLinkStyle}>Projects</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/contact" className={navLinkStyle}>Contact</NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            to="/login"
            // className="block text-center bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;