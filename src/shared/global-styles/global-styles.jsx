import {createGlobalStyle} from 'styled-components'
import {Fonts} from "./fonts";


export const GlobalStyles = createGlobalStyle`
  
  //Import fonts
  ${Fonts}
  
  //Styles
  *, ::after, ::before{
    box-sizing: border-box;
  }
  
  body{
    margin: 0;
  }
`