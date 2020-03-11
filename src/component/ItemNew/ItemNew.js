import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import Avatar from '../Avatar';
import Card from '../Card';
import {useNavigation} from '@react-navigation/native';

export default ({newInfo}) => {
  const {
    author,
    publishedAt,
    source,
    title,
    discription,
    urlToImage,
  } = newInfo;
  const screenWidth = Dimensions.get('screen').width;
  const {navigate} = useNavigation();
  const redirectNewsDetail = () => {
    navigate('NewsDetail', newInfo);
  };
  return (
    <Card
      style={{
        width: screenWidth - 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'rgb(219, 238, 255)',
      }}
      onPress={redirectNewsDetail}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View>
          {author ? (
            <Text
              style={{
                fontSize: 10,
                color: 'rgb(120, 123, 126)',
                paddingBottom: 5,
              }}>
              {author.length > 40 ? author.slice(0, 40) + '...' : author}
            </Text>
          ) : null}

          <Text
            style={{
              alignSelf: 'flex-start',
              color: 'rgb(33, 175, 221)',
              fontSize: 10,
            }}>{`@${source.name}`}</Text>
        </View>

        <Text
          style={{fontSize: 10, color: 'rgb(120, 123, 126)', paddingBottom: 5}}>
          {publishedAt.split('T')[0]}
        </Text>
      </View>

      <Text style={{fontWeight: 'bold'}}>{title}</Text>
      <Text style={{fontSize: 10, padding: 5}}>{discription}</Text>
      {urlToImage ? (
        <Avatar
          source={{uri: urlToImage}}
          style={{width: '100%', height: 200, borderRadius: 20}}
        />
      ) : null}
    </Card>
  );
};
