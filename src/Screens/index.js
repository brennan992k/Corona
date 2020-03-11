import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import fetchTips from '../actions/tip';

//Screens
import Splash from './Splash';
import App from './App';

const Container = ({tip, fetchTips}) => {
  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <NavigationContainer>
      {tip.loading? <Splash isLoading={tip.loading} /> : <App />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    tip: state.tipStore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTips: () => {
      dispatch(fetchTips());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
