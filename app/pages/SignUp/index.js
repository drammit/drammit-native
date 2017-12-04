// @flow

import React from 'react';
import type { Element } from 'react';
import { Route, Switch, Redirect } from 'react-router-native';

import AnimatedRoutes from '../../components/Router/AnimatedRoutes';

import Step1 from './Step1';
import Step2 from './Step2';

function Routes({ match, location }: ReactRouterType): Element<any> {
  return (
    <AnimatedRoutes>
      <Switch location={location}>
        <Route path={`${match.path}/step-1`} component={Step1} />
        <Route path={`${match.path}/step-2`} component={Step2} />

        <Redirect from={`${match.path}`} to={`${match.path}/step-1`} />
      </Switch>
    </AnimatedRoutes>
  );
}

export default Routes;
