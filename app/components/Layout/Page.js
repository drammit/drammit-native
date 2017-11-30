// @flow

import React from 'react';
import type { Element } from 'react';
import { View } from 'react-native';

import styles from './Page.styles';

type PageType = {
  children: Children,
};

function Page({ children }: PageType): Element<any> {
  return (
    <View style={styles.pageContainer}>
      {children}
    </View>
  );
}

export default Page;
