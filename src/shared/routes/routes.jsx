import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {Dropdown} from "../../components/atoms/dropdown";
import {Home} from "../../components/pages/home";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path={'/'}>
        <Home />
      </Route>

      <Route exact path={'/mob'}>
        <Dropdown mobile />
      </Route>
    </BrowserRouter>
  )
}