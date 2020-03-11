import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from '../Card';
import Icon from '../Icon';
import Default from './Default';

export default ({
  title,
  percent,
  isDown,
  total,
  newToday,
  color,
  isLoading,
  updated,
}) => {
  const {bgPercent} = StyleSheet.create({
    bgPercent: {
      height: 25,
      flexDirection: 'row',
      backgroundColor: color,
      padding: 10,
      borderRadius: 5,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
  return (
    <>
      {isLoading ? (
        <Default />
      ) : (
        <Card style={{backgroundColor: 'rgb(219, 238, 255)', marginBottom: 20}}>
          <Text style={{color: 'rgb(31, 44, 58)', padding: 5}}>{title}</Text>
          <View style={bgPercent}>
            {percent != null ? (
              <Text
                style={{fontSize: 10, color: 'rgb(31, 44, 58)', padding: 5}}>
                {percent}
              </Text>
            ) : null}

            <Icon
              type={'Ionicons'}
              name={isDown ? 'ios-trending-down' : 'ios-trending-up'}
              size={15}
              color={'white'}
            />
          </View>
          {total != null ? (
            <Text style={{fontSize: 20, color: 'rgb(31, 44, 58)', padding: 5}}>
              {total}
            </Text>
          ) : null}

          {newToday != null ? (
            <Text style={{fontSize: 15, color: 'rgb(31, 44, 58)', padding: 5}}>
              {newToday}
            </Text>
          ) : null}

          <Text style={{fontSize: 6, color: 'rgb(144, 172, 198)'}}>
            {`Last updated: ${updated}`}
          </Text>
        </Card>
      )}
    </>
  );
};
