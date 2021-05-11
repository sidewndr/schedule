import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


export const ScheduleDateStl = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
`

const DayStl = styled.div`
  display: inline-block;
  text-align: left;
  text-transform: uppercase;
`

const DateStl = styled.div`
  display: inline-block;
  text-align: right;
`


export const ScheduleDate = ({day, date}) => {
  return (
    <ScheduleDateStl>
      <DayStl>
        {day}
      </DayStl>

      <DateStl>
        {date}
      </DateStl>
    </ScheduleDateStl>
  )
}