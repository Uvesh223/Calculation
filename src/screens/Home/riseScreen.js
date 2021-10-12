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
import Icons from 'react-native-vector-icons/Ionicons';
import {
  AppRoot,
  TextInput,
  Shape,
  Button,
  ScrollableAvoidKeyboard,
  CHeader
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

export default class riseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rise: 0,
      run: 0,
      diffrence: 0,
      angleofCut: 0,

    }
    this.isRise = React.createRef();
    this.isRun = React.createRef();
  }
  componentDidMount() {
    Screen.OrientationChange(this);
  }

  componentWillUnmount() {
    Screen.OrientationListener();
  }
  render() {
    const { navigation, loading, visible } = this.props;
    return (
      <AppRoot>
        <CHeader
          title={"Rise and run calculator"}
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
          leftIconName="menu"
          // lock-open-outline
          onBackPress={() => { navigation.openDrawer() }}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={[Colors.white, Colors.white]}
          style={[c.mainContainer,{justifyContent:'flex-start'}]}>
          <View style={c.mainView}>

            <View style={{marginVertical:20}}>
            <View style={[c.mainCalView]}>
            <View style={{width:Screen.wp('44%')}}>
              <Text style={[c.headerText,{paddingBottom:10}]}>Rise</Text>
              </View>
              <View style={{width:Screen.wp('44%')}}>
              <Text style={[c.headerText,{paddingBottom:10},]}>Run</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={[c.calView]}>
                <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.decrementrise()}>
                  <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                </TouchableOpacity>
                <View>
                  <TextInput
                    style={[c.input, { width: 60 }]}
                    keyboardType={"number-pad"}
                    ref={input => {
                      this.isRise = input;
                    }}
                    onChangeText={(text) => this.setState({ rise: (text) },
                      // this.picthAscending()
                    )}
                    // editable={this.state.lock ? true : false}
                    placeholder="0"
                    placeholderTextColor='#000'
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      this.isRun.getInnerRef().focus();
                    }}
                    value={this.state.rise}
                  />
                  {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}>123</Text> */}
                </View>
                <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.incrementCrise()}>
                  {/* <Text style={c.signnormalText}>+</Text> */}
                  <Icons name={'add-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                </TouchableOpacity>
                <View>
                </View>
              </View>
              <View style={[c.calView]}>
                <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.decrementrun()}>
                  <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                </TouchableOpacity>
                <View>
                  <TextInput
                    style={[c.input, { width: 60 }]}
                    keyboardType={"number-pad"}
                    ref={input => {
                      this.isRun = input;
                    }}
                    onChangeText={(text) => this.setState({ run: (text) }
                      // this.picthAscending()
                    )}
                    // editable={this.state.lock ? true : false}
                    placeholder="0"
                    placeholderTextColor='#000'
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      this.picthAscehnding();
                    }}
                    value={this.state.run}
                  />
                  {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}>123</Text> */}
                </View>
                <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.incrementrun()}>
                  {/* <Text style={c.signnormalText}>+</Text> */}
                  <Icons name={'add-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                </TouchableOpacity>
                <View>
                </View>
              </View>
            </View>
            </View>
            <View style={[c.hednew,{marginVertical:20}]}>
              <Text style={[c.normalText, { paddingVertical: 0 }]}>Accurate Angle</Text>
              <Text style={[c.normalText, { paddingVertical: 0 }]} >{this.state.angleofCut}</Text>
            </View>
          </View>
          <View style={{paddingVertical:20}}>
          <Button
            text={Strings.cal}
            visible={false}
            containerStyle={[c.Button,]}
            onPress={() => { this.picthAscehnding() }} />
        </View>
        </LinearGradient>
      </AppRoot>
    )
  }
  picthAscehnding = () => {
    let run = this.state.run;
    let rise = +this.state.rise;
    // let picth = Math.cos(text2 * Math.PI / 180);
    let picth =  run * rise;
    let diff = this.state.coverInput / picth;
    this.setState({
      diffrence: diff.toFixed(2),
      angleofCut: picth,
    })
  }
  incrementCrise = () => {
    let count = +this.state.rise + 1;
    this.setState({ rise: count.toString() })
    // this.picthAscending()
  }
  decrementrise = () => {
    let count = this.state.rise - 1;
    this.setState({ rise: count.toString() })
    // this.picthAscending()
  }
  incrementrun = () => {
    let count = +this.state.run + 1;
    this.setState({ run: count.toString() })
    // this.picthAscending()
  }
  decrementrun = () => {
    let count = this.state.run - 1;
    this.setState({ run: count.toString() })
    // this.picthAscending()
  }

}

