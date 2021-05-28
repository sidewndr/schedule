import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";


const NavbarItemStl = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  cursor: pointer;
  padding: 10px 0 10px 20px;
  border-left: ${colors.primary} 1px solid;
  border-right: ${colors.primary} 1px solid;
  color: ${colors.secondary};
  text-transform: uppercase;
  user-select: none;
  transition: .2s;
  
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