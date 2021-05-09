import React from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/header";
import {Footer} from "../molecules/footer";
import {Dropdown} from "../atoms/dropdown";


const HomeStl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HeaderContainerStl = styled.div``


const MainContainerStl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`

const FooterContainerStl = styled.div``



export const Home = ({}) => {
  return (
    <HomeStl>
      <HeaderContainerStl>
        <Header />
      </HeaderContainerStl>

      <MainContainerStl>
        <Dropdown mobile />
        <Dropdown mobile />
        <Dropdown mobile />
      </MainContainerStl>

      <FooterContainerStl>
        <Footer />
      </FooterContainerStl>
    </HomeStl>
  )
}