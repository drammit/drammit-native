// @flow

import React from 'react';
import type { Element } from 'react';
import { View, StatusBar } from 'react-native';

import styles from './Page.styles';

type PageType = {
  children: Children,
};

function Page({ children }: PageType): Element<any> {
  return (
    <View style={styles.pageContainer}>
      <StatusBar
        animated
        translucent
        barStyle="light-content"
        showHideTransition="slide"
      />
      <View style={styles.statusBar} />
      {children}
    </View>
  );
}

export default Page;
