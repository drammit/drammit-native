// @flow

import React, { Component } from 'react';
import type { Element } from 'react';
import { View, Image, Button, ActionSheetIOS, Modal, TouchableOpacity } from 'react-native';
import { Field } from 'redux-form';

import Camera from '../Camera/FullScreen';
import Roll from '../Camera/Roll';

type imageFile = { uri: string };

type ImageType = {
  text: string,
  replaceText: string,
} & ReduxFormFieldType;

type ImageStateType = {
  cameraOpened: boolean,
  rollOpened: boolean,
  image: imageFile | null,
};

class Imagefield extends Component<ImageType, ImageStateType> {
  constructor(props) {
    super(props);

    this.onOpenMenu = this.openMenu.bind(this);
    this.onCloseModal = this.closeModal.bind(this);
    this.onChangeImage = this.changeImage.bind(this);
  }

  state = {
    cameraOpened: false,
    rollOpened: false,
    image: null,
  };

  onOpenMenu: () => void;
  onCloseModal: () => void;
  onChangeImage: (images: Array<imageFile>) => void;

  openMenu() {
    const { text, replaceText } = this.props;
    const { image } = this.state;

    ActionSheetIOS.showActionSheetWithOptions({
      title: image ? replaceText : text,
      options: ['Cancel', 'Take Photo', 'Choose from Library'].concat(image ? ['Remove'] : []),
      cancelButtonIndex: 0,
      destructiveButtonIndex: 3,
    }, (buttonIndex) => {
      if (buttonIndex === 1) {
        this.setState({
          cameraOpened: true,
          rollOpened: false,
        });
      }

      if (buttonIndex === 2) {
        this.setState({
          cameraOpened: false,
          rollOpened: true,
        });
      }

      if (buttonIndex === 3) {
        this.setState({
          image: null,
        });
      }
    });
  }

  closeModal() {
    this.setState({
      cameraOpened: false,
      rollOpened: false,
    });
  }

  changeImage([image]: Array<imageFile>) {
    this.props.input.onChange(image);

    this.setState({
      image,
    });
  }

  render(): Element<any> {
    const { text } = this.props;
    const { cameraOpened, rollOpened, image } = this.state;

    return (
      <View>
        {(cameraOpened || rollOpened) && (
          <Modal animationType="slide">
            {rollOpened && <Roll onChange={this.onChangeImage} onDone={this.onCloseModal} />}
            {cameraOpened && <Camera />}
          </Modal>
        )}
        {image && (
          <TouchableOpacity onPress={this.onOpenMenu}>
            <Image
              source={{ uri: image.uri }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        )}
        {!image && (
          <View
            style={{
              width: 100,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              onPress={this.onOpenMenu}
              title={text}
            />
          </View>
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
      component={Imagefield}
    />
  );
}

export default FormField;
