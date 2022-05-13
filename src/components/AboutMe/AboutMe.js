import React, { useEffect } from "react";
import { Columns, Container, Content, Hero, Image } from "react-bulma-components";
import profile from '../../lucio_profile.jpg'
import './AboutMe.css'
import ScrollMagic from "scrollmagic";

const AboutMe = ({controller}) => {
  useEffect(() => {
    console.log('este es el about me')
    new ScrollMagic.Scene({
      triggerElement: '.navbar',
      triggerHook: 0,
      reverse: false
    })
      .setClassToggle('#lol', 'fade-in')
      .addTo(controller);
    
    new ScrollMagic.Scene({
      triggerElement: '.navbar',
      triggerHook: 1,
      reverse: false
    })
      .setClassToggle('#brief-info', 'fade-in')
      .addTo(controller)
    
  }, [])
  
  return (
    <Hero size={"fullheight"} id="about-me" hasNavbar={true}>
      <Hero.Body>
        <Container>
          <Columns className="is-align-items-center" multiline={true} centered={true}>
            <Columns.Column style={{textAlign:"right"}} size='half'>
              <Content id='brief-info'>
                <h1>Hi, I'm Lucio ;)</h1>
                <p>
                  I'm a front-end developer based in Argentina and I've been programming since June of 2020.
                </p>
              </Content>
            </Columns.Column>
            <Columns.Column style={{textAlign: 'center'}} size='half'>
              <Content id='image-content'>
                <Image src={profile} size={'1by1'} fullwidth={true} rounded={true} id='profile' />
              </Content>
            </Columns.Column>
            <Columns.Column style={{textAlign: 'justify'}} size='half'>
              <Content id='lol'>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus eu sem id bibendum. Nullam vulputate nisi eget odio bibendum, in finibus nisi varius. Quisque mattis sed dui ut lobortis. Aliquam metus turpis, consequat vitae leo rutrum, suscipit molestie neque. Nam dapibus purus ac nisl varius sodales. Morbi ultricies turpis orci, id viverra ex sodales in. Quisque sagittis magna tempor nulla consequat, eu blandit mauris pharetra. Cras a massa id turpis condimentum aliquam ac dictum justo. Ut ullamcorper ipsum in ligula tempus, non sollicitudin eros ultrices. Sed suscipit scelerisque mi ut vulputate. Proin dui orci, tincidunt vel erat quis, facilisis molestie nibh. Aenean semper libero nunc, a fringilla libero imperdiet id.</p>
              </Content>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default AboutMe;
