import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
} from "../../component";
import {
  Screen,
} from "../../config/appConstants";
import {
    aboutScreen,
    HipScreen,
    IntroScreen,
    riseScreen,
  } from '../../navigation/Route';
// import messaging from "@react-native-firebase/messaging";
import { Helper, PrefManager } from '../../utils'
import c from "../../styles/commonStyle";

export default class open extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showRealApp: false,
        loading: true,  

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
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('Home');
    });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('Home');
    });
  };
  render() {
    const { navigation, loading, visible } = this.state;
    return (
    <View>
{this.state.showRealApp?
<>
<IntroScreen/>
</>
:<Text>false</Text>  }
    </View>
        // {loading ? <ActivityIndicator size="large" />:null}
        // {/* //If false show the Intro Slides */}
        // </>
        //   {/* //Real Application */}
         
    
    )
}
}