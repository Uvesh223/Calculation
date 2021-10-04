import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  LogBox,
  Image,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';
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
         style={{ flex: 1,height: Screen.hp("100%"),
         width: Screen.wp("100%"),paddingHorizontal:Screen.wp('5%')}}>
           <View style={{marginBottom:30}}>
          <View style={{paddingVertical:40}}>
            <Image
              resizeMode={'cover'}
              source={ImageView.logo}
              style={{ height: Screen.hp('20%'), alignSelf: 'center', width: Screen.wp('45%') }} />
          </View>
          <View>
            <Text style={[c.normalText]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
          <View>
            <Text style={c.normalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
          <View>
            <Text style={c.normalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
          <View>
          </View>
          </View>
          </ScrollView>
        </LinearGradient>
      </AppRoot>
    )
  }
}

