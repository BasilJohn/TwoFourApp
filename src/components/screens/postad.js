import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Modal,

} from "react-native";
import { ImageButton, GradientNavigationBar,LinearGradientButton,Spinner } from "../common";
import CommonStyles from "../../styles/commonStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { titleChanged,imageArraySelected } from "../../store/actions/ad";
import { connect } from "react-redux";
import renderIf from '../../common/renderif';
import ImagePicker from "react-native-image-crop-picker";

const window = Dimensions.get("window");

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;
export const deviceWidth = Dimensions.get("window").width;

const IMAGE_FOLDERICON_DEFAULT = require("../../assets/img/addgallery.png");

class PostAd extends Component {
  
  constructor(props) {
    super(props);
    //this.setDefaultImage=this.setDefaultImage.bind(this);
    
  }
  static navigatorStyle = noNavTabbarNavigation;
  state = { 
    selectedImageArray: [],
    imageSelected: true, 
    defaultImage:require("../../assets/img/addgallery.png"),
    imageData:[],
    modalVisible: false,
    defaultImageIndex:0
    }; 
 
 openHomeScreen(){

  ImagePicker.clean().then(() => {
    
  }).catch(e => {
    alert(e);
  });

    this.props.navigator.push({
      screen: "TwoFourApp.Home"
    });

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onTitleChanged(text) {
    this.props.titleChanged(text);
  }

  openCamera() {
    this.setState({modalVisible: false});
    this.setState({imageSelected: false});
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
      writeTempFile:false
    }).then(image => {
      //es6 rest operator add captured image to selectedImageArray array.
      this.setState({ selectedImageArray: [...this.state.selectedImageArray, image] });
      this.setState({imageSelected:true});
      this.setSelectedImage();
    });
  }
   deleteImage=() => {
     this.state.selectedImageArray.splice(this.state.defaultImageIndex, 1);
     this.setState({ selectedImageArray: this.state.selectedImageArray });
     this.setSelectedImage();
   }
  setDefaultImage=(imageSelected,index)=>{
      
        this.setState({defaultImage: {uri:imageSelected.path}});
        this.setState({defaultImageIndex:index});
  }
  openPicker(){
    this.setState({modalVisible: false});
    this.setState({imageSelected: false});
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
      multiple:true,
      writeTempFile:true
    }).then(images => {
     
      //es6 rest operator add captured image to selectedImageArray array.
       images.map((image) => (
        
        this.setState(prevState => ({
          selectedImageArray: [...prevState.selectedImageArray, image]
      }))
      ));
      
      this.setState({imageSelected:true});
      this.setSelectedImage();
      
    });
  }

  setSelectedImage(){
    
   if(this.state.selectedImageArray.length>0) {
    
    
     this.state.selectedImageArray.map((image)=>{

      this.setState(prevState => ({
        imageData: [...prevState.imageData, image.data]
    }))
     });  
     
    this.setState({defaultImage: {uri: this.state.selectedImageArray[0].path}})
    
    }
   this.props.imageArraySelected(this.state.imageData);
  }

   componentDidMount(){

    this.setSelectedImage();
     
   }
  render() {

    var imageList= this.state.selectedImageArray.map(function(image, index){
      return <View key={index} style={[CommonStyles.paddingTenRight]}>
      <TouchableWithoutFeedback onPress={this.setDefaultImage.bind(this,image,index)}>
        <Image
          source= {{uri:image.path}}
          style={{ width: 57, height: 52 }}
        />
        </TouchableWithoutFeedback>
        </View>
    },this);

     return (
      <View style={CommonStyles.normalPage}>
        <GradientNavigationBar
          navigator={this.props.navigator}
          titleText="Post Ad"
          rightButtons={[
            {
              key: 1,
              //buttonIcon: require("../../assets/img/settings.png"),
              buttonAction: this._handleCancelButton.bind(this),
              buttonWidth: 22,
              buttonHeight: 22,
              textButton:'Cancel'
            }
          ]}
        />
        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
          <KeyboardAvoidingView
            style={[CommonStyles.keyboardAvoidingViewContainer,
              CommonStyles.spaceAround]}
          >
            <View>
            
              <View style={CommonStyles.addImageContainer}>
              {renderIf( this.state.selectedImageArray.length<1,<View style={[CommonStyles.row]}>
                 <View >
                    <TouchableWithoutFeedback onPress={this.openCamera.bind(this)}>
                      <Image
                        source={require("../../assets/img/dottedcamera.png")}
                        style={{ width: 120, height: 120 }}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{paddingLeft:30}}>
                    <TouchableWithoutFeedback onPress={this.openPicker.bind(this)}>
                      <Image
                        source={require("../../assets/img/dottedgallery.png")}
                        style={{ width: 120, height: 120 }}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              )}
             
             {renderIf(!this.state.imageSelected && this.state.selectedImageArray.length<1,<View  style={styles.spinnerView}>
                <Spinner/>
              </View>) }
              {renderIf(this.state.selectedImageArray.length>=1,<View style={[CommonStyles.row]}>
                
                <View style={{borderWidth: 1,borderColor: "black",borderStyle: "dotted" }}>
                    <View>
                    <TouchableWithoutFeedback >
                      <Image
                        source={this.state.defaultImage}
                        style={{ width: 120, height: 120 }}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                    </View>
                  </View>
                <View style={styles.closeButton}>
                <TouchableWithoutFeedback  onPress={this.deleteImage.bind(this,this.state.defaultImage)}>
                <Ionicons
                 name={"ios-close-circle"}
                 color={"red"}
                 size={30}
                />
                </TouchableWithoutFeedback>
                </View>
               </View>
            )}
                <View style={[CommonStyles.addedImageContainer]}>
                
                {imageList}
                {renderIf(this.state.selectedImageArray.length>=1 &&
                  this.state.selectedImageArray.length<=4,<View style={[CommonStyles.paddingTenRight]}>
                  <TouchableWithoutFeedback onPress={this.setModalVisible.bind(this,true)}>
                    <Image
                      source= {IMAGE_FOLDERICON_DEFAULT}
                      style={{ width: 57, height: 52 }}
                    />
                    </TouchableWithoutFeedback>
                    </View>)}
                    
                </View>
              </View>
              <View style={{height:86}}>
              <View style={[CommonStyles.paddingTenLeftRight]}>
                <Text
                  style={[
                    CommonStyles.mediumText,
                    CommonStyles.postAdTitleColor,
                    CommonStyles.semiBold
                  ]}
                >
                  TITLE
                </Text>
              </View>
              <View style={[styles.inputContainer]}>
                <TextInput
                  style={[CommonStyles.textInputNoLeftImage]}
                  placeholder="Sell somethings"
                  underlineColorAndroid="transparent"
                  onChangeText={this.onTitleChanged.bind(this)}
                />
              </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={[styles.footerControl, CommonStyles.introPageButtonBox]}>
            <View style={CommonStyles.introPageButton} />
            <View style={[CommonStyles.introPageButton,{paddingBottom:10}]}>
              <ImageButton
                style={[CommonStyles.backButton]}
                styleImage={CommonStyles.backButton}
                appearance={{
                  normal: require("../../assets/img/postadforward.png"),
                  highlight: require("../../assets/img/postadforward.png")
                }}
                onPress={this._handleClickNextButton.bind(this)}
              />
            </View>
          </View>
          <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <View  style={{
              width: 300,
              height: 250,backgroundColor: '#fff', padding: 20}}>
              <View style={CommonStyles.addImageContainer}>
              <View style={[CommonStyles.row]}>
                 <View >
                    <TouchableWithoutFeedback onPress={this.openCamera.bind(this)}>
                      <Image
                        source={require("../../assets/img/dottedcamera.png")}
                        style={{ width: 120, height: 120 }}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{paddingLeft:30}}>
                    <TouchableWithoutFeedback onPress={this.openPicker.bind(this)}>
                      <Image
                        source={require("../../assets/img/dottedgallery.png")}
                        style={{ width: 120, height: 120 }}
                        resizeMode="cover"
                      />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
                <View style={{ width: deviceWidth / 2 - 20,paddingTop:40 }}>
                <LinearGradientButton
                  colorOne={"#3D88A7"}
                  colorTwo={"#3972A0"}
                  colorThree={"#355F9A"}
                  buttonText={"Cancel"}
                  height={50}
                  //width={80}
                  borderRadius={60}
                  textPaddingTop={15}
                  textColor={"#FFFFFF"}
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                />
              </View>
                </View>
               
            </View>
          </View>
        </Modal>
        </ScrollView>
      </View>
    );
  }

  _handleCancelButton = () => {
        Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        {
          text: "Yes",
          onPress: this.openHomeScreen.bind(this),
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true }
    );
    
  }

  _handleClickNextButton(){
    this.props.navigator.push({
      screen: "TwoFourApp.PostAdOne"
    });
  }
  
}




const styles = StyleSheet.create({
  middleControl: {
    flex: 1
  },
  footerControl: {
    alignItems: "flex-end"
  },
  inputContainer:{
    
    margin:10,
    height: 40,
    //borderColor: "rgb(229,229,229)",
    borderColor:'#696969',
    borderWidth: 0.3,
    borderStyle: "solid",
    borderRadius: 60,
    backgroundColor: "#FFFFFF"
  },
  closeButton:{
    position: "absolute",
    left: 110,
    top: -15,
  },
  modal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
    opacity:50
  },
  spinnerView:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = ({ ad }) => {
  const { title } = ad;
  return { title };
};

export default connect(mapStateToProps, { titleChanged,imageArraySelected })(PostAd);
