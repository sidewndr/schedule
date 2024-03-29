import React from 'react'
import styled from 'styled-components'
import {useFetch} from "../../api/hooks/useFetch";
import {colors} from "../../shared/global-styles/colors";
import {Loader} from "../atoms/loader";
import {Error} from "../atoms/error";


const RowStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${colors.primary} 1px solid;
  padding: 5px;
`

export const CallScheduleStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  
  ${RowStl}:not(:last-child) {
    margin-bottom: 15px;
  }
`

const LessonStl = styled.div``

const TimeStl = styled.div``


export const CallSchedule = () => {

  const query = '/data/callSchedule?pageSize=100&sortBy=%60lessonNumber%60%20asc'
  const [loading, data, error] = useFetch(query)

  if (loading) return <Loader />

  if (error) {
    console.log(error)
    return <Error />
  }

  return (
    <CallScheduleStl>
      {
        data && data.map((item) => (
          <RowStl key={item.objectId}>
            <LessonStl>
              {`Занятие ${item.lessonNumber}:`}
            </LessonStl>

            <TimeStl>
              {`${item.timeFrom} - ${item.timeTo}`}
            </TimeStl>
          </RowStl>
        ))
      }
    </CallScheduleStl>
  )
}