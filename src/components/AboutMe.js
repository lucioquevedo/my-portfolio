import React from "react";
import { Columns, Container, Content, Hero, Image } from "react-bulma-components";

const AboutMe = () => {
  return (
    <Hero size={"fullheight"} color='primary' id="about-me">
      <Hero.Body>
        <Container>
          <Columns className="is-align-items-center">
            <Columns.Column style={{textAlign:"right"}}>
              <Content style={{width: '60%', marginLeft: 'auto', color: 'black'}}>
                <h1>Hi, I'm Lucio ;)</h1>
                <p>
                  I'm a front-end developer based in Argentina and I've been programming since June of 2020.
                </p>
              </Content>
            </Columns.Column>
            <Columns.Column style={{textAlign: 'center'}}>
              <Content style={{width: '50%', marginRight: 'auto', textAlign:'center'}}>
                <Image src="https://bulma.io/images/placeholders/128x128.png" size={'1by1'} fullwidth={true} rounded={true}/>
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default AboutMe;
