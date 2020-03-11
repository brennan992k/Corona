import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({style, children}) => {
  const {bg} = StyleSheet.create({
    bg: {
      height: 60,
      position: 'relative',
      zIndex: 99,
      padding: 15,
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.1)',
      ...style,
    },
  });

  return <View style={bg}>{children}</View>;
};
