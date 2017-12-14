// @flow

import React from 'react';
import type { Element } from 'react';
import { Route, Switch } from 'react-router-native';

import AnimatedRoutes from '../../components/Router/AnimatedRoutes';

import Timeline from './Timeline';

function Routes({ match, location }: ReactRouterType): Element<any> {
  return (
    <AnimatedRoutes>
      <Switch location={location}>
        <Route exact path={`${match.path}`} component={Timeline} />
      </Switch>
    </AnimatedRoutes>
  );
}

export default Routes;
