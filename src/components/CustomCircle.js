import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo'

import COLORS from '../global/COLORS';

const CustomCircle = ({ image, size, firstColor, secondColor, isViewed=false, withColor=true, withAdd }) => {
  return (
    <LinearGradient
      colors={ 
        withColor ? [firstColor, secondColor] 
        : isViewed ? ['#DFDFDF', '#DFDFDF']
        : ['#FFF', '#FFF']
      }
      className="rounded-full p-[2px]"
      style={{ width: size, height: size}}     
    >
      <View className='bg-white border-white border-[1px] rounded-full '>
        <Image
          source={image}
          resizeMode='cover'
          className='w-full h-full rounded-full'
        />
      </View>
      {
        withAdd && 
        <LinearGradient
          colors={['rgb(89, 189, 243)', 'rgb(106, 223, 200)']}
          className="absolute -bottom-1 right-0 rounded-full p-[1px] justify-center items-center border-2 border-white"
        >
          <Entypo name='plus' size={18} color={COLORS.white}/>
        </LinearGradient>
      }
    </LinearGradient>
  );
};

export default CustomCircle;
