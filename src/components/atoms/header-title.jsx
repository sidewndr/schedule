import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


const HeaderTitleStl = styled.div`
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-transform: uppercase;

  ${props => props.primary && css`
    font-size: 24px;
    text-align: right;
    color: ${colors.primary};
  `}
  
  ${props => props.secondary && css`
    font-size: 18px;
    text-align: left;
    color: ${colors.secondary};
  `}
`


export const HeaderTitle = ({primary, secondary}) => {
  return (
    primary ?
      <HeaderTitleStl primary>
        Учебное<br/>расписание
      </HeaderTitleStl>
    :
    secondary ?
      <HeaderTitleStl secondary>
        Название<br/>заведения
      </HeaderTitleStl>
    :
    undefined
  )
}