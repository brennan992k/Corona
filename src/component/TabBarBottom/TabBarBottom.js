import React from 'react';
import {View} from 'react-native';
import TabButton from './TabButton';

export default ({state, descriptors, navigation, fetchAll, fetchCountries}) => {
  const {navigate, goBack} = navigation;
  const bg = {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 80,
    position: 'absolute',
    bottom:0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const navigateHome = async () =>{
   await navigate('Home');
  }

  const navigateDashBoard = async () => {
    await fetchAll();
    await fetchCountries();
    await navigate('DashBoard');

  }

  return (
    <View>
      <View style={bg}>
        <TabButton
          isSelection={state.index == 0}
          title={'Home'}
          onPress={navigateHome}
        />
        <TabButton
          isSelection={state.index == 1}
          type={'MaterialIcons'}
          name={'dashboard'}
          title={'Tips'}
          onPress={() => navigate('Tips')}
        />
        <TabButton
          isSelection={state.index == 2}
          type={'Entypo'}
          name={'news'}
          title={'News'}
          onPress={() => navigate('News')}
        />
        <TabButton
          isSelection={state.index == 3}
          type={'Foundation'}
          name={'database'}
          title={'Data'}
          onPress={navigateDashBoard}
        />
      </View>
    </View>
  );
};
