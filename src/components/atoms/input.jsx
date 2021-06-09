import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";

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
  
  ${({edit}) => edit && css`
    width: 50%;
    max-width: none;
    font-size: inherit;
    text-align: center;
    
    @media ${media.isTablet} {
      width: 60%;
    }
    
    @media ${media.isDesktop} {
      width: 70%;
    }
  `}
`


export const Input = ({type, onChange, value, edit}) => {
  return (
    <InputStl
      type={type}
      value={value}
      onChange={onChange}
      edit={edit}
    />
  )
}