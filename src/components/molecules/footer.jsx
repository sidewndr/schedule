import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {FooterDescription} from "../atoms/footer-description";


const FooterStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${colors.primary};
  padding: 0 20px;
`


export const Footer = () => {
  return (
    <FooterStl>
      <FooterDescription text={'2021'} />
    </FooterStl>
  )
}