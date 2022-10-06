import {Text, View} from 'react-native';
import React from 'react';
import strings from '../../utils/strings';

import styles from './style';

export const SplashScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{strings.splash}</Text>
    </View>
  );
};
