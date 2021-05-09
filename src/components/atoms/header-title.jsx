import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


const HeaderTitleStl = styled.div`
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-transform: uppercase;

  ${props => props.main && css`
    font-size: 24px;
    text-align: right;
    color: ${colors.primary};
  `}
  
  ${props => props.navbar && css`
    font-size: 24px;
    text-align: left;
    color: ${colors.secondary};
  `}
`


export const HeaderTitle = ({main, navbar}) => {
  return (
    main ?
      <HeaderTitleStl main>
        Учебное<br/>расписание
      </HeaderTitleStl>
    :
    navbar ?
      <HeaderTitleStl navbar>
        Название<br/>заведения
      </HeaderTitleStl>
    :
    undefined
  )
}