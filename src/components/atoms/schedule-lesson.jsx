import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

const ScheduleLessonStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 89.2857%;
  font-family: 'Inter', sans-serif;
`

const ColumnStl = styled.div`
  display: flex;
  flex-direction: column;

  ${({left}) => left && css`
    flex: 0 0 13px;
    margin-right: 5px;
  `}

  ${({center}) => center && css`
    flex: 1 1 187px;
    margin-right: 20px;
    
    ${({end}) => end && css`
      margin-right: 0;
      border-bottom: ${colors.tertiary} 0.5px solid;
    `}
  `}

  ${({right}) => right && css`
    flex: 0 0 25px;
  `}
`

const RowStl = styled.div`
  display: flex;
  margin-bottom: 3px;
  
  ${({end}) => end && css`
    margin-bottom: 0;
  `}
`

const SerialNumberStl = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  color: ${colors.primary};
`

const LessonTimeStl = styled.div`
  font-weight: 300;
  font-size: 10px;
  text-align: left;
  color: ${colors.tertiary};
`

const LessonNameStl = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: justify;
  color: ${colors.primary};
`

const ClassroomNumberStl = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  color: ${colors.primary};
`

const TeacherStl = styled.div`
  font-weight: 300;
  font-size: 10px;
  text-align: left;
  color: ${colors.tertiary};
`


export const ScheduleLesson = ({serialNumber = 1,
                                 lessonName = 'Оченб длинное название предмета аж в три строки вау пиздец',
                                 classroomNumber = 321,
                                 teacherName = 'Прыжков Е. Е.',
                                 ...lessonTime}) => {

  return (
    <ScheduleLessonStl>
      <RowStl>
        <ColumnStl left />
        <ColumnStl center >
          <LessonTimeStl>
            {lessonTime.from = '10:00'} - {lessonTime.to = '11:40'}
          </LessonTimeStl>
        </ColumnStl>
        <ColumnStl right />
      </RowStl>

      <RowStl>
        <ColumnStl left>
          <SerialNumberStl>
            {serialNumber}.
          </SerialNumberStl>
        </ColumnStl>
        <ColumnStl center>
          <LessonNameStl>
            {lessonName}
          </LessonNameStl>
        </ColumnStl>
        <ColumnStl right>
          <ClassroomNumberStl>
            {classroomNumber}
          </ClassroomNumberStl>
        </ColumnStl>
      </RowStl>

      <RowStl>
        <ColumnStl left />
        <ColumnStl center>
          <TeacherStl>
            {teacherName}
          </TeacherStl>
        </ColumnStl>
        <ColumnStl right />
      </RowStl>

      <RowStl end>
        <ColumnStl left />
        <ColumnStl center end />
      </RowStl>
    </ScheduleLessonStl>
  )
}