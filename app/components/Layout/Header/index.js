// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { withRouter } from 'react-router';

import Logo from '../../Logo/Logo';

import styles from './Header.styles';

import Back from './Back.png';

type HeaderType = headerType & ReactRouterType;

class Header extends Component<HeaderType> {
  constructor(props) {
    super(props);

    this.goBack = () => props.history.goBack();
  }

  render(): Element<any> {
    const { back, logo, title } = this.props;

    return (
      <View style={styles.container}>
        {back && (
          <TouchableHighlight
            activeOpacity={0.4}
            onPress={this.goBack}
            style={styles.backButton}
            underlayColor="transparent"
          >
            <View style={styles.backContainer}>
              <Image style={styles.backImage} source={Back} />
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableHighlight>
        )}
        {logo && (
          <View style={styles.logoContainer}>
            <Logo style={{ width: 120 }} />
          </View>
        )}
        {title !== '' && <Text style={styles.title}>{title}</Text>}
      </View>
    );
  }
}

export default withRouter(Header);
