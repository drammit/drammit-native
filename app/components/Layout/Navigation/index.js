// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';

import { colors } from '../../../Config.styles';

import Timeline from './timeline.svg';
import Search from './search.svg';
import Glass from './glass.svg';
import Comment from './comment.svg';
import Profile from './profile.svg';

import styles from './Navigation.styles';

type NavigationType = {
  active: 'timeline' | 'search' | 'dram' | 'notifications' | 'profile',
  children: Children,
};

class Navigation extends Component<NavigationType> {
  render(): Element<any> {
    const { active, children } = this.props;

    return (
      <View style={styles.page}>
        <View style={styles.page}>
          {children}
        </View>
        <View style={styles.navigation}>
          <View style={styles.button}>
            <SvgUri
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              fill={active === 'timeline' ? colors.lightGreen : colors.grey3}
              width={20 / (104 / 128)}
              height={20}
              source={Timeline}
            />
          </View>
          <View style={styles.button}>
            <SvgUri
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              fill={active === 'search' ? colors.lightGreen : colors.grey3}
              width={20}
              height={20}
              source={Search}
            />
          </View>
          <View style={styles.button}>
            <SvgUri
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              fill={active === 'dram' ? colors.lightGreen : colors.grey3}
              width={25 / (325 / 557)}
              height={25}
              source={Glass}
            />
          </View>
          <View style={styles.button}>
            <SvgUri
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              fill={active === 'notifications' ? colors.lightGreen : colors.grey3}
              width={16 / (367 / 475)}
              height={16}
              source={Comment}
            />
          </View>
          <View style={styles.button}>
            <SvgUri
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              fill={active === 'profile' ? colors.lightGreen : colors.grey3}
              width={20 / (400 / 315)}
              height={20}
              source={Profile}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Navigation;
