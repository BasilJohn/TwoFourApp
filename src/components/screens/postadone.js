import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { ImageButton, GradientNavigationBar } from "../common";
import CommonStyles, { deviceWidth } from "../../styles/commonStyles";
import { SearchBar } from "react-native-elements";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { categorySelected } from "../../store/actions/ad";
import { connect } from "react-redux";
import { _ } from 'lodash';
var data = [
  {
    id: 1,
    Category: "Cars & Vehicles",
    Image: require("../../assets/img/car_s.png"),
    style:"styles.categoryItem"
  },
  {
    id: 2,
    Category: "Electronics & Gadgets",
    Image: require("../../assets/img/electronics.png"),
    style:"styles.categoryItem"
  },
  {
    id: 3,
    Category: "Real Estate",
    Image: require("../../assets/img/real.png"),
    style:"styles.categoryItem"
  },
  {
    id: 4,
    Category: "Sports",
    Image: require("../../assets/img/sports.png"),
    style:"styles.categoryItem"
  },
  {
    id: 5,
    Category: "Fashion & Beauty",
    Image: require("../../assets/img/fashion.png"),
    style:"styles.categoryItem"
  },
  {
    id: 6,
    Category: "Pets & Animals",
    Image: require("../../assets/img/pets.png"),
    style:"styles.categoryItem"
  },
  {
    id: 7,
    Category: "Job Openings",
    Image: require("../../assets/img/job.png"),
    style:"styles.categoryItem"
  }
];

class PostAd extends React.PureComponent {
  static navigatorStyle = noNavTabbarNavigation;
  state = { categoryList: [],selected:"",fullData:[]};

  onCategorySelectetd(categoryId, selectedItem) {
  
    this.setState({selected:categoryId});
    this.props.categorySelected(categoryId);
  }

  filterCategory=(text)=>{
    
    const categoryList=_.filter(this.state.fullData,item=>{
           return item.Category.toString().toLowerCase().includes(text.toLowerCase())
    });
    this.setState({selected:'',categoryList})
    
  }

  _keyExtractor = (item, index) => item.id;

  renderRowItem = itemData => {
    
     const selectedRow=this.state.selected ===itemData.item.id;
     return (
      <TouchableOpacity
        onPress={this.onCategorySelectetd.bind(this, itemData.item.id,itemData)}
      >
        <View style={selectedRow?styles.categoryItemSelected:styles.categoryItem}>
          {/* <Ionicons
            style={styles.categoryItemAvatarStyle}
            name={itemData.item.Image}
            color={"#696969"}
            size={25}
          /> */}
          <View>
          <Image
            style={styles.categoryItemAvatarStyle}
            //resizeMode="contain"
            source={itemData.item.Image}
            resizeMode="contain"
          />
          </View>
          <View style={{flex: 1}}>
          <Text
            style={[
              CommonStyles.greyColor,
              CommonStyles.regularBold,
              CommonStyles.mediumText,
              styles.categoryTextStyle
            ]}
          >
            {itemData.item.Category}
          </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  componentWillMount() {
    {
      this.getCategoryList();
    }
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

  openHomeScreen(){
    this.props.navigator.push({
      screen: "TwoFourApp.Home"
    });

  }

  getCategoryList = () => {
    this.setState({ categoryList: data });
    this.setState({ fullData: data });
    
  };
  render() {
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
        <View style={CommonStyles.normalSinglePage}>
          <View>
            <SearchBar
              round
              noIcon
              lightTheme
              containerStyle={styles.searchBarContainerStyle}
              inputStyle={styles.searchBarInputStyle}
              placeholder="Search Category"
              placeholderTextColor={'#969696'}
              value={this.state.searchText}          
              onChangeText={this.filterCategory.bind(this)}
            />
          </View>
          <View style={styles.middleControlStyle}>
            <FlatList
              data={this.state.categoryList}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderRowItem}
            />
          </View>
         
        </View>
        <View style={[CommonStyles.introPageButtonBox, styles.footerControl]}>
        <View style={[CommonStyles.introPageButton,{paddingBottom:10}]}>
            <ImageButton
              style={CommonStyles.backButton}
              styleImage={CommonStyles.backButton}
              appearance={{
                normal: require("../../assets/img/postadbackward.png"),
                highlight: require("../../assets/img/postadbackward.png")
              }}
              onPress={this._prevScreenApp.bind(this)}
            />
          </View>
          <View style={[CommonStyles.introPageButton,{paddingBottom:10}]}>
            <ImageButton
              style={CommonStyles.backButton}
              styleImage={CommonStyles.backButton}
              appearance={{
                normal: require("../../assets/img/postadforward.png"),
                highlight: require("../../assets/img/postadforward.png")
              }}
              onPress={this._handleClickNextButton.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }

  // Go to IntroThreeScreen
  _handleClickNextButton() {
    this.props.navigator.push({
      title: "Post Ad",
      screen: "TwoFourApp.PostAdTwo"
    });
  }

  // Back the previous screen
  _prevScreenApp() {
    this.props.navigator.pop({});
  }
}

const styles = StyleSheet.create({
  searchBarContainerStyle: {
    backgroundColor: "transparent",
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#000000', 
    shadowOpacity: 0.4, 
    shadowRadius: 3,
    //width:deviceWidth-20,
    borderBottomWidth:0,
    
  
  },
  searchBarInputStyle: {
    // backgroundColor: "#FFF",
    // borderRadius: 50,
    // borderColor:'#696969',
    // height:40,
    // fontFamily: "Poppins-Regular",
    // fontSize:14,
    // alignSelf:'center',
    // width:deviceWidth-40
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: "#FFF",
    fontFamily: "Poppins-Regular",
    fontSize:14,
    alignSelf:'center',
    width:deviceWidth-40,
    height:40,
    paddingLeft:20,
    elevation:6
    
  },
  categoryItem: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 0.3,
    borderColor: "#696969"
  },
  categoryItemSelected: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 0.3,
    borderColor: "#696969",
    backgroundColor:'#343638',
    
  },
  footerControlStyle: {
    flex: 0.5,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  middleControlStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  categoryTextStyle: {
    paddingLeft: 30,
    textAlign:'left'
    // fontWeight:"bold",
    // color: '#696969',
    // fontColor:'#696969'
  },
  categoryItemAvatarStyle: {
    //position: "absolute",
    //bottom: 18,
    left: 5,
    width:100,
    height: 30
  }
});

const mapStateToProps = ({ ad }) => {
  const { categoryId } = ad;
  return { categoryId };
};

export default connect(mapStateToProps, { categorySelected })(PostAd);
