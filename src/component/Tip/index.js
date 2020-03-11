import React from 'react';
import {Text, Dimensions} from 'react-native';
import Button from '../Button';
import Avatar from '../Avatar';
import LoadingView from '../Loading/loadingView';

export default ({title, onPress, source, isLoading}) => {
  const screenWidth = Dimensions.get('screen').width;
  return (
    <Button
      onPress={onPress}
      stylePressIn={{
        borderColor: 'rgb(0, 136, 255)',
        borderWidth: 0.5,
      }}
      style={{
        width: (screenWidth - 40) / 2,
        padding: 20,
        backgroundColor: 'rgb(219, 238, 255)',
        marginBottom: 10,
        borderRadius: 10,
      }}>
      <Avatar
        isLoading={isLoading}
        source={source}
        style={{
          marginBottom: 20,
          width: 80,
          height: 80,
          borderRadius: 40,
        }}
      />
      {isLoading ? (
        <LoadingView/>
      ) : (
        <Text style={{color: 'rgb(31, 44, 58)', fontWeight: 'bold'}}>
          {title}
        </Text>
      )}
    </Button>
  );
};
