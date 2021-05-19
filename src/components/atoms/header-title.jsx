import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";


const HeaderTitleStl = styled.div`
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;

  ${props => props.main && css`
    text-transform: uppercase;
    text-align: right;
    color: ${colors.primary};

    @media ${media.isMobile} {
      width: 175px;
    }
  `}
  
  ${props => props.navbar && css`
    text-align: left;
    color: ${colors.secondary};
  `}

  @media ${media.isTablet} {
    font-size: 28px;
  }
  
  @media ${media.isDesktop} {
    font-size: 30px;
  }
`


export const HeaderTitle = ({main, navbar}) => {
  return (
    (
      main && (
        <HeaderTitleStl main>
          Учебное расписание
        </HeaderTitleStl>
      )
    )

    ||

    (
      navbar && (
        <HeaderTitleStl navbar>
          КИТиС (?)
        </HeaderTitleStl>
      )
    )
  )
}