import React, { useEffect } from "react";
import {
  Columns,
  Container,
  Content,
  Hero,
  Image,
} from "react-bulma-components";
import "./Projects.css";
import rblogo from "./rb-logo.png";
import ScrollMagic from "scrollmagic";
import Carousel, { CarouselItem } from "../Carousel/Carousel";

const Projects = ({ controller }) => {
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: "#portfolio",
      triggerHook: 0.5,
    })
      .setClassToggle("#project-info", "fade-in")
      .addTo(controller);
  });

  return (
    <Hero size={"fullheight"} id="portfolio">
      <Hero.Body>
        <Container>
          <Columns className="is-align-items-center">
            <Columns.Column size={"half"}>
              <Carousel>
                <CarouselItem>
                  <Image src={rblogo} />
                </CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
              </Carousel>
            </Columns.Column>
            <Columns.Column size={"half"}>
              <Content id="project-info">
                <h1>Red Book</h1>
                <p>
                  Red Book is an online book store created as my final projecf
                  for Coder House. The assigment required me to create a fully
                  functional e-commerce web application that uses Firebase to
                  store its data. It was designed and developed through the
                  months of March and April of 2022 using React JS and Bulma.
                  You can check it out by visiting{" "}
                  <a
                    href="https://red-book.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    red-book.vercel.app
                  </a>{" "}
                  or clicking the button below!
                </p>
                <a
                  href="https://red-book.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Visit Red Book</button>
                </a>
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Projects;

/* 
<Content style={{ width: "60%", margin: "auto" }}>
                
              </Content> 
              */
