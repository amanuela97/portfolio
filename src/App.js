import "./index.css";
import React from "react";
import Navbar from "components/Nav.js";
import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import Footer from "components/Footer";

function App() {
  return (
    <div className="font-Oxygen min-w-screen min-h-screen dark:text-white dark:bg-gray-900 text-black">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
