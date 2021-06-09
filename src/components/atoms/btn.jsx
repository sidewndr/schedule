import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

export const BtnStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 22px;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  padding: 10px 20px;
  border: ${colors.primary} 1px solid;
  cursor: pointer;
  user-select: none;
  transition: .2s;
  
  &:hover{
    color: ${colors.secondary};
    background-color: ${colors.primary};
  }
`


export const Btn = ({text, onClick}) => {
  return (
    <BtnStl onClick={onClick} >
      {text}
    </BtnStl>
  )
}