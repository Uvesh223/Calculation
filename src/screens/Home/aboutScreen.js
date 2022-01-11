import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { connect } from "react-redux";
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {
  AppRoot,
  TextInput,
  Shape,
  Button,
  Header,
  CHeader,
  ScrollableAvoidKeyboard
} from "../../component";
import {
  Strings,
  Colors,
  ImageView,
  Fonts,
  Dimens,
  Screen,
} from "../../config/appConstants";
// import messaging from "@react-native-firebase/messaging";
import { Helper, PrefManager } from '../../utils'
import c from "../../styles/commonStyle";

export default class aboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    Screen.OrientationChange(this);
  }

  componentWillUnmount() {
    Screen.OrientationListener();
  }
  render() {
    const { navigation } = this.props;
    return (
      <AppRoot>
        <CHeader
          title={"About Us"}
          otherLeftIconViewSty={{
            left: 15,
          }}
          textStyle={{ fontSize: 20 }}
          centerViewSty={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          leftIcon
          leftIconName="arrow-back-sharp"
          onBackPress={() => {
            navigation.goBack();
          }}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={[Colors.white, Colors.white]}
          style={[c.mainContainer]}>
          <ScrollView
            style={{
              flex: 1, height: Screen.hp("100%"),
              width: Screen.wp("100%"), paddingHorizontal: Screen.wp('3%')
            }}>
            <View style={{ marginBottom: 30 }}>
              <View style={{ paddingVertical: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  resizeMode={'cover'}
                  source={ImageView.hipValley}
                  style={{ height: Screen.hp('20%'), alignSelf: 'center', width: Screen.wp('70%') }} />
                <View>
                  <Text style={[c.normalText,{paddingVertical:0,marginVertical:10,fontSize: 17,}]}>Version: 1.0</Text>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('https://bulletproofroofing.co.nz/')}>
                  <Text style={[c.normalText,{ color: 'blue',textDecorationLine:'underline',paddingVertical:0,fontSize: 17}]}>
                  https://bulletproofroofing.co.nz/</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={[c.normalText,{paddingVertical:0,marginVertical:12,fontSize: 17}]}>Email: paul@bulletproofroofing.co.nz</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() => Linking.openURL('https://bulletproofroofing.co.nz/privacy.html/')}>
                  <Text style={[c.normalText,{ color: 'blue',textDecorationLine:'underline',paddingVertical:0,fontSize: 17}]}>
                  Privacy policy</Text>
                  </TouchableOpacity>
                  </View>
              </View>
              <View>
              </View>
              {/* <View>
            <Text style={[c.normalText,{lineHeight: 25,}]}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
          </View>
          <View>
            <Text style={[c.normalText,{lineHeight: 25,}]}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
          </View> */}
              <View>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </AppRoot>
    )
  }
}

