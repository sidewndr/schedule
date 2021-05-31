import React from 'react'
import styled from 'styled-components'
import {ImgStl, SocialLink, SocialLinkStl} from "../atoms/social-link";
import {colors} from "../../shared/global-styles/colors";

import gitIcon from '../../attachments/img/github-brands.svg'
import vkIcon from '../../attachments/img/vk-brands.svg'
import telegramIcon from '../../attachments/img/telegram-plane-brands.svg'

const SocialListStl = styled.div`
  display: flex;
  align-items: center;

  ${SocialLinkStl}:not(:last-child) {
    margin-right: 10px;
  }

  ${SocialLinkStl}:nth-child(2) ${ImgStl} {
    margin-right: 4px;
  }

  ${SocialLinkStl}:last-child {
    background-color: ${colors.primary};
    
    & ${ImgStl} {
      width: 100%;
      height: 100%;
    }
  }
`


export const SocialList = () => {

  const icons = [
    {
      id: 0,
      icon: vkIcon,
      url: 'https://vk.com/sidewndr'
    },
    {
      id: 1,
      icon: telegramIcon,
      url: 'https://t.me/gtfoal'
    },
    {
      id: 2,
      icon: gitIcon,
      url: 'https://github.com/sidewndr'
    }
  ]

  return (
    <SocialListStl>
      {
        icons.map((item) => (
          <SocialLink
            key={item.id}
            src={item.icon}
            to={item.url}
          />
        ))
      }
    </SocialListStl>
  )
}