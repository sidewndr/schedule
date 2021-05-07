import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const LinkStl = styled(NavLink)`
  display: inline-block;
`


export const Link = ({...props}) => {

  return (
    <LinkStl>
      {props.children}
    </LinkStl>
  )
}