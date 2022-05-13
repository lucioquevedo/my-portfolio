import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { Footer } from "react-bulma-components";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
