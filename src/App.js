import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container, Footer, Hero, Section } from "react-bulma-components";
import Information from "./components/Information";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Information />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
