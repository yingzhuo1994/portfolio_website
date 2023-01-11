import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Licenses and Certifications', },
  { number: 30, text: 'Github Projects', },
  { number: 650, text: 'LeetCode Problems'},
  { number: 2000, text: 'WeChat Official Account Followers', },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider divider />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
