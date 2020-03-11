import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

export default ({
  title = 'title',
  type = 'MaterialIcons',
  name = 'home',
  onPress,
  isSelection,
}) => {
  const {bg, stylePressIn, stylePressOut, text} = StyleSheet.create({
    stylePressIn: {backgroundColor: 'white'},
    stylePressOut: {backgroundColor: 'white'},
    bg: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: isSelection ? 'rgb(0, 136, 255)' : 'rgb(144, 172, 198)',
      fontSize: 10
    },
  });

  return (
    <Button
      onPress={onPress}
      style={bg}
      stylePressOut={stylePressOut}
      stylePressIn={stylePressIn}>
      <Icon
        type={type}
        name={name}
        size={25}
        color={isSelection ? 'rgb(0, 136, 255)' : 'rgb(144, 172, 198)'}
      />
      <Text style={text}>{title}</Text>
    </Button>
  );
};
