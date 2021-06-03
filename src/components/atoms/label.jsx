import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

export const LabelStl = styled.div`
  width: 100%;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  text-transform: uppercase;
  color: ${colors.primary};
  
  ${({edit}) => edit && css`
    width: auto;
    font-size: inherit;
    text-transform: none;
  `}
`


export const Label = ({text, edit}) => {
  return (
    <LabelStl edit={edit}>
      {text}
    </LabelStl>
  )
}