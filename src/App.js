import React, { useEffect } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import ScrollMagic from "scrollmagic";

function App() {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "0",
    },
  });

  const otherController = new ScrollMagic.Controller()

  return (
    <>
      <NavBar />
        <AboutMe controller={otherController}/>
        
        <Projects controller={otherController}/>
          
        <Contact controller={otherController} />
    </>
  );
}

export default App;
