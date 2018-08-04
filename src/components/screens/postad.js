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
  Alert
} from "react-native";
import { ImageButton, GradientNavigationBar } from "../common";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { titleChanged,imageArraySelected } from "../../store/actions/ad";
import { connect } from "react-redux";
import { _ } from "lodash";
import renderIf from '../../common/renderif';
import ImagePicker from "react-native-image-crop-picker";

const window = Dimensions.get("window");

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

const IMAGE_FOLDERICON_DEFAULT = require("../../assets/img/addgallery.png");

class PostAd extends Component {
  
  constructor(props) {
    super(props);
    //this.setDefaultImage=this.setDefaultImage.bind(this);
    
  }
  static navigatorStyle = noNavTabbarNavigation;
  state = { 
    selectedImageArray: [],
    imageSelected: false, 
    defaultImage:require("../../assets/img/addgallery.png"),
    imageData:[]
    }; 
 
 openHomeScreen(){

  ImagePicker.clean().then(() => {
    console.log('removed all tmp images from tmp directory');
  }).catch(e => {
    alert(e);
  });

    this.props.navigator.push({
      screen: "TwoFourApp.Home"
    });

  }

  onTitleChanged(text) {
    this.props.titleChanged(text);
  }

  openCamera() {
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
   deleteImage=value=>{
    this.state.selectedImageArray.splice(0,1);
    this.setState({ selectedImageArray: this.state.selectedImageArray});
    this.setSelectedImage();
   
  }
  setDefaultImage=imageSelected=>{
        this.setState({defaultImage: {uri: imageSelected.path}});
  }
  openPicker(){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: true,
      multiple:true,
      writeTempFile:true
    }).then(images => {
     
      //es6 rest operator add captured image to selectedImageArray array.
       images.map((image,i) => (
        
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
    
    
     this.state.selectedImageArray.map((image,index)=>{

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
      <TouchableWithoutFeedback onPress={this.setDefaultImage.bind(this,image)}>
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
                {renderIf(this.state.selectedImageArray.length>=1,<View style={[CommonStyles.paddingTenRight]}>
                  <TouchableWithoutFeedback >
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



const ELEMENT_HEIGHT = 377;
const spaceHeight = deviceHeight - ELEMENT_HEIGHT;

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
  }
});

const mapStateToProps = ({ ad }) => {
  const { title } = ad;
  return { title };
};

export default connect(mapStateToProps, { titleChanged,imageArraySelected })(PostAd);
