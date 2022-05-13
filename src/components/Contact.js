import React from "react";
import { Container, Content, Hero, Icon } from "react-bulma-components";


const Contact = () => {
  return (
    <Hero size={"fullheight"} color="info" id="contact">
      <Hero.Body>
        <Container>
          <Content>
            <Icon size={'large'}>
              <i className='fa-brands fa-linkedin'/>
            </Icon>
            <Icon>
              <i className="fa-brands fa-github-square"></i>
            </Icon>
          </Content>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Contact;
