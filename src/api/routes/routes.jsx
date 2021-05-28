import {BrowserRouter, Route} from "react-router-dom";
import {Page} from "../../components/pages/page";
import {DropdownsList} from "../../components/molecules/dropdowns-list";
import {ScheduleCardList} from "../../components/molecules/schedule-card-list";
import {ScheduleInfo} from "../../components/atoms/schedule-info";
import {Test} from "../../components/test";
import {CallSchedule} from "../../components/molecules/call-schedule";
import {Schedule} from "../../components/organisms/schedule";


export const Routes = () => {
  return (
    <BrowserRouter>
      <Page>
        <Route exact path={'/'}>
          <DropdownsList />
        </Route>

        <Route exact path={'/schedule'}>
          <Schedule />
        </Route>

        <Route exact path={'/call-schedule'}>
          <CallSchedule />
        </Route>


        {/*//TEST*/}
        <Route exact path={'/test'}>
          <Test />
        </Route>

      </Page>
    </BrowserRouter>

  )
}