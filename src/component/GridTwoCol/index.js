import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default ({data, contentStyle, renderItem}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row',marginTop:20, ...contentStyle}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        {data.map((item, index) => {
          if (index % 2 == 0) {
            if (renderItem) return renderItem({item: item, index: index});
          }
        })}
      </View>
      <View style={{flex: 1,  alignItems: 'center'}}>
        {data.map((item, index) => {
          if (index % 2 != 0) {
            if (renderItem) return renderItem({item: item, index: index});
          }
        })}
      </View>
    </View>
  );
};
