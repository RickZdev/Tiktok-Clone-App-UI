import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react'
import VideoList from '../components/VideoList';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import COLORS from '../global/COLORS';

const HomeScreen = () => {
  return (
    <View className='flex-1'>
      {/* header */}
      <View className='absolute z-10 w-full flex-row justify-between px-4 pt-3'>
        <View className='w-6 h-6'>
          <Image
            source={require('../assets/images/live-icon.png')}
            resizeMode='cover'
            className='w-full h-full'
            />
        </View>

        <View className='flex-row space-x-4 justify-center items-center'>
          <View>
            <Text className='font-ProximaNovaSemiBold text-base text-secondary'>Following</Text>
            <View className='bg-primary w-2 h-2 rounded-full absolute -right-3'/>
          </View>
          <View className='w-[2px] h-[15px]' style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)'}}/>
          <Text className='font-ProximaNovaSemiBold text-base text-white'>For You</Text>
        </View>

        <MagnifyingGlassIcon size={28} color={COLORS.white}/>
      </View>

      {/* video list */}
      <VideoList />
    </View>
  )
}

export default HomeScreen