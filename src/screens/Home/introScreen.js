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
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      // showRealApp: false, 
    }
  }
  componentDidMount() {
    Screen.OrientationChange(this);
      AsyncStorage.getItem('first_time').then((value) => {
          this.setState({ showRealApp: !!value, loading: false });
        });      
    }

  componentWillUnmount() {
    Screen.OrientationListener();
  }
  onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      // this.setState({ showRealApp: true });
        // this.props.navigation.navigate('Home');
        this.props.navigation.navigate('hipScreen');
    });
  };
  render() {
    const { navigation } = this.props;
    console.log("intro realApp",this.state.showRealApp)
    return (
      <AppRoot>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={[Colors.white, Colors.white]}
          style={[c.mainContainer,{paddingTop:20}]}>
          <Shape/>
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
                containerStyle={[c.Button,]}
                onPress={() => {this.onSkip()}} />
                </View>
        </LinearGradient>
      </AppRoot>
    )
  }
}

