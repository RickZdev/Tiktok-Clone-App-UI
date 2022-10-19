import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import COLORS from './COLORS'

export default DATA = {
    videoList: [
      {
        id: 0,
        video: require('../assets/videos/vid1.mp4'),
        avatar: require('../assets/images/avatar1.jpg'),
        displayName: 'Fred',
        date: '6d ago',
        caption: 'ggwp #valorant #fyp #mobiledeveloper #softwareengineer #mobiledevelopment #it #cs #coding',
        soundName: 'original sound - Sunroof - Nicky Youre & dazy',
        likes: '89.9K',
        comments: '10.1k',
        favorites: '5659',
        shares: '527',
        isVerified: true,
      },
      {
        id: 1,
        video: require('../assets/videos/vid2.mp4'),
        avatar: require('../assets/images/avatar2.jpg'),
        displayName: 'ribsp',
        date: '8h ago',
        caption: '#fonz',
        soundName: 'original sound - fonz',
        likes: '7085',
        comments: '111',
        favorites: '96',
        shares: '29',
        isVerified: false,
      },
      {
        id: 2,
        video: require('../assets/videos/vid3.mp4'),
        avatar: require('../assets/images/avatar3.jpg'),
        displayName: 'JOSHUA GARCIA',
        date: '10h ago',
        caption: 'Miss me? No filtoor! #fyp #foryou #foryoupage',
        soundName: 'Thick Fine Woman (feat. Lil Ronny Mothaf, Fat Pimp & No Shame) - Chalie Boy',
        likes: '6.2M',
        comments: '90.5K',
        favorites: '210.2K',
        shares: '112.1K',
        isVerified: true,

      },
      {
        id: 3,
        video: require('../assets/videos/vid4.mp4'),
        avatar: require('../assets/images/avatar4.jpg'),
        displayName: 'Esnyr',
        date: '2d ago',
        caption: 'Yung balik f2f classes na galing online class be like: HAHAHAHAHAH Nakapag-booster na ba ang lahat? For more information, visit the official DOH Facebook Page',
        soundName: 'original sound - Esnyr',
        likes: '1.0M',
        comments: '2515',
        favorites: '53.3K',
        shares: '3319',
        isVerified: true,
      },
      {
        id: 4,
        video: require('../assets/videos/vid5.mp4'),
        avatar: require('../assets/images/avatar5.jpg'),
        displayName: 'daniel',
        date: '2d ago',
        caption: 'BOBOKA ANG BULAKLAK',
        soundName: 'original sound - daniel',
        likes: '125.3K',
        comments: '269',
        favorites: '35175659',
        shares: '510',
        isVerified: false,
      },
    ],
    profileButton: [
      {
        id: 0,
        name: 'grip-vertical',
        activeIcon: <FontAwesome5 name='grip-vertical' size={20} color={COLORS.black} />,
        inactiveIcon: <FontAwesome5 name='grip-vertical' size={20} color={COLORS.gray}/>
      },
      {
        id: 1,
        name: 'lock',
        activeIcon: <SimpleLineIcons name='lock' size={20} color={COLORS.black}/>,
        inactiveIcon: <SimpleLineIcons name='lock' size={20} color={COLORS.gray}/>

      },
      {
        id: 2,
        name: 'bookmark-slash',
        activeIcon: <Octicons name='bookmark-slash' size={20} color={COLORS.black}/>,
        inactiveIcon: <Octicons name='bookmark-slash' size={20} color={COLORS.gray}/>

      },
      {
        id: 3,
        name: 'heart-off-outline',
        activeIcon: <MaterialCommunityIcons name='heart-off-outline' size={20} color={COLORS.black}/>,
        inactiveIcon: <MaterialCommunityIcons name='heart-off-outline' size={20} color={COLORS.gray}/>

      },
    ],
    videoSection: [
      {
        id: 0,
        gif: require('../assets/gifs/gif1.gif'),
        views: '1038',
      },
      {
        id: 1,
        gif: require('../assets/gifs/gif2.gif'),
        views: '6367',
      },
      {
        id: 2,
        gif: require('../assets/gifs/gif3.gif'),
        views: '17.5K',
      },
      {
        id: 3,
        gif: require('../assets/gifs/gif4.gif'),
        views: '757',
      },
      {
        id: 4,
        gif: require('../assets/gifs/gif5.gif'),
        views: '803',
      },
      {
        id: 5,
        gif: require('../assets/gifs/gif6.gif'),
        views: '735',
      },
    ]
  }