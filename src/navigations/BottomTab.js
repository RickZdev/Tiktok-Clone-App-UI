import React, { useState } from 'react'
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, UserIcon, UsersIcon } from "react-native-heroicons/outline";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import {AddStack, FriendsStack, InboxStack, ProfileStack} from './AppStack';
import COLORS from '../global/COLORS';
import FONTS from '../global/FONTS';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isActive ? COLORS.white : COLORS.background,
          height: 48,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        },
        tabBarItemStyle: { top: -2 },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: isActive ? COLORS.black : COLORS.secondary,
        tabBarInactiveTintColor: isActive ? COLORS.gray : COLORS.white,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { top: -2, fontFamily: FONTS.ProximaNovaSemiBold, fontSize: 10.35 },
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon color={color} size={25} fill={ focused ? COLORS.white : null}/>
          ),
          tabBarLabel: 'Home',
        }}
        listeners={() => ({
          tabPress: e => {
            setIsActive(false);
          }
          })
        }
      />

      <Tab.Screen name="FriendsTab" component={FriendsStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <UsersIcon color={color} size={25} fill={ focused ? COLORS.white : null}/>
          ),
          tabBarLabel: 'Friends',
        }}
        listeners={() => ({
          tabPress: e => {
            setIsActive(false);
          }
          })
        }
      />

      <Tab.Screen name="AddTab" component={AddStack} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View className='flex-row -top-[2px]'>
              <View className='bg-[#20D5EC] w-[31px] absolute -left-2 h-[29px] justify-center items-center rounded-lg'/>
              <View className='bg-primary w-[31px] left-2 h-[29px] justify-center items-center rounded-lg' />
              <View className='bg-white w-[39px] absolute -left-1 h-[29px] justify-center items-center rounded-lg' style={{ backgroundColor: isActive ? COLORS.black : COLORS.white}} >
                <MaterialCommunityIcons name='plus' color={isActive ? COLORS.white : COLORS.black} size={25} fill={ focused ? COLORS.white : null}/>
              </View>
            </View>
          ),
          tabBarLabel: () => null,
          tabBarShowLabel: () => null,
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            setIsActive(false);
            navigation.navigate('CameraScreen')
          }
          })
        }
      />

      <Tab.Screen name="InboxStack" component={InboxStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
              focused ? 
              <MaterialCommunityIcons name='message-minus' color={color} size={25} /> 
              : <MaterialCommunityIcons name='message-minus-outline' color={color} size={25} />
          ),
          tabBarLabel: 'Inbox',
        }}
        listeners={() => ({
          tabPress: e => {
            setIsActive(true);
          }
          })
        }
      />

      <Tab.Screen name="ProfileStack" component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <UserIcon color={color} size={25} fill={ focused ? COLORS.black : null}/>
          ),
          tabBarLabel: 'Profile',
        }}
        listeners={() => ({
          tabPress: e => {
            setIsActive(true);
          }
          })
        }
      />
    </Tab.Navigator>
  )
}

export default BottomTab