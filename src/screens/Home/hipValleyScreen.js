import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
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

export default class hipScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverInput:0,
      pitchInput:0,
      diffrence:0,
      firstLInput:0,
      sheet1Start:0,
      sheet1End:0,
      sheet2Start:0,
      sheet2End:0,
      sheet3Start:0,
      sheet3End:0,
      sheet4Start:0,
      sheet4End:0,
      sheet5Start:0,
      sheet5End:0,
      lock:false,
      cData: [
        { id: "1", text: "Ascending" },
        { id: "2", text: "Descending" },

      ],
    

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
    console.log('coverInput',this.state.coverInput)
    console.log('pitchInput',this.state.pitchInput)
    console.log('firstLInput',this.state.firstLInput)

    return (
      <AppRoot>
                 <CHeader
           title={"Hip/Vally Cut"}
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
           onBackPress={() => {navigation.openDrawer()}}
           rightIcon
                   rightIconName= {this.state.lock ? 'lock-open-outline':"lock-closed-outline"}
                   onRightAction={() => {
                     this.setState({lock:!this.state.lock});
                   }}
         />
                     <ScrollView
                   style={{ flex: 1,
                    height: Screen.hp("100%")
                    }}>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={[Colors.themePurple, Colors.themePurple]}
          style={c.mainContainer}>
          {/* <View>
            <TouchableOpacity
            text='click' 
            onPress={this.picthDe()}
            />
            </View> */}
          <View style={c.btnView}>
            <Button
              text={Strings.asc}
              // visible={false}
              containerStyle={[c.Button, {width: Screen.wp('32.5%'), }]}
              onPress={() => { this.picthAscending() }} />
            <Button
              text={Strings.dsc}
              // visible={false}
              containerStyle={[c.Button, {width: Screen.wp('32.5%'), }]}
              onPress={() => { this.picthDescending() }} />
          </View>
          <View style={c.mainCalView}>
            <View>
              <Text style={c.normalText}>Sheet Cover (mm)</Text>
            </View>
            <View>
              <Text style={[c.normalText,{justifyContent:'flex-start',alignItems:'flex-start',width:Screen.wp('43%')}]}>Pitch (degrees)</Text>
            </View>
          </View>
          <View style={c.mainCalView}>
            <View style={c.calView}>
            <TouchableOpacity style={c.circle} onPress={()=>{this.decrement()}}>
            <Text style={[c.normalText]}>-</Text>
            </TouchableOpacity>
            <View>
            <TextInput
        style={[c.input,{width:60}]}
        keyboardType={"number-pad"}
        onChangeText={(text) => this.setState({ coverInput: parseInt(text) },()=>{
          this.picthAscending()
        }
        )}
        placeholder="0"
        placeholderTextColor='#fff'
        value={this.state.coverInput}
        />
             {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}>123</Text> */}
             </View>
             <TouchableOpacity style={c.circle} onPress={()=>{this.increment()}}>
            <Text style={c.normalText}>+</Text>
            </TouchableOpacity>
            <View>
            </View>
            </View>

            <View style={c.calView}>
            <TouchableOpacity style={c.circle} onPress={()=>{this.setState({pitchInput:this.state.pitchInput-1})}}>
            <Text style={[c.normalText]}>-</Text>
            </TouchableOpacity>
            <View>
            <TextInput
        style={[c.input,{width:60}]}
        keyboardType={"number-pad"}
        onChangeText={(text) => this.setState({ pitchInput: parseInt(text) },()=>{
          this.picthAscending()
          
        })}
        placeholder="0"
        placeholderTextColor='#fff'
        value={this.state.pitchInput}
        />
             {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}>123</Text> */}
             </View>
             <TouchableOpacity style={c.circle}  onPress={()=>{this.setState({pitchInput:this.state.pitchInput+1})}}>
            <Text style={c.normalText}>+</Text>
            </TouchableOpacity>
            <View>
            </View>
            </View>
          </View>
          {/* first length */}
          <View>
          <View>
              <Text style={c.normalText}>First Length (mm)</Text>
            </View>
            
            <View style={[c.calView,{width:Screen.wp('90%')}]}>
            <TouchableOpacity style={c.circle}  onPress={()=>{this.setState({firstLInput:this.state.firstLInput-1})}}>
            <Text style={[c.normalText]}>-</Text>
            </TouchableOpacity>
            <View>
            {/* <TextInput
                fontBold
                // title={Strings.name}
                onChangeText={(text) => this.setState({ firstLInput: text })}
                keyboardType={"number-pad"}
                containerStyle={c.inputStyle}
                // onSubmitEditing={() => {
                // }}
                value={this.state.firstLInput}

              /> */}
        <TextInput
        style={[c.input,{width:Screen.wp('62%')}]}
        keyboardType={"number-pad"}
        onChangeText={(text) => this.setState({ firstLInput: parseInt(text) },()=>{
          this.picthAscending()
        })}
        placeholder="Enter First Length"
        placeholderTextColor='#fff'
        value={this.state.firstLInput}
        />
             {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}></Text> */}
             </View>
             <TouchableOpacity style={c.circle}  onPress={()=>{this.setState({firstLInput:this.state.firstLInput+1})}}>
            <Text style={c.normalText}>+</Text>
            </TouchableOpacity>
            <View>
            </View>
            </View>
          </View>
          {/* Mesure */}
          <View>
          <View>
            <Text style={c.normalText}>Measurements below are center of overlap and underlap (sheet cover width apart)</Text>
          </View>
          {/* sheet1 */}
          <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 1</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet1Start}</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet1End}</Text>
            </View>
            </View>
            {/* end sheet1 */}
            <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 2</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet2Start}</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet2End}</Text>
            </View>
            </View>

            <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 3</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet3Start}</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet3End}</Text>
            </View>
            </View>
            <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 4</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet4Start}</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet4End}</Text>
            </View>
            </View>
            <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 5</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet5Start}</Text>
            </View>
            <View style={c.sheetBox}>
            <Text style={[c.normalText,{paddingVertical:5}]}>{this.state.sheet5End}</Text>
            </View>
            </View>
          </View>
        </LinearGradient>
          </ScrollView>
      </AppRoot>
    )
    
  }
  picthAscending=()=>{
    let text2 = this.state.pitchInput;
    let picth=Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput/picth;
    let fl = this.state.firstLInput;
    let sheet1end = +fl + +diff.toFixed();
    let sheet2end = +sheet1end + +diff.toFixed();
    let sheet3end = +sheet2end + +diff.toFixed();
    let sheet4end = +sheet3end + +diff.toFixed();
    let sheet5end = +sheet4end + +diff.toFixed();

    if (this.state.firstLInput != 0) {
      this.setState({
        sheet1Start:fl,
        sheet2Start:sheet1end,
        sheet3Start:sheet2end,
        sheet4Start:sheet3end,
        sheet5Start:sheet4end,
        sheet1End:sheet1end,
        sheet2End:sheet2end,
        sheet3End:sheet3end,
        sheet4End:sheet4end,
        sheet5End:sheet5end,
      })
    } 
  
  }
  picthDescending=()=>{
    let text2 = this.state.pitchInput;
    let picth=Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput/picth;
    let fl = this.state.firstLInput;
    let sheet1end = +fl - +diff.toFixed();
    let sheet2end = +sheet1end - +diff.toFixed();
    let sheet3end = +sheet2end - +diff.toFixed();
    let sheet4end = +sheet3end - +diff.toFixed();
    let sheet5end = +sheet4end - +diff.toFixed();
    if (this.state.firstLInput != 0) {
      this.setState({
        sheet1Start:fl,
        sheet2Start:sheet1end,
        sheet3Start:sheet2end,
        sheet4Start:sheet3end,
        sheet5Start:sheet4end,
        sheet1End:sheet1end,
        sheet2End:sheet2end,
        sheet3End:sheet3end,
        sheet4End:sheet4end,
        sheet5End:sheet5end,
      })
    } 
  
  }
  increment=()=>{
    let count = this.state.coverInput + 1;
    this.setState({coverInput:count})
  }
  decrement=()=>{
    let count = this.state.coverInput - 1;
    this.setState({coverInput:count})
  }
}

