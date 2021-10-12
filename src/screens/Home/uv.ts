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
  ScrollableAvoidKeyboard,
} from "../../component";
import CLoader from "../../component/CLoader";
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

var myArray = [];
export default class hipScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverInput: 0,
      pitchInput: 0,
      diffrence: 0,
      angleofCut: 0,
      measurement: 0,
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
      sheet11Start: 0,
      sheet11End: 0,
      sheet12Start: 0,
      sheet12End: 0,
      sheet13Start: 0,
      sheet13End: 0,
      sheet14Start: 0,
      sheet14End: 0,
      sheet15Start: 0,
      sheet15End: 0,
      sheet16Start: 0,
      sheet16End: 0,
      sheet17Start: 0,
      sheet17End: 0,
      sheet18Start: 0,
      sheet18End: 0,
      sheet19Start: 0,
      sheet19End: 0,
      sheet20Start: 0,
      sheet20End: 0,
      numOfsheets: [
        {
          id: 1,
          start: 0,
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
          id: 11,
          start: 0,
          end: 0,
        },
        {
          id: 12,
          start: 0,
          end: 0,
        },
        {
          id: 13,
          start: 0,
          end: 0,
        },
        {
          id: 14,
          start: 0,
          end: 0,
        },
        {
          id: 15,
          start: 0,
          end: 0,
        },
        {
          id: 16,
          start: 0,
          end: 0,
        },
        {
          id: 17,
          start: 0,
          end: 0,
        },
        {
          id: 18,
          start: 0,
          end: 0,
        },
        {
          id: 19,
          start: 0,
          end: 0,
        },
        {
          id: 20,
          start: 0,
          end: 0,
        },
        {
          id: 21,
          start: 0,
          end: 0,
        },
        {
          id: 22,
          start: 0,
          end: 0,
        },
        {
          id: 23,
          start: 0,
          end: 0,
        },
        {
          id: 24,
          start: 0,
          end: 0,
        },
        {
          id: 25,
          start: 0,
          end: 0,
        },
        {
          id: 26,
          start: 0,
          end: 0,
        },
        {
          id: 27,
          start: 0,
          end: 0,
        },
        {
          id: 28,
          start: 0,
          end: 0,
        },
        {
          id: 29,
          start: 0,
          end: 0,
        },
        {
          id: 30,
          start: 0,
          end: 0,
        },


      ],
      lock: true,
      activeD: false,
      activeA: true,
      showmore: true,
      loading: false,
      showbutton: true,
      defaultTab: {
        id: 1,
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
    // this.dataloop()
  }

  componentWillUnmount() {
    Screen.OrientationListener();
  }

  render() {
    const { navigation, loading, visible } = this.props;
    const { numOfsheets } = this.state;
    console.log(this.state.showmore)
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
            style={{
              flex: 1, height: Screen.hp("100%"),
              width: Screen.wp("100%")
            }}>
            <View style={c.mainView}>
              <View style={c.btnView}>
                <Button
                  text={Strings.asc}
                  visible={false}
                  containerStyle={[c.Button, {
                    width: Screen.wp('35%'), backgroundColor: Colors.blueC, paddingVertical: Screen.hp('2%'),
                  }]}
                  onPress={() => { this.picthAscending() }} />
                <Button
                  text={Strings.dsc}
                  visible={false}
                  containerStyle={[c.Button, { width: Screen.wp('35%'), paddingVertical: Screen.hp('2%') }]}
                  onPress={() => { this.picthDescending() }} />
              </View>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: Colors.blueC, borderRadius: 5 }}>
                  <View style={c.hed}>
                    <Text style={c.hedText}>Diffrence</Text>
                    <Text style={c.hedText}>{this.state.diffrence}</Text>
                  </View>
                  <View style={c.hed}>
                    <Text style={c.hedText}>Rake Measurement</Text>
                    <Text style={c.hedText}>{this.state.measurement}</Text>

                  </View>
                  <View style={[c.hed, { borderRightWidth: 0, }]}>
                    <Text style={c.hedText}>Angle Of Cut</Text>
                    <Text style={c.hedText}>{this.state.angleofCut}</Text>
                  </View>
                </View>
              </View>

              <View style={c.mainCalView}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Text style={c.normalText}>Sheet Cover</Text>
                  <Text style={c.subnormalText}> (mm)</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: Screen.wp('45%') }}>
                  <Text style={c.normalText}>Pitch</Text>
                  <Text style={c.subnormalText}> (degrees)</Text>
                </View>
                {/* <View>
                <Text style={[c.normalText, { justifyContent: 'flex-start', alignItems: 'flex-start', )width: Screen.wp('43%' }]}>Pitch (degrees)</Text>
              </View> */}
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
                      editable={this.state.lock ? true : false}
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
                  <TouchableOpacity style={c.circle} onPress={() => this.decrementP()}>
                    <Text style={[c.normalText]}>-</Text>
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: 60 }]}
                      keyboardType={"number-pad"}
                      editable={this.state.lock ? true : false}
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
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Text style={c.normalText}>First Length</Text>
                  <Text style={c.subnormalText}> (mm)</Text>
                </View>

                <View style={c.calView}>
                  <TouchableOpacity style={c.circle} onPress={() => this.decrementL()}>
                    <Text style={[c.normalText]}>-</Text>
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: Screen.wp('62%') }]}
                      keyboardType={"number-pad"}
                      editable={this.state.lock ? true : false}
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
                {/* {numOfsheets.map((item)=>{
                // console.log('item=>',item)
  //  let text2 = this.state.pitchInput;
  //  let picth= Math.cos(text2 * Math.PI / 180);
  //  let diff = this.state.coverInput / picth;
  //  let fl = +this.state.firstLInput;
  //  let sheet1end = +fl + +diff.toFixed();
  //  let sheet2end = +sheet1end + +diff.toFixed();
  //  let sheet3end = +sheet2end + +diff.toFixed();
  //  let sheet4end = +sheet3end + +diff.toFixed();
  //  let sheet5end = +sheet4end + +diff.toFixed();
  //  let sheet6end = +sheet5end + +diff.toFixed();
  //  let sheet7end = +sheet6end + +diff.toFixed();
  //  let sheet8end = +sheet7end + +diff.toFixed();
  //  let sheet9end = +sheet8end + +diff.toFixed();
  //  let sheet10end = +sheet9end + +diff.toFixed(); 
//    if(item.id==1){
//      item.start=this.state.firstLInput;
//      item.end=this.state.sheet1End;
//    }
//    if(item.id==2){
//     item.start=this.state.sheet1End;
//     item.end=this.state.sheet2End;
//   }
//   if(item.id==3){
//     item.start=this.state.sheet2End;
//     item.end=this.state.sheet3End;
//   }
//   if(item.id==4){
//     item.start=this.state.sheet3End;
//     item.end=this.state.sheet4End;
//   }
//   if(item.id==5){
//     item.start=this.state.sheet4End;
//     item.end=this.state.sheet5End;
//   } if(item.id==6){
//     item.start=this.state.sheet5End;
//     item.end=this.state.sheet6End;
//   }
//   if(item.id==7){
//     item.start=this.state.sheet6End;
//     item.end=this.state.sheet7End;
//   }
//   if(item.id==8){
//     item.start=this.state.sheet7End;
//     item.end=this.state.sheet8End;
//   }
//    if(item.id==9){
//     item.start=this.state.sheet8End;
//     item.end=this.state.sheet9End;
//   } if(item.id==10){
//     item.start=this.state.sheet9End;
//     item.end=this.state.sheet10End;
//   } 
//   if(item.id==11){
//     item.start=this.state.sheet10End;
//     item.end=this.state.sheet11End;
//   }
//   if(item.id==12){
//    item.start=this.state.sheet11End;
//    item.end=this.state.sheet12End;
//  }
//  if(item.id==13){
//    item.start=this.state.sheet12End;
//    item.end=this.state.sheet13End;
//  }
//  if(item.id==14){
//    item.start=this.state.sheet13End;
//    item.end=this.state.sheet14End;
//  }
//  if(item.id==15){
//    item.start=this.state.sheet14End;
//    item.end=this.state.sheet15End;
//  } if(item.id==16){
//    item.start=this.state.sheet15End;
//    item.end=this.state.sheet16End;
//  }
//  if(item.id==17){
//    item.start=this.state.sheet16End;
//    item.end=this.state.sheet17End;
//  }
//  if(item.id==18){
//    item.start=this.state.sheet17End;
//    item.end=this.state.sheet18End;
//  }
//   if(item.id==19){
//    item.start=this.state.sheet18End;
//    item.end=this.state.sheet19End;
//  } if(item.id==20){
//    item.start=this.state.sheet19End;
//    item.end=this.state.sheet20End;
//  } 
// //    Find index of specific object using findIndex method.    
// //   objIndex = this.state.numOfsheets.findIndex((obj => obj.id.map((item)=>{
// //     console.log("i",item)
// //   })));
// //   //Update object's name property.
// // this.state.numOfsheets[objIndex].start = this.state.firstLInput;
// // this.state.numOfsheets[objIndex].end = this.state.sheet1End; 
// if(item.id<=10){
// return(
//   <View style={c.mainSheetView}>
//   <View>
//     <Text style={c.normalText}>Sheet {item.id}</Text>
//   </View>
//   <View style={c.sheetBox}>
//     <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.start}</Text>
//   </View>
//   <View style={c.sheetBox}>
//     <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.end}</Text>
//   </View>
// </View>
// )
// }
// })} */}

                {this.state.showmore ?
                  <>
                    <View style={c.mainSheetView}>
                      <View>
                        <Text style={c.normalText}>Sheet 01</Text>
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
                        <Text style={c.normalText}>Sheet 02</Text>
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
                        <Text style={c.normalText}>Sheet 03</Text>
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
                        <Text style={c.normalText}>Sheet 04</Text>
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
                        <Text style={c.normalText}>Sheet 05</Text>
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
                        <Text style={c.normalText}>Sheet 06</Text>
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
                        <Text style={c.normalText}>Sheet 07</Text>
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
                        <Text style={c.normalText}>Sheet 08</Text>
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
                        <Text style={c.normalText}>Sheet 09</Text>
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
                        <Text style={[c.normalText]}>Sheet 10</Text>
                      </View>
                      <View style={c.sheetBox}>
                        <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet10Start}</Text>
                      </View>
                      <View style={c.sheetBox}>
                        <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet10End}</Text>
                      </View>
                    </View>
                    {/* {this.state.showmore ?} */}
                  </>
                  : this.otherTen()}
              </View>
                {this.state.showbutton ?
                  // <View style={{ width: Screen.wp('100%'), alignItems: 'center' }}>
                    <Button
                      text={this.state.showmore ? Strings.more : Strings.less}
                      visible={loading}
                      containerStyle={[c.Button,{alignSelf:'center',
                    }]}
                      onPress={() =>
                        setTimeout(() => {
                          <CLoader />
                          this.setState({ showmore: !this.state.showmore })
                        }, 300)}
                    />
                    // </View>
                    : null}
            </View>
          </ScrollView>
        </LinearGradient>
      </AppRoot>
    )
  }
  setDefault = (item) => {
    console.log('item.id ===> ', item.id);
    item.id === this.state.defaultTab.id && !this.state.active
      ? this.setState({ active: true })
      : this.setState({ active: false })
  };
  dataloop = () => {
    const { numOfsheets } = this.state;
    let text2 = this.state.pitchInput;
    let fl = this.state.firstLInput;
    let picth = Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput / picth;
    for (let i = 0; i < numOfsheets.length; i += diff) {
      let start = (numOfsheets[i].start + fl);
      let end = (numOfsheets[i].start + diff);
      // numOfsheets.push(end);
    }
    console.log("numOfsheets=>", numOfsheets)
  }
  picthAscending = () => {
    let text2 = this.state.pitchInput;
    let fl = +this.state.firstLInput;
    let picth = Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput / picth;
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
    //
    let sheet11end = +sheet10end + +diff.toFixed();
    let sheet12end = +sheet11end + +diff.toFixed();
    let sheet13end = +sheet12end + +diff.toFixed();
    let sheet14end = +sheet13end + +diff.toFixed();
    let sheet15end = +sheet14end + +diff.toFixed();
    let sheet16end = +sheet15end + +diff.toFixed();
    let sheet17end = +sheet16end + +diff.toFixed();
    let sheet18end = +sheet17end + +diff.toFixed();
    let sheet19end = +sheet18end + +diff.toFixed();
    let sheet20end = +sheet19end + +diff.toFixed();
    //
    let sheet21end = +sheet20end + +diff.toFixed();
    let sheet22end = +sheet21end + +diff.toFixed();
    let sheet23end = +sheet22end + +diff.toFixed();
    let sheet24end = +sheet23end + +diff.toFixed();
    let sheet25end = +sheet24end + +diff.toFixed();
    let sheet26end = +sheet25end + +diff.toFixed();
    let sheet27end = +sheet26end + +diff.toFixed();
    let sheet28end = +sheet27end + +diff.toFixed();
    let sheet29end = +sheet28end + +diff.toFixed();
    let sheet30end = +sheet29end + +diff.toFixed();

    if (this.state.firstLInput != 0) {
      this.setState({
        diffrence: diff.toFixed(),
        angleofCut: picth.toFixed(10),
        // measurement:measurement,
        sheet1Start: fl,
        sheet2Start: sheet1end,
        sheet3Start: sheet2end,
        sheet4Start: sheet3end,
        sheet5Start: sheet4end,
        sheet6Start: sheet5end,
        sheet7Start: sheet6end,
        sheet8Start: sheet7end,
        sheet9Start: sheet8end,
        sheet10Start: sheet9end,
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
        //
        sheet11Start: sheet10end,
        sheet12Start: sheet11end,
        sheet13Start: sheet12end,
        sheet14Start: sheet13end,
        sheet15Start: sheet14end,
        sheet16Start: sheet15end,
        sheet17Start: sheet16end,
        sheet18Start: sheet17end,
        sheet19Start: sheet18end,
        sheet20Start: sheet19end,
        sheet11End: sheet11end,
        sheet12End: sheet12end,
        sheet13End: sheet13end,
        sheet14End: sheet14end,
        sheet15End: sheet15end,
        sheet16End: sheet16end,
        sheet17End: sheet17end,
        sheet18End: sheet18end,
        sheet19End: sheet19end,
        sheet20End: sheet20end,
        showbutton: true,

      })
    }
    if (!this.state.activeA) {
      this.setState({ activeA: true })
    }
    else {
      this.setState({ activeA: false })
    }
    // this.setDefault()

  }
  picthDescending = () => {
    const { numOfsheets } = this.state;
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
    //
    let sheet11end = +sheet10end - +diff.toFixed();
    let sheet12end = +sheet11end - +diff.toFixed();
    let sheet13end = +sheet12end - +diff.toFixed();
    let sheet14end = +sheet13end - +diff.toFixed();
    let sheet15end = +sheet14end - +diff.toFixed();
    let sheet16end = +sheet15end - +diff.toFixed();
    let sheet17end = +sheet16end - +diff.toFixed();
    let sheet18end = +sheet17end - +diff.toFixed();
    let sheet19end = +sheet18end - +diff.toFixed();
    let sheet20end = +sheet19end - +diff.toFixed();
    if (this.state.firstLInput != 0) {
      this.setState({
        diffrence: diff.toFixed(),
        angleofCut: picth.toFixed(10),
        // measurement:measuremen,
        sheet1Start: fl,
        sheet2Start: sheet1end,
        sheet3Start: sheet2end,
        sheet4Start: sheet3end,
        sheet5Start: sheet4end,
        sheet6Start: sheet5end,
        sheet7Start: sheet6end,
        sheet8Start: sheet7end,
        sheet9Start: sheet8end,
        sheet10Start: sheet9end,
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
        //
        sheet11Start: sheet10end,
        sheet12Start: sheet11end,
        sheet13Start: sheet12end,
        sheet14Start: sheet13end,
        sheet15Start: sheet14end,
        sheet16Start: sheet15end,
        sheet17Start: sheet16end,
        sheet18Start: sheet17end,
        sheet19Start: sheet18end,
        sheet20Start: sheet19end,
        sheet11End: sheet11end,
        sheet12End: sheet12end,
        sheet13End: sheet13end,
        sheet14End: sheet14end,
        sheet15End: sheet15end,
        sheet16End: sheet16end,
        sheet17End: sheet17end,
        sheet18End: sheet18end,
        sheet19End: sheet19end,
        sheet20End: sheet20end,
        showbutton: false,

      })
    }
    if (!this.state.activeD) {
      this.setState({ activeD: true })
    }
    else {
      this.setState({ activeD: false })
    }
  }
  incrementC = () => {
    let count = +this.state.coverInput + 1;
    this.setState({ coverInput: count.toString() })
    this.picthAscending()
  }
  decrementC = () => {
    let count = this.state.coverInput - 1;
    this.setState({ coverInput: count.toString() })
    this.picthAscending()
  }
  incrementP = () => {
    let count = +this.state.pitchInput + 1;
    this.setState({ pitchInput: count.toString() })
    this.picthAscending()
  }
  decrementP = () => {
    let count = this.state.pitchInput - 1;
    this.setState({ pitchInput: count.toString() })
    this.picthAscending()
  }
  incrementL = () => {
    let count = +this.state.firstLInput + 1;
    this.setState({ firstLInput: count.toString() })
    this.picthAscending()
  }
  decrementL = () => {
    let count = this.state.firstLInput - 1;
    this.setState({ firstLInput: count.toString() })
    this.picthAscending()
  }
  otherTen = () => {
    return (
      <View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 11</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet11Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet11End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 12</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet12Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet12End}</Text>
          </View>
        </View>

        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 13</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet13Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet13End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 14</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet14Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet14End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 15</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet15Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet15End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 16</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet16Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet16End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 17</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet17Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet17End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 18</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet18Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet18End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={c.normalText}>Sheet 19</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet19Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet19End}</Text>
          </View>
        </View>
        <View style={c.mainSheetView}>
          <View>
            <Text style={[c.normalText]}>Sheet 20</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet20Start}</Text>
          </View>
          <View style={c.sheetBox}>
            <Text style={[c.normalText, { paddingVertical: 5 }]}>{this.state.sheet20End}</Text>
          </View>
        </View>
      </View>

    )
  }
}
