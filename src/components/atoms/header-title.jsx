import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";
import {LinkStl} from "./link";


const HeaderTitleStl = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
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

const LinkStyled = styled(LinkStl)`
  display: flex;
  align-items: center;
  height: 100%;
`


export const HeaderTitle = ({main, navbar}) => {
  return (
    (
      main && (
        <HeaderTitleStl main>
          <LinkStyled to={'/'}>
            Учебное расписание
          </LinkStyled>
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