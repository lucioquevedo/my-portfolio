import React from "react";
import { Columns, Icon } from "react-bulma-components";
import tsLogo from './typescript.svg'
import bulmaLogo from './Bulma Icon.svg'

const Skills = () => {
  return (
    <Columns multiline={true}>
      <Columns.Column size={'one-third'}>
        <div className="icon-text">
          <Icon>
            <i className="fa-brands fa-react" />
          </Icon>
          <span>React JS</span>
        </div>
      </Columns.Column>
      <Columns.Column size={'one-third'}>
        <div className="icon-text">
          <Icon>
            <i className="fa-brands fa-js" />
          </Icon>
          <span>JavaScript</span>
        </div>
      </Columns.Column>
      <Columns.Column size={'one-third'} >
        <div className="icon-text">
          <Icon>
            <i className="fa-brands fa-css3" />
          </Icon>
          <span>CSS</span>
        </div>
      </Columns.Column>
      <Columns.Column size={'one-third'}>
        <div className="icon-text">
          <Icon>
            <i className="fa-brands fa-html5" />
          </Icon>
          <span>HTML</span>
        </div>
      </Columns.Column>
      <Columns.Column size={'one-third'}>
        <div className="icon-text">
          <Icon>
            <img src={tsLogo}></img>
          </Icon>
          <span>TypeScipt</span>
        </div>
      </Columns.Column>
      <Columns.Column size={'one-third'}>
        <div className="icon-text">
          <Icon>
            <img src={bulmaLogo}></img>
          </Icon>
          <span>Bulma</span>
        </div>
      </Columns.Column>
    </Columns>
  );
};

export default Skills;
