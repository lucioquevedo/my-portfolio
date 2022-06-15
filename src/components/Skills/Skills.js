import React from "react";
import { Columns, Icon } from "react-bulma-components";
import tsLogo from "./typescript.svg";
import nextLogo from "./next-js-svgrepo-com.svg";
import reduxLogo from "./redux-svgrepo-com.svg";
import mongodbLogo from "./mongodb-svgrepo-com.svg";

const icons = [
  { title: "React JS", fontawesome: "fa-react", logo: false },
  { title: "JavaScript", fontawesome: "fa-js", logo: false },
  { title: "CSS", fontawesome: "fa-css3", logo: false },
  { title: "HTML", fontawesome: "fa-html5", logo: false },
  { title: "TypeScript", fontawesome: false, logo: tsLogo },
  { title: "Sass", fontawesome: "fa-sass", logo: false },
  { title: "Next JS", fontawesome: false, logo: nextLogo },
  { title: "Redux", fontawesome: false, logo: reduxLogo },
  { title: "MongoDB", fontawesome: false, logo: mongodbLogo },
];

const SkillItem = ({ title, fontawesome, logo }) => {
  return (
    <Columns.Column mobile={{size: 'half'}} tablet={{size: 'half'}} desktop={{size: 'one-third'}} >
      <div className="icon-text">
        <Icon>
          {fontawesome ? (
            <i className={`fa-brands ${fontawesome}`} />
          ) : logo ? (
            <img src={logo} alt="bulma" />
          ) : (
            null
          )}
        </Icon>
        <span>{title}</span>
      </div>
    </Columns.Column>
  );
};

const Skills = () => {
  return (
    <Columns breakpoint={'mobile'} centered={false}>
      {icons.map((item, index) => (
        <SkillItem
          key={index}
          title={item.title}
          fontawesome={item.fontawesome}
          logo={item.logo}
        />
      ))}
    </Columns>
  );
};

export default Skills;
