// @flow

import React from 'react';
import type { Element } from 'react';
import { Route, Switch, Redirect } from 'react-router-native';

import AnimatedRoutes from '../../components/Router/AnimatedRoutes';

import Welcome from './Welcome';
import Forgot from './Forgot';
import Reset from './Reset';

function Routes({ match, location }: ReactRouterType): Element<any> {
  return (
    <AnimatedRoutes>
      <Switch location={location}>
        <Route exact path={`${match.path}`} component={Welcome} />
        {/* drammit://reset-password?user=19&token=testing */}
        <Route path={`${match.path}forgot-password`} component={Forgot} />
        <Route path={`${match.path}reset-password`} component={Reset} />

        {/*<Redirect from={`${match.path}`} to={`${match.path}sign-up/step-2`} />*/}
      </Switch>
    </AnimatedRoutes>
  );
}

export default Routes;
