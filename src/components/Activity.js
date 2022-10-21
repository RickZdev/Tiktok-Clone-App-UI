import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { EllipsisHorizontalIcon } from 'react-native-heroicons/solid'
import Entypo from 'react-native-vector-icons/Entypo'

import COLORS from '../global/COLORS'
import DATA from '../global/DATA'

const Activity = () => {
  return (
    <View className='border-t-[1px] border-[#DFDFDF] py-4 '>
      {/* header */}
      <View className='flex-row justify-between items-center px-4'>
        <Text className='font-ProximaNovaSemiBold text-lg text-black'>Activities</Text>
        <Entypo name='chevron-right' size={22} color={COLORS.black}/>
      </View>

      <FlatList
        data={DATA.activityList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  )
}

const Item = ({ data }) => {
  return (
    <TouchableOpacity className='flex-row py-2 px-4 items-center'>
      <View className='flex-row space-x-2 justify-center items-start'>
        {/* avatar */}
        <View className='w-14 h-14 rounded-full overflow-hidden'>
          <Image
            source={data.avatar}
            resizeMode='contain'
            className='w-full h-full'
          />
        </View>
        {/* details */}
        <View className='justify-center flex-1 items-start'>
          <Text className='font-ProximaNovaSemiBold text-base text-black w-full' numberOfLines={2} style={{ lineHeight: 18}}>{data.title}</Text>
          <View className='flex-row space-x-2'>
            <Text className='text-gray'>liked your video.</Text>
            <Text>{data.time}</Text>
          </View>

          {/* likers */}
          <View className='flex-row space-x-3 mt-3'>
          {
            DATA.likersList.map((item, index) => (
              <View key={index}>
                <Image
                  source={item.avatar}
                  resizeMode='contain'
                  className='w-8 h-8 rounded-full'
                />
              </View>
            ))
          }
            <View className='w-8 h-8 justify-center items-center bg-slate-100 rounded-full'>
              <EllipsisHorizontalIcon size={28} color={COLORS.gray} />    
            </View>
          </View>
          
        </View>
        {/* thumbnail */}
        <View className='w-11 h-16 bg-red-400'>
          <Image
            source={data.thumbnail}
            resizeMode='cover'
            className='w-full h-full'
          />
        </View>
        {/* <View className='bg-[#DFDFDF] w-full h-[2px]' /> */}
      </View>
    </TouchableOpacity>
  )
}
export default Activity