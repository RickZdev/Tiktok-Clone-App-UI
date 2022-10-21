import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import CustomCircle from './CustomCircle'
import DATA from '../global/DATA'

const Stories = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={DATA.storiesList}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View className='pl-2 mr-4 ml-2 my-4'>
          <TouchableOpacity onPress={() => navigation.navigate('StoryScreen')}>
            <CustomCircle image={require('../assets/images/avatar1.jpg')} size={67} withColor={false} withAdd={true}/>
          </TouchableOpacity>
          <Text className='font-ProximaNovaRegular text-[11px] text-black text-center mt-2'>Create</Text>
        </View>
      )}
      renderItem={({ item }) => <Card data={item} navigation={navigation}/>}
    />
  )
}

const Card = ({ data, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('StoryScreen', data)} className='mr-4 my-4 justify-center items-center'>
      <CustomCircle image={data.avatar} size={67} firstColor={'rgb(89, 189, 243)'} secondColor={'rgb(106, 223, 200)'}/>
      <Text className='font-ProximaNovaRegular text-[11px] text-black text-center mt-[8px]'>{data.displayName}</Text>
    </TouchableOpacity>
  )
}

export default Stories