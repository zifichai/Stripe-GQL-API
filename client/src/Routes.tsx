import React, { PureComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from './modules/user/LoginView';
import RegisterView from './modules/user/RegisterView';
import Account from './modules/account/Account';
import PaidUsers from './modules/account/PaidUsers';
import Header from './modules/shared/Headers';

export default class Routes extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* Without header */}
            <Route path="/login" component={LoginView} />
            <Route
              path="/"
              render={() => (
                // With header
                <React.Fragment>
                  <Header />
                  <div>
                    <Route path="/" exact={true} component={() => <div>Homepage</div>} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/account" component={Account} />
                    <Route path="/paid-users" component={PaidUsers} />
                  </div>
                </React.Fragment>

              )} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
