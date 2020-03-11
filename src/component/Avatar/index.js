import React from 'react';
import {ImageBackground, View} from 'react-native';
import LoadingView from '../Loading/loadingView';

export default ({source, children, style, isLoading=false}) => {
  return (
    <>
      {isLoading ? (
        <View
          style={{width: 50, height: 50, ...style, backgroundColor:'rgba(165, 167, 169,0.5)'}}></View>
      ) : (
        <ImageBackground
          source={source}
          style={{width: 50, height: 50, borderRadius: 25, ...style}}>
          {children}
        </ImageBackground>
      )}
    </>
  );
};
