import React, {useState} from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {BtnMenu} from "../atoms/btn-menu";
import {HeaderTitle} from "../atoms/header-title";
import {Navbar} from "../organisms/navbar";


export const HeaderStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: ${({main}) => main ? colors.primary : colors.secondary} 1px solid;
  padding: 0 20px;
`


export const Header = ({main, navbar, onClick}) => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const navbarToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
      main ?
        <>
          <HeaderStl main>
            <BtnMenu open onClick={navbarToggle} />
            <HeaderTitle main />
          </HeaderStl>
          {
            navbarOpen
              ? <Navbar onClick={navbarToggle} />
              : null
          }
        </>

      :
      navbar ?
        <HeaderStl>
          <HeaderTitle navbar />
          <BtnMenu close onClick={onClick} />
        </HeaderStl>

      :
        undefined
  )
}