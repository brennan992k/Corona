/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../../../component/Header/HeaderScreen';

export default ({navigation, route}) => {
  const {goBack} = navigation;
  const {url} = route.params;
  return (
    <>
      <Header onLeft={goBack} />
      <View style={{height: 20}} />
      <WebView source={{uri: url}} />
    </>
  );
};
