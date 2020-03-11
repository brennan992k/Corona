import React from 'react';
import {Text, Dimensions} from 'react-native';
import Card from '../Card';

export default ({onPress, title}) => {
    const screenWidth = Dimensions.get('screen').width;
    return (
      <Card
        onPress={onPress}
        style={{
          alignSelf: 'center',
          width: screenWidth - 40,
          marginBottom: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'rgb(0, 136, 255)',
          }}>
          {title}
        </Text>
      </Card>
    );
}
