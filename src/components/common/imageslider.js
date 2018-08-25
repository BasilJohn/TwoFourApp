import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Carousel from "react-native-carousel-view";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";

export default class ImageSlider extends Component {
  render(props) {

    var imageList = this.props.imageArray.map(function (image, index) {
     
      return <View key={index} style={styles.contentContainer}>
        <Image
          resizeMode="contain"
          style={{ width: deviceWidth, height: deviceHeight / 2.5 }}
          source={{
            uri:image
          }}
        />
      </View>
    }, this);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={styles.container}>
          <Carousel
            animate={false}
            height={deviceHeight / 2.5}
            indicatorSize={10}
            indicatorOffset={-17}
            delay={3000}
            // onScroll={() => console.log("on scroll view")}
            // onScrollBegin={() => console.log("scroll begin")}
            // onPageChange={page => console.log("scroll change", page)}
          >
           {imageList}
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center"
  }
});

export { ImageSlider };
