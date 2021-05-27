import React from 'react'
import styled from 'styled-components'
import {useFetch} from "../../api/db/useFetch";
import {colors} from "../../shared/global-styles/colors";
import {Loader} from "../atoms/loader";


const RowStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ccc;
  
`

export const CallScheduleStl = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  border: ${colors.primary} 1px solid;
  padding: ;
  
  ${RowStl}:not(:last-child) {
    margin-bottom: 10px;
  }
`

const LessonStl = styled.div`
  //display: flex;
  //justify-content: center;
  //width: 45%;
  background-color: aqua;
`

const TimeStl = styled.div`
  //display: flex;
  //justify-content: center;
  background-color: blueviolet;
  //width: 55%;
`


export const CallSchedule = ({}) => {

  const query = '/data/callSchedule?sortBy=%60lessonNumber%60%20asc'
  const [loading, data, error] = useFetch(query)

  if (!loading) return <Loader />

  if (error) {
    console.log(error)
    return 'Произошла ошибка. Попробуйте позже.'
  }

  return (
    <CallScheduleStl>
      {/*{*/}
      {/*  data && data.map((item) => (*/}
      {/*    <RowStl key={item.objectId}>*/}
      {/*      <LessonStl>*/}
      {/*        {`Занятие ${item.lessonNumber}:`}*/}
      {/*      </LessonStl>*/}

      {/*      <TimeStl>*/}
      {/*        {`${item.timeFrom} - ${item.timeTo}`}*/}
      {/*      </TimeStl>*/}
      {/*    </RowStl>*/}
      {/*  ))*/}
      {/*}*/}

      {/*<Loader />*/}
    </CallScheduleStl>
  )
}