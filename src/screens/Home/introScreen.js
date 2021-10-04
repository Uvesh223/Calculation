import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from "react-native";
import { connect } from "react-redux";
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppRoot,
  TextInput,
  Shape,
  Button,
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

export default class introScreen extends Component {
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
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={[Colors.white, Colors.white]}
          style={[c.mainContainer,{paddingTop:50}]}>
          <Shape text={Strings.fpwd} />
          <View style={{width:Screen.wp('100%'),justifyContent:'flex-start',alignItems:'flex-start',paddingHorizontal:Screen.wp('5%'),paddingTop:Screen.hp('2%')}}>
          <View>
            <Text style={c.normalText}>This calculator is accurate to 0.01 mm</Text>
          </View>
          <View>
            <Text style={c.normalText}>This cut list shows to the nearest 1mm</Text>
          </View>
          <View>
            <Text style={c.normalText}>All cut measurements provided are to be mesured along the center of the overlap and underlap (the sheet cover width)</Text>
          </View>
          <View>
            <Text style={c.headerText}>Ascending Cut List :</Text>
            <Text style={[c.normalText,{paddingVertical:5}]}>For cutting up a Hip or Down a Valley</Text>
          </View>
          <View>
            <Text style={[c.headerText]}>Descending Cut List :</Text>
            <Text style={[c.normalText,{paddingVertical:5}]}>For cutting up a Hip or Up a Valley</Text>
          </View>
          </View>
          <View>
          <Button
                text={Strings.hip}
                visible={false}
                containerStyle={[c.Button]}
                onPress={() => {navigation.navigate('hipScreen')}} />
                </View>
        </LinearGradient>
      </AppRoot>
    )
  }
}

