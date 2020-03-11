import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TabBarBottom from '../../component/TabBarBottom';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from './Home';
import Good from './Good';
import Bad from './Bad';
import Tips from './Tips';
import TipDetail from './TipDetail';
import News from './News';
import NewsDetail from './NewsDetail';
import DashBoard from './DashBoard';
import ListCountriesInfo from './ListCountriesInfo';
import CountryDetail from './CountryDetail';
import Map from './Map';
import UserInfo from './UserInfo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBarBottom {...props} />}>
      <Tab.Screen component={Home} name={'Home'} />
      <Tab.Screen component={Tips} name={'Tips'} />
      <Tab.Screen component={News} name={'News'} />
      <Tab.Screen component={DashBoard} name={'DashBoard'} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
   <Stack.Navigator headerMode={null}>
     <Stack.Screen name={'Tabs'} component={Tabs}/>
     <Stack.Screen name={'Good'} component={Good}/>
     <Stack.Screen name={'Bad'} component={Bad}/>
     <Stack.Screen name={'TipDetail'} component={TipDetail}/>
     <Stack.Screen name={'ListCountriesInfo'} component={ListCountriesInfo}/>
     <Stack.Screen name={'CountryDetail'} component={CountryDetail}/>
     <Stack.Screen name={'NewsDetail'} component={NewsDetail}/>
     <Stack.Screen name={'Map'} component={Map}/>
     <Stack.Screen name={'UserInfo'} component={UserInfo}/>
   </Stack.Navigator>
  );
};
