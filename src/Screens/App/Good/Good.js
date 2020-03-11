import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../../../component/Header/HeaderScreen';
import Avatar from '../../../component/Avatar';
import GoodHeader from '../../../publics/images/goodHeader.png';
import ItemCheck from '../../../component/ItemCheck';
import Card from '../../../component/Card';
import Icon from '../../../component/Icon';

export default ({navigation}) => {
  const {navigate, goBack} = navigation;
  return (
    <>
      <Header onLeft={goBack} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Avatar source={GoodHeader} style={{width: '100%', height: 200}} />
        <View style={{marginVertical: 20}}>
          <ItemCheck
            description={
              'Wash your hands often with soap and water, or sanitize with 70% alcohol gel.'
            }
          />
          <ItemCheck
            description={
              'Cover your mouth and nose with a tissue when you cough and sneeze and throw it in the trash after use, or protect with your forearm (never with your hands).'
            }
          />

          <ItemCheck description={'Avoid crowded places.'} />
          <ItemCheck description={'Avoid crowded places.'} />
        </View>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
          In case of doubts, call the Health Dial 115 Ministry of Health, or
          look for a health facility.
        </Text>
        <View style={{justifyContent:'space-around', flexDirection:'row', marginVertical:20}}>
          <Card onPress={() => navigate('Tips')}>
            <Icon
              type={'FontAwesome'}
              name={'hand-pointer-o'}
              size={40}
              color={'rgb(0, 136, 255)'}
            />
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Official Tips
            </Text>
            <Text style={{textAlign: 'center', color: 'rgb(122, 151, 180)'}}>
              Check out tips and procedures
            </Text>
          </Card>
          <Card onPress={() => navigate('News')}>
            <Icon
              type={'FontAwesome'}
              name={'newspaper-o'}
              size={40}
              color={'rgb(0, 136, 255)'}
            />
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>News</Text>
            <Text style={{textAlign: 'center', color: 'rgb(122, 151, 180)'}}>
             See the Ministry of Health
            </Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};
