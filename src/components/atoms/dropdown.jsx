import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";

import BtnSelectImg from '../../attachments/img/btn-select.svg'


export const DropdownStl = styled.div`
  display: inline-block;
  position: relative;
  width: 260px;

  &::after{
    content: url(${BtnSelectImg});
    display: block;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }
  
  ${({isHidden}) => isHidden && css`
    visibility: hidden;
  `}
  
  @media ${media.isTablet} {
    width: 400px;
  }
  
  @media ${media.isDesktop} {
    width: 500px;
  }
`

const SelectStl = styled.select`
  width: 100%;
  height: 30px;
  display: block;
  position: relative;
  appearance: none;
  outline: none;
  padding: 0 0 0 15px;
  background-color: transparent;
  border: transparent 1px solid;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: ${colors.primary};
  cursor: pointer;

  &:focus, &:hover{
    border-color: ${colors.primary};
  }
`

const OptionStl = styled.option`
  ${({defaultTitle}) => defaultTitle && css`
    display: none !important;
  `}
`


export const Dropdown = ({defaultValue, data = [], onChangeValue, isHidden}) => {
  return (
    <DropdownStl isHidden={isHidden}>
      <SelectStl onChange={onChangeValue}>
        <OptionStl defaultTitle selected>
          {defaultValue}
        </OptionStl>
        {
          data.map((item, index) => (
            <OptionStl key={index}>
              {item.item}
            </OptionStl>
          ))
        }
      </SelectStl>
    </DropdownStl>
  )
}