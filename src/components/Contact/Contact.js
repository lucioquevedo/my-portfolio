import React from "react";
import { Container, Content, Hero, Icon } from "react-bulma-components";


const Contact = () => {
  return (
    <Hero size={"fullheight"} color="danger" id="contact">
      <Hero.Body>
        <Container>
          <Content>
            <p style={{fontSize: '7rem'}}>
              <Icon size={'large'}>
                <i className='fa-brands fa-linkedin'/>
              </Icon>
            </p>
            <p style={{fontSize: '7rem'}}>
              <Icon size={'large'}>
                <i className='fa-brands fa-github-square'/>
              </Icon>
            </p>
            
          </Content>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Contact;
