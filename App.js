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
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import MMKVStorage from 'react-native-mmkv-storage';
import {NavigationContainer} from '@react-navigation/native';

const MMKV = new MMKVStorage.Loader().initialize(); // Returns an MMKV Instance

await MMKV.setStringAsync('string', 'string');

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Setting, Meaning} from './src/screens';


const BaseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Meaning" component={Meaning}/>
            <Stack.Screen name="Setting" component={Setting}/>
        </Stack.Navigator>
    );
};

const App: () => Node = () => {

    return (
        <NavigationContainer>
            <BaseStack/>
        </NavigationContainer>
    );
};


export default App;
