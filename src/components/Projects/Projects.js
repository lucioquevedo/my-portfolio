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
              <Content style={{ width: "60%", margin: "auto" }}>
                <Image src={rblogo} />
              </Content>
            </Columns.Column>
            <Columns.Column size={"half"}>
              <Content id="project-info">
                <h1>Red Book</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  rhoncus eu sem id bibendum. Nullam vulputate nisi eget odio
                  bibendum, in finibus nisi varius. Quisque mattis sed dui ut
                  lobortis. Aliquam metus turpis, consequat vitae leo rutrum,
                  suscipit molestie neque. Nam dapibus purus ac nisl varius
                  sodales. Morbi ultricies turpis orci, id viverra ex sodales
                  in. Quisque sagittis magna tempor nulla consequat, eu blandit
                  mauris pharetra. Cras a massa id turpis condimentum aliquam ac
                  dictum justo. Ut ullamcorper ipsum in ligula tempus, non
                  sollicitudin eros ultrices. Sed suscipit scelerisque mi ut
                  vulputate. Proin dui orci, tincidunt vel erat quis, facilisis
                  molestie nibh. Aenean semper libero nunc, a fringilla libero
                  imperdiet id.
                </p>
                <a href="https://red-book.vercel.app/">
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
