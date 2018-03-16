import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Carousel from "react-native-carousel-view";
import CommonStyles, {
  deviceHeight,
  shadowOpt,
  deviceWidth
} from "../../styles/commonStyles";

export default class ImageSlider extends Component {
  render() {
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
            onScroll={() => console.log("on scroll view")}
            onScrollBegin={() => console.log("scroll begin")}
            onPageChange={page => console.log("scroll change", page)}
          >
            <View style={styles.contentContainer}>
              <Image
                resizeMode="contain"
                style={{ width: deviceWidth, height: deviceHeight / 2.5 }}
                source={{
                  uri:
                    "https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png"
                }}
              />
            </View>
            <View style={styles.contentContainer}>
              <Image
                resizeMode="contain"
                style={{ width: deviceWidth, height: deviceHeight / 2.5 }}
                source={{
                  uri:
                    "https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg"
                }}
              />
            </View>
            <View style={styles.contentContainer}>
              <Image
                resizeMode="contain"
                style={{ width: deviceWidth, height: deviceHeight / 2.5 }}
                source={{
                  uri:
                    "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg"
                }}
              />
            </View>
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
