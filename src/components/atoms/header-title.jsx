import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import Media from "react-media";
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
  `}
  
  ${props => props.navbar && css`
    text-align: left;
    color: ${colors.secondary};
  `}
  
  @media (${media.isDesktop}) {
    font-size: 30px;
  }
`


export const HeaderTitle = ({main, navbar}) => {
  return (
    <Media queries={media}>
      {media => (
        <>
          {
            media.isMobile && (
              main ?
                <HeaderTitleStl main>
                  Учебное<br/>расписание
                </HeaderTitleStl>
              :
              navbar ?
                <HeaderTitleStl navbar>
                  КЕКТиС
                </HeaderTitleStl>
              :
              undefined
            )
          }

          {
            (media.isTablet || media.isDesktop) && (
              main ?
                <HeaderTitleStl main>
                  Учебное расписание
                </HeaderTitleStl>
              :
              navbar ?
                <HeaderTitleStl navbar>
                  КЕКТиС
                </HeaderTitleStl>
              :
              undefined
            )
          }
        </>
      )}
    </Media>
  )
}