import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

export const LabelStl = styled.div`
  width: 100%;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  text-transform: uppercase;
  color: ${colors.primary};
`


export const Label = ({text}) => {
  return (
    <LabelStl>
      {text}
    </LabelStl>
  )
}