import React, {useState} from 'react';
import {Text, View, FlatList, RefreshControl} from 'react-native';
import Item from '../../../component/ItemCountry';
import Card from '../../../component/Card';
import Header from '../../../component/Header/HeaderScreen';
import {useNavigation} from '@react-navigation/native';
import Search from '../../../component/Search';

export default ({fetchCountries, country}) => {
  const navigation = useNavigation();
  const [listCountries, setListCountries] = useState(country.data);
  const [isRefresh, setRefresh] = useState(false);
  const [isSort, setIsSort] = useState(false);

  const searchFilter = async text => {
    const newData = await country.data.filter(item => {
      const itemData = `${item.country.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    await setListCountries(newData);
  };

  const onSort = async sort => {
    await setIsSort(false);
    await fetchCountries(sort);
    if (!country.loading) {
      await setListCountries(country.data);
    }
  };

  const onRefresh = async () => {
    await setRefresh(true);
    await fetchCountries();
    await setListCountries(country.data);
    await setRefresh(false);
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <Header onLeft={navigation.goBack} />
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Search
          placeholder={'Search for..., ex: vietnam'}
          width={'80%'}
          onChangeText={searchFilter}
        />
        <Card
          onPress={() => setIsSort(true)}
          style={{
            width: '15%',
            height: 60,
            backgroundColor: 'rgb(236, 242, 248)',
          }}>
          <Text>Sort</Text>
        </Card>
        {isSort ? (
          <View style={{position: 'absolute', right: 20, top: 80, zIndex: 99}}>
            <Card style={{width: 100}} onPress={() => onSort('cases')}>
              <Text>Cases</Text>
            </Card>
            <Card style={{width: 100}} onPress={() => onSort('deaths')}>
              <Text>Deaths</Text>
            </Card>
            <Card style={{width: 100}} onPress={() => onSort('active')}>
              <Text>Actives</Text>
            </Card>
            <Card style={{width: 100}} onPress={() => onSort('recovered')}>
              <Text>Recovered</Text>
            </Card>
          </View>
        ) : null}
      </View>
      <FlatList
        data={listCountries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <Item key={item.countryInfo._id} {...item} />;
        }}
        refreshControl={
          <RefreshControl
            refreshing={isRefresh || country.loading}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};
