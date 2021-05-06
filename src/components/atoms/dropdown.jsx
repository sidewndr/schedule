import React, {useState} from 'react'
import styled, {css} from 'styled-components'

import BtnSelectImg from '../../attachments/img/btn-select.svg'
import {colors} from "../../shared/global-styles/colors";


const DropdownStl = styled.div`
  display: inline-block;
  position: relative;

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

  width: 300px;
  height: 30px;
`

const OptionStl = styled.option`
  ${({defaultTitle}) => defaultTitle && css`
    display: none !important;
  `}
  
  ${({item}) => item && css`
    /* Height like on SelectStl */
    min-height: 30px;
    height: auto !important;
    /*                        */
    padding: 0 4px;
    
    &:hover{
      background-color: ${colors.primary};
      color: ${colors.secondary};
    }
  `}

  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`

const DropdownMenuStl = styled.div`
  position: absolute;
  z-index: 1;
  left: -1px;
  top: 35px;
  width: calc(100% + 2px);
  overflow: auto;
  border: ${colors.primary} 1px solid;
  border-radius: 5px;



  height: 300px;
`


export const Dropdown = ({mobile, desktop}) => {

  const options = [
    {id: 0, label: 'opt0'},
    {id: 1, label: 'opt1'},
    {id: 2, label: 'opt2'},
    {id: 3, label: 'opt3'},
    {id: 4, label: 'opt4'},
    {id: 5, label: 'opt5'},

    {id: 6, label: 'opt5'},
    {id: 7, label: 'opt5'},
    {id: 8, label: 'opt5'},
    {id: 9, label: 'opt5'},
    {id: 10, label: 'opt5'},
    {id: 11, label: 'opt5'},
    {id: 12, label: 'opt5'},
    {id: 13, label: 'opt5'},
    {id: 14, label: 'opt5'},
    {id: 15, label: 'opt5'},
    {id: 16, label: 'opt5'},
    {id: 17, label: 'opt5'},
  ]

  const [isClose, setIsClose] = useState(true)
  const [clickCounter, setClickCounter] = useState(0)
  // const closeOnClick = () => {
  // }

  return (
    mobile ?
      <DropdownStl>
        <SelectStl tabIndex={0} >
          <OptionStl defaultTitle selected >
            {'TITLE'}
          </OptionStl>
          {
            options.map((item) => (
              <OptionStl key={item.id}>
                {item.label}
              </OptionStl>
            ))
          }
        </SelectStl>
      </DropdownStl>
    :

    desktop ?
      <DropdownStl>
        <SelectStl as={'div'} tabIndex={0}
          onClick={() => {
            setClickCounter(clickCounter + 1)
            return clickCounter === 1 ? closeOnClick() : null
          }}

          onFocus={() => {
            setIsClose(false)
          }}

          onBlur={() => {
            setIsClose(true)
          }}
        >
          <OptionStl as={'div'}>
            {'TITLE'}
          </OptionStl>




          {
            (!isClose)
              ? <DropdownMenuStl>
                  {
                    options.map((item) => (
                      <OptionStl as={'div'} item key={item.id}>
                        {item.label}
                      </OptionStl>
                    ))
                  }
                </DropdownMenuStl>
              : null
          }





        </SelectStl>
      </DropdownStl>
    :
    undefined
  )
}