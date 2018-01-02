// @flow

import React from 'react';
import type { Element } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/Login';

function Timeline({ dispatch }): Element<any> {
  return (
    <View>
      <Button onPress={() => dispatch(logoutUser())} title="Log out" />
      <Text>Bla</Text>
    </View>
  );
}

export default connect()(Timeline);
