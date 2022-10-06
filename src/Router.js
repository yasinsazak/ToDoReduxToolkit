import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {LoginScreen, TodoScreen, SplashScreen} from './screens';
import {SafeAreaView} from 'react-native';
import {loginProcess} from './api';
import {checkSignedIn} from './redux/slice/authenticationSlice';
import {useEffect} from 'react';

const Stack = createStackNavigator();

function Router() {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('@USERDATA').then(session => {
      if (session != null) {
        dispatch(loginProcess(JSON.parse(session)));
      } else {
        dispatch(checkSignedIn('0'));
      }
    });
  }, [check]);

  const check = useSelector(state => state.authentication.isSignedIn);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {check == '1' ? (
            <Stack.Screen name="to-do-screen" component={TodoScreen} />
          ) : check == '0' ? (
            <Stack.Screen name="login-screen" component={LoginScreen} />
          ) : (
            <Stack.Screen name="splash-screen" component={SplashScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Router;
