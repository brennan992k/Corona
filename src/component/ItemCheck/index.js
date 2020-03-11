import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../Icon';

export default ({description}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom:10
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon
          type={'Ionicons'}
          name={'ios-checkmark'}
          color={'rgb(110, 180, 52)'}
          size={30}
        />
      </View>
      <Text style={{flex: 8, marginLeft: 10}}>{description}</Text>
    </View>
  );
};
