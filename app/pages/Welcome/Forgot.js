// @flow

import React from 'react';
import type { Element } from 'react';
import { Text } from 'react-native';
import { Link, Route, Switch } from 'react-router-native';

import Page from '../../components/Layout/Page';

function Forgot(): Element<any> {
  return (
    <Page statusBar>
      <Text style={{ fontSize: 15 }}>Dit is een Pagina.</Text>
      <Link to="/"><Text>TERUG BITCH</Text></Link>
      <Link to="/forgot-password/dieper"><Text>DIEPER BITCH</Text></Link>
    </Page>
  );
}

function Dieper(): Element<any> {
  return (
    <Page statusBar>
      <Text style={{ fontSize: 15 }}>ZO DIEP.</Text>
      <Link to="/forgot-password"><Text>TERUG BITCH</Text></Link>
    </Page>
  );
}

function Routes({ match, location }: ReactRouterType): Element<any> {
  return (
    <Switch location={location}>
      <Route exact path={`${match.path}`} component={Forgot} />
      <Route path={`${match.path}/dieper`} component={Dieper} />
    </Switch>
  );
}

export default Routes;
