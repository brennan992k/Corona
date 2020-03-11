import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default ({nameApp, company, version}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        opacity: 0.5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'rgb(144, 172, 198)',
            textAlign: 'center',
          }}>
          {nameApp}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: 'rgb(144, 172, 198)',
            textAlign: 'center',
          }}>
          {company}
        </Text>
      </View>

      <Text style={{color: 'rgb(144, 172, 198)', textAlign: 'center'}}>
        {version}
      </Text>
    </View>
  );
};
