import React from "react";
import { Columns, Icon } from "react-bulma-components";
import tsLogo from "./typescript.svg";
import bulmaLogo from "./Bulma Icon.svg";

const icons = [
  { title: "React JS", fontawesome: "fa-react", logo: false },
  { title: "JavaScript", fontawesome: "fa-js", logo: false },
  { title: "CSS", fontawesome: "fa-css3", logo: false },
  { title: "HTML", fontawesome: "fa-html5", logo: false },
  { title: "TypeScript", fontawesome: false, logo: tsLogo },
  { title: "Bulma", fontawesome: false, logo: bulmaLogo },
];

const SkillItem = ({ title, fontawesome, logo }) => {
  return (
    <Columns.Column mobile={{size: 'half'}} tablet={{size: 'half'}} desktop={{size: 'one-third'}} >
      <div className="icon-text">
        <Icon>
          {fontawesome ? (
            <i className={`fa-brands ${fontawesome}`} />
          ) : (
            <img src={logo} alt="bulma" />
          )}
        </Icon>
        <span>{title}</span>
      </div>
    </Columns.Column>
  );
};

const Skills = () => {
  return (
    <Columns breakpoint={'mobile'} centered={true}>
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
