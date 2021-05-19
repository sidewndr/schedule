import React from 'react'
import styled from 'styled-components'
import {ScheduleCard} from "../organisms/schedule-card";
import {media} from "../../shared/media/media";


export const ScheduleCardListStl = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;
  
  @media ${media.isTablet} {
    grid-template-columns: auto auto;
  }  
  
  @media ${media.isDesktop} {
    grid-template-columns: auto auto;
  }
`


export const ScheduleCardList = () => {
  return (
    <ScheduleCardListStl>
      <ScheduleCard cardDay={'Понедельник'} />
      <ScheduleCard cardDay={'Вторник'} />
      <ScheduleCard cardDay={'Среда'} />
      <ScheduleCard cardDay={'Четверг'} />
      <ScheduleCard cardDay={'Пятница'} />
      <ScheduleCard cardDay={'Суббота'} />
    </ScheduleCardListStl>
  )
}