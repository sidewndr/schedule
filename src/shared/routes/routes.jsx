import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "../../components/pages/home";
import {Navbar} from "../../components/organisms/navbar";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path={'/'}>
        <Home />
      </Route>

      <Route exact path={'/nav'}>
        <Navbar />
      </Route>
    </BrowserRouter>
  )
}