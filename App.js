import 'react-native-gesture-handler'
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'react-native';

import COLORS from './src/global/COLORS'

const App = () => {
  StatusBar.setBackgroundColor(COLORS.black);
  StatusBar.setBarStyle('light-content');
  return <HomeScreen />
};

export default App;
