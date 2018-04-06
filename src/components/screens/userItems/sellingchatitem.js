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

export default class ChatItem extends React.Component {
  state = { modalStatus: false };

  _openChatScreen() {
    this.setState({ modalStatus: true });
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
          <View style={[styles.containerStyle]}>
            <View
              style={[
                CommonStyles.row,
                CommonStyles.paddingTen,
                CommonStyles.spaceBetween
              ]}
            >
              <View stlyle={[CommonStyles.paddingTenTop]}>
                <Image
                  style={styles.productStyle}
                  borderRadius={50}
                  source={{ uri: "http://lorempixel.com/400/200/" }}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.headerText,
                    CommonStyles.blackColor,
                    CommonStyles.extraBold,
                    { marginLeft: -60, marginTop: -6 }
                  ]}
                >
                  John Mike
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    CommonStyles.normalText,
                    CommonStyles.lightgreyColor,
                    CommonStyles.regularBold
                  ]}
                >
                  30 mins ago
                </Text>
              </View>
            </View>
            <View style={[styles.chatDescriptionStyle]}>
              <Text
                style={[
                  CommonStyles.normalText,
                  CommonStyles.greyColor,
                  CommonStyles.regularBold
                ]}
              >
                Choosing the best audio players software for your computer
              </Text>
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
                <TouchableHighlight underlayColor={'transparent'}
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
                        top:-1.5,
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
                      backgroundColor: "transparent",
                      color:'#FFF',
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
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: "#7B7B7B",
    backgroundColor: "#FFFFFF",
    //elevation: 6
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#000000', 
    shadowOpacity: 0.4, 
    shadowRadius: 3,
  },
  imageStyle: {
    height: 70,
    width: 70
  },
  productStyle: {
    height: 50,
    width: 50
  },
  socialStyle: {
    height: 40,
    width: 40
  },
  chatDescriptionStyle: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    position: "absolute",
    marginLeft: 85,
    marginTop: 40
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
