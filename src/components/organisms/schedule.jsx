import React from 'react'
import styled from 'styled-components'
import {ScheduleInfo, ScheduleInfoStl} from "../atoms/schedule-info";
import {ScheduleCardList, ScheduleCardListStl} from "../molecules/schedule-card-list";


const ScheduleStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${ScheduleInfoStl} {
    margin-top: 20px;
  }

  ${ScheduleCardListStl} {
    margin-top: 20px;
  }
`


export const Schedule = ({}) => {
  return (
    <ScheduleStl>
      <ScheduleInfo />
      <ScheduleCardList />
    </ScheduleStl>
  )
}