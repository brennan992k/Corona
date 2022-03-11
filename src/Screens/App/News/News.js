/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

//component
import Layout from '../../../component/Layout';
import ItemNew from '../../../component/ItemNew';
import Loading from '../../../component/Loading';
import Search from '../../../component/Search';

export default ({fetchNews, news}) => {
  const [page, setPage] = useState(1);
  const [isRefresh, setIsRefresh] = useState(false);
  const [keySearch, setKeySearch] = useState('COVID');
  const screenWidth = Dimensions.get('screen').width;

  useEffect(() => {
    fetchNews(page, keySearch);
  }, []);

  const onLoadMore = async () => {
    await fetchNews(page + 1, keySearch);
    await setPage(page + 1);
  };

  const onRefresh = async () => {
    await setIsRefresh(true);
    await fetchNews(1);
    await setPage(1);
    if (news) {
      await setIsRefresh(false);
    }
  };

  const renderFooter = () => {
    return (
      <>
        {news.Loading && page >= 2 ? (
          <ActivityIndicator style={{color: '#000'}} />
        ) : null}
      </>
    );
  };

  const onChangeKeySearch = (key = '') => {
    setKeySearch(key.toUpperCase());
  };

  const onSearch = () => {
    fetchNews(1, keySearch);
    setPage(1);
  };

  return (
    <>
      <Loading isLoading={news.loading} />
      <Layout>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{marginBottom: 20, paddingLeft: 20, paddingTop: 40}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 30, fontWeight: 'bold', marginRight: 5}}>
                News
              </Text>
              <Text style={{fontSize: 30}}>Tips</Text>
            </View>
            <Text style={{color: 'rgb(122, 151, 180)'}}>
              What you need to know and do
            </Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Search
              width={screenWidth - 20}
              onChangeText={onChangeKeySearch}
              onPress={onSearch}
            />
          </View>
          <FlatList
            numColumns={Math.floor((screenWidth - 40) / 300)}
            contentContainerStyle={{alignItems: 'center'}}
            data={news.data}
            renderItem={({item, index}) => {
              return <ItemNew key={index} newInfo={item} />;
            }}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={onLoadMore}
            refreshing={isRefresh}
            refreshControl={
              <RefreshControl
                refreshing={news.loading && isRefresh}
                onRefresh={onRefresh}
              />
            }
            ListFooterComponent={renderFooter}
          />
        </View>
      </Layout>
    </>
  );
};
