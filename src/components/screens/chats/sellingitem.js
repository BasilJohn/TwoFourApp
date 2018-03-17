import React from "React";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Chat from "../../common/chatui";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import CommonStyles, {
  deviceWidth,
  deviceHeight,
  blueGradient,
  NAV_HEIGHT
} from "../../../styles/commonStyles";
export default class SellingItem extends React.Component {
  state = { modalStatus: false };
  _openChatWindow() {
    this.setState({ modalStatus: true });
  }
  toggleModal = () => {
    this.setState({ modalStatus: false });
  };

  render(props) {
    state = { modalStatus: false };

    return (
      <View>
        <TouchableOpacity onPress={this._openChatWindow.bind(this)}>
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
                    Macbook Pro Retina
                  </Text>
                </View>
                <View>
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
                <View style={[CommonStyles.row]}>
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
                      3 hours ago
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
                <TouchableOpacity
                  style={styles.closeStyle}
                  onPress={this.toggleModal}
                >
                  <Ionicons
                    style={styles.button}
                    color={"#FFF"}
                    name="md-arrow-back"
                    size={30}
                  />
                </TouchableOpacity>
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
    flex: 0.3,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 6,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#EDEDED"
  },
  imageStyle: {
    height: 70,
    width: 70
  },
  productStyle: {
    height: 90,
    width: 90
  },
  modal: {
    flex: 1,
    paddingTop: 10
    //paddingBottom: 10
  },
  closeStyle: {
    alignItems: "flex-start",
    marginBottom: 1,
    paddingLeft: 10
  }
});
