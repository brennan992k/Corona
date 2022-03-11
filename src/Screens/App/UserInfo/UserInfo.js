import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../../../component/Header/HeaderScreen';
import Search from '../../../component/Search';
import Error from '../../../component/Error';
import ButtonConfirm from '../../../component/ButtonConfirm';

export default ({navigation, sendAnswers, answers}) => {
  const {navigate, goBack} = navigation;
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [err, setErr] = useState();

  const checkPhone = phone => {
    var phoneno = /^\d{10}$/;
    if (phone.match(phoneno)) {
      setErr(null);
      return true;
    } else {
      setErr('Phone is not validation');
      return false;
    }
  };

  const onChangeName = name => {
    if (name) {
      setName(name);
      setErr(null);
    } else {
      setErr('Enter your name, please!');
    }
  };

  const onChangePhone = phone => {
    if (checkPhone(phone)) {
      setPhone(phone);
    }
  };

  const onChangeAddress = address => {
    if (address) {
      setAddress(address);
      setErr(null);
    } else {
      setErr('Enter your address, please!');
    }
  };
  const onSend = async () => {
    if (answers != null && phone != null && address != null && name != null) {
      await sendAnswers({
        answers: answers,
        phone: phone,
        address: address,
        userName: name,
      });
      await navigate('Home');
    } else {
      setErr('You must enter field before confirm!');
    }
  };

  return (
    <>
      <Header onLeft={goBack} />
      <ScrollView>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            padding: 10,
            color: 'rgb(40, 46, 56)',
          }}>
          We will contact you as soon as we know
        </Text>
        <Error error={err} />
        <View style={{padding: 10}}>
          <View style={{marginVertical: 10}}>
            <Search
              placeholder={'Name'}
              hasIcon={false}
              onChangeText={onChangeName}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Search
              placeholder={'Phone'}
              hasIcon={false}
              onChangeText={onChangePhone}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Search
              placeholder={'Address'}
              hasIcon={false}
              onChangeText={onChangeAddress}
            />
          </View>
        </View>
        <ButtonConfirm title={'Confirm'} onPress={onSend} />
      </ScrollView>
    </>
  );
};
