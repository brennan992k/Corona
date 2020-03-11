import React from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import Header from '../../../component/Header/HeaderScreen';
import Avatar from '../../../component/Avatar';

export default ({navigation, route}) => {
  const {navigate, goBack} = navigation;
  const {urlToImage, title, content} = route.params;
  const screenWidth = Dimensions.get('screen').width;
  return (
    <>
      <Header onLeft={goBack} />
      <ScrollView contentContainerStyle={{padding: 20}}>
        <View style={{marginBottom: 20, justifyContent:'center', alignItems: 'center'}}>
          <Avatar
            source={{uri:urlToImage}}
            style={{width: 150, height: 150, borderRadius: 75}}
          />
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>{title}</Text>
        <View
          style={{
            borderRadius: 10,
            width: screenWidth - 40,
            alignSelf: 'center',
            marginVertical: 20,
            backgroundColor:'rgb(219, 238, 255)',
            padding:20
          }}>
          <Text style={{fontSize:16}}>{content}</Text>
        </View>
      </ScrollView>
    </>
  );
};
