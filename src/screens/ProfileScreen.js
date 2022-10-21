import { View, Text, ScrollView, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import SectionButtonList from '../components/SectionButtonList'
import CustomCircle from '../components/CustomCircle'
import COLORS from '../global/COLORS'
import DATA from '../global/DATA'

const ProfileScreen = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const bottomTabHeight = useBottomTabBarHeight();
  const { width } = Dimensions.get('window');
  return (
    <View style={{ paddingBottom: bottomTabHeight}}>
      {/* header */}
      <View className='flex-row justify-between items-center px-4 pt-3 pb-3 bg-white'>
        <AntDesign name='adduser' size={28} color={COLORS.black}/>
        <View className='flex-row items-center justify-center'>
          <Text className='font-ProximaNovaBold text-lg text-black'>Fred</Text>
          <Entypo name='chevron-down' size={18} color={COLORS.black} />
        </View>
        <Feather name='menu' size={28} color={COLORS.black} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* profile pic */}
        <View className='justify-center items-center mt-3'>
          <View className='w-24 h-24 rounded-full'>
            <CustomCircle image={require('../assets/images/avatar1.jpg')} size='100%' withColor={false}/>
            <View className='bg-[#20D5EC] absolute z-20 bottom-[2px] right-[2px] w-[25px] h-[25px] rounded-full border-2 border-white justify-center items-center'>
              <Entypo name='plus' size={17} color={COLORS.white}/>
            </View>
          </View>
        </View>

        {/* username  */}
        <View className='flex-row items-center justify-center mt-2'>
          <Text className='text-center font-semibold text-black text-base'>@rickzdev</Text>
          <View className='rounded-full justify-center items-center bg-[#20D5EC] w-[12px] h-[12px] ml-1 p-[2px]'>
            <Octicons name='check' size={8} color={COLORS.white} />
          </View>
        </View>

        {/* details */}
        <View className='flex-row items-center justify-center space-x-5 mt-2'>
          <View className='items-center'>
            <Text className='font-ProximaNovaBold text-black text-base'>31</Text>
            <Text className='font-ProximaNovaRegular text-sm'>Following</Text>
          </View>
          
          <View className='h-[15px] bg-[#DFDFDF] w-[1px]'/>

          <View className='items-center'>
            <Text className='font-ProximaNovaBold text-black text-base'>503.1K</Text>
            <Text className='font-ProximaNovaRegular text-sm'>Followers</Text>
          </View>

          <View className='h-[15px] bg-[#DFDFDF] w-[1px]'/>

          <View className='items-center'>
            <Text className='font-ProximaNovaBold text-black text-base'>1.2M</Text>
            <Text className='font-ProximaNovaRegular text-sm'>Likes</Text>
          </View>
        </View>

        {/* edit */}
        <TouchableOpacity className='border-[1px] border-[#DFDFDF] self-center px-10 py-2 mt-2'>
          <Text className='text-base font-ProximaNovaSemiBold text-black'>Edit profile</Text>
        </TouchableOpacity>

        {/* caption */}
        <View className='justify-center items-center mt-4 mb-1 w-1/2 self-center'>
          <Text className='text-center font-ProximaNovaRegular text-black text-sm'> 💻: Frederick Castaneda Jr.</Text>
          <View className='flex-row justify-center items-center bg-yellow'>
            <MaterialCommunityIcons name='shopping-outline' size={14} color='red'/>
            <Text className='font-ProximaNovaSemiBold text-black text-sm'> My orders</Text>
          </View>
        </View>

        {/* buttons */} 
        <View className='flex-row border-[#DFDFDF] border-b-[1px] '>
          {
            DATA.profileButton.map((item, index) => (
              <Pressable key={index} onPress={() => setSelectedSection(index)} android_ripple={{ color: '#DFDFDF'}} style={{ width: width / 4}} className='justify-center items-center pb-[12px] pt-[7px]'>
                {selectedSection === index ? item.activeIcon : item.inactiveIcon}
                {selectedSection === index && <View className='w-10 bg-black h-[2px] absolute bottom-0'/>}
              </Pressable>
            ))
          }
        </View>

        {/* sections */}
        <View>
            {
              selectedSection === 0 && <SectionButtonList data={DATA.videoSection}/> ||
              selectedSection === 1 && <SectionButtonList /> ||
              selectedSection === 2 && <SectionButtonList /> ||
              selectedSection === 3 && <SectionButtonList /> 
            }
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen