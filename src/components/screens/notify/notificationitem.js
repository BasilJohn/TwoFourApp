import React from "React";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  Alert
} from "react-native";
export const deviceWidth = Dimensions.get("window").width;
import Ionicons from "react-native-vector-icons/Ionicons";

export default class NotificationItem extends React.Component {
  render(props) {
   
    return (
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
    elevation: 6
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
