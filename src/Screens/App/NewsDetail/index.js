import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import Header from '../../../component/Header/HeaderScreen';

export default ({navigation, route}) => {
  const {goBack} = navigation;
  const {url} = route.params;
  return (
    <>
    <Header onLeft={goBack}/>
      <WebView
        source={{ uri: url }}
      />
    </>
  );
};
