import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";


const ScheduleCardStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px 15px;
  border: ${colors.primary} 0.5px solid;
`


export const ScheduleCard = ({}) => {
  return (
    <ScheduleCardStl>

    </ScheduleCardStl>
  )
}