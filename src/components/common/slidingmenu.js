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

class SlidingMenu extends React.Component {
  state = { categoryList: [] };

  _keyExtractor = (item, index) => index;

  renderRowItem = itemData => {
    return (
      <View style={styles.imageContainerStyle}>
        <View style={{ paddingLeft: 5, paddingBottom: 10 }}>
          <Image
            style={styles.imageStyle}
            source={{ uri: itemData.item.categoryImage }}
            resizeMode="cover"
          />
        </View>
        <View style={{ alignSelf: "center", justifyContent: "center" }}>
          <Text
            style={[
              CommonStyles.greyColor,
              CommonStyles.regularBold,
              CommonStyles.mediumText,{textAlign:'center'}
            ]}
          >
            {itemData.item.categoryName}
          </Text>
        </View>
      </View>
    );
  };
  componentWillMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.props.categories}
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
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    paddingRight: 5
  },
  imageContainerStyle: {
    padding: 1
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
