import React from 'react'
import styled, {css} from 'styled-components'

import BtnSelectImg from '../../attachments/img/btn-select.svg'
import {colors} from "../../shared/global-styles/colors";

const SelectBoxStl = styled.div`
  position: relative;

  width: 300px;
  height: 300px;
  
  &::after{
    content: url(${BtnSelectImg});
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }
`

const SelectStl = styled.select`
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: transparent;
  appearance: none;
  border: none;
  outline: none;
  padding-left: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: ${colors.primary};

  &:hover, &:focus{
    cursor: pointer;
    outline: ${colors.primary} 1px solid;
    border-radius: 5px;
  }
`





const OptionStl = styled.option`
  ${props => props.title && css`
    display: none;
  `}
  
  &:hover{
    color: white;
    background-color: black;
    
    cursor: pointer;
  }
  
  &:checked{
    color: white;
    background-color: black;
  }
`


export const SelectBox = () => {
  return (
    <SelectBoxStl>
      <SelectStl>
        <OptionStl title selected>TITILE</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
      </SelectStl>



      <SelectStl size="6">
        <OptionStl title selected>TITILE</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
        <OptionStl>qwe</OptionStl>
      </SelectStl>
    </SelectBoxStl>
  )
}