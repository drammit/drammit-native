// @flow

import React from 'react';
import { Route, Switch } from 'react-router-native';

import AnimatedRoutes from '../../components/Router/AnimatedRoutes';

import Search from './Search';

function Routes({ match, location }: ReactRouterType) {
  return (
    <AnimatedRoutes>
      <Switch location={location}>
        <Route exact path={`${match.path}`} component={Search} />
      </Switch>
    </AnimatedRoutes>
  );
}

export default Routes;
