import React from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/header";
import {Footer} from "../molecules/footer";
import {DropdownsList} from "../molecules/dropdowns-list";
import {Desktop, media, Mobile, Tablet} from "../../shared/media/media";
import {Navbar} from "../organisms/navbar";


const HomeStl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${media.isDesktop} {
    flex-direction: row;
  }
`

const HeaderContainerStl = styled.div`
  margin-bottom: 70px;
  
  @media ${media.isDesktop} {
    //width: 240px;
    margin-bottom: 150px;
  }
`

const MainContainerStl = styled.div`
  margin-bottom: auto;
`

const FooterContainerStl = styled.div``

const ColumnStl = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({navbar, main}) => navbar ? '0 0 240px' : main ? '1 1 auto' : null};
`


export const Home = () => {
  return (
    <>
      <Mobile>
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
      </Mobile>

      <Tablet>
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
      </Tablet>


      <Desktop>
        <HomeStl>
          <ColumnStl navbar>
            <Navbar />
          </ColumnStl>

          <ColumnStl main>
            <HeaderContainerStl>
              <Header main />
            </HeaderContainerStl>

            <MainContainerStl>
              <DropdownsList />
            </MainContainerStl>

            <FooterContainerStl>
              <Footer />
            </FooterContainerStl>
          </ColumnStl>
        </HomeStl>
      </Desktop>
    </>
  )
}