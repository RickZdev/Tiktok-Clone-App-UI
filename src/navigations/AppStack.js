import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import FriendsScreen from '../screens/FriendsScreen';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTab from './BottomTab';
import AnotherScreen from '../screens/AnotherScreen';
import AddScreen from '../screens/AddScreen';
import CameraScreen from '../screens/CameraScreen';
import StoryScreen from '../screens/StoryScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTab} options={{ presentation: 'modal'}}/>
      <Stack.Screen name="AnotherScreen" component={AnotherScreen} options={{...TransitionPresets.SlideFromRightIOS}}/>
      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="StoryScreen" component={StoryScreen} options={{...TransitionPresets.SlideFromRightIOS}}/>
    </Stack.Navigator>
  )
}

const FriendsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={FriendsScreen}>
      <Stack.Screen name="FriendsScreen" component={FriendsScreen} />
    </Stack.Navigator>
  )
}

const AddStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={AddScreen}>
      <Stack.Screen name="AddScreen" component={AddScreen} options={{ presentation: 'modal'}}/>
      <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ presentation: 'modal'}}/>
      
    </Stack.Navigator>
  )
}

const InboxStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={InboxScreen}>
      <Stack.Screen name="InboxScreen" component={InboxScreen} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ProfileScreen}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export { HomeStack, FriendsStack, AddStack, InboxStack, ProfileStack }