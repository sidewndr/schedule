import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {date} from "../../api/date/date";


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

  return (
    <NavbarDateStl>
      <DayStl>
        {date.getDay()}
      </DayStl>

      <DateStl>
        {`${date.getDate()}.${date.getMonth()}.${date.getYear()}`}
      </DateStl>
    </NavbarDateStl>
  )
}