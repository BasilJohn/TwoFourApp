import React from "React";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from "react-native";
export const deviceWidth = Dimensions.get("window").width;
import Ionicons from "react-native-vector-icons/Ionicons";
import CommonStyles, { deviceHeight } from "../../../styles/commonStyles";
import { LinearGradientButton } from "../../common";

export default class ChatItem extends React.Component {
  handlePress = () => {};

  render(props) {
    // const { type } = this.props.type;
    return (
      <View style={{justifyContent:'center',alignSelf:'center'}}>
     <View
        style={[
          styles.blockedcontainerStyle
        ]}
      >
        <View style={CommonStyles.row}>
          <Image
            style={styles.imageStyle}
            borderRadius={50}
            source={{ uri: "http://lorempixel.com/400/200/" }}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingLeft: 20
            }}
          >
            <View>
              <Text
                style={[
                  CommonStyles.headerText,
                  CommonStyles.blackColor,
                  CommonStyles.mediumBold
                ]}
              >
                Nora Brady
              </Text>
            </View>
            <View>
              {this.props.type === "favourites" && (
                <Text
                  style={[
                    CommonStyles.normalText,
                    CommonStyles.greyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  IPhone 7 Plus
                </Text>
              )}
            </View>
            <View>
              {this.props.type === "buying" && (
                <Text
                  style={[
                    CommonStyles.normalText,
                    CommonStyles.greyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  IPhone 7 Plus
                </Text>
              )}
            </View>
            <View>
              {this.props.type === "buying" && (
                <View style={CommonStyles.row}>
                  <View style={{ paddingRight: 5 }}>
                    <Ionicons
                      name={"ios-timer-outline"}
                      color={"#696969"}
                      size={25}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        CommonStyles.normalText,
                        CommonStyles.greyColor,
                        CommonStyles.regularBold
                      ]}
                    >
                      60 mins ago
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <View>
              {this.props.type === "block" && (
                <Text
                  style={[
                    CommonStyles.normalText,
                    CommonStyles.greyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  Block at 20 Jul 2018
                </Text>
              )}
            </View>
          </View>
        </View>

        <View>
          {this.props.type != "block" && (
            <Image
              style={styles.productStyle}
              borderRadius={50}
              source={{ uri: "http://lorempixel.com/400/200/" }}
              resizeMode="cover"
            />
          )}
          {this.props.type === "block" && (
            <LinearGradientButton
              colorOne={"#3D88A7"}
              colorTwo={"#3972A0"}
              colorThree={"#355F9A"}
              buttonText={"Unblock"}
              height={32}
              width={280}
              borderRadius={60}
              textPaddingTop={5}
              textColor={'#FFFF'}
              onPress={this.handlePress.bind(this)}
            />
          )}
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
   // flex: 0.3,
    height:100,
    width:deviceWidth-30,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    //elevation: 6,
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#000000', 
    shadowOpacity: 0.4, 
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "space-between"
  },
  blockedcontainerStyle: {
     height:100,
     width:deviceWidth-30,
     flexDirection: "row",
     marginTop: 10,
     marginBottom: 10,
     marginLeft: 5,
     marginRight: 5,
     borderRadius: 8,
     backgroundColor: "#FFFFFF",
     borderBottomWidth:0.3,
     borderBottomColor:'#7B7B7B',
     alignItems: "center",
     justifyContent: "space-between"
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
