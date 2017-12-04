// @flow

import React from 'react';
import type { Element } from 'react';
import { Route, Switch, Redirect } from 'react-router-native';

import AnimatedRoutes from '../../components/Router/AnimatedRoutes';

import Welcome from './Welcome';
import Forgot from './Forgot';
import SignUp from './SignUp';

function Routes({ match, location }: ReactRouterType): Element<any> {
  return (
    <AnimatedRoutes>
      <Switch location={location}>
        {/*<Route exact path={`${match.path}`} component={Welcome} />*/}
        <Route path={`${match.path}forgot-password`} component={Forgot} />
        <Route path={`${match.path}sign-up`} component={SignUp} />

        <Redirect from={`${match.path}`} to={`${match.path}sign-up`} />
      </Switch>
    </AnimatedRoutes>
  );
}

export default Routes;
