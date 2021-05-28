import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const LinkStl = styled(NavLink)`
  display: block;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`


export const Link = ({to, onClick, ...props}) => {

  return (
    <LinkStl to={to} onClick={onClick}>
      {props.children}
    </LinkStl>
  )
}