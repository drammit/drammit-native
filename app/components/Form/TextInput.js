// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { TextInput } from 'react-native';
import { Field } from 'redux-form';

import { style as rawStyle, styles } from './TextInput.styles';

type TextInputType = {
  autofocus?: boolean,
  autoCorrect?: boolean,
  secureTextEntry?: boolean,
  placeholder?: string,
  returnKeyLabel?: string,
  keyboardType?: string,
  input: any,
  onRef: Function,
  style: {},
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
    const { input, style } = this.props;

    return (
      <TextInput
        {...input}
        {...this.props}
        ref={this.setRef}
        style={{
          ...rawStyle.input,
          ...style,
        }}
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
