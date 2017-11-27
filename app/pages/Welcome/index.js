// @flow

import React from 'react';
import type { Element } from 'react';
import { View } from 'react-native';
import { Route } from 'react-router-native';

import Container from '../../components/Layout/Container';

import Welcome from './Welcome';

function Routes({ match }: { match: matchType }): Element<any> {
  return (
    <Container>
      <Route exact path={`${match.path}`} component={Welcome} />
      <Route path={`${match.path}about`} component={Welcome} />
    </Container>
  );
}

export default Routes;
