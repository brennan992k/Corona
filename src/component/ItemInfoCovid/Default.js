/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Card from '../Card';
import LoadingView from '../Loading/loadingView';

export default () => {
  return (
    <Card style={{backgroundColor: 'white', marginBottom: 20}}>
      <LoadingView height={20} width={100} />
      <LoadingView height={20} width={50} />
      <LoadingView height={20} width={100} />
    </Card>
  );
};
