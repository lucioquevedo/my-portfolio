import React from "react";
import { Container, Navbar } from "react-bulma-components";

const NavBar = () => {
  return (
    <Navbar fixed="top" size="large" transparent={true}>
      <Container>
        <Navbar.Brand>
          <Navbar.Item>My portfolio</Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container align="right">
            <Navbar.Item href="#about-me">
              About Me
            </Navbar.Item>
            <Navbar.Item href="#portfolio">
              Portfolio
            </Navbar.Item>
            <Navbar.Item href="#contact">
              Contact
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

export default NavBar;
