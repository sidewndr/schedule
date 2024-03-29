import React from 'react'
import styled from 'styled-components'
import {Header} from "../organisms/header";
import {Footer} from "../organisms/footer";
import {Desktop, Mobile, Tablet} from "../../shared/media/media";
import {Navbar} from "../organisms/navbar";
import {DropdownsListStl} from "../molecules/dropdowns-list";
import {CallScheduleStl} from "../organisms/call-schedule";
import {LoaderStl} from "../atoms/loader";
import {ErrorStl} from "../atoms/error";
import {AuthStl} from "../organisms/auth";
import {EditStl} from "../organisms/edit";


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
  
  //Loader, Error:
  ${LoaderStl}, ${ErrorStl} {
    align-self: center;
  }

  //Main page contents:
  ${DropdownsListStl} {
    margin-top: 120px;
  }

  //CallSchedule page contents:
  ${CallScheduleStl} {
    margin-top: 40px;
  }

  //Auth page contents:
  ${AuthStl} {
    margin-top: 120px;
  }

  //Edit page contents:
  ${EditStl} {
    margin-top: 40px;
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