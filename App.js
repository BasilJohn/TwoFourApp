import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/components/screens/home';
import PostAdScreen from './src/components/screens/postad';
import PostAdOneScreen from './src/components/screens/postadone';
import PostAdTwoScreen from './src/components/screens/postadtwo';
import AdDetailsScreen from './src/components/screens/addetails';
import ChatsScreen from './src/components/screens/chats/chats';


Navigation.registerComponent('TwoFourApp.Home', () => HomeScreen);
Navigation.registerComponent('TwoFourApp.PostAd', () => PostAdScreen);
Navigation.registerComponent('TwoFourApp.PostAdOne', () => PostAdOneScreen);
Navigation.registerComponent('TwoFourApp.PostAdTwo', () => PostAdTwoScreen);
Navigation.registerComponent('TwoFourApp.AdDetails', () => AdDetailsScreen);
Navigation.registerComponent('TwoFourApp.Chats', () => ChatsScreen);


Navigation.startSingleScreenApp({
  screen: {
    screen: "TwoFourApp.Home",
    title: ""
  },
  appStyle: {
    navBarBackgroundColor: '#345A99',
    navBarTextColor: '#F1F1F2',
    navBarButtonColor: '#F1F1F2',
  },
  animated: true,
  animationType: 'fade'
});

