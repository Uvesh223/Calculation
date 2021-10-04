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
      coverInput: 0,
      pitchInput: 0,
      diffrence: 0,
      firstLInput: 0,
      sheet1Start: 0,
      sheet1End: 0,
      sheet2Start: 0,
      sheet2End: 0,
      sheet3Start: 0,
      sheet3End: 0,
      sheet4Start: 0,
      sheet4End: 0,
      sheet5Start: 0,
      sheet5End: 0,
      sheet6Start: 0,
      sheet6End: 0,
      sheet7Start: 0,
      sheet7End: 0,
      sheet8Start: 0,
      sheet8End: 0,
      sheet9Start: 0,
      sheet9End: 0,
      sheet10Start: 0,
      sheet10End: 0,
    numOfsheets:[
      {
        id: 1,
        start:0,
        end: 0,
      },
      {
        id: 2,
        start: 0,
        end: 0,
      },
      {
        id: 3,
        start: 0,
        end: 0,
      },
      {
        id: 4,
        start: 0,
        end: 0,
      },
      {
        id: 5,
        start: 0,
        end: 0,
      },
      {
        id: 6,
        start: 0,
        end: 0,
      },
      {
        id: 7,
        start: 0,
        end: 0,
      },
      {
        id: 8,
        start: 0,
        end: 0,
      },
      {
        id: 9,
        start: 0,
        end: 0,
      },
      {
        id: 10,
        start: 0,
        end: 0,
      },
      {
        id: 1,
        start:0,
        end: 0,
      },
      {
        id: 2,
        start: 0,
        end: 0,
      },
      {
        id: 3,
        start: 0,
        end: 0,
      },
      {
        id: 4,
        start: 0,
        end: 0,
      },
      {
        id: 5,
        start: 0,
        end: 0,
      },
      {
        id: 6,
        start: 0,
        end: 0,
      },
      {
        id: 7,
        start: 0,
        end: 0,
      },
      {
        id: 8,
        start: 0,
        end: 0,
      },
      {
        id: 9,
        start: 0,
        end: 0,
      },
      {
        id: 10,
        start: 0,
        end: 0,
      },
  ],
      lock: true,
      activeD:false,
      activeA:true,
      defaultTab:{
        id:1,
      },
      cData: [
        { id: "1", text: "Ascending" },
        { id: "2", text: "Descending" },

      ],
    }
    this.isCover = React.createRef();
    this.isPitch = React.createRef();
    this.isFirstL = React.createRef();
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
            style={c.mainContainer}>
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
          onBackPress={() => { navigation.openDrawer() }}
          rightIcon
          rightIconName={this.state.lock ? 'lock-open-outline' : "lock-closed-outline"}
          onRightAction={() => {
            this.setState({ lock: !this.state.lock });
          }}
        />

<ScrollView
         style={{ flex: 1,height: Screen.hp("100%"),
         width: Screen.wp("100%")}}>
            <View style={c.mainView}>
            <View style={c.btnView}>
              <Button
                text={Strings.asc}
                visible={false}
                containerStyle={[c.Button, { width: Screen.wp('32.5%'),backgroundColor:Colors.blueC,
              }]}
                onPress={() => { this.picthAscending() }} />
              <Button
                text={Strings.dsc}
                visible={false}
                containerStyle={[c.Button, { width: Screen.wp('32.5%'), }]}
                onPress={() => { this.picthDescending() }} />
            </View>


  {/* <View style={c.btnView}>
{this.state.cData.map((item) => {
  return (
    <Button
    text={item.text}
    // visible={false}
    containerStyle={[c.Button, { width: Screen.wp('32.5%'), }]}
    onPress={() => {item.id === 1 ? this.picthAscending() :item.id === 2?this.picthDescending():null 
      this.setState({default:item})
    }} />
            );
          }
          )}
          </View> */}
        
            <View style={c.mainCalView}>
              <View>
                <Text style={c.normalText}>Sheet Cover (mm)</Text>
              </View>
              <View>
                <Text style={[c.normalText, { justifyContent: 'flex-start', alignItems: 'flex-start', width: Screen.wp('43%') }]}>Pitch (degrees)</Text>
              </View>
            </View>
            <View style={c.mainCalView}>
              <View style={c.calView}>
                <TouchableOpacity style={c.circle} onPress={() => { this.decrementC() }}>
                  <Text style={[c.normalText]}>-</Text>
                </TouchableOpacity>
                <View>
                  <TextInput
                    style={[c.input, { width: 60 }]}
                    keyboardType={"number-pad"}
                    ref={input => {
                      this.isCover = input;
                    }}
                    onChangeText={(text) => this.setState({ coverInput: (text) }, () => {
                      this.picthAscending()
                    }
                    )}
                    editable={this.state.lock ? true:false}
                    placeholder="0"
                    placeholderTextColor='#000'
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      this.isPitch.getInnerRef().focus();
                    }}
                    value={this.state.coverInput}
                  />
                  {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}>123</Text> */}
                </View>
                <TouchableOpacity style={c.circle} onPress={() => { this.incrementC() }}>
                  <Text style={c.normalText}>+</Text>
                </TouchableOpacity>
                <View>
                </View>
              </View>

              <View style={c.calView}>
                <TouchableOpacity style={c.circle} onPress={() =>this.decrementP()}>
                  <Text style={[c.normalText]}>-</Text>
                </TouchableOpacity>
                <View>
                  <TextInput
                    style={[c.input, { width: 60 }]}
                    keyboardType={"number-pad"}
                    editable={this.state.lock ? true:false}
                    onChangeText={(text) => this.setState({ pitchInput: (text) }, () => {
                      this.picthAscending()
                    })}
                    ref={input => {
                      this.isPitch = input;
                    }}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      this.isFirstL.getInnerRef().focus();
                    }}
                    placeholder="0"
                    placeholderTextColor='#000'
                    value={this.state.pitchInput}
                  />
                  {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}>123</Text> */}
                </View>
                <TouchableOpacity style={c.circle} onPress={() => this.incrementP()}>
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

              <View style={c.calView}>
                <TouchableOpacity style={c.circle} onPress={() => this.decrementL()}>
                  <Text style={[c.normalText]}>-</Text>
                </TouchableOpacity>
                <View>
                  <TextInput
                    style={[c.input, { width: Screen.wp('62%') }]}
                    keyboardType={"number-pad"}
                    editable={this.state.lock ? true:false}
                    onChangeText={(text) => this.setState({ firstLInput: (text) }, () => {
                      this.picthAscending()
                    })}
                    placeholder="Enter First Length"
                    placeholderTextColor='#000'
                    ref={input => {
                      this.isFirstL = input;
                    }}
                    returnKeyType={'next'}
                    value={this.state.firstLInput}
                  />
                  {/* <Text style={[c.normalText,{marginHorizontal:Screen.wp('2')}]}></Text> */}
                </View>
                <TouchableOpacity style={c.circle} onPress={() => this.incrementL()}>
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
              {/* {this.state.numOfsheets.map((item)=>{
   let text2 = this.state.pitchInput;
   let picth = Math.cos(text2 * Math.PI / 180);
   let diff = this.state.coverInput / picth;
   let fl = +this.state.firstLInput;
   let sheet1end = +fl + +diff.toFixed();
   let sheet2end = +sheet1end + +diff.toFixed();
   let sheet3end = +sheet2end + +diff.toFixed();
   let sheet4end = +sheet3end + +diff.toFixed();
   let sheet5end = +sheet4end + +diff.toFixed();
   let sheet6end = +sheet5end + +diff.toFixed();
   let sheet7end = +sheet6end + +diff.toFixed();
   let sheet8end = +sheet7end + +diff.toFixed();
   let sheet9end = +sheet8end + +diff.toFixed();
   let sheet10end = +sheet9end + +diff.toFixed();
return(
  <View style={c.mainSheetView}>
  <View>
    <Text style={c.normalText}>Sheet {item.id}</Text>
  </View>
  <View style={c.sheetBox}>
    <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.start+ +fl}</Text>
  </View>
  <View style={c.sheetBox}>
    <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.end + fl + +diff.toFixed()}</Text>
  </View>
</View>
)
})} */}
              
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 1</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet1Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet1End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 2</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet2Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet2End}</Text>
                </View>
              </View>

              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 3</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet3Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet3End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 4</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet4Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet4End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 5</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet5Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet5End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 6</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet6Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet6End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 7</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet7Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet7End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 8</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet8Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet8End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 9</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet9Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet9End}</Text>
                </View>
              </View>
              <View style={c.mainSheetView}>
                <View>
                  <Text style={c.normalText}>Sheet 10</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet10Start}</Text>
                </View>
                <View style={c.sheetBox}>
                  <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet10End}</Text>
                </View>
              </View>
            </View>
            </View> 
        </ScrollView>
          </LinearGradient>
      </AppRoot>
    )

  }
  setDefault = (item) => {
   console.log('item.id ===> ', item.id);
   item.id === this.state.defaultTab.id && !this.state.active
     ? this.setState({active:true})
     : this.setState({active:false})
 };
  picthAscending = () => {
    let text2 = this.state.pitchInput;
    let picth = Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput / picth;
    let fl = +this.state.firstLInput;
    let sheet1end = +fl + +diff.toFixed();
    let sheet2end = +sheet1end + +diff.toFixed();
    let sheet3end = +sheet2end + +diff.toFixed();
    let sheet4end = +sheet3end + +diff.toFixed();
    let sheet5end = +sheet4end + +diff.toFixed();
    let sheet6end = +sheet5end + +diff.toFixed();
    let sheet7end = +sheet6end + +diff.toFixed();
    let sheet8end = +sheet7end + +diff.toFixed();
    let sheet9end = +sheet8end + +diff.toFixed();
    let sheet10end = +sheet9end + +diff.toFixed();

    if (this.state.firstLInput != 0) {
      this.setState({
        sheet1Start: fl,
        sheet2Start: sheet1end,
        sheet3Start: sheet2end,
        sheet4Start: sheet3end,
        sheet5Start: sheet4end,
        sheet6Start:sheet5end,
        sheet7Start:sheet6end,
        sheet8Start:sheet7end,
        sheet9Start:sheet8end,
        sheet10Start:sheet9end,
        sheet1End: sheet1end,
        sheet2End: sheet2end,
        sheet3End: sheet3end,
        sheet4End: sheet4end,
        sheet5End: sheet5end,
        sheet6End: sheet6end,
        sheet7End: sheet7end,
        sheet8End: sheet8end,
        sheet9End: sheet9end,
        sheet10End: sheet10end,
      })
    }
    if(!this.state.activeA){
       this.setState({activeA:true})
  }
  else{
   this.setState({activeA:false})
  }
    // this.setDefault()

  }
  picthDescending = () => {
    let text2 = this.state.pitchInput;
    let picth = Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput / picth;
    let fl = this.state.firstLInput;
    let sheet1end = +fl - +diff.toFixed();
    let sheet2end = +sheet1end - +diff.toFixed();
    let sheet3end = +sheet2end - +diff.toFixed();
    let sheet4end = +sheet3end - +diff.toFixed();
    let sheet5end = +sheet4end - +diff.toFixed();
    let sheet6end = +sheet5end - +diff.toFixed();
    let sheet7end = +sheet6end - +diff.toFixed();
    let sheet8end = +sheet7end - +diff.toFixed();
    let sheet9end = +sheet8end - +diff.toFixed();
    let sheet10end = +sheet9end - +diff.toFixed();
    if (this.state.firstLInput != 0) {
      this.setState({
        sheet1Start: fl,
        sheet2Start: sheet1end,
        sheet3Start: sheet2end,
        sheet4Start: sheet3end,
        sheet5Start: sheet4end,
        sheet6Start:sheet5end,
        sheet7Start:sheet6end,
        sheet8Start:sheet7end,
        sheet9Start:sheet8end,
        sheet10Start:sheet9end,
        sheet1End: sheet1end,
        sheet2End: sheet2end,
        sheet3End: sheet3end,
        sheet4End: sheet4end,
        sheet5End: sheet5end,
        sheet6End: sheet6end,
        sheet7End: sheet7end,
        sheet8End: sheet8end,
        sheet9End: sheet9end,
        sheet10End: sheet10end,

      })
    }
    if(!this.state.activeD){
      this.setState({activeD:true})
 }
 else{
  this.setState({activeD:false})
 }
  }
  incrementC = () => {
    let count = +this.state.coverInput + 1;
    this.setState({ coverInput: count.toString()})
    this.picthAscending()
  }
  decrementC = () => {
    let count = this.state.coverInput - 1;
    this.setState({ coverInput: count.toString()})
    this.picthAscending()
  }
  incrementP = () => {
    let count = +this.state.pitchInput + 1;
    this.setState({ pitchInput: count.toString()})
    this.picthAscending()
  }
  decrementP = () => {
    let count = this.state.pitchInput - 1;
    this.setState({ pitchInput: count.toString()})
    this.picthAscending()
  }
  incrementL = () => {
    let count = +this.state.firstLInput + 1;
    this.setState({ firstLInput: count.toString()})
    this.picthAscending()
  }
  decrementL = () => {
    let count = this.state.firstLInput - 1;
    this.setState({ firstLInput: count.toString()})
    this.picthAscending()
  }
}
