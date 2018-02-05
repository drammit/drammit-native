// @flow

import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
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
  meta: {
    touched: boolean,
    error?: string,
  },
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

  setRef: (ref: TextInput) => void;
  inputRef: TextInput;

  render() {
    const { input, style, meta } = this.props;
    const { touched, error } = meta;

    return (
      <View>
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
        {touched && error && (
          <Text style={styles.error}>{error}</Text>
        )}
      </View>
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
