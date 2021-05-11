import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "../../components/pages/home";
import {Schedule} from "../../components/pages/schedule";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path={'/'}>
        <Home />
      </Route>

      <Route exact path={'/test'}>
        <Schedule />
      </Route>
    </BrowserRouter>
  )
}