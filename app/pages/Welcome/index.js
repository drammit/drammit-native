// @flow

import React from 'react';
import type { Element } from 'react';
import { Route } from 'react-router-native';

import Container from '../../components/Layout/Container';

import Welcome from './Welcome';
import Forgot from './Forgot';

function Routes({ match }: { match: matchType }): Element<any> {
  console.log(match);

  return (
    <Container>
      <Route exact path={`${match.path}`} component={Welcome} />
      <Route path={`${match.path}forgot-password`} component={Forgot} />
    </Container>
  );
}

export default Routes;
