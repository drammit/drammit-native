// @flow

import React from 'react';
import { Route, Switch } from 'react-router-native';

import Search from './Search';

function Routes({ match, location }: ReactRouterType) {
  return (
    <Switch location={location}>
      <Route exact path={`${match.path}`} component={Search} />
    </Switch>
  );
}

export default Routes;
