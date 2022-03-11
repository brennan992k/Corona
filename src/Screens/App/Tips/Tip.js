/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//component
import Layout from '../../../component/Layout';
import Search from '../../../component/Search';
import GridTwoCol from '../../../component/GridTwoCol';
import Tip from '../../../component/Tip';
import LisenceCompanyInfo from '../../../component/LisenceCompanyInfo';

export default ({tip}) => {
  const navigation = useNavigation();
  const [newData, setData] = useState(tip.data);
  const searchFilter = async text => {
    const newData = await tip.data.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    await setData(newData);
  };
  return (
    <Layout>
      <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 40}}>
        <View style={{marginBottom: 20, paddingLeft: 20, paddingTop: 40}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginRight: 5}}>
              Official
            </Text>
            <Text style={{fontSize: 30}}>Tips</Text>
          </View>
          <Text style={{color: 'rgb(122, 151, 180)'}}>
            What you need to know and do
          </Text>
        </View>
        <ScrollView>
          <View style={{padding: 20}}>
            <Search onChangeText={searchFilter} />
          </View>
          <GridTwoCol
            data={newData}
            renderItem={({item}) => {
              return (
                <Tip
                  key={item._id}
                  source={{uri: item.urlToImage}}
                  title={item.title}
                  onPress={() => navigation.navigate('TipDetail', item)}
                />
              );
            }}
          />
          <LisenceCompanyInfo
            company={'GNHA'}
            nameApp={'CORONAVIRUS'}
            version={'version v1.0.0'}
          />
        </ScrollView>
      </View>
    </Layout>
  );
};
