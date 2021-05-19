import {BrowserRouter, Route} from "react-router-dom";
import {Page} from "../../components/pages/page";
import {DropdownsList} from "../../components/molecules/dropdowns-list";
import {ScheduleCardList} from "../../components/molecules/schedule-card-list";
import {ScheduleInfo} from "../../components/atoms/schedule-info";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Page>
        <Route exact path={'/'}>
          <DropdownsList />
        </Route>

        <Route exact path={'/schedule'}>
          <ScheduleInfo />
          <ScheduleCardList />
        </Route>
      </Page>
    </BrowserRouter>

  )
}