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
import Swipeout from "react-native-swipeout";

export default class SellinngItem extends React.Component {
  constructor(props) {
    super(props);
  }

  openSellingItem() {
    this.props.controlProps.controlProps.navigator.push({
      screen: "TwoFourApp.SellingItem"
    });
  }

  openUserRatingScreen(){
    console.log('text')
    this.props.controlProps.controlProps.navigator.push({
      screen: "TwoFourApp.FinalRating",
      title:"Rate"
    });
  }

  render(props) {
    let swipeBtns = [
      {
        text: "Delete",
        backgroundColor: "red",
        underlayColor: "rgba(0, 0, 0, 1, 0.6)",

        onPress: () => {
          this._alertDeleteItem();
        }
      }
    ];

    return (
      // <Swipeout
      //   autoClose={true}
      //   right={swipeBtns}
      //   backgroundColor="transparent"
      // >
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={this.openSellingItem.bind(this)}
      >
        <View style={styles.containerStyle}>
          <View style={CommonStyles.row}>
            <Image
              style={styles.productStyle}
              borderRadius={50}
              source={{ uri: "http://lorempixel.com/400/200/" }}
              resizeMode="cover"
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignSelf:'center',
                paddingLeft: 20,
                marginBottom:15
              }}
            >
              <View>
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.blackColor,
                    CommonStyles.mediumBold,
                    { marginTop: 0 }
                  ]}
                >
                  Macbook Pro Retina
                </Text>
              </View>
              <View style={[CommonStyles.row]}>
                <View>
                  <Text
                    style={[
                      CommonStyles.normalText,
                      CommonStyles.darkSkyBlueColor,
                      CommonStyles.regularBold
                    ]}
                  >
                    {"$ 999.00"}
                  </Text>
                </View>
                <View style={{ paddingLeft: 30 }}>
                  <Text
                    style={[
                      CommonStyles.normalText,
                      CommonStyles.greyColor,
                      CommonStyles.regularBold
                    ]}
                  >
                    30 views
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* </Swipeout> */}
      </TouchableHighlight>
    );
  }
  _alertDeleteItem() {
    Alert.alert(
      "Mark As Sold",
      "This cant be undone once marked as sold.Confirm?",
      [
        {
          text: "NO",
          onPress: () => console.log("Cancel Pressed"),
          style: {
            color: "#000"
          }
        },
        { text: "YES", onPress:openUserRatingScreen()}
      ],
      { cancelable: false }
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    //marginTop: 10,
    //marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    //flex: 0.3,
    height: 75,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.3,
    borderBottomColor: "#7B7B7B",
    //borderTopWidth:0.3,
    borderTopColor: "#7B7B7B"
    //elevation: 6
    // shadowOffset: {width: 0, height: 0},
    // shadowColor: '#000000',
    // shadowOpacity: 0.4,
    // shadowRadius: 3,
  },
  imageStyle: {
    height: 70,
    width: 70
  },
  productStyle: {
    height: 90,
    width: 90
  }
});
