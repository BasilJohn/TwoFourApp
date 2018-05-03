import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import Favourites from "../chats/favourites";
import Selling from "../chats/selling";
import Buying from "../chats/buying";
import BlockedUsers from "../chats/blockedusers";
import { deviceWidth } from "../../common/index";
import CommonStyles from "../../../styles/commonStyles";
import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import { GradientNavigationBar,CustomTabBar } from "../../common";

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const SellingRoute = () => <Selling />;
const FavouritesRoute = () => <Favourites />;
const BuyingRoute = () => <Buying />;
const BlockedUsersRoute = () => <BlockedUsers />;

export default class Chats extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  state = {
    index: 0,
    routes: [
      { key: "selling", title: "Selling" },
      { key: "buying", title: "Buying" },
      { key: "favourites", title: "Liked" },
      { key: "friends", title: "Friends" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      labelStyle={CommonStyles.tabBarLabelStyle}
      style={CommonStyles.tabBarStyle}
      indicatorStyle={CommonStyles.chatTabIndicatorStyle}
      tabStyle={CommonStyles.chatTabStyle}
      {...props}
    />
  );

  // _renderScene = SceneMap({
  //   selling: SellingRoute,
  //   buying: BuyingRoute,
  //   favourites: FavouritesRoute,
  //   blockedusers: BlockedUsersRoute
  // });

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "selling":
        return <Selling navigator={this.props} />;
      case "buying":
        return <Buying />;
      case "favourites":
        return <Favourites />;
      case "friends":
        return <BlockedUsers />;
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={[CommonStyles.normalPage,styles.container]}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Chats"

        />
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
          useNativeDriver
        />
        <View>
          <CustomTabBar navigator={this.props.navigator} isActive="tab2" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
