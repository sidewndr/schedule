import React from 'react'
import styled from 'styled-components'
import {Footer} from "../molecules/footer";
import {Header} from "../molecules/header";
import {ScheduleInfo} from "../atoms/schedule-info";


const ScheduleStl = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HeaderContainerStl = styled.div`
  margin-bottom: 20px
`


const MainContainerStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
`

const FooterContainerStl = styled.div``


export const Schedule = () => {
  return (
    <ScheduleStl>
      <HeaderContainerStl>
        <Header main />
      </HeaderContainerStl>

      <MainContainerStl>
        <ScheduleInfo />
      </MainContainerStl>

      <FooterContainerStl>
        <Footer />
      </FooterContainerStl>
    </ScheduleStl>
  )
}