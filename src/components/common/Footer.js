import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Footer extends React.Component {

   handlePress = (text) => {
    this.props.screenProps.props.navigator.push({
        screen: 'TwoFourApp.'+text,
        title: text
      });

    }

    render(props) {
        //const { image } = this.props.userDetails;

        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'Home')} style={styles.buttonStyle}>
                <Ionicons style={styles.footerImageStyle} name={'ios-home-outline'} color={"black"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'Chats')} style={styles.buttonStyle}>
                <Ionicons style={styles.footerImageStyle} name={'ios-chatbubbles-outline'} color={"black"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'PostAd')} style={styles.buttonStyle}>
                <Ionicons style={styles.footerImageStyle} name={'ios-camera-outline'} color={"black"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'Notification')} style={styles.buttonStyle}>
                <Ionicons style={styles.footerImageStyle} name={'ios-notifications-outline'} color={"black"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'Profile')} style={styles.buttonStyle}>
                <Ionicons style={styles.footerImageStyle} name={'ios-contact-outline'} color={"black"} size={50} />
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'row',
        paddingBottom: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width:'100%',
        height:'12%',
        alignItems:'center'
    },
    buttonStyle: {
        width: 100,
        height: 50,
        paddingTop: 3
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    footerImageStyle: {
        height: 20,
        flex: 1,
        width: 50,
        alignSelf: 'center'

    }
});

export { Footer };
