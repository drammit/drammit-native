// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/Login';

import Navigation from '../../components/Layout/Navigation';

function Timeline({ dispatch }): Element<any> {
  return (
    <Navigation>
      <Button onPress={() => dispatch(logoutUser())} title="Log out" />
      <Text>Bla</Text>
    </Navigation>
  );
}

export default connect()(Timeline);
