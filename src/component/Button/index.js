import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

export default Button = ({onPressIn, onPressOut,onPress,style, stylePressIn, stylePressOut, children}) => {
  const [isPressIn, setIsPressIn] = useState(false);
  const PressIn = () => {
    setIsPressIn(true);
    if (onPressIn) onPressIn();
  };
  const PressOut = () => {
    setIsPressIn(false);
    if (onPressOut) onPressOut();
  };

  return (
    <TouchableWithoutFeedback onPress={onPress} onPressIn={PressIn} onPressOut={PressOut}>
      <View
        style={
          isPressIn ? {...style, ...stylePressIn} : {...style, ...stylePressOut}
        }>
            {children}
        </View>
    </TouchableWithoutFeedback>
  );
};
