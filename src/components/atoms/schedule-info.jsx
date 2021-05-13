import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {useLocation} from 'react-router-dom'


const ScheduleInfoStl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 30px;
  padding: 0 15px;
  border-radius: 5px;
  background-color: ${colors.primary};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.secondary};
`

const CourseStl = styled.div`
  text-align: left;
  text-transform: uppercase;
`

const GroupStl = styled.div`
  text-align: right;
`


export const ScheduleInfo = () => {

  let location = useLocation()

  const data = location.search
    .replace('?', '')
    .replace(/[+]/g, ' ')
    .split('&');

  const getCourseFromUrl = data[0].replace('course=', '')
  const getGroupFromUrl = data[1].replace('group=', '')

  return (
    <ScheduleInfoStl>
      <CourseStl>
        {getCourseFromUrl} КУРС
      </CourseStl>

      <GroupStl>
        {getGroupFromUrl}
      </GroupStl>
    </ScheduleInfoStl>
  )
}