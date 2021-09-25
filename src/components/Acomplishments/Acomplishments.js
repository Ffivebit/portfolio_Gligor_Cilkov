import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxImg, BoxNum, BoxText, SocialIcons } from './AcomplishmentsStyles';
import { AiFillGithub} from "react-icons/ai";
const data = [
  { title: "Github", image: '/images/Github.png'},
  { title: "VScode", image: '/images/VScode.png', },
  { title: "Postman", image: '/images/Postman.png', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Some Technologies I use</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.title}`}</BoxNum>
          <BoxImg src={card.image} />
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
