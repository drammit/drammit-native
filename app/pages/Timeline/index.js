// @flow

import React from 'react';
import { Route, Switch } from 'react-router-native';

import Timeline from './Timeline';

function Routes({ match, location }: ReactRouterType) {
  return (
    <Switch location={location}>
      <Route exact path={`${match.path}`} component={Timeline} />
    </Switch>
  );
}

export default Routes;
