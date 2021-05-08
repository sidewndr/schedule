import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./shared/global-styles/global-styles";
import {BrowserRouter, Route} from "react-router-dom";
import {Dropdown} from "./components/atoms/dropdown";
import {Input} from "./components/atoms/input";


// const Routes = () => {
//   <Route exact path={'/'} >
//     <Dropdown />
//   </Route>
// }

const app = (
  <>
    <GlobalStyles />
    <BrowserRouter>
      {/*{Routes}*/}
    </BrowserRouter>

    <Input />
  </>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
