import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/components/screens/home';
import PostAdScreen from './src/components/screens/postad';
import PostAdOneScreen from './src/components/screens/postadone';
import PostAdTwoScreen from './src/components/screens/postadtwo';
import AdDetailsScreen from './src/components/screens/addetails';
import ChatsScreen from './src/components/screens/chats/chats';
import SortFilterScreen from './src/components/screens/filter/sortfilter';
import RealEstateFilterScreen from './src/components/screens/filter/realestatefilter';
import AutoMobileFilterScreen from './src/components/screens/filter/automobilefilter';
import SearchBar from './src/components/common/searchbar';
import NavBar from './src/components/common/gradientnavbar';
import SignInScreen from './src/components/screens/auth/signin';
import SignUpScreen from './src/components/screens/auth/signup';
import ForgotPasswordScreen from './src/components/screens/auth/forgotpassword';


Navigation.registerComponent('TwoFourApp.Home', () => HomeScreen);
Navigation.registerComponent('TwoFourApp.PostAd', () => PostAdScreen);
Navigation.registerComponent('TwoFourApp.PostAdOne', () => PostAdOneScreen);
Navigation.registerComponent('TwoFourApp.PostAdTwo', () => PostAdTwoScreen);
Navigation.registerComponent('TwoFourApp.AdDetails', () => AdDetailsScreen);
Navigation.registerComponent('TwoFourApp.Chats', () => ChatsScreen);
Navigation.registerComponent('TwoFourApp.SortFilter', () => SortFilterScreen);
Navigation.registerComponent('TwoFourApp.RealEstateFilter', () => RealEstateFilterScreen);
Navigation.registerComponent('TwoFourApp.AutoMobileFilter', () => AutoMobileFilterScreen);
Navigation.registerComponent('TwoFourApp.SearchBar', () => SearchBar);
Navigation.registerComponent('TwoFourApp.NavBar', () => NavBar);
Navigation.registerComponent('TwoFourApp.SignIn', () => SignInScreen);
Navigation.registerComponent('TwoFourApp.SignUp', () => SignUpScreen);
Navigation.registerComponent('TwoFourApp.ForgotPassword', () => ForgotPasswordScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "TwoFourApp.SignIn",
    title: ""
  },
  appStyle: {
    navBarBackgroundColor: '#345A99',
    navBarTextColor: '#F1F1F2',
    navBarButtonColor: '#F1F1F2',
    navBarTextFontFamily: 'Poppins-SemiBold'
  },
  animated: true,
  animationType: 'fade'
});

