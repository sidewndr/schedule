import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


export const ScheduleDayStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: ${colors.primary};
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.secondary};
  text-align: center;
  text-transform: uppercase;
`

export const ScheduleDay = ({day}) => {
  return (
    <ScheduleDayStl>
      {day}
    </ScheduleDayStl>
  )
}