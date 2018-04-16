import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView
} from "react-native";
import CommonStyles from "../../styles/commonStyles";

export default class DetailItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[CommonStyles.itemWhiteBox, { padding: 5 }]}>
        <View style={styles.headerContainer}>
          <Text
            style={[
              CommonStyles.mediumText,
              CommonStyles.titleGreyColor,
              CommonStyles.semiBold,
              { marginBottom: 6 }
            ]}
          >
            {this.props.headerText}
          </Text>
        </View>
        <View>
          <Text
            style={[
              CommonStyles.appText,
              CommonStyles.greyColor,
              CommonStyles.regularBold
            ]}
          >
            {this.props.detailText}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2
  }
});

export { DetailItem };
