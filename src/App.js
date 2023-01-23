import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Impressum from "./components/Impressum";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Privacy from "./components/Privacy";



function App() {

  return (
    <BrowserRouter>
     <>
        {/** HEADER */}
        <NavBar />

        {/** BODY*/}
        <Routes>

          {/** MAIN-PAGE */}
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

          {/** IMPRESSUM / PRIVACY */}
          <Route
            path="/impressum"
            element={<Impressum />}
          />
          <Route
            path="/privacy"
            element={<Privacy />}
          />
        </Routes>

          {/** FOOTER */}
        <Footer />
        </>
    </BrowserRouter>
  );
}

export default App;
