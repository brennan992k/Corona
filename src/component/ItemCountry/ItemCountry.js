import React from 'react';
import {Text, View} from 'react-native';
import Avatar from '../Avatar';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';

export default ({
  country,
  countryInfo,
  cases,
  deaths,
  todayCases,
  todayDeaths,
  updated,
  fetchCountryInfo,
}) => {
  const navigation = useNavigation();
  const {navigate} = navigation;
  const redireactCountryInfo = async () => {
    if (countryInfo._id) {
      await fetchCountryInfo(countryInfo._id);
    } else if (country) {
      await fetchCountryInfo(country);
    } else if (countryInfo.iso2) {
      await fetchCountryInfo(countryInfo.iso2);
    } else {
      await fetchCountryInfo(countryInfo.iso3);
    }
    await navigate('CountryDetail');
  };
  
  return (
    <Button
      stylePressIn={{
        backgroundColor: 'rgb(219, 238, 255)',
      }}
      onPress={redireactCountryInfo}
      style={{
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {countryInfo.flag ? (
          <Avatar
            source={{uri: countryInfo.flag}}
            style={{width: 50, height: 25, borderRadius: 10}}
          />
        ) : null}
      </View>

      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        {country ? <Text>{country}</Text> : null}
        <Text
          style={{
            fontWeight: 'bold',
            color: 'rgb(33, 175, 221)',
          }}>{`${cases} Cases`}</Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'rgb(254, 91, 91)',
          }}>{`${deaths} Deaths`}</Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 10,
            color: 'rgb(33, 175, 221)',
          }}>{`+${todayCases} Cases`}</Text>
        <Text
          style={{
            fontSize: 10,
            color: 'rgb(254, 91, 91)',
          }}>{`+${todayDeaths} Deaths`}</Text>
        <Text
          style={{
            fontSize: 10,
          }}>{`${new Date(updated).toDateString()}`}</Text>
      </View>
    </Button>
  );
};
