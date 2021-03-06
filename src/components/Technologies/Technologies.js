import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FiFigma } from "react-icons/fi";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the web development world. From Back-end to Design</SectionText>
    <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js, Vue,<br /> 
          HTML/CSS, JavaScript,<br />
          & ES5/ES6 
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          .Net, Django <br />
          Flask, MySQL <br />
          RESTful API & MariaDB
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FiFigma size="3rem"/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </List>
    
  </Section>
);

export default Technologies;
