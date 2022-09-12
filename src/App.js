import "./App.css";
import React from "react";
import Card from "./Pages/Card";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Skills";
import ContactMe from "./Pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen py-10 sm: px-5 bg-gray-100">
      <Card />
      <About />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
