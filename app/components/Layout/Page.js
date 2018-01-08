// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Element } from 'react';
import { View } from 'react-native';

import { showStatusBar, hideStatusBar, updateLayout } from '../../actions/App';

import styles from './Page.styles';

type PageType = {
  statusBar?: boolean,
  header?: headerType,
  navigation?: string,
  currentStatusBar: boolean,
  children: Children,
  dispatch: Function,
};

class Page extends Component<PageType> {
  componentDidMount() {
    const {
      currentStatusBar, statusBar, header, navigation, dispatch,
    } = this.props;

    if (!currentStatusBar && statusBar) {
      dispatch(showStatusBar());
    }

    if (currentStatusBar && !statusBar) {
      dispatch(hideStatusBar());
    }

    dispatch(updateLayout(header || {}, navigation || ''));
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
