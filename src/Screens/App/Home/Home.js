import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//Components
import Layout from '../../../component/Layout';
import Header from '../../../component/Header';
import Button from '../../../component/Button';
import Icon from '../../../component/Icon';
import GridTwoCol from '../../../component/GridTwoCol';
import Tip from '../../../component/Tip';
import Card from '../../../component/Card';
import LisenceCompanyInfo from '../../../component/LisenceCompanyInfo';
import ButtonConfirm from '../../../component/ButtonConfirm';


export default Home = ({tip, fetchTips}) => {
  const navigation = useNavigation();
  const {navigate} = navigation;
  const screenWidth = Dimensions.get('screen').width;
  const [position, setPosition] = useState('absolute');

  const redirectGood = () => {
    navigate('Good');
  };
  const redirectBad = () => {
    navigate('Bad');
  };
  return (
    <Layout>
      <Header style={{position: position}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            CORONAVIRUS
          </Text>
          <Text style={{color: 'white', fontSize: 10}}> GNHA</Text>
        </View>
      </Header>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Component Top */}
        <View style={{paddingTop: 75}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              alignSelf: 'center',
              color: 'white',
              textAlign: 'center',
            }}>
            Hello!
          </Text>
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              color: 'white',
              textAlign: 'center',
            }}>
            {'How is your health at the \nmoment?'}
          </Text>
        </View>

        {/* -------------------------------------------------------------- */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Button
            onPress={redirectGood}
            stylePressIn={{
              backgroundColor: 'rgba(107, 177, 53,0.5)',
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: 'rgb(107, 177, 53)',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}>
            <Icon
              type={'FontAwesome5'}
              name={'smile'}
              color={'rgb(107, 177, 53)'}
              size={30}
            />
            <Text style={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}>
              GOOD
            </Text>
          </Button>
          <Button
            onPress={redirectBad}
            stylePressIn={{
              backgroundColor: 'rgba(255, 89, 145,0.5)',
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              borderColor: 'rgb(255, 89, 145)',
            }}>
            <Icon
              type={'FontAwesome5'}
              name={'tired'}
              color={'rgb(255, 89, 145)'}
              size={30}
            />
            <Text style={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}>
              BAD
            </Text>
          </Button>
        </View>
        {/* -------------------------------------------------------------- */}

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            marginTop: 20,
            paddingVertical: 40,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Card onPress={() => navigate('Map')}>
              <Icon
                type={'MaterialIcons'}
                name={'healing'}
                size={40}
                color={'rgb(0, 136, 255)'}
              />
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                Health Units
              </Text>
              <Text style={{textAlign: 'center', color: 'rgb(122, 151, 180)'}}>
                Find the ones closest to you
              </Text>
            </Card>
            <Card onPress={() => navigate('News')}>
              <Icon
                type={'FontAwesome'}
                name={'newspaper-o'}
                size={40}
                color={'rgb(0, 136, 255)'}
              />
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                News
              </Text>
              <Text style={{textAlign: 'center', color: 'rgb(122, 151, 180)'}}>
                Update with official infomation
              </Text>
            </Card>
          </View>

          {/* ------------------------------------------------------------- */}
          <View style={{marginTop: 20, paddingLeft: 20}}>
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
          {/* ---------------------------------- */}
          <GridTwoCol
            data={tip.data.slice(0, 4)}
            renderItem={({item, index}) => {
              return (
                <Tip
                  isLoading={tip.loading}
                  key={index}
                  source={{uri: item.urlToImage}}
                  title={item.title}
                  onPress={() => navigate('TipDetail', item)}
                />
              );
            }}
          />
          <ButtonConfirm
            title={'SEE MORE TIPS'}
            onPress={() => {
              navigate('Tips');
            }}
          />
          <LisenceCompanyInfo
            company={'GNHA'}
            nameApp={'CORONAVIRUS'}
            version={'version v1.0.0'}
          />
        </View>
      </ScrollView>
    </Layout>
  );
};
