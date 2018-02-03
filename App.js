import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/components/screens/home';
import PostAdScreen from './src/components/screens/postad';
import PostAdOneScreen from './src/components/screens/postadone';


Navigation.registerComponent('TwoFourApp.Home', () => HomeScreen);
Navigation.registerComponent('TwoFourApp.PostAd', () => PostAdScreen);
Navigation.registerComponent('TwoFourApp.PostAdOne', () => PostAdOneScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "TwoFourApp.Home",
    title: ""
  },
  appStyle: {
    navBarBackgroundColor: '#36649C',
    navBarTextColor: '#F1F1F2',
    navBarButtonColor: '#F1F1F2',
  },
  animated: true,
  animationType: 'fade'
});

