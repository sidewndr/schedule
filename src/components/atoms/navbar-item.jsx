import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


export const NavbarItemStl = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  cursor: pointer;
  padding: 10px 20px;
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
  
  ${({center}) => center && css`
    justify-content: center;
  `}
`


export const NavbarItem = ({text, center, onClick}) => {
  return (
    <NavbarItemStl center={center} onClick={onClick}>
      {text}
    </NavbarItemStl>
  )
}