import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

import BtnSelectImg from '../../attachments/img/btn-select.svg'


const SelectBoxStl = styled.div`
  position: relative;
  
  width: 300px;
  height: 30px;
  
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
  outline: none;
  
  border: ${({isActive}) => isActive ? colors.primary : 'transparent'} 1px solid;
  
  //border: transparent 1px solid;
  
  border-radius: 5px;
  padding-left: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: ${colors.primary};

  &:hover, &:focus{
    cursor: pointer;
    border: ${colors.primary} 1px solid;
  }
`

const OptionStl = styled.option`
  ${props => props.title && css`
    display: none;
  `}
`

const DropdownStl = styled.div`
  position: absolute;
  left: 0;
  top: 40px;
  width: 100%;
  border: 1px solid ${colors.primary};
`

const DropdownItemStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  
  &:hover{
    color: ${colors.secondary};
    background-color: ${colors.primary};
  }
`


export const SelectBox = ({mobile, desktop}) => {

  const options = [
    {id: 0, label: 'opt0'},
    {id: 1, label: 'opt1'},
    {id: 2, label: 'opt2'},
    {id: 3, label: 'opt3'},
    {id: 4, label: 'opt4'},
    {id: 5, label: 'opt5'},
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('TITLE')

  // const onClose = () => {
  //   if (isOpen) {
  //     setIsOpen(false)
  //   }
  // }

  const onToggle = () =>  {

    // if (!isOpen) {
    //   document.body.addEventListener('click', onClose)
    //   console.log('event add')
    // } else {
    //   document.body.removeEventListener('click', onClose)
    //   console.log('event delete')
    // }

    setIsOpen(!isOpen)
  }

  // useEffect(() => {
  //   document.body.addEventListener('click', setIsOpen(false));
  //
  //   return function cleanup() {
  //     window.removeEventListener('click', onToggle);
  //   }
  // },[]);


  return (
    mobile ?
      <SelectBoxStl>
        <SelectStl>
          <OptionStl title selected>TITLE</OptionStl>
          {
            options.map((item) => (
              <OptionStl key={item.id}>{item.label}</OptionStl>
            ))
          }
        </SelectStl>
      </SelectBoxStl>
    :
    desktop ?
      <SelectBoxStl>
        <SelectStl isActive={isOpen} as={'div'} onClick={onToggle}>
          {
            title
          }

          {
            (isOpen)
              ? <DropdownStl>
                {
                  options.map((item) => (
                    <DropdownItemStl
                      key={item.id}
                      onClick={() => {
                        setTitle(item.label)
                        onToggle()
                      }}
                    >
                      {item.label}
                    </DropdownItemStl>
                  ))
                }
                </DropdownStl>
              : null
          }

        </SelectStl>
      </SelectBoxStl>
    :
    undefined
  )
}