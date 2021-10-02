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
  ScrollableAvoidKeyboard} from "../../component";
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

export default class riseScreen extends Component {
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
    return (
      <AppRoot>
        <LinearGradient
        start={{ x: 0, y: 0}} end={{ x: 1, y: 0}}
        colors={[Colors.themeGreen,Colors.themeGreen]}
        style={c.mainContainer}>
        <View>
        <Text> Rise and Run calculation Screen </Text>
      </View>
      </LinearGradient>
      </AppRoot>
    )
  }
}

