import React from "react";
import {
  Columns,
  Container,
  Content,
  Hero,
  Icon,
} from "react-bulma-components";
import './Contact.css'

const Contact = () => {
  return (
    <Hero size={"fullheight"} color="danger" id="contact">
      <Hero.Body>
        <Container>
            <Columns centered={true}>
              <Columns.Column>
                <Content>
                  <Icon >
                    <i className="fa-brands fa-linkedin" />
                  </Icon>
                  <p>
                    My LinkedIn
                  </p>
                </Content>
              </Columns.Column>
              <Columns.Column>
                <Content>
                  <Icon>
                    <i className="fa-brands fa-github-square" />
                  </Icon>
                  <p>My Github</p>
                </Content>
              </Columns.Column>
              <Columns.Column>
                <Content>
                  <Icon>
                    <i className="fa-solid fa-file-lines" />
                  </Icon>
                  <p>
                    My Curriculum Vitae
                  </p>
                </Content>
              </Columns.Column>
            </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Contact;
