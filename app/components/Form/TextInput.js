// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Field } from 'redux-form';

import styles from './TextInput.styles';

type TextInputType = {
  autofocus?: boolean,
  autoCorrect?: boolean,
  secureTextEntry?: boolean,
  placeholder?: string,
  returnKeyLabel?: string,
  keyboardType?: string,
  input: any,
  onRef: Function,
}

class FormTextInput extends Component<TextInputType> {
  constructor(props) {
    super(props);

    this.setRef = (ref) => {
      this.inputRef = ref;

      if (props.onRef && typeof props.onRef === 'function') {
        props.onRef(ref);
      }
    };
  }

  componentDidMount() {
    const { autofocus } = this.props;

    if (autofocus) {
      this.inputRef.focus();
    }
  }

  render(): Element {
    const { input } = this.props;

    return (
      <TextInput
        {...input}
        {...this.props}
        ref={this.setRef}
        style={styles.input}
        underlineColorAndroid="transparent"
      />
    );
  }
}

function FormField(props: { name: string }) {
  return (
    <Field
      {...props}
      name={props.name}
      component={FormTextInput}
    />
  );
}

export default FormField;
