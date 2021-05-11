import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {ScheduleDate, ScheduleDateStl} from "../atoms/schedule-date";


const ScheduleCardStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px 15px;
  border: ${colors.primary} 0.5px solid;
  
  ${ScheduleDateStl}{
    margin-bottom: 15px;
  }
`


export const ScheduleCard = ({day, date}) => {
  return (
    <ScheduleCardStl>
      <ScheduleDate day={day} date={date} />
    </ScheduleCardStl>
  )
}