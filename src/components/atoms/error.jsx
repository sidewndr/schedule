import React from 'react'
import styled from 'styled-components'

export const ErrorStl = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 500;
`


export const Error = () => {
  return (
    <ErrorStl>
      {`Произошла ошибка. Попробуйте позже.`}
    </ErrorStl>
  )
}