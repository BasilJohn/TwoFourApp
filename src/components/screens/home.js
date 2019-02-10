import React, { Component } from "React";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Button
} from "react-native";
import { Footer, CustomTabBar, HomeSearchBar, Spinner } from "../common";

import SlidingMenu from "../common/slidingmenu";

import CommonStyles, {
  deviceWidth,
  deviceHeight,
  NAV_HEIGHT
} from "../../styles/commonStyles";
import { noNavTabbarNavigation } from "../../styles/navigatorstyle";
import { getProducts } from "../../store/actions/home";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

const equalWidth = width / 3;

class Home extends Component {
  static navigatorStyle = noNavTabbarNavigation;

  state = { moviesList: [] };

  _keyExtractor = (item, index) => item.productId;

  renderRowItem = itemData => {
    return (
      <View style={styles.imageContainerStyle}>
        <TouchableHighlight onPress={this._openadDetails.bind(this,itemData)}>
          <Image
            style={styles.imageStyle}
            resizeMode="stretch"
            source={{
              uri: itemData.item.heroImage
            }}
          //resizeMode="cover"
          />
        </TouchableHighlight>
      </View>
    );
  };

  _openadDetails = (selecedItem) => {
   
    this.props.navigator.push({
      passProps:{productId:selecedItem.item.productId},
      screen: "TwoFourApp.AdDetails"
    });
  };

  componentWillMount() {
    this.props.getProducts();

  }

  componentDidMount() {
    //this.getMoviesFromApiAsync();
    this.props.getProducts();
  }

  constructor(props) {
    super(props);
  }

  renderContent() {

    switch (Object.keys(this.props.productList).length > 0 ) {
      case false:
        return <Spinner />;
      case true:
        return (
          <View style={CommonStyles.normalPage}>
        <HomeSearchBar
          navigator={this.props.navigator}
          titleText="Post Ad"
          rightButtons={[
            {
              key: 1,
              buttonIcon: require("../../assets/img/settings.png"),
              buttonAction: this._onFilterSettingsClick.bind(this),
              buttonWidth: 22,
              buttonHeight: 22
            }
          ]}
        />

        <View style={styles.container}>
          <SlidingMenu />
          <ScrollView>
            <View>
              <FlatList
                data={this.props.productList.products}
                numColumns={3}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderRowItem}
              />
            </View>
          </ScrollView>
          <View>
            <CustomTabBar navigator={this.props.navigator} isActive="tab0" />
          </View>
        </View>
      </View>
    );
      default:
        return <Spinner />;
    }
  }
  render() {
    return (
      this.renderContent()
    );
  }

  _onFilterSettingsClick() {
    this.props.navigator.push({
      screen: "TwoFourApp.SortFilter"
    });
  }
}

const elementHeight = NAV_HEIGHT + 99;
const itemWidth = deviceWidth - 85;
const itemHeight = deviceHeight - elementHeight - 70;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  imageStyle: {
    height: equalWidth - 6,
    width: equalWidth - 6,
    borderRadius: 5
  },
  imageContainerStyle: {
    padding: 3,
    //backgroundColor: 'black'
  }
});

const mapStateToProps = ({ home }) => {
  const { productList } = home;
  return { productList };
};

export default connect(mapStateToProps, {
  getProducts
})(Home);