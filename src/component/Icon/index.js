import React from 'react';

//Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({type, color, size, name}) => {
  switch (type) {
    case 'FontAwesome':
      return <FontAwesome color={color} size={size} name={name} />;
    case 'FontAwesome5':
      return <FontAwesome5 color={color} size={size} name={name} />;
    case 'Entypo':
      return <Entypo color={color} size={size} name={name} />;
    case 'MaterialIcons':
      return <MaterialIcons color={color} size={size} name={name} />;
    case 'AntDesign':
      return <AntDesign color={color} size={size} name={name} />;
    case 'Foundation':
      return <Foundation color={color} size={size} name={name} />;
    case 'Ionicons':
      return <Ionicons color={color} size={size} name={name} />;
  }
};
