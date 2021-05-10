import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {Header} from "../molecules/header";
import {NavbarDate} from "../atoms/navbar-date";
import {NavbarItem} from "../atoms/navbar-item";
import {Link} from "../atoms/link";


const NavbarStl = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  background-color: ${colors.primary};
  box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.4);
`

const BackgroundStl = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 40%;
`

const HeaderContainerStl = styled.div`
  margin-bottom: 20px;
`

const MainContainer = styled.div`
  margin-bottom: auto;
`

const DateContainer = styled.div`
  margin-bottom: 80px;
`


export const Navbar = ({onClick}) => {
  return (
    <>
      <BackgroundStl onClick={onClick} />

      <NavbarStl>
        <HeaderContainerStl>
          <Header navbar onClick={onClick} />
        </HeaderContainerStl>

        <MainContainer>
          <Link to={'/'} onClick={onClick}>
            <NavbarItem text={'Главная'} />
          </Link>

          <Link to={'/qwe'} onClick={onClick}>
            <NavbarItem text={'???'} />
          </Link>

          <Link to={'/'} onClick={onClick}>
            <NavbarItem text={'???'} />
          </Link>
        </MainContainer>

        <DateContainer>
          <NavbarDate />
        </DateContainer>
      </NavbarStl>
    </>
  )
}