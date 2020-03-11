import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default ({error, style}) => {
  return (
    <>
      {error ? (
        <Text
          style={{
            color: 'red',
            fontSize: 10,
            marginVertical: 10,
            textAlign: 'center',
            ...style,
          }}>
          {error}
        </Text>
      ) : null}
    </>
  );
};
