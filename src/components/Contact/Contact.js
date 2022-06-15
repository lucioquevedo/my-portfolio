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
import gif from "./gif-for-portfolio.gif";

const contactInfo = [
  {
    title: "lucio.thomas.quevedo@gmail.com",
    fontawesome: "fa-solid fa-envelope-open",
    link: "mailto:lucio.thomas.quvedo@gmail.com",
  },
  {
    title: "lucio-quevedo",
    fontawesome: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/lucio-quevedo/",
  },
  {
    title: "My Github",
    fontawesome: "fa-brands fa-github-square",
    link: "https://github.com/Draug0",
  },
  {
    title: "My Curriculum Vitae",
    fontawesome: "fa-solid fa-file-lines",
    link: "https://drive.google.com/file/d/1lFtMC5y6lFchHbjLkBNNIRFgIemmh_uW/view?usp=sharing",
  },
];

const ContactItem = ({ contactLink }) => {
  return (
    <Columns.Column mobile={{size: 12}} tablet={{size: 'half'}} >
      <a href={contactLink.link} target="_blank" rel="noopener noreferrer">
        <div className="icon-text">
          <Icon size={'medium'}>
            <i className={`${contactLink.fontawesome} fa-fw fa-lg`} />
          </Icon>
          <span style={{ alignSelf: "center", fontSize: '1.1rem' }}>
            <p>{contactLink.title}</p>
          </span>
        </div>
      </a>
    </Columns.Column>
  );
};

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
          <Columns centered={true} className="is-align-items-center">
            <Columns.Column size={"three-fifths"}>
              <Content>
                <h1>Contact me!</h1>
                <Columns multiline={true} breakpoint={'mobile'}>
                  {contactInfo.map((item, index) => (
                    <ContactItem key={index} contactLink={item} />
                  ))}
                </Columns>
              </Content>
            </Columns.Column>
            <Columns.Column size={"two-fifths"}>
              <Content id='image-cc'>
                <div id="contact-image">
                  <img src={gif} alt='contact-gif' />
                </div>
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
      <Hero.Footer>
        <Content size={"small"}>
          <p>Created by Lucio Quevedo. Link to <a href="https://github.com/Draug0/my-portfolio">Github repository</a>.</p>
        </Content>
      </Hero.Footer>
    </Hero>
  );
};

export default Contact;
