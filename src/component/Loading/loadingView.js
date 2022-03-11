/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View} from 'react-native';

export default ({width, height = 20, borderRadius = 5}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: 'rgba(165, 167, 169,0.5)',
        borderRadius: borderRadius,
        marginBottom: 10,
      }}></View>
  );
};
