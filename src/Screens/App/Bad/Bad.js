import React, {useState, useEffect} from 'react';
import {RefreshControl, FlatList} from 'react-native';
import Header from '../../../component/Header/HeaderScreen';
import ItemQuestion from '../../../component/ItemQuestion';
import Loading from '../../../component/Loading';
import ButtonConfirm from '../../../component/ButtonConfirm';
import Error from '../../../component/Error';

export default ({
  navigation,
  fetchQuestions,
  question,
  addAnswers,
  answerOfUsers,
  refreshAnswerOfUser,
}) => {
  useEffect(() => {
    refreshAnswerOfUser();
    fetchQuestions();
  }, []);
  const {navigate, goBack} = navigation;
  const {data, error, loading} = question;
  const [isRefresh, setRefresh] = useState(false);
  const [err, setErr] = useState(null);

  const onRefresh = async () => {
    await setRefresh(true);
    await fetchQuestions();
    await setRefresh(false);
  };
  const addAnswerOfUser = async answers => {
    addAnswers(answers);
  };

  const redirectUserInfo = () => {
    console.log();
    if (Object.keys(answerOfUsers).length == data.length) {
      setErr(null);
      navigate('UserInfo');
    } else {
      setErr('Please answer question, before confirm');
    }
  };

  return (
    <>
      <Loading isLoading={loading} />
      <Header onLeft={goBack} />
      <Error error={err} />
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <ItemQuestion
              key={item._id}
              id={item._id}
              question={item.question}
              answers={item.answers}
              isSelectMany={index == 0}
              onPress={addAnswerOfUser}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        refreshControl={
          <RefreshControl
            refreshing={loading && isRefresh}
            onRefresh={onRefresh}
          />
        }
      />
      <ButtonConfirm title={'CONFIRM'} onPress={redirectUserInfo} />
    </>
  );
};
