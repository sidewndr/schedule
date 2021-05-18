import React from 'react'
import {Page} from "../../components/pages/page";
import {BrowserRouter, Route} from "react-router-dom";
import {DropdownsList} from "../../components/molecules/dropdowns-list";
import {ScheduleCardList} from "../../components/molecules/schedule-card-list";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Page>
        <Route exact path={'/'}>
          <DropdownsList />
        </Route>

        <Route exact path={'/schedule'}>
          <ScheduleCardList />
        </Route>
      </Page>
    </BrowserRouter>

  )
}