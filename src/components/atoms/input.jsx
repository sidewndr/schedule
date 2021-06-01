import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

export const InputStl = styled.input`
  width: 80vw;
  max-width: 500px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: ${colors.primary};
  padding: 3px 10px;
  border: ${colors.primary} 1px solid;
  outline: none;
`


export const Input = ({type, onChange, value}) => {
  return (
    <InputStl
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}