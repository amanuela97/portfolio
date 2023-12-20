import "./index.css";
import React from "react";
import Navbar from "components/Nav.js";
import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import Footer from "components/Footer";
import ChatBot from "components/ChatBot";

function App() {
  return (
    <div className="font-Oxygen w-full min-h-screen dark:text-white dark:bg-gray-900 text-black">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
