import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ChatUserItem from "../rating/chatuseritem";

const fav = [{ name: "Nora Brady", profileImage: "", productImage: "" },
                { name: "Nora Brady", profileImage: "", productImage: "" }];

export default class ChatUserList extends React.PureComponent {
  state = { chatUserList: [] };

  componentWillMount() {
    this.setState({ chatUserList: fav });
  }

  componentDidMount() {}

  render(props) {
    return (
      <FlatList
        data={this.state.chatUserList}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) => (
          <ChatUserItem navigatorProps={this.props} details={item} />
        )}
      />
    );
  }
}
