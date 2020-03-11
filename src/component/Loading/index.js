import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

export default ({isLoading}) => {
  return (
    <>
    {isLoading?(
  <View
    style={{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 99,
    }}>
    <ActivityIndicator color={'rgb(200,200,200)'} size={30}/>
  </View>
) : <View></View>}
    </>
  )

};
