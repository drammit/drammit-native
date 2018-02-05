// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

import { colors, sizes } from '../../Config.styles';

type PageContentType = {
  children: any,
};

class PageContent extends Component<PageContentType> {
  render() {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: colors.light,
          paddingTop: sizes.padding * 2,
          paddingBottom: sizes.padding * 2,
        }}
      >
        {this.props.children}
      </View>
    );
  }
}

export default PageContent;
