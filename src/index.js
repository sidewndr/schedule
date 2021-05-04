import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./shared/global-styles/global-styles";
import {BrowserRouter} from "react-router-dom";


const app = (
  <>
    <GlobalStyles />
    <BrowserRouter>

    </BrowserRouter>
  </>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
