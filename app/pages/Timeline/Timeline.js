// @flow

import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/Login';

import Page from '../../components/Layout/Page';

type TimelineType = {
  dispatch: (action: any) => void;
};

class Timeline extends Component<TimelineType> {
  render() {
    const { dispatch } = this.props;

    return (
      <Page
        statusBar
        header={{
          logo: true,
        }}
        navigation="timeline"
      >
        <Button onPress={() => dispatch(logoutUser())} title="Log out" />
        <Text>Bla</Text>
      </Page>
    );
  }
}

export default connect()(Timeline);
