import React from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/header";
import {Footer} from "../molecules/footer";
import {Desktop, media, Mobile, Tablet} from "../../shared/media/media";
import {Navbar} from "../organisms/navbar";
import {DropdownsListStl} from "../molecules/dropdowns-list";
import {ScheduleInfoStl} from "../atoms/schedule-info";
import {ScheduleCardListStl} from "../molecules/schedule-card-list";


const PageStl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HeaderContainerStl = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`

const MainContainerStl = styled.div`
  padding: 0 20px;
  margin-bottom: auto;

  //Main page content margins:
  ${DropdownsListStl} {
    margin-top: 70px;

    @media ${media.isDesktop} {
      margin-top: 130px;
    }
  }
  
  //Schedule page content margins:
  ${ScheduleInfoStl} {
    margin-top: 20px;
  }

  ${ScheduleCardListStl} {
    margin-top: 20px;
  }
`

const FooterContainerStl = styled.div`
  margin-top: 20px;
`

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
`


export const Page = (props) => {

  const {children} = props

  return (
    <>
      <Mobile>
        <PageStl>
          <HeaderContainerStl>
            <Header main />
          </HeaderContainerStl>

          <MainContainerStl>
            {children}
          </MainContainerStl>

          <FooterContainerStl>
            <Footer />
          </FooterContainerStl>
        </PageStl>
      </Mobile>

      <Tablet>
        <PageStl>
          <HeaderContainerStl>
            <Header main />
          </HeaderContainerStl>

          <MainContainerStl>
            {children}
          </MainContainerStl>

          <FooterContainerStl>
            <Footer />
          </FooterContainerStl>
        </PageStl>
      </Tablet>


      <Desktop>
        <PageStl>
          <RowStl main>
            <ColumnStl navbar>
              <Navbar />
            </ColumnStl>

            <ColumnStl main>
              <HeaderContainerStl>
                <Header main />
              </HeaderContainerStl>

              <MainContainerStl>
                {children}
              </MainContainerStl>
            </ColumnStl>
          </RowStl>

          <RowStl>
            <ColumnStl footer>
              <FooterContainerStl>
                <Footer />
              </FooterContainerStl>
            </ColumnStl>
          </RowStl>
        </PageStl>
      </Desktop>
    </>
  )
}