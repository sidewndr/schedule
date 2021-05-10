import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


const NavbarDateStl = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: ${colors.secondary};
  text-align: center;
  text-transform: uppercase;
  user-select: none;
`

const DayStl = styled.div`
  margin-bottom: 5px;
`

const DateStl = styled.div``


export const NavbarDate = () => {

  const date = new Date()

  const getDate = () => (
    date.getDate() < 10
      ? '0' + date.getDate()
      : date.getDate()
  )

  const getMonth = () => (
    date.getMonth() < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1
  )

  const getYear = () => (
    date.getFullYear()
  )

  const getDay = () => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return days[date.getDay()]
  }

  return (
    <NavbarDateStl>
      <DayStl>
        {getDay()}
      </DayStl>

      <DateStl>
        {`${getDate()}.${getMonth()}.${getYear()}`}
      </DateStl>
    </NavbarDateStl>
  )
}