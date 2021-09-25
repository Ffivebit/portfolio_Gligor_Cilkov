import React from 'react';
import {motion} from 'framer-motion';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, PDFword } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
      <motion.div initial="hidden" animate="visible" variants={{
      hidden:{
        scale: .8,
        opacity: 0
      },
      visible:{
        scale: 1,
        opacity: 1,
        transition: {
        delay: .4
        }
      },
        }}>
        <SectionTitle main center>
          Welcome To My Portfolio
        </SectionTitle>
      </motion.div>
        <SectionText>
        If I had to explain myself with one sentence, then it would be that I'm different where it matters and fanatical where it counts.
        </SectionText>
        <Button onClick={props.handleClick}><PDFword href="https://maipdf.com/book/?e=de1YSUwpm088M6" target="_blank"> 
        Learn More</PDFword></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;