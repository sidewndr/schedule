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
  border-bottom: ${({end}) => end ? `${colors.primary} 0.5px solid` : null};


  ${({left}) => left && css`
    flex: 0 0 13px;
    margin-right: 5px;
  `}

  ${({center}) => center && css`
    flex: 1 1 187px;
    margin-right: 20px;
  `}

  ${({right}) => right && css`
    flex: 0 0 25px;
  `}
`

const RowStl = styled.div`
  display: flex;
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


export const ScheduleLesson = ({serialNumber, lessonName, ...lessonTime}) => {

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
            {serialNumber = 1}.
          </SerialNumberStl>
        </ColumnStl>
        <ColumnStl center>
          <LessonNameStl>
            {lessonName = ''}
          </LessonNameStl>
        </ColumnStl>
        <ColumnStl right></ColumnStl>
      </RowStl>

      <RowStl>
        <ColumnStl left></ColumnStl>
        <ColumnStl center></ColumnStl>
        <ColumnStl right></ColumnStl>
      </RowStl>
    </ScheduleLessonStl>
  )
}