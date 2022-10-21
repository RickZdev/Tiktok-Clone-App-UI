import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { UsersIcon } from 'react-native-heroicons/solid'
import Entypo from 'react-native-vector-icons/Entypo'

import COLORS from '../global/COLORS'
import DATA from '../global/DATA'

const Messages = () => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View className='pb-4 border-b-[1px]' style={{ paddingBottom: bottomTabBarHeight}}>
      {/* header */}
      <View className='flex-row justify-between items-center px-4'>
        <Text className='font-ProximaNovaSemiBold text-lg text-black'>Messages</Text>
      </View>

      <FlatList
        data={DATA.videoList}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <TouchableOpacity className='flex-row py-3 px-4 items-center'>
            <View className='flex-row space-x-4 flex-1'>
              <View className='w-14 h-14 rounded-full overflow-hidden bg-blue-500 justify-center items-center'>
                <UsersIcon size={32} color={COLORS.white}/>
              </View>
              <View className='space-y-1 justify-center w-64'>
                <Text className='font-ProximaNovaSemiBold text-base text-black'>New Followers</Text>
                <Text className='text-gray mr-7' numberOfLines={1}>fonz and Joshua Garcia started following you asdasd</Text>
              </View>
            </View>
            <Entypo name='chevron-right' size={22} color={COLORS.black}/>
          </TouchableOpacity>
        )}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  )
}

const Item = ({ data }) => {
  return (
    <TouchableOpacity className='flex-row py-3 px-4 items-start'>
      <View className='flex-row space-x-4 flex-1'>
        {/* avatar */}
        <View className='w-14 h-14 rounded-full overflow-hidden'>
          <Image
            source={data.avatar}
            resizeMode='contain'
            className='w-full h-full'
            />
        </View>
        {/* details */}
        <View className='space-y-1 justify-center'>
          <Text className='font-ProximaNovaSemiBold text-base text-black'>{data.displayName}</Text>
          <Text className='text-gray'>Say hi to {data.displayName}</Text>
        </View>
      </View>
      <Text className='text-[#AFB0B3] text-xs font-ProximaNovaRegular'>Sunday</Text>
    </TouchableOpacity>
  )
}
export default Messages