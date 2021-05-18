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
`

const HeaderContainerStl = styled.div`
  margin-bottom: 70px;
  
  @media ${media.isDesktop} {
    margin-bottom: 130px;
    
    //position: sticky;
    //top: 0;
    //z-index: 2;
  }
`

const MainContainerStl = styled.div`
  margin-bottom: auto;

  @media ${media.isDesktop} {
    //position: relative;
    //z-index: 1;
  }
`

const FooterContainerStl = styled.div``

const ColumnStl = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({navbar, main}) => (navbar && '0 0 240px') || (main && '1 1 auto')};
  width: ${({footer}) => footer && '100%'};
`

const RowStl = styled.div`
  display: flex;
  flex-direction: row;
  
  margin-bottom: ${({main}) => main && 'auto'};
  margin-top: ${({footer}) => footer && '20px'};
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
          <RowStl main>
            <ColumnStl navbar>
              <Navbar />
            </ColumnStl>

            <ColumnStl main>
              <HeaderContainerStl>
                <Header main />
              </HeaderContainerStl>

              <MainContainerStl>
                <DropdownsList />
                <DropdownsList />
                <DropdownsList />
                <DropdownsList />
                <DropdownsList />
              </MainContainerStl>
            </ColumnStl>
          </RowStl>

          <RowStl footer>
            <ColumnStl footer>
              <FooterContainerStl>
                <Footer />
              </FooterContainerStl>
            </ColumnStl>
          </RowStl>





        </HomeStl>
      </Desktop>
    </>
  )
}