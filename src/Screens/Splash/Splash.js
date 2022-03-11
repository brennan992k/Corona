import React from 'react';
import {View} from 'react-native';
import Avatar from '../../component/Avatar';
import Logo from '../../publics/images/logo.png';
import LisenceCompanyInfo from '../../component/LisenceCompanyInfo';
import Loading from '../../component/Loading';

export default isLoading => {
  return (
    <>
      <Loading isLoading={isLoading} />
      <View style={{flex: 1}}>
        <View style={{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
          <Avatar
            style={{width: 250, height: 100, alignSelf: 'center'}}
            source={Logo}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 10}}>
          <LisenceCompanyInfo
            company={'GNHA'}
            nameApp={'CORONAVIRUS'}
            version={'version v1.0.0'}
          />
        </View>
      </View>
    </>
  );
};
