import React from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/header";
import {Footer} from "../molecules/footer";
import {DropdownsList} from "../molecules/dropdowns-list";
import Media from "react-media";
import {media} from "../../shared/media/media";
import {Navbar} from "../organisms/navbar";


const HomeStl = styled.div`
  display: flex;
  min-height: 100vh;
  
  @media(${media.isMobile}) {
    flex-direction: column;
  }

  @media(${media.isTablet}) {
    flex-direction: column;
  }

  @media(${media.isDesktop}) {
    flex-direction: row;
  }
`

const HeaderContainerStl = styled.div`
  margin-bottom: 70px;
  
  @media(${media.isDesktop}) {
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
  flex: ${({navbar, main}) => navbar ? '0 0' : main ? '1 1' : null};
`


export const Home = () => {
  return (
    <Media queries={media}>
      {media => (
        <>
          {
            (media.isMobile || media.isTablet) && (
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

          {
            media.isDesktop && (
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
            )
          }
        </>
      )}
    </Media>
  )
}