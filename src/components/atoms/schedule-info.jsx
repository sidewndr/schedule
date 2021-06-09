import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


export const ScheduleInfoStl = styled.div`
  display: grid;
  grid-template-columns: ${({columns}) => columns ? '100%' : '50% 50%'};
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

const TeacherStl = styled.div`
  place-self: center;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`


export const ScheduleInfo = ({course, group, teacher}) => {
  return (
    <ScheduleInfoStl columns={teacher}>
      {
        course && group &&
        <CourseStl>
          {course} курс
        </CourseStl>
      }

      {
        course && group &&
        <GroupStl>
          {group}
        </GroupStl>
      }

      {
        teacher &&
        <TeacherStl>
          {teacher}
        </TeacherStl>
      }
    </ScheduleInfoStl>
  )
}