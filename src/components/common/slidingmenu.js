import React from 'React';
import { StyleSheet,Text,View,Image,FlatList,Dimensions } from 'react-native';
import CommonStyles from '../../styles/commonStyles';

export default class SlidingMenu extends React.Component {

    state = {  categoryList: [] };

  _keyExtractor = (item, index) => item.categoryId;

  renderRowItem = (itemData) => {
   
    return (
      <View style={styles.imageContainerStyle}>
      <View style={{paddingLeft:5,paddingBottom:10}}>
        <Image style={styles.imageStyle} source={{ uri: itemData.item.categoryImage }} resizeMode='cover' />
        </View>
        <View style={{alignSelf:'center',justifyContent:'center'}}>
        <Text style={[CommonStyles.greyColor,CommonStyles.mediumBold]}>{itemData.item.categoryName}</Text>
        </View>
      </View>
    )
  }
  componentWillMount(){
    {this.getMoviesFromApiAsync()}
  }
  getMoviesFromApiAsync = () => {
    return fetch('http://68.66.233.230:8080/api/v1/getCategories')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ categoryList: responseJson })
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

 render(){
     return(
         <View style={styles.containerStyle}>
              <FlatList horizontal showsHorizontalScrollIndicator={false}
            data={this.state.categoryList} 
            keyExtractor={this._keyExtractor}  
            renderItem={this.renderRowItem}
            />
         </View>
     )
 }
}

const styles = StyleSheet.create({

    containerStyle: {
      //  flex:0.2,
       flexDirection:'row',
       width:'100%',
       alignItems:'center',
       padding:10
    },
     imageStyle:{
      height: 60,  
      width : 60,  
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 30,
      paddingRight:5
      
     },
     imageContainerStyle:{
       padding:1

     }
});

export { SlidingMenu };