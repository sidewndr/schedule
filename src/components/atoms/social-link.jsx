import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";

export const SocialLinkStl = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${colors.secondary};
`

const LinkStl = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const ImgStl = styled.img`
  object-fit: contain;
  width: 80%;
  height: 80%;
`


export const SocialLink = ({src, to}) => {
  return (
    <SocialLinkStl>
      <LinkStl href={to} target={'_blank'} >
        <ImgStl src={src} />
      </LinkStl>
    </SocialLinkStl>
  )
}