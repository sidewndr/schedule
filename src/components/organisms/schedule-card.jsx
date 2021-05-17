import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {ScheduleDate, ScheduleDateStl} from "../atoms/schedule-date";
import {ScheduleLesson} from "../atoms/schedule-lesson";


const ScheduleCardStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px 15px;
  border: ${colors.primary} 0.5px solid;
  
  ${ScheduleDateStl} {
    margin-bottom: 15px;
  }
`


export const ScheduleCard = ({day = 'Понедельник',
                              date = '01.01'}) => {
  return (
    <ScheduleCardStl>
      <ScheduleDate day={} date={} />

      <ScheduleLesson  />
      <ScheduleLesson />
      <ScheduleLesson />
      <ScheduleLesson />
      <ScheduleLesson />
      <ScheduleLesson />
    </ScheduleCardStl>
  )
}