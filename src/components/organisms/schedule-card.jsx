import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {ScheduleDay, ScheduleDayStl} from "../atoms/schedule-day";
import {RowStl, ScheduleLesson, ScheduleLessonStl} from "../atoms/schedule-lesson";


const ScheduleCardStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: ${colors.primary} 1px solid;
  
  ${ScheduleDayStl} {
    margin-bottom: 15px;
  }
  
  ${ScheduleLessonStl}:not(:last-child) {
    margin-bottom: 6px;
  }

  ${ScheduleLessonStl}:last-child ${RowStl}:nth-child(3) {
    margin-bottom: 0;
  }

  ${ScheduleLessonStl}:last-child ${RowStl}:last-child {
    display: none;
  }
`

const ScheduleLessonListStl = styled.div`
  padding: 0 15px 10px 15px ;

`


export const ScheduleCard = ({cardDay = 'Понедельник'}) => {
  return (
    <ScheduleCardStl>
      <ScheduleDay day={cardDay} />

      <ScheduleLessonListStl>
        <ScheduleLesson />
        <ScheduleLesson />
        <ScheduleLesson />
        <ScheduleLesson />
      </ScheduleLessonListStl>
    </ScheduleCardStl>
  )
}