// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View } from 'react-native';

import { colors, sizes } from '../../Config.styles';

type PageContentType = {
  children: Children,
};

class PageContent extends Component<PageContentType> {
  render(): Element<any> {
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
