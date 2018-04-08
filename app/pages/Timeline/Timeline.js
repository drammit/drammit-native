// @flow

import React, { Component } from 'react';
import { Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/Login';

import Page from '../../components/Layout/Page';
import SearchResult from '../../components/Search/SearchResult';

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

        <FlatList
          style={{ width: '100%' }}
          data={[{}, {}]}
          renderItem={() => <SearchResult />}
        />
      </Page>
    );
  }
}

export default connect()(Timeline);
