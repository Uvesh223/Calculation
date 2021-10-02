import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Strings, Dimens, Fonts, Colors,ImageView,Screen} from "../config/appConstants";
const styles = StyleSheet.create({
  root: {
  flex: 1,
  width:'96%',
  alignSelf:'center',
  backgroundColor:Colors.white,
  marginVertical:Screen.hp('1%'),
  paddingHorizontal:Screen.wp('3%'),
  paddingVertical:Screen.wp('3%')
  }
});

export default class rolesList extends React.Component {
  state = {
    refresh: false,
  };
  componentDidMount() {
    Screen.OrientationChange(this);
  }
  render() {
    const { navigation } = this.props;
    const rowID = this.props.index;
    const rowData = this.props.item;
    return (
      <View style={styles.root}>
     <Text  style={{fontFamily:Fonts.SemiBold,fontSize:Dimens.ExtraMedium,textAlign:'left',color:Colors.white}}>{rowData.title}</Text>
          <Text  style={{fontFamily:Fonts.Regular,fontSize:Dimens.Small,textAlign:'left',color:Colors.dark_gray}}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
            </Text>

          <View style={{flexDirection:'row',alignItems:'center',
           width:'100%',paddingTop:8,justifyContent:'space-between'}}>
          
           <Text style={{fontSize:Dimens.Small,fontFamily:Fonts.Regular,color:Colors.black}}>{'Thursday, 13 May'}</Text> 
           <Text style={{fontSize:Dimens.ExtraMedium,fontFamily:Fonts.Bold,color:Colors.primary}}>#{'4958UIN'}</Text> 
          </View>  
       </View>
    );
  }
}