import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from '../Icon';
import Button from '../Button';

export default ({
  width = '100%',
  height = 60,
  placeholder = 'Search here...',
  onChangeText,
  onPress,
  hasIcon = true,
}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: width,
        height: height,
        backgroundColor: 'rgb(236, 242, 248)',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: 'rgb(196, 226, 255)',
        borderWidth: 1,
      }}>
      <TextInput
        style={{width: '80%', height: '100%', fontSize: 16, paddingLeft: 10}}
        placeholderTextColor={'rgb(120, 123, 126)'}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {hasIcon ? (
        <Button
          onPress={onPress}
          stylePressIn={{
            backgroundColor: 'rgb(219, 238, 255)',
          }}
          style={{padding: 10, borderRadius: 20}}>
          <Icon
            type={'Ionicons'}
            name={'ios-search'}
            color={'rgb(120, 123, 126)'}
            size={30}
          />
        </Button>
      ) : null}
    </View>
  );
};
