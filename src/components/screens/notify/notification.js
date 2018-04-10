import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import NotificationItem from "../../screens/notify/notificationitem";
import { noNavTabbarNavigation } from "../../../styles/navigatorstyle";
import { GradientNavigationBar, CustomTabBar } from "../../common";

const fav = [
  {
    msg: "Nora Brady just rated you",
    profileImage: "",
    productImage: "",
    timestamp: "15 mins ago"
  },
  {
    msg: "You like a product",
    profileImage: "",
    productImage: "",
    timestamp: "5 mins ago"
  }
];

export default class Notification extends React.Component {
  static navigatorStyle = noNavTabbarNavigation;

  state = { favouriteList: [] };

  componentWillMount() {
    this.setState({ favouriteList: fav });
  }

  render(props) {
    return (
      <View style={[CommonStyles.normalPage, styles.container]}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Notification"
        />
        <FlatList
          data={this.state.favouriteList}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) => (
            <NotificationItem
              navigatorProps={this.props.navigator}
              details={item}
            />
          )}
        />
        <View>
          <CustomTabBar navigator={this.props.navigator} isActive="tab3" />
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
