import React, { useState } from "react";
import { Container, Navbar } from "react-bulma-components";
import ScrollMagic from "scrollmagic";

const NavBar = ({/* navbarController */}) => {
  const [burger, setBurger] = useState(false)

  const navbarController = new ScrollMagic.Controller()

  const handleAboutMe = () => {
    navbarController.scrollTo(0)
  }

  const handlePortfolio = () => {
    navbarController.scrollTo('#portfolio')
  }

  const handleContact = () => {
    navbarController.scrollTo('#contact')
  }

  const handleNavbar = () => {
    setBurger(!burger)
  }

  return (
    <Navbar fixed="top" size="large" transparent={true} active={burger}>
      <Container>
        <Navbar.Brand>
          <Navbar.Item onClick={handleAboutMe}>My portfolio</Navbar.Item>
          <Navbar.Burger onClick={handleNavbar}/>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container align="right">
            <Navbar.Item onClick={handleAboutMe}>About Me</Navbar.Item>
            <Navbar.Item onClick={handlePortfolio}>Portfolio</Navbar.Item>
            <Navbar.Item onClick={handleContact}>Contact</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

export default NavBar;
