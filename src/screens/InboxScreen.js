import { View, Text, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Stories from '../components/Stories';
import Activity from '../components/Activity';
import Messages from '../components/Messages';
import COLORS from '../global/COLORS';

const InboxScreen = () => {
  return (
    <View className='bg-white'>
      {/* header */}
      <View className='flex-row justify-between items-center border-b-[1px] border-[#DFDFDF] py-2 px-2'>
        <View />
        <View className='flex-row justify-center items-center space-x-2'>
          <Text className='text-center font-ProximaNovaBold text-black text-lg'>Inbox</Text>
          <View className='bg-[#DFDFDF] flex-row p-1 rounded-md justify-center items-center space-x-1'>
            <View className='bg-green-500 w-[8px] h-[8px] rounded-full'/>
            <AntDesign name='caretdown' size={8} color={COLORS.gray}/>
          </View>
        </View>
        <MaterialCommunityIcons name='message-badge-outline' size={24} color={COLORS.black} />
      </View>

      {/* content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* stories */}
        <Stories />
        {/* activity */}
        <Activity />
        {/* messages */}
        <Messages />
      </ScrollView>
    </View>
  )
}

export default InboxScreen