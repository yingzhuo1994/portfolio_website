import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LinkedIn</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/yingzhuo">linkedin.com/in/yingzhuo</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yingzhuo1994@gmail.com">
            yingzhuo1994@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Make the world better!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/yingzhuo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaEcaY9pSTTaQflTQORyvJw%3D%3D">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/yingzhuo1994">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://leetcode.com/yingzhuo1994/">
            <SiLeetcode size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
