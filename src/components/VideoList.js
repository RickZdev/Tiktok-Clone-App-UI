import { Animated, View, Text, FlatList, Dimensions, TouchableOpacity, Image, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Video from 'react-native-video'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native'
import { BookmarkIcon, CheckIcon, HeartIcon, MusicalNoteIcon, PlusIcon } from 'react-native-heroicons/solid'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TextTicker from 'react-native-text-ticker'

import DATA from '../global/DATA'
import COLORS from '../global/COLORS'
import FONTS from '../global/FONTS'

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
      renderItem={({ item, index }) => <VideoCard data={item} isActive={activeVideoIndex === item.id} />}
    />
  )
}

const VideoCard = ({ data, isActive }) => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  const bottomTabHeight = useBottomTabBarHeight();
  const [isLike, setIsLike] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // see more caption
  const [isTruncatedCaption, setIsTruncatedCaption] = useState(true);
  const captionLimit = 77;
  const resultCaption = isTruncatedCaption ? data.caption.slice(0, captionLimit) : data.caption;
  
  // disc animation
  const discAnimationValue = useRef(new Animated.Value(0)).current;
  const discAnimation = {
    transform: [
      {
        rotate: discAnimationValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  useEffect(() => {
      Animated.loop(
        Animated.timing(discAnimationValue, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        ).start();
      }, [discAnimationValue]);

  return (
    <View className='bg-black' style={{ width: width, height: height - bottomTabHeight}}>
      {/* video */}
      {/* <TouchableOpacity activeOpacity={1}>
        <Video
          source={data.video}
          repeat={true}
          resizeMode="cover"
          paused={!isActive}
          style={{ width: '100%', height: '100%'}}
        />
      </TouchableOpacity> */}

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
          <TouchableOpacity className='rounded-full w-[50px] h-[50px] justify-center items-center'>
            <Animated.Image
              source={require('../assets/images/disc-icon.png')}
              resizeMode='contain'
              className='w-full h-full rounded-full'
              style={discAnimation}
            />
            <View className='absolute w-full h-full justify-center items-center'>
              <Animated.Image
                source={data.avatar}
                resizeMode='contain'
                className='h-1/2 rounded-full w-1/2'
                style={discAnimation}
                />
            </View>
          </TouchableOpacity>

        </View>
      </View>

      {/* details */}
      <View className='pl-3 pb-6 bottom-0 absolute w-[60%] justify-between space-y-1'>
        <View className='flex-row items-center -mb-2'>
          <Text className='font-ProximaNovaSemiBold text-base text-white'>{data.displayName}</Text>
          {
            data.isVerified &&
            <View className='rounded-full justify-center items-center bg-[#20D5EC] p-[1px] ml-1'>
              <CheckIcon size={10} color={COLORS.white} />
            </View>
          }
          <Text className='font-semibold text-sm text-secondary'> • </Text>
          <Text className='font-ProximaNovaSemiBold text-sm text-secondary'>{data.date}</Text>
        </View>
        {/* see more / hide */}
        <View className='flex-row items-end'>
          <Text className='text-[15px] text-white' style={{ lineHeight: 25}}>{resultCaption}</Text>
          {
            data.caption.length >= captionLimit &&
            <TouchableOpacity onPress={() => setIsTruncatedCaption(!isTruncatedCaption)}>
              <Text className='font-ProximaNovaSemiBold text-sm text-white'>{isTruncatedCaption === true ? ' ... See more' : 'Hide'}</Text>
            </TouchableOpacity> 
          }
        </View>
        {/* see translation */}
        <TouchableOpacity>
          <Text className='font-ProximaNovaSemiBold text-sm text-white'>See translation</Text>
        </TouchableOpacity>
        {/* sounds-marque label */}
        <View className='flex-row items-center space-x-1'>
          <MusicalNoteIcon size={17} color={COLORS.white} style={{ marginRight: 5}}/>
          <TextTicker 
            style={{ fontSize: 15, color: COLORS.white}}
            duration={15000}
            marqueeOnMount={true}
            marqueeDelay={-20}
            loop={true}
            repeatSpacer={5}
          >
            {data.soundName}
          </TextTicker>
        </View>
      </View>

    </View>
  )
}


export default VideoList