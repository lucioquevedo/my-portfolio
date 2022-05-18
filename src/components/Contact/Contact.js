import React, { useEffect } from "react";
import {
  Columns,
  Container,
  Content,
  Hero,
  Icon,
} from "react-bulma-components";
import ScrollMagic from "scrollmagic";
import "./Contact.css";

const Contact = ({ controller }) => {
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: "#contact",
      triggerHook: 0.7,
    })
      .setClassToggle("#contact span.icon", "fade-in")
      .addTo(controller);
  });

  return (
    <Hero size={"fullheight"} color="danger" id="contact">
      <Hero.Body>
        <Container>
          <Columns centered={true}>
            <Columns.Column>
              <Content>
                <a
                  href="https://www.linkedin.com/in/lucio-quevedo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <i className="fa-brands fa-linkedin" />
                  </Icon>
                </a>
                <p>My LinkedIn</p>
              </Content>
            </Columns.Column>
            <Columns.Column>
              <Content>
                <a
                  href="https://github.com/Draug0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <i className="fa-brands fa-github-square" />
                  </Icon>
                </a>
                <p>My Github</p>
              </Content>
            </Columns.Column>
            <Columns.Column>
              <Content>
                <a
                  href="https://drive.google.com/file/d/1lFtMC5y6lFchHbjLkBNNIRFgIemmh_uW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>
                    <i className="fa-solid fa-file-lines" />
                  </Icon>
                </a>
                <p>My Curriculum Vitae</p>
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
      <Hero.Footer>
        <Content size={"small"}>
          <p>Created by Lucio Quevedo</p>
        </Content>
      </Hero.Footer>
    </Hero>
  );
};

export default Contact;
