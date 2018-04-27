import React from "React";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import CommonStyles from "../../styles/commonStyles";
import { loadCategories } from "../../store/actions/home";
import { connect } from "react-redux";
import { _ } from "lodash";

var data = [
  {
    id: 1,
    Category: "Iphones",
    Image: require("../../assets/img/Iphones_C.png")
  },
  {
    id: 2,
    Category: "Fashion",
    Image: require("../../assets/img/Fashion_C.png")
  },
  {
    id: 3,
    Category: "Cars",
    Image: require("../../assets/img/Cars_C.png")
  },
  {
    id: 4,
    Category: "Travel",
    Image: require("../../assets/img/Travel_C.png")
  },
  {
    id: 5,
    Category: "Electronics",
    Image: require("../../assets/img/Entertainment_C.png")
  },
  {
    id: 6,
    Category: "Travel",
    Image: require("../../assets/img/Travel_C.png")
  },
  {
    id: 7,
    Category: "Electronics",
    Image: require("../../assets/img/Entertainment_C.png")
  },

];
class SlidingMenu extends React.Component {
  state = { categoryList: [] };

  _keyExtractor = (item, index) => index;

  renderRowItem = itemData => {
    console.log(itemData)
    return (
      <View style={styles.imageContainerStyle}>
        <View style={[{ paddingLeft: 5, paddingBottom: 10},CommonStyles.alignCenter]}>
          <Image
            style={styles.imageStyle}
            //source={{ uri: itemData.item.Image }}
            source={itemData.item.Image}
            resizeMode="cover"
          />
        </View>
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text
            style={[
              CommonStyles.greyColor,
              CommonStyles.regularBold,
              CommonStyles.extraSmallText,{textAlign:'center'}
            ]}
          >
            {itemData.item.Category}
          </Text>
        </View>
      </View>
    );
  };
  componentWillMount() {
    this.setState({ categoryList: data });
    //this.props.loadCategories();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.categoryList}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderRowItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    //  flex:0.2,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10
  },
  imageStyle: {
    height: 50,
    width: 50,
    //borderWidth: 2,
    //borderColor: "white",
    borderRadius:25,
    paddingRight: 5
  },
  imageContainerStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    //borderWidth:1,
    //borderColor:'red',
    flex:1
  }
});

const mapStateToProps = ({ home }, ownProps) => {
  const { navigator } = ownProps;
  const categories = _.map(home.categoryList, (val, uid) => {
    return { ...val, uid };
  });

  return {
    navigator,
    categories
  };
};

export default connect(mapStateToProps, { loadCategories })(SlidingMenu);
