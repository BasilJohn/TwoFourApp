import React from "React";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
export const deviceWidth = Dimensions.get("window").width;
import Ionicons from "react-native-vector-icons/Ionicons";

export default class NotificationItem extends React.Component {
  _openNotificationDetail() {
    // this.props.navigatorProps.push({
    //   screen: "TwoFourApp.UserRating",
    //   title:"Rate"
    // });

     this.props.navigatorProps.push({
      screen: "TwoFourApp.FinalRating",
      title:"Rate"
    });
  }

  render(props) {
    return (
      <View>
        <TouchableOpacity onPress={this._openNotificationDetail.bind(this)}>
          <View style={styles.containerStyle}>
            <View style={[CommonStyles.itemWhiteBox]}>
              <View>
                <Text
                  style={[
                    CommonStyles.itemHeaderText,
                    CommonStyles.blackColor,
                    CommonStyles.regularBold,
                    { marginBottom: 6 }
                  ]}
                >
                  {this.props.details.msg}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.smallText,
                    CommonStyles.lightgreyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  45 mins ago
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    flex: 0.3,
    backgroundColor: "#FFFFFF",
    borderBottomWidth:0.5,
    borderBottomColor:'#7B7B7B'
  },
  itemBox: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  leftCol: {
    flexDirection: "row",
    width: 44
  },
  rightCol: {
    flex: 1
  }
});
