import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To<br />
          Ying Zhuo's Website
        </SectionTitle>
        <SectionText>
        This is to show my finished project. If you need my teck skills, please contact me.
        </SectionText>
        <Button onClick={() => window.open("https://www.linkedin.com/in/yingzhuo/")}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;