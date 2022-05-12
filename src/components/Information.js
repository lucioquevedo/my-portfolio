import React from "react";
import { Container, Hero } from "react-bulma-components";

const Information = () => {
  return (
    <Hero size={"fullheight"} color="primary" id="about-me">
      <Hero.Body>
        <Container>info</Container>
      </Hero.Body>
    </Hero>
  );
};

export default Information;
