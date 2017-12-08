// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { withRouter } from 'react-router';

import { validateResetToken } from '../../actions/Forgot';

import Page from '../../components/Layout/Page';
import Text from '../../components/Page/Text';
import Container from '../../components/Page/Container';
import Submit from '../../components/Form/Submit';

type ResetType = {
  validateToken: Function,
} & ReactRouterType;

class Reset extends Component<ResetType> {
  constructor(props) {
    super(props);

    this.toForgotPassword = () => {
      props.history.push('/forgot-password');
    };
  }

  componentDidMount() {
    const { validateToken, location } = this.props;
    const { token, user } = location.state;

    if (token && user) {
      validateToken(user, token);
    }
  }

  render(): Element<any> {
    const { location, loading, valid } = this.props;
    const { token, user } = location.state;

    if (!token || !user) {
      return (
        <Page
          statusBar
          header={{
            back: false,
            title: 'Forgot password',
          }}
        >
          <Container>
            <Text>The request is invalid.</Text>
          </Container>
        </Page>
      );
    }

    return (
      <Page
        statusBar
        header={{
          back: false,
          title: 'Forgot password',
        }}
      >
        <Container>
          {loading && <Text>Validating reset request.</Text>}
          {!loading && (
            <View>
              {valid ? (
                <Text>Valid</Text>
              ) : (
                <View>
                  <Text>The request to change your password has expired or is invalid.</Text>
                  <Submit
                    title="Try again"
                    onPress={this.toForgotPassword}
                  />
                </View>
              )}
            </View>
          )}
        </Container>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  const { loading, valid } = state.reset;

  return { loading, valid };
}

function mapDispatchToProps(dispatch) {
  return {
    validateToken(user, token) {
      dispatch(validateResetToken(user, token));
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Reset);
