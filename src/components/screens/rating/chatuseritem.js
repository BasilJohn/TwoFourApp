import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Modal
} from "react-native";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth,
  NAV_HEIGHT
} from "../../../styles/commonStyles";
import Chat from "../../common/chatui";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ChatUserItem extends React.Component {
  state = { modalStatus: false };

  _openChatScreen() {
     // console.log(this.props.navigatorProps)
    //this.setState({ modalStatus: true });
    this.props.navigatorProps.navigatorProps.push({
      screen: "TwoFourApp.UserRating",
      title: "Rate"
    });
  }
  toggleModal = () => {
    this.setState({ modalStatus: false });
  };
  render(props) {
    state = { modalStatus: false };
    return (
      <View>
        <TouchableHighlight
          underlayColor={"transparent"}
          onPress={this._openChatScreen.bind(this)}
        >
          <View style={[styles.containerStyle, CommonStyles.row]}>
            <View
              style={[
                { justifyContent: "center", flex: 0.15 },
                CommonStyles.paddingTen
              ]}
            >
              <Image
                style={[styles.productStyle]}
                borderRadius={24}
                //source={{ uri: "http://lorempixel.com/400/200/" }}
                source={require('../../../assets/img/profileimage.jpg')}
                resizeMode="cover"
              />
            </View>
            <View style={styles.centreStyle}>
              {/* <View style={[styles.chatDescriptionStyle]}> */}
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.titleGreyColor,
                    CommonStyles.mediumBold
                  ]}
                >
                  John Mike
                </Text>
                {/* <Text
                  style={[
                    CommonStyles.extraSmallText,
                    CommonStyles.smallTextGreyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  Choosing the best audio players software for your computer
                </Text> */}
              {/* </View> */}
            </View>
            <View style={styles.arrowStyle}>
              <Ionicons
                style={styles.button}
                color={"#7B7B7B"}
                name="ios-arrow-forward-outline"
                size={30}
              />
            </View>
          </View>
        </TouchableHighlight>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalStatus}
          onRequestClose={() => {
            console.log("closed");
          }}
        >
          <LinearGradient
            colors={["#3D88A7", "#3972A0", "#355F9A"]}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 0.3 }}
            style={[
              styles.modal
              // {
              //   height: props.height,
              //   width: deviceWidth - props.width,
              //   borderRadius: props.borderRadius
              // }
            ]}
            // locations={[0, 0.25, 0.50]}
          >
            <View style={[CommonStyles.row]}>
              <View>
                <TouchableHighlight
                  underlayColor={"transparent"}
                  style={styles.closeStyle}
                  onPress={this.toggleModal}
                >
                  <View style={styles.leftButton}>
                    <Ionicons
                      style={styles.button}
                      color={"#FFF"}
                      name="md-arrow-back"
                      size={30}
                    />
                    <View
                      style={{
                        marginLeft: 3,
                        width: 5.5,
                        height: 2.5,
                        backgroundColor: "white"
                      }}
                    />
                  </View>
                </TouchableHighlight>
              </View>
              <View style={[CommonStyles.paddingTenLeftRight]}>
                <Text
                  style={[
                    {
                      alignSelf: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontFamily: "Poppins-SemiBold"
                    }
                  ]}
                >
                  {"Chats"}
                </Text>
              </View>
            </View>
            <Chat />
          </LinearGradient>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 73,
    flexDirection: "column",
    borderBottomWidth: 0.5,
    borderBottomColor: "#7B7B7B",
    backgroundColor: "#FFFFFF",
    elevation: 6
    // shadowOffset: {width: 0, height: 0},
    // shadowColor: '#000000', 
    // shadowOpacity: 0.4, 
    // shadowRadius: 3
  },
  productStyle: {
    height: 48,
    width: 48
  },
  arrowStyle: {
    justifyContent: "center",
    flex: 0.1,
    alignSelf: "center"
  },
  centreStyle: {
    justifyContent: "center",
    flexDirection: "column",
    flex: 0.75,
    height:73
  },
  chatDescriptionStyle: {
    //flexDirection: "row",
    //flex: 1,
    //flexWrap: "wrap"
    //position: "absolute",
    //marginLeft: 85,
    //marginTop: 40
    //height:73
  },
  modal: {
    flex: 1
  },
  closeStyle: {
    alignItems: "flex-start",
    marginBottom: 1,
    paddingLeft: 10
  },
  leftButton: {
    flexDirection: "row",
    alignItems: "center",
    width: 52,
    height: NAV_HEIGHT
  }
});
