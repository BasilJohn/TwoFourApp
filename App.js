import { Navigation } from "react-native-navigation";
import { noNavTabbarNavigation } from "./src/styles/navigatorstyle";
import { Provider } from "react-redux";
const store = configureStore();

import HomeScreen from "./src/components/screens/home";
import PostAdScreen from "./src/components/screens/postad";
import PostAdOneScreen from "./src/components/screens/postadone";
import PostAdTwoScreen from "./src/components/screens/postadtwo";
import AdDetailsScreen from "./src/components/screens/addetails";
import ChatsScreen from "./src/components/screens/chats/chats";
import SortFilterScreen from "./src/components/screens/filter/sortfilter";
import RealEstateFilterScreen from "./src/components/screens/filter/realestatefilter";
import AutoMobileFilterScreen from "./src/components/screens/filter/automobilefilter";
import NavBar from "./src/components/common/gradientnavbar";
import SignInScreen from "./src/components/screens/auth/signin";
import SignUpScreen from "./src/components/screens/auth/signup";
import ForgotPasswordScreen from "./src/components/screens/auth/forgotpassword";
import UserProfileScreen from "./src/components/screens/profile/userprofile";
import UserProfileSettingScreen from "./src/components/screens/profile/userprofilesettings";
import NotificationScreen from "./src/components/screens/notify/notification";
import ChatScreen from "./src/components/common/chatui";
import UserRatingScreen from "./src/components/screens/rating/userrating";
import ReportUserScreen from "./src/components/screens/rating/reportuser";

Navigation.registerComponent(
  "TwoFourApp.Home",
  () => HomeScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.PostAd",
  () => PostAdScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.PostAdOne",
  () => PostAdOneScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.PostAdTwo",
  () => PostAdTwoScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.AdDetails",
  () => AdDetailsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.Chats",
  () => ChatsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.SortFilter",
  () => SortFilterScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.RealEstateFilter",
  () => RealEstateFilterScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.AutoMobileFilter",
  () => AutoMobileFilterScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.NavBar",
  () => NavBar,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.SignIn",
  () => SignInScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.SignUp",
  () => SignUpScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.ForgotPassword",
  () => ForgotPasswordScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.UserProfile",
  () => UserProfileScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.UserProfileSetting",
  () => UserProfileSettingScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.Notification",
  () => NotificationScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.Chat",
  () => ChatScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.UserRating",
  () => UserRatingScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "TwoFourApp.ReportUser",
  () => ReportUserScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "TwoFourApp.SignIn",
    title: ""
  },
  appStyle: {
    navBarBackgroundColor: "#345A99",
    navBarTextColor: "#F1F1F2",
    navBarButtonColor: "#F1F1F2",
    navBarTextFontFamily: "Poppins-SemiBold"
  },
  animated: true,
  animationType: "fade"
});

// Navigation.startTabBasedApp({
//   tabs: createTabs(),
//   // On Android, add BottomTabs styles to AppStyle
//   appStyle: {
//     orientation: 'portrait',
//     tabBarHidden: true,
//   },
//   animationType: 'slide-down'
// });
