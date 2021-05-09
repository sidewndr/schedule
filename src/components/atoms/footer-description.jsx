import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


const FooterDescriptionStl = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.secondary};
`


export const FooterDescription = ({text}) => {
  return (
    <FooterDescriptionStl>
      {text}
    </FooterDescriptionStl>
  )
}