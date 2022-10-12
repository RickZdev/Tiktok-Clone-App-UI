import { View, Text, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Video from 'react-native-video'
import DATA from '../global/DATA'
import { BookmarkIcon, HeartIcon, MusicalNoteIcon, PlusIcon } from 'react-native-heroicons/solid'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

import COLORS from '../global/COLORS'
import { useNavigation } from '@react-navigation/native'

const VideoList = () => {
  const { height } = Dimensions.get('window');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <FlatList
      data={DATA.videoList}
      keyExtractor={item => item.id}
      pagingEnabled
      onScroll={(event) => {
        const index = Math.round(event.nativeEvent.contentOffset.y / ( height - bottomTabHeight), );
        setActiveVideoIndex(index);
      }}
      renderItem={({ item, index }) => <VideoCard data={item} isActive={activeVideoIndex === index}/>}
    />
  )
}

const VideoCard = ({ data, isActive }) => {
  const navigation = useNavigation();
  const bottomTabHeight = useBottomTabBarHeight();
  const [isPaused, setIsPaused] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { width, height } = Dimensions.get('window');
  const videoRef = useRef(null);

  const handlePause = () => {
    setIsPaused(prevState => !prevState);
  }

  return (
    <View className='bg-black' style={{ width: width, height: height - bottomTabHeight}}>

      {/* video */}
      <TouchableOpacity onPress={() => handlePause()} activeOpacity={1}>
        <Video 
          videoRef={videoRef}
          source={data.video}
          repeat={true}
          resizeMode="cover"
          paused={!isActive}
          style={{ width: '100%', height: '100%'}}
        />
      </TouchableOpacity>

      {/* buttons */}
      <View className='flex-1 items-end flex-col-reverse absolute w-full h-full'>
        <View className='flex-1 justify-end mr-2 items-center pb-4 space-y-3'>

          {/* avatar */}
          <View className='mb-2'>
            <TouchableOpacity onPress={() => navigation.navigate('AnotherScreen')} className='bg-white rounded-full w-12 h-12 border-white border-2'>
              <Image
                source={data.avatar}
                resizeMode='contain'
                className='w-full h-full rounded-full'
              />
            </TouchableOpacity>

            <View className='justify-center items-center absolute -bottom-3 left-0 right-0'>
              <TouchableOpacity className='bg-primary rounded-full w-5 h-5 justify-center items-center' >
                <PlusIcon size={15} color={COLORS.white}/>
              </TouchableOpacity>
            </View>
          </View>

          <View className='space-y-2'>
            {/* likes */}
            <View className='items-center justify-center space-y-1'>
              <TouchableOpacity onPress={() => setIsLike(!isLike)}>
                <HeartIcon size={35} color={isLike ? COLORS.primary : COLORS.white} strokeWidth={0.1} stroke={COLORS.black}/>
              </TouchableOpacity>
              <Text className='text-white font-ProximaNovaSemiBold text-sm'>{data.likes}</Text>
            </View>

            {/* comments */}
            <View className='items-center justify-center space-y-1'>
              <Ionicons name='chatbubble-ellipses' size={35} color={COLORS.white} />
              <Text className='text-white font-ProximaNovaSemiBold text-sm' style={{ elevation: 5 }}>{data.comments}</Text>
            </View>

            {/* favorites */}
            <View className='items-center justify-center space-y-1'>
              <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                <BookmarkIcon size={35} color={ isFavorite ? '#F3CF49' : COLORS.white} strokeWidth={0.1} stroke={COLORS.black}/>
              </TouchableOpacity>
              <Text className='text-white font-ProximaNovaSemiBold text-sm'>{data.favorites}</Text>
            </View>

            {/* shares */}
            <View className='items-center justify-center space-y-1'>
              <Fontisto name='share-a' size={30} color={COLORS.white} style={{ elevation: 12 }} />
              <Text className='text-white font-ProximaNovaSemiBold text-sm'>{data.shares}</Text>
            </View>
          </View>
          
          {/* audio */}
          <View>
            <TouchableOpacity className='bg-white rounded-full w-10 h-10 border-white border-2'>
              <Image
                source={data.avatar}
                resizeMode='contain'
                className='w-full h-full rounded-full'
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>

      {/* details */}
      <View className='pl-3 pb-6 bottom-0 absolute w-[60%] justify-between space-y-2'>
        <View className='flex-row items-center'>
        <Text className='font-ProximaNovaSemiBold text-base text-white'>{data.displayName}</Text>
        <Text className='font-ProximaNovaSemiBold text-sm text-secondary'>•{data.date}</Text>
        </View>
        <Text className='font-ProximaNovaRegular text-[15px] text-white' numberOfLines={4}>{data.caption}</Text>
        <View className='flex-row items-center space-x-2'>
          <MusicalNoteIcon size={17} color={COLORS.white}/>
          <Text className='font-ProximaNovaRegular text-[15px] text-white' numberOfLines={1}>{data.soundName}</Text>
        </View>
      </View>




    </View>
  )
}


export default VideoList