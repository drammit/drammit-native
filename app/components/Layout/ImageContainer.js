// @flow

import React from 'react';
import { View, Image } from 'react-native';

type ImageContainerType = {
  source: string | number,
  children: any,
};

function ImageContainer({ source, children }: ImageContainerType) {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          style={{
            flex: 1,
            resizeMode: 'cover',
            height: '100%',
            width: '100%',
          }}
          source={source}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          justifyContent: 'center',
        }}
      >
        {children}
      </View>
    </View>
  );
}

export default ImageContainer;
