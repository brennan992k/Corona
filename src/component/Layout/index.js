import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import TabBarBottom from '../TabBarBottom';

export default ({children, style}) => {
  return (
    <ImageBackground
      source={{
        uri:
          'https://image.freepik.com/free-vector/coronavirus-infection-medical-background_156779-37.jpg',
      }}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          ...style,
          paddingBottom: 60,
        }}>
        {children}
      </View>
    </ImageBackground>
  );
};
