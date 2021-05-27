import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


const NavbarItemStl = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  cursor: pointer;
  padding: 3px 0 3px 20px;
  color: ${colors.secondary};
  text-transform: uppercase;
  user-select: none;
  
  &:hover{
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }
`


export const NavbarItem = ({text}) => {
  return (
    <NavbarItemStl>
      {text}
    </NavbarItemStl>
  )
}