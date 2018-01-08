// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { View, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { withRouter } from 'react-router-native';

import { colors } from '../../../Config.styles';

import Timeline from './timeline.svg';
import Search from './search.svg';
import Glass from './glass.svg';
import Comment from './comment.svg';
import Profile from './profile.svg';

import styles from './Navigation.styles';

type NavigationType = {
  active: 'timeline' | 'search' | 'dram' | 'notifications' | 'profile' | '',
  children: Children,
} & ReactRouterType;

class Navigation extends Component<NavigationType> {
  constructor(props) {
    super(props);

    this.goToTimeline = () => props.history.push('/time-line');
    this.goToSearch = () => props.history.push('/search');
  }

  render(): Element<any> {
    const { active, children } = this.props;

    const activeColor = colors.lightGreen;
    const inactiveColor = colors.grey3;

    return (
      <View style={styles.page}>
        <View style={styles.page}>
          {children}
        </View>
        {active !== '' && (
          <View style={styles.navigation}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.goToTimeline}
            >
              <SvgUri
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                fill={active === 'timeline' ? activeColor : inactiveColor}
                width={20 / (104 / 128)}
                height={20}
                source={Timeline}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.goToSearch}
            >
              <SvgUri
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                fill={active === 'search' ? activeColor : inactiveColor}
                width={20}
                height={20}
                source={Search}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <SvgUri
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                fill={active === 'dram' ? activeColor : inactiveColor}
                width={25 / (325 / 557)}
                height={25}
                source={Glass}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <SvgUri
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                fill={active === 'notifications' ? activeColor : inactiveColor}
                width={16 / (367 / 475)}
                height={16}
                source={Comment}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <SvgUri
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                fill={active === 'profile' ? activeColor : inactiveColor}
                width={20 / (400 / 315)}
                height={20}
                source={Profile}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default compose(withRouter)(Navigation);
