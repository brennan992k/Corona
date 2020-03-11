import React from 'react';
import {Text, View, Dimensions, ScrollView} from 'react-native';
import HeaderScreen from '../../../component/Header/HeaderScreen';
import Avatar from '../../../component/Avatar';
import ItemInfoCovid from '../../../component/ItemInfoCovid';
import Loading from '../../../component/Loading';
import LoadingView from '../../../component/Loading/loadingView';
import Card from '../../../component/Card';

export default ({
  navigation,
  countryDetail,
  historyDetail,
  updateCountryDetail,
  updateHistoryDetail,
}) => {
  const {goBack} = navigation;
  const {
    country,
    countryInfo,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
    casesPerOneMillion,
    deathsPerOneMillion,
    updated,
  } = countryDetail.data;
  const {timeline} = historyDetail.data;
  const screenWidth = Dimensions.get('screen').width;
  const onUpdateCountryDetail = async() => {
      if(countryInfo._id){
        await updateCountryDetail(countryInfo._id);
      }else if(country){
          await updateCountryDetail(country);
      }else if(countryInfo.iso2){
        await updateCountryDetail(countryInfo.iso2);
      }else if(countryInfo.iso3){
        await updateCountryDetail(countryInfo.iso3);
      }
  }
  const onUpdateHistoryDetail = async() => {
    if(countryInfo._id){
      await updateHistoryDetail(countryInfo._id);
    }else if(country){
        await updateHistoryDetail(country);
    }else if(countryInfo.iso2){
      await updateHistoryDetail(countryInfo.iso2);
    }else if(countryInfo.iso3){
      await updateHistoryDetail(countryInfo.iso3);
    }
}

  return (
    <>
      <Loading isLoading={countryDetail.loading || historyDetail.loading} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <HeaderScreen onLeft={goBack} />
        <ScrollView>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            {countryInfo ? (
              <Avatar
                isLoading={countryDetail.loading}
                source={{uri: countryInfo.flag}}
                style={{
                  width: (screenWidth - 40) / 2,
                  height: (screenWidth - 40) / 4,
                }}
              />
            ) : null}
            {countryDetail.loading ? (
              <LoadingView width={100} height={40} />
            ) : (
              <Text style={{fontSize: 30, color: 'rgb(40, 46, 56)'}}>
                {country}
              </Text>
            )}
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <ItemInfoCovid
              isLoading={countryDetail.loading}
              color={'rgb(33, 175, 221)'}
              title={'Infections'}
              total={cases}
              percent={todayCases}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={countryDetail.loading}
              color={'rgb(254, 91, 91)'}
              title={'Deaths'}
              percent={todayDeaths}
              total={deaths}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={countryDetail.loading}
              color={'rgb(16, 196, 105)'}
              title={'Recovered'}
              total={recovered}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={countryDetail.loading}
              color={'rgb(248, 200, 81)'}
              title={'Active'}
              total={active}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={countryDetail.loading}
              color={'rgb(33, 175, 221)'}
              title={'Case/One million'}
              total={casesPerOneMillion}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={countryDetail.loading}
              color={'rgb(254, 91, 91)'}
              title={'Death/One million'}
              total={deathsPerOneMillion}
              updated={new Date(updated).toDateString()}
            />
            <ItemInfoCovid
              isLoading={countryDetail.loading}
              color={'rgb(31, 44, 58)'}
              title={'Critical'}
              total={critical}
              updated={new Date(updated).toDateString()}
            />
            <Card style={{height: 40, alignSelf: 'center'}} onPress={onUpdateCountryDetail}>
              <Text>Update</Text>
            </Card>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
