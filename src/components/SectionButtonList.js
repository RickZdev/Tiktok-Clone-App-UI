import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import COLORS from '../global/COLORS'

const SectionButtonList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      numColumns={3}
      initialNumToRender={6}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ justifyContent: 'center', paddingBottom: 150}}
      renderItem={({ item }) => <Card data={item}/>}
    />
  )
}

const Card = ({ data }) => {
  const { width } = Dimensions.get('window');
  return (
    <View className='h-40 mr-[1px] mb-[1px]' style={{ width: (width / 3)}}>
      <Image
        source={data?.gif}
        resizeMode='cover'
        className='w-full h-full'
      />
      <View className='absolute bottom-0 flex-row items-center justify-start w-full pl-2 pb-1'>
        <Feather name='play' size={12} color={COLORS.white}/>
        <Text className='text-xs font-ProximaNovaSemiBold text-white ml-[1px]'>{data.views}</Text>
      </View>
    </View>
  )
}

export default SectionButtonList