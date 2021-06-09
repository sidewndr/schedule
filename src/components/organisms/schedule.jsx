import React from 'react'
import styled from 'styled-components'
import {ScheduleInfo, ScheduleInfoStl} from "../atoms/schedule-info";
import {ScheduleCardList, ScheduleCardListStl} from "../molecules/schedule-card-list";
import {useLocation} from "react-router-dom";


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


export const Schedule = () => {

  let location = useLocation()

  const data = location.search
    .replace('?', '')
    .replace(/[+]/g, ' ')
    .split('&');

  let getCourseFromUrl = null
  let getGroupFromUrl = null
  let getTeacherFromUrl = null

  if (data.length > 1) {
    getCourseFromUrl = decodeURI(data[0].replace('course=', ''))
    getGroupFromUrl = decodeURI(data[1].replace('group=', ''))
  } else {
    getTeacherFromUrl = decodeURI(data[0].replace('teacher=', ''))
  }

  return (
    <ScheduleStl>
      <ScheduleInfo
        course={getCourseFromUrl}
        group={getGroupFromUrl}
        teacher={getTeacherFromUrl}
      />

      <ScheduleCardList
        course={getCourseFromUrl}
        group={getGroupFromUrl}
        teacher={getTeacherFromUrl}
      />
    </ScheduleStl>
  )
}