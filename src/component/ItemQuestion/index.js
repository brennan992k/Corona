import React, {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import Card from '../Card';

export default ({
  question,
  answers,
  onPress,
  isLoading,
  isSelectMany = false,
  id
}) => {
  const [many, setMany] = useState([]);
  const [one, setOne] = useState();
  const onSelection = async answer => {
    if (isSelectMany) {
      if (answer == 'None of these symptoms') {
       await setMany([answer]);
        if (onPress) await onPress({questionId: id, answers: [answer], question:question});
      } else {
        const newMany = await many.filter((item)=>item != 'None of these symptoms')
        if (many.indexOf(answer) == -1) {
          await setMany([...newMany, answer]);
        }
        if (onPress)
          await onPress({questionId: id, answers: [...newMany, answer], question:question});
      }
    } else {
     await setOne(answer);
      if (onPress) await onPress({questionId: id, answers: [answer], question:question});
    }
  };

  const screenWidth = Dimensions.get('screen').width;
  return (
    <View style={{marginVertical: 20}}>
      <Text style={{padding: 10, fontWeight: 'bold', fontSize: 16}}>
        {question}
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        {answers
          ? answers.map((answer, index) => {
              return (
                <Card
                  key={index}
                  onPress={() => onSelection(answer)}
                  style={{
                    marginLeft: 10,
                    marginBottom: 10,
                    width: (screenWidth - 40) / 2,
                    height: 60,
                    backgroundColor:
                      one == answer || many.indexOf(answer) > -1
                        ? 'rgb(33, 175, 221)'
                        : 'white',
                  }}>
                  <Text style={{textAlign: 'center'}}>{answer}</Text>
                </Card>
              );
            })
          : null}
      </View>
    </View>
  );
};
