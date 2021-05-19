import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {useLocation} from 'react-router-dom'


export const ScheduleInfoStl = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
  height: 40px;
  border-radius: 5px;
  background-color: ${colors.primary};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: ${colors.secondary};
`

const CourseStl = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`

const GroupStl = styled.div`
  width: 100%;
  text-align: center;
`


export const ScheduleInfo = () => {

  let location = useLocation()

  const data = location.search
    .replace('?', '')
    .replace(/[+]/g, ' ')
    .split('&');

  const getCourseFromUrl = decodeURI(data[0].replace('course=', ''))
  const getGroupFromUrl = decodeURI(data[1].replace('group=', ''))

  return (
    <ScheduleInfoStl>
      <CourseStl>
        {getCourseFromUrl} курс
      </CourseStl>

      <GroupStl>
        {getGroupFromUrl}
      </GroupStl>
    </ScheduleInfoStl>
  )
}