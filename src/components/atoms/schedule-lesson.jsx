import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

export const ScheduleLessonStl = styled.div`
  display: flex;
  flex-direction: column;
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
    flex: 1 1 auto;
    margin-right: 20px;
  `}

  ${({right}) => right && css`
    flex: 0 0 25px;
  `}

  ${({last}) => last && css`
    width: 100%;
    height: 1px;
  `}
`

export const RowStl = styled.div`
  display: flex;
  margin-bottom: 3px;
  
  ${({last}) => last && css`
    margin-bottom: 0;
  `}
`

const SerialNumberStl = styled.div`
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  color: ${colors.primary};
`

const LessonTimeStl = styled.div`
  font-weight: 300;
  font-size: 12px;
  text-align: left;
  color: ${colors.tertiary};
`

const LessonNameStl = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  color: ${colors.primary};
`

const ClassroomNumberStl = styled.div`
  font-weight: 600;
  font-size: 16px;
  text-align: right;
  color: ${colors.primary};
`

const TeacherStl = styled.div`
  font-weight: 300;
  font-size: 12px;
  text-align: left;
  color: ${colors.tertiary};
`

const HrStl = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  background-color: ${colors.tertiary};
  height: 50%;
`


export const ScheduleLesson = ({serialNumber = 1,
                               lessonName = 'Название дисциплины',
                               classroomNumber = 123,
                               teacherName = 'Преподаватель А. Б.',
                               timeFrom = '10:00',
                               timeTo = '11:40'}) => {

  return (
    <ScheduleLessonStl>
      <RowStl>
        <ColumnStl left />
        <ColumnStl center >
          <LessonTimeStl>
            {timeFrom} - {timeTo}
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

      <RowStl last>
        <ColumnStl last>
          <HrStl />
        </ColumnStl>
      </RowStl>
    </ScheduleLessonStl>
  )
}