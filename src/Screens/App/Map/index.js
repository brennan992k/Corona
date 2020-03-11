import React, {useState, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Header from '../../../component/Header/HeaderScreen';
import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';

export default ({navigation}) => {
  const {navigate, goBack} = navigation;
  const [position, setPosition] = useState();
  useEffect(() => {
    locateCurrentPosition();
  }, []);
  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        };
        setPosition(region);
      },
      error => Alert.alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <>
      <Header onLeft={goBack} />
      <MapView
        ref={map => (map = map)}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={position}
        style={{flex: 1}}>
      </MapView>
    </>
  );
};
