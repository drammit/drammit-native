// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Element } from 'react';
import { View } from 'react-native';

import { showStatusBar, hideStatusBar } from '../../actions/App';

import styles from './Page.styles';

type PageType = {
  statusBar?: boolean,
  currentStatusBar: boolean,
  children: Children,
  dispatch: Function,
};

class Page extends Component<PageType> {
  componentDidMount() {
    const { currentStatusBar, statusBar, dispatch } = this.props;

    if (!currentStatusBar && statusBar) {
      dispatch(showStatusBar());
    }

    if (currentStatusBar && !statusBar) {
      dispatch(hideStatusBar());
    }
  }

  render(): Element<any> {
    const { children } = this.props;

    return (
      <View style={styles.pageContainer}>
        {children}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { statusBar } = state.app;

  return {
    currentStatusBar: statusBar,
  };
}

export default connect(mapStateToProps)(Page);
