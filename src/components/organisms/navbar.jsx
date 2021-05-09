import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {Header} from "../molecules/header";


const NavbarStl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  background-color: ${colors.primary};
  
  & div:nth-child(1){
    margin-bottom: 20px;
  }
`

const BackgroundStl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 40%;
`


export const Navbar = () => {
  return (
    <>
      <BackgroundStl />

      <NavbarStl>
        <Header navbar />
      </NavbarStl>
    </>
  )
}