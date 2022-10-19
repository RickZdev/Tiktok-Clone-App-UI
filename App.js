import 'react-native-gesture-handler'
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { LogBox, StatusBar } from 'react-native';

import COLORS from './src/global/COLORS'
import { HomeStack } from './src/navigations/AppStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  LogBox.ignoreAllLogs(true)
  StatusBar.setBackgroundColor(COLORS.black);
  StatusBar.setBarStyle('light-content');
  return (
    <NavigationContainer theme={{ colors: { background: 'white'}}}>
      <HomeStack />
    </NavigationContainer>
  )
};

export default App;
