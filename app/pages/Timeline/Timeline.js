// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/Login';

import Page from '../../components/Layout/Page';
import Navigation from '../../components/Layout/Navigation';

class Timeline extends Component {
  render(): Element<any> {
    const { dispatch } = this.props;

    return (
      <Page statusBar>
        <Navigation active="timeline">
          <Button onPress={() => dispatch(logoutUser())} title="Log out" />
          <Text>Bla</Text>
        </Navigation>
      </Page>
    );
  }
}

export default connect()(Timeline);
