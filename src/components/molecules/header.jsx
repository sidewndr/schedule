import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {BtnMenu} from "../atoms/btn-menu";
import {HeaderTitle} from "../atoms/header-title";


const HeaderStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: ${({main}) => main ? colors.primary : colors.secondary} 1px solid;
  padding: 0 20px;
`


export const Header = ({main, navbar}) => {
  return (
      main ?
        <HeaderStl main>
          <BtnMenu open />
          <HeaderTitle main />
        </HeaderStl>
      :
      navbar ?
        <HeaderStl>
          <HeaderTitle navbar />
          <BtnMenu close />
        </HeaderStl>
      :
        undefined
  )
}