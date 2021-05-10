import React from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/header";
import {Footer} from "../molecules/footer";
import {Dropdown, DropdownStl} from "../atoms/dropdown";


const HomeStl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HeaderContainerStl = styled.div`
  margin-bottom: 70px
`


const MainContainerStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
  
  ${DropdownStl}:nth-child(1){
    margin-bottom: 25px;
  }

  ${DropdownStl}:nth-child(2){
    margin-bottom: 70px;
  }
`

const FooterContainerStl = styled.div``



export const Home = () => {
  return (
    <HomeStl>
      <HeaderContainerStl>
        <Header main />
      </HeaderContainerStl>

      <MainContainerStl>
        <Dropdown mobile defaultValue={'КУРС'} />
        <Dropdown mobile defaultValue={'ГРУППА'} />
        <Dropdown mobile defaultValue={'ПРЕПОДАВАТЕЛЬ'} />
      </MainContainerStl>

      <FooterContainerStl>
        <Footer />
      </FooterContainerStl>
    </HomeStl>
  )
}