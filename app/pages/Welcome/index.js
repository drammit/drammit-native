// @flow

import React from 'react';
import { Route, Switch } from 'react-router-native';

import Welcome from './Welcome';
import Forgot from './Forgot';
import Reset from './Reset';

function Routes({ match, location }: ReactRouterType) {
  return (
    <Switch location={location}>
      <Route exact path={`${match.path}`} component={Welcome} />

      <Route path={`${match.path}forgot-password`} component={Forgot} />
      <Route path={`${match.path}reset-password`} component={Reset} />
    </Switch>
  );
}

export default Routes;
