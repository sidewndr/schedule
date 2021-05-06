import {keyframes} from "styled-components";


const animName = keyframes`
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(180deg);
    }
`

export const animations = {
  animName,
}