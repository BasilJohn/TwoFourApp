import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import UserItem from "../userItems/useritem";

const fav = [
  { name: "Nora Brady", profileImage: "", productImage: "" },
  { name: "Kate Diaz", profileImage: "", productImage: "" },
  { name: "Sarah Austin", profileImage: "", productImage: "" },
  { name: "John", profileImage: "", productImage: "" },
  { name: "Nora Brady", profileImage: "", productImage: "" },
  { name: "Kate Diaz", profileImage: "", productImage: "" },
  { name: "Sarah Austin", profileImage: "", productImage: "" },
  { name: "John", profileImage: "", productImage: "" },
  { name: "John", profileImage: "", productImage: "" }
];

export default class Selling extends React.Component {
  state = { favouriteList: [] };

  componentWillMount() {
    this.setState({ favouriteList: fav });
  }

  render(props) {
    
    return (
      <FlatList
        data={this.state.favouriteList}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) => <UserItem controlProps={this.props} type={"selling"} details={item} />}
      />
    );
  }
}
