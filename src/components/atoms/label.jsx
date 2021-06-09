import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";


export const LabelStl = styled.div`
  width: 100%;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  text-transform: uppercase;
  color: ${colors.primary};
  
  ${({edit}) => edit && css`
    width: auto;
    padding: 0 10px 0 0;
    font-size: inherit;
    text-transform: none;
  `}

  ${({readOnly}) => readOnly && css`
    width: 50%;
    min-height: 32px;
    padding: 3px 10px;
    font-size: 20px;
    text-transform: none;
    text-align: center;

    @media ${media.isTablet} {
      width: 60%;
    }

    @media ${media.isDesktop} {
      width: 70%;
    }
  `}
`


export const Label = ({text, edit, readOnly}) => {
  return (
    <LabelStl edit={edit} readOnly={readOnly}>
      {text}
    </LabelStl>
  )
}