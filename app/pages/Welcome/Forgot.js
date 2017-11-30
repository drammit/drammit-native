// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

import Page from '../../components/Layout/Page';

function Forgot(): Element<any> {
  return (
    <Page
      statusBar
      header={{
        back: true,
        title: 'Forgot password',
      }}
    >
      <Text style={{ fontSize: 15 }}>Dit is een Pagina.</Text>
      <Link to="/"><Text>TERUG BITCH</Text></Link>
    </Page>
  );
}

export default Forgot;
