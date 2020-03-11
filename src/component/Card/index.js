import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import Button from '../Button';

export default ({children, onPress, style}) => {
  const screenWidth = Dimensions.get('screen').width;
  return (
    <Button
      onPress={onPress}
      stylePressIn={{
        backgroundColor: 'rgba(196, 226, 255, 0.5)',
        borderColor: 'rgba(196, 226, 255, 0.5)',
        borderWidth: 0.5,
      }}
      style={{
        width: (screenWidth - 40) / 2,
        backgroundColor: 'white',
        borderColor: 'rgb(196, 226, 255)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding:10,
        ...style
      }}>
      {children}
    </Button>
  );
};
