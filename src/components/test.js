import React from 'react'
import styled from 'styled-components'
import {useFetch} from "../api/db/useFetch";


const TestStl = styled.div`
  
`


export const Test = () => {

  const [loading, data, error] = useFetch('/data/scheduleTimes')

  if (loading) return 'Загрузка...'

  if (error) {
    console.log(error)
    return 'Произошла ошибка. Попробуйте позже.'
  }

  return (
    <TestStl>
      {
        (data && data[0].time_from)
      }
    </TestStl>
  )
}