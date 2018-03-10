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
import { Footer, SlidingMenu, CustomTabBar } from "../common";
import CommonStyles, {
  deviceWidth,
  deviceHeight,
  NAV_HEIGHT
} from "../../styles/commonStyles";

const { width, height } = Dimensions.get("window");

const equalWidth = width / 3;



export default class Home extends Component {
  state = { moviesList: [] };

  _keyExtractor = (item, index) => item.id;

  renderRowItem = itemData => {
    return (
      <View style={styles.imageContainerStyle}>
        <TouchableHighlight onPress={this._openadDetails.bind(this)}>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + itemData.item.poster_path
            }}
            resizeMode="cover"
          />
        </TouchableHighlight>
      </View>
    );
  };

  _openadDetails = () => {
    this.props.navigator.push({
      screen: "TwoFourApp.AdDetails"
    });
  };

  componentWillMount() {
    {
      this.getMoviesFromApiAsync();
    }
  }

  componentDidMount() {
    
  }

  getMoviesFromApiAsync = () => {
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e248a915f47615796d83a0de440f6755&language=en-US&page=1"
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          // handle error
        }
      })
      .then(responseJson => {
        this.setState({ moviesList: responseJson.results });
        return responseJson.results;
      })
      .catch(error => {
        console.error(error);
      });
  };

  static navigatorStyle = {
    navBarCustomView: "TwoFourApp.SearchBar",
    navBarBackgroundColor: "#59A99C",
    navBarComponentAlignment: "fill" // center/fill
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == "NavBarButtonPress") {
      if (event.id == "filter") {
        this.props.navigator.push({
          screen: "TwoFourApp.SortFilter",
          title: "Sort and Filter"
        });
      }
    }
  }

  render(props) {
    return (
      <View style={styles.container}>
        <SlidingMenu />
        <ScrollView>
          <View>
            <FlatList
              data={this.state.moviesList}
              numColumns={3}
              keyExtractor={this._keyExtractor}
              renderItem={this.renderRowItem}
            />
          </View>
        </ScrollView>
        <View style={[CommonStyles.buttonBox]}>
          <CustomTabBar navigator={this.props.navigator} isActive="tab0" />
        </View>
      </View>
    );
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
    padding: 3
  }
});
