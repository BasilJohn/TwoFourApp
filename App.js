import { Navigation } from "react-native-navigation";
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
import { noNavTabbarNavigation } from "./src/styles/navigatorstyle";
import NotificationScreen from "./src/components/screens/notify/notification";
import ChatScreen from "./src/components/common/chatui";
import UserRatingScreen from "./src/components/screens/rating/userrating";

Navigation.registerComponent("TwoFourApp.Home", () => HomeScreen);
Navigation.registerComponent("TwoFourApp.PostAd", () => PostAdScreen);
Navigation.registerComponent("TwoFourApp.PostAdOne", () => PostAdOneScreen);
Navigation.registerComponent("TwoFourApp.PostAdTwo", () => PostAdTwoScreen);
Navigation.registerComponent("TwoFourApp.AdDetails", () => AdDetailsScreen);
Navigation.registerComponent("TwoFourApp.Chats", () => ChatsScreen);
Navigation.registerComponent("TwoFourApp.SortFilter", () => SortFilterScreen);
Navigation.registerComponent("TwoFourApp.RealEstateFilter",() => RealEstateFilterScreen);
Navigation.registerComponent("TwoFourApp.AutoMobileFilter",() => AutoMobileFilterScreen);
Navigation.registerComponent("TwoFourApp.NavBar", () => NavBar);
Navigation.registerComponent("TwoFourApp.SignIn", () => SignInScreen);
Navigation.registerComponent("TwoFourApp.SignUp", () => SignUpScreen);
Navigation.registerComponent("TwoFourApp.ForgotPassword",() => ForgotPasswordScreen);
Navigation.registerComponent("TwoFourApp.UserProfile", () => UserProfileScreen);
Navigation.registerComponent("TwoFourApp.UserProfileSetting",() => UserProfileSettingScreen);
Navigation.registerComponent("TwoFourApp.Notification",() => NotificationScreen);
Navigation.registerComponent("TwoFourApp.Chat", () => ChatScreen);
Navigation.registerComponent("TwoFourApp.UserRating", () => UserRatingScreen);

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
