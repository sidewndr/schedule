import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

import BtnSelectImg from '../../attachments/img/btn-select.svg'
import {animations} from "../../shared/animations/animations";


const DropdownStl = styled.div`
  display: inline-block;
  position: relative;

  ${({mobile}) => mobile && css`
    &::after{
      content: url(${BtnSelectImg});
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 15px;
    }
  `}
`

const SelectStl = styled.select`
  width: 300px;
  height: 30px;
  display: block;
  position: relative;
  z-index: 2;
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



//TODO: Анимашка
const SelectIconStl = styled.img`
  display: block;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;

  &:focus{
    background-color: black;
    //animation: ${animations.animName} 1s;
  }
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
  user-select: none;
`

const DropdownMenuStl = styled.div`
  position: absolute;
  z-index: 1;
  left: -1px;
  top: 35px;
  width: calc(100% + 2px);
  height: 300px;
  overflow: auto;
  border: ${colors.primary} 1px solid;
  border-radius: 5px;
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

  const [title, setTitle] = useState('Title')
  const [isClose, setIsClose] = useState(true)
  const [clickCounter, setClickCounter] = useState(0)

  const closeOnClick = () => {
    setIsClose(!isClose)
    setClickCounter(1)
  }

  return (
    mobile ?
      <DropdownStl mobile>
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
            setClickCounter(0)
          }}
        >
          <OptionStl as={'div'}>
            {title}
          </OptionStl>
          <SelectIconStl src={BtnSelectImg} tabIndex={0} />
          {
            (!isClose)
              ? <DropdownMenuStl>
                  {
                    options.map((item) => (
                      <OptionStl
                        item
                        as={'div'}
                        key={item.id}
                        onClick={() => (
                          setTitle(item.label)
                        )}
                      >
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