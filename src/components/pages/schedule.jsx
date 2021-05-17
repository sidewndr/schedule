import React from 'react'
import styled from 'styled-components'
import {Footer} from "../molecules/footer";
import {Header} from "../molecules/header";
import {ScheduleInfo, ScheduleInfoStl} from "../atoms/schedule-info";
import {media} from "../../shared/media/media";
import {Navbar} from "../organisms/navbar";
import {ScheduleCardList} from "../molecules/schedule-card-list";


const ScheduleStl = styled.div`
  display: flex;
  min-height: 100vh;

  @media ${media.isMobile} {
    flex-direction: column;
  }

  @media ${media.isTablet} {
    flex-direction: column;
  }

  @media ${media.isDesktop} {
    flex-direction: row;
  }
`

const HeaderContainerStl = styled.div`
  margin-bottom: 20px
`

const MainContainerStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px auto 20px;
  
  ${ScheduleInfoStl} {
    margin-bottom: 20px;
  }
  
  @media ${media.isDesktop} {
    margin-left: 260px;
  }
`

const FooterContainerStl = styled.div``

const ColumnStl = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({navbar, main}) => navbar ? '0 0' : main ? '1 1' : null};
`


export const Schedule = () => {
  return (
    // <Media queries={media}>
    //   {media => (
    //     <>
    //       {
    //         (media.isMobile || media.isTablet) && (
    //           <ScheduleStl>
    //             <HeaderContainerStl>
    //               <Header main />
    //             </HeaderContainerStl>
    //
    //             <MainContainerStl>
    //               <ScheduleInfo />
    //
    //               <ScheduleCardList />
    //             </MainContainerStl>
    //
    //             <FooterContainerStl>
    //               <Footer />
    //             </FooterContainerStl>
    //           </ScheduleStl>
    //         )
    //       }
    //
    //       {
    //         media.isDesktop && (
    //           <ScheduleStl>
    //             <ColumnStl navbar>
    //               <Navbar />
    //             </ColumnStl>
    //
    //             <ColumnStl main>
    //               <HeaderContainerStl>
    //                 <Header main />
    //               </HeaderContainerStl>
    //
    //               <MainContainerStl>
    //                 <ScheduleInfo />
    //               </MainContainerStl>
    //
    //               <FooterContainerStl>
    //                 <Footer />
    //               </FooterContainerStl>
    //             </ColumnStl>
    //           </ScheduleStl>
    //         )
    //       }
    //     </>
    //   )}
    // </Media>
    <></>
  )
}