import {keyframes} from "styled-components";


const loading = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`


export const animations = {
  loading,
}