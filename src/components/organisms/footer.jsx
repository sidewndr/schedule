import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {SocialList} from "../molecules/social-list";
import {media} from "../../shared/media/media";


const FooterStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${colors.primary};
  padding: 0 20px;
  
  @media ${media.isDesktop} {
    padding: 0 20px 0 260px;
  }
`


export const Footer = () => {
  return (
    <FooterStl>
      <SocialList />
    </FooterStl>
  )
}