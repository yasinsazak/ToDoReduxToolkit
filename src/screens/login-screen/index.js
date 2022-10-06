import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {useDispatch} from 'react-redux';
import {loginProcess} from '../../api';
import strings from '../../utils/strings';

import {Input} from '../../components';
import {Button} from '../../components';

import style from './style';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [mail, setMail] = useState('yasin@gmail.com');
  const [password, setPassword] = useState('123456');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const login = () => {
    dispatch(loginProcess({email: mail, password: password}));
  };

  const showPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>{strings.login_screen}</Text>

      <Input
        style={style.textInput}
        value={mail}
        setValue={setMail}
        placeholder={strings.login_email_input_placeholder}
        theme="primary"
      />
      <Input
        style={style.textInput}
        value={password}
        setValue={setPassword}
        placeholder={strings.login_password_input_placeholder}
        secureTextEntry={passwordVisibility}
        theme="secondary"
        buttonText={'Show Password'}
        onPress={showPassword}
      />
      <Button
        onPress={login}
        theme="secondary"
        buttonText={strings.login_button}
      />
    </View>
  );
};
