import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Impressum from "./components/Impressum";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [showImpressum, setShowImpressum] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
              </>
            }
          />
          <Route
            path="/impressum"
            element={
              <Impressum />
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
