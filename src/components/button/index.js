import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';

export const Button = ({onPress, theme, buttonText}) => {
  return (
    <View style={styles[theme].body}>
      <TouchableOpacity style={styles[theme].button} onPress={onPress}>
        <Text style={styles[theme].buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
