/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';

import MMKVStorage from 'react-native-mmkv-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import {Setting, Meaning} from './src/screens';
import {AddWords} from './src/screens/addWords';

const MMKV = new MMKVStorage.Loader().initialize(); // Returns an MMKV Instance

const BaseStack = () => {
  return (
    <Tab.Navigator>
      <Stack.Screen name="Meaning" component={Meaning} />
      <Stack.Screen name="AddWord" component={AddWords} />
    </Tab.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Base" component={BaseStack} />
        <Stack.Screen name="_Setting" component={SettingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
