import {css} from 'styled-components'

import Inter from '../../attachments/fonts/Inter-roman.var.woff2'

export const Fonts = css`
  @font-face {
    font-family: 'Inter';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    src: local('Inter'),
         local('Inter var'),
         local('Inter-var'),
         url(${Inter}) format("woff2");
  }
`