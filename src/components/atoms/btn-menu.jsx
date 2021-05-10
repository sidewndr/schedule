import React from 'react'
import styled from 'styled-components'

import BtnMenuOpen from '../../attachments/img/btn-menu-open.svg'
import BtnMenuClose from '../../attachments/img/btn-menu-close.svg'

const BtnMenuStl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 28px;
  user-select: none;
  
  &:hover{
    cursor: pointer;
  }
`

const ImgStl = styled.img`
  display: block;
`


export const BtnMenu = ({open, close, onClick}) => {
  return (
    open ?
      <BtnMenuStl onClick={onClick}>
        <ImgStl src={BtnMenuOpen} />
      </BtnMenuStl>
    :
    close ?
      <BtnMenuStl onClick={onClick}>
        <ImgStl src={BtnMenuClose} />
      </BtnMenuStl>
    :
      undefined
  )
}