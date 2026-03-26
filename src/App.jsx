// src/App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";

import Projects from "./Component/Projects"; 
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Mydetail from "./Component/Mydetail";
import Dashboard from "./Component/Dashboard";
import Success from "./Component/SuccessDashboard";

// Define all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
    children: [
      { path: "123", element: <Mydetail /> },
    ],
  },
  {
    path: "/projects",
    element: (
      <>
        <Navbar />
        <Projects />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/login", 
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
        <Footer />
      </>
    ),
  },
  {
    path: "/success",
    element: (
      <>
        <Navbar />
        <Success />
        <Footer />
      </>
    ),
  },
]);

// Main App component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;