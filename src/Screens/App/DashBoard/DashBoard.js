/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ItemInfoCovid from '../../../component/ItemInfoCovid';
import Loading from '../../../component/Loading';
import Header from '../../../component/Header';
import LisenceCompanyInfo from '../../../component/LisenceCompanyInfo';
import ButtonCofirm from '../../../component/ButtonConfirm';

export default ({all, country}) => {
  //total
  const {cases, deaths, recovered, updated, active} = all.data;
  const navigation = useNavigation();
  const {navigate} = navigation;

  const redirectListCountry = () => {
    navigate('ListCountriesInfo');
  };

  return (
    <>
      <Loading isLoading={all.loading || country.loading} />
      <Header style={{position: 'absolute', justifyContent: 'flex-start'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'rgb(31, 44, 58)',
          }}>
          CORONAVIRUS
        </Text>
        <Text
          style={{
            width: 4,
            height: 4,
            borderRadius: 2,
            backgroundColor: 'red',
          }}></Text>
        <Text style={{fontSize: 10}}>Live</Text>
      </Header>
      <ScrollView
        contentContainerStyle={{paddingTop: 80, backgroundColor: 'white'}}>
        <View style={{flex: 1, paddingBottom: 80}}>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <ItemInfoCovid
              isLoading={all.loading}
              color={'rgb(33, 175, 221)'}
              title={'Infections'}
              total={cases}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={all.loading}
              color={'rgb(254, 91, 91)'}
              title={'Deaths'}
              total={deaths}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={all.loading}
              color={'rgb(16, 196, 105)'}
              title={'Recoveries'}
              total={recovered}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={all.loading}
              color={'rgb(248, 200, 81)'}
              title={'Active'}
              total={active}
              updated={new Date(updated).toDateString()}
            />
          </View>
          <Text style={{fontSize: 20, padding: 10}}>Rate Distribution</Text>
          <View style={{alignSelf: 'center'}}></View>
        </View>
        <ButtonCofirm title={'SEE DETAIL'} onPress={redirectListCountry} />
        <LisenceCompanyInfo
          company={'GNHA'}
          nameApp={'CORONAVIRUS'}
          version={'version v1.0.0'}
        />
      </ScrollView>
    </>
  );
};
