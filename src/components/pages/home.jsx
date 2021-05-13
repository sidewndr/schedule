import React from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/header";
import {Footer} from "../molecules/footer";
import {DropdownsList} from "../molecules/dropdowns-list";


const HomeStl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HeaderContainerStl = styled.div`
  margin-bottom: 70px
`


const MainContainerStl = styled.div`
  margin-bottom: auto;
`

const FooterContainerStl = styled.div``


export const Home = () => {



  return (
    <HomeStl>
      <HeaderContainerStl>
        <Header main />
      </HeaderContainerStl>

      <MainContainerStl>
        <DropdownsList />
      </MainContainerStl>

      <FooterContainerStl>
        <Footer />
      </FooterContainerStl>
    </HomeStl>
  )
}