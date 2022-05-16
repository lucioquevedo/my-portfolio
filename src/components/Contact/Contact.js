import React from "react";
import {
  Columns,
  Container,
  Content,
  Hero,
  Icon,
} from "react-bulma-components";

const Contact = () => {
  return (
    <Hero size={"fullheight"} color="danger" id="contact">
      <Hero.Body>
        <Container>
          <Content>
            <Columns>
              <Columns.Column>
                <Content>
                  <Icon size={"large"}>
                    <i className="fa-brands fa-linkedin" />
                  </Icon>
                </Content>
              </Columns.Column>
              <Columns.Column>
                <Content>
                  <Icon size={"large"}>
                    <i className="fa-brands fa-github-square" />
                  </Icon>
                </Content>
              </Columns.Column>
              <Columns.Column></Columns.Column>
            </Columns>
          </Content>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Contact;

/* 

            <p style={{fontSize: '7rem'}}>
              <Icon size={'large'}>
                <i className='fa-brands fa-github-square'/>
              </Icon>
            </p>
            
*/
