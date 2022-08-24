import React, { useEffect } from "react";
import {
  Columns,
  Container,
  Content,
  Hero,
  Image,
} from "react-bulma-components";
import profile from "../../lucio_profile.jpg";
import "./AboutMe.css";
import ScrollMagic from "scrollmagic";
import Skills from "../Skills/Skills";

const AboutMe = ({ controller }) => {
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: ".navbar",
      triggerHook: 1,
      reverse: false,
    })
      .setClassToggle(".main-info", "fade-in")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".navbar",
      triggerHook: 1,
      reverse: false,
    })
      .setClassToggle("#brief-info", "fade-in")
      .addTo(controller);
  }, [controller]);

  return (
    <Hero size={"fullheight"} id="about-me" hasNavbar={true}>
      <Hero.Body>
        <Container id="abme-container">
          <Columns
            className="is-align-items-center"
            multiline={true}
            centered={true}
          >
            <Columns.Column size="half">
              <Content id="brief-info">
                <h1>Hi, I'm Lucio.</h1>
                <p>
                  I'm a front-end developer based in Argentina and I've been
                  programming since June of 2021.
                </p>
              </Content>
            </Columns.Column>
            <Columns.Column style={{ textAlign: "center" }} size="half">
              <Content id="image-content">
                <div style={{padding: '8px', backgroundColor: '#FFECD7', borderRadius: '50%'}}>
                  <Image
                    src={profile}
                    size={"1by1"}
                    fullwidth={true}
                    rounded={true}
                    id="profile"
                    style={{ borderColor: "#FFECD7", borderWidth: "15px" }}
                  />
                </div>
              </Content>
            </Columns.Column>
            <Columns.Column
              style={{ textAlign: "justify", alignSelf: "flex-start" }}
              size="half"
            >
              <Content className="main-info">
                <h1>About Me</h1>
                <p>
                  Programming caught my attention back in 2021 when I enrolled
                  to Harvard's CS50 Introduction to Computer Science.
                  Afterwards, I kept looking for courses and certifications to
                  satisfy my curiosity. As I delved deeper and deeper into this
                  world, it became clear to me that I wanted to follow this path
                  as my career. I'm really interested in art and design so it
                  was only natural for me to start as a Front-End Developer.
                  Although, I also have plans of becoming a Full-Stack Developer
                  in the future. Nowadays, I'm working as Front-End Developer at MOX.
                </p>
              </Content>
            </Columns.Column>
            <Columns.Column
              style={{ textAlign: "justify", alignSelf: "flex-start" }}
              size="half"
            >
              <Content className="main-info">
                <h1>Skills</h1>
                <Skills />
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default AboutMe;
