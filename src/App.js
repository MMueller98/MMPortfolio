import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
