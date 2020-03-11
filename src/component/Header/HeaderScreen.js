import React from 'react';
import {Text, View} from 'react-native';
import Header from './index';
import Icon from '../Icon';
import Button from '../Button';

export default ({
  iconRight,
  iconLeft,
  titleRight,
  titleLeft = 'Back',
  onRight,
  onLeft,
}) => {
  return (
    <Header style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
      <Button onPress={onLeft} style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        {iconLeft ?? (
          <Icon
            type={'Ionicons'}
            name={'ios-arrow-back'}
            size={20}
            color={'rgb(0, 136, 255)'}
          />
        )}
        <Text style={{color: 'rgb(0, 136, 255)', fontSize: 20, marginLeft: 5}}>
          {titleLeft}
        </Text>
      </Button>
      <Button onPress={onRight}  style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        {iconRight}
        <Text style={{color: 'rgb(0, 136, 255)', fontSize: 20, marginLeft: 5}}>
          {titleRight}
        </Text>
      </Button>
    </Header>
  );
};
