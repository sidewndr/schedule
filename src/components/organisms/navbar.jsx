import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";
import {Header} from "./header";
import {NavbarDate} from "../atoms/navbar-date";
import {NavbarItem} from "../atoms/navbar-item";
import {Link, LinkStl} from "../atoms/link";


const NavbarStl = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  background-color: ${colors.primary};
  box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.4);
  
  @media ${media.isDesktop} {
    box-shadow: none;
  }
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
  
  @media ${media.isDesktop} {
    display: none;
  }
`

const HeaderContainerStl = styled.div`
  margin-bottom: 20px;
`

const MainContainer = styled.div`
  margin-bottom: auto;
  
  ${LinkStl}:not(:last-child) {
    margin-bottom: 5px;
  }
`

const DateContainer = styled.div`
  margin-bottom: 60px;
  border-bottom: 1px solid ${colors.secondary};
  border-top: 1px solid ${colors.secondary};
  padding: 20px 0 20px 0;
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
            <NavbarItem text={'Расписание'} />
          </Link>

          <Link to={'/call-schedule'} onClick={onClick}>
            <NavbarItem text={'Звонки'} />
          </Link>

          <Link to={'/'} onClick={onClick}>
            <NavbarItem text={'Вернуться'} />
          </Link>
        </MainContainer>

        <DateContainer>
          <NavbarDate />
        </DateContainer>
      </NavbarStl>
    </>
  )
}