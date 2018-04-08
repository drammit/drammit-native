// @flow

import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import Page from '../../components/Layout/Page';

class Index extends Component<*> {
  render() {
    return (
      <Page
        statusBar
        navigation="keep"
        header={{
          back: true,
          title: 'Whisky details',
        }}
      >
        <Text>Whisky Page</Text>
      </Page>
    );
  }
}

export default connect()(Index);
