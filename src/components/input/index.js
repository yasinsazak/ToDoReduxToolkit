import React from 'react';
import {TextInput, View} from 'react-native';
import {Button} from '../button';

import styles from './style';

export const Input = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  theme,
  onPress,
  buttonText,
}) => {
  return (
    <View style={styles[theme].body}>
      <TextInput
        style={styles[theme].input}
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {theme == 'secondary' && (
        <View style={styles.button_container}>
          <Button theme="tertiary" buttonText={buttonText} onPress={onPress} />
        </View>
      )}
    </View>
  );
};
