import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import {Page} from "../../components/pages/page";
import {DropdownsList} from "../../components/molecules/dropdowns-list";
import {CallSchedule} from "../../components/organisms/call-schedule";
import {Schedule} from "../../components/organisms/schedule";
import {Auth} from "../../components/organisms/auth";
import {useContext} from "react";
import {AuthContext} from "../../context";
import {Edit} from "../../components/organisms/edit";


export const Routes = () => {

  const {isAuth} = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Page>
        <Switch>
          <Route exact path={'/'}>
            <DropdownsList />
          </Route>

          <Route exact path={'/schedule'}>
            <Schedule />
          </Route>

          <Route exact path={'/call-schedule'}>
            <CallSchedule />
          </Route>

          {
            isAuth
              ? <Route exact path={'/edit'}>
                     <Edit />
                </Route>

              : <Route exact path={'/auth'}>
                  <Auth />
                </Route>
          }

          <Redirect to={'/'} />
        </Switch>
      </Page>
    </BrowserRouter>

  )
}