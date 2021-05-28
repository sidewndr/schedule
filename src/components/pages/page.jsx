import React from 'react'
import styled from 'styled-components'
import {Header} from "../molecules/header";
import {Footer} from "../molecules/footer";
import {Desktop, media, Mobile, Tablet} from "../../shared/media/media";
import {Navbar} from "../organisms/navbar";
import {DropdownsListStl} from "../molecules/dropdowns-list";
import {ScheduleInfoStl} from "../atoms/schedule-info";
import {ScheduleCardListStl} from "../molecules/schedule-card-list";
import {CallScheduleStl} from "../molecules/call-schedule";
import {LoaderStl} from "../atoms/loader";


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
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 70px - 60px);
  padding: 0 20px 20px;
  margin-bottom: auto;
  
  //Loader:
  ${LoaderStl} {
    align-self: center;
  }

  //Main page contents:
  ${DropdownsListStl} {
    margin-top: 80px;

    @media ${media.isDesktop} {
      margin-top: 100px;
    }
  }

  //CallSchedule page contents:
  ${CallScheduleStl} {
    margin-top: 50px;
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