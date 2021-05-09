import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const LinkStl = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
`


export const Link = ({to, ...props}) => {

  return (
    <LinkStl to={to}>
      {props.children}
    </LinkStl>
  )
}