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
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
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
  numOfsheets,
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
      lock: true,
      activeD: false,
      activeA: true,
      showmore: true,
      loading: false,
      showbutton: true,
      defaultTab: 1,
      tabArray:([
        {
          id: 1,
          name: 'Ascending',
          
        },
        {
          id: 2,
          name: 'Descending',
        },
      ]),
      activestate:false,
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
    console.log("defaultTab=>",this.state.defaultTab)
    return (
      <AppRoot>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={[Colors.white, Colors.white]}
          style={c.mainContainer}>
          <CHeader
            title={"Hip/Valley Cut"}
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
                {this.state.tabArray.map((item)=>{
                  console.log("itrm id=>",item.id)
                  return(
                    <Button
                  text={item.name}
                  textBtn={{fontSize: Dimens.textSizeSmall,color: Colors.white,
                  }}
                  visible={false}
                  onPress={() =>
                    this.setState({defaultTab:item.id},
                      ()=>{
                      console.log("itemTTTd",item.id)
                      console.log("itemTTTd",this.state.defaultTab)
                      this.state.defaultTab === 1
                      ? this.picthAscehnding()
                      :this.state.defaultTab === 2
                      ? this.picthDescending()
                      : null
                    })
                  }
                  containerStyle={[c.Button, {
                    width: Screen.wp('35%'), 
                    backgroundColor:item.id === this.state.defaultTab
                    ?Colors.blueC:Colors.grayPrimaryColor,
                     paddingVertical: Screen.hp('2%'),
                  }]}
                    // console.log('item clicked ===> ', item.id)
                    // item.id==1?this.picthDescending():this.picthDescending()
                      />
                  )
                })}
                {/* <Button
                  text={Strings.asc}
                  textBtn={{fontSize: Dimens.textSizeSmall,color: Colors.white,

                  }}
                  visible={false}
                  containerStyle={[c.Button, {
                    width: Screen.wp('35%'), backgroundColor: Colors.blueC, paddingVertical: Screen.hp('2%'),
                  }]}
                  onPress={() => this.picthAscehnding()} />
                <Button
                 textBtn={{fontSize: Dimens.textSizeSmall,color: Colors.white,
                 }}
                  text={Strings.dsc}
                  visible={false}
                  containerStyle={[c.Button, { width: Screen.wp('35%'), paddingVertical: Screen.hp('2%') }]}
                  onPress={() =>  this.picthDescending()} /> */}
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => {this.state.lock? this.decrementC() : null }}>
                    <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: 60 }]}
                      keyboardType={"number-pad"}
                      ref={input => {
                        this.isCover = input;
                      }}
                      onChangeText={(text) => this.setState({ coverInput: (text) }, () => {
                        this.picthAscehnding()
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => {this.state.lock? this.incrementC() : null }}>
                    {/* <Text style={c.signnormalText}>+</Text> */}
                    <Icons name={'add-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                  </View>
                </View>

                <View style={c.calView}>
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock? this.decrementP() : null }>
                    <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: 60 }]}
                      keyboardType={"number-pad"}
                      editable={this.state.lock ? true : false}
                      onChangeText={(text) => this.setState({ pitchInput: (text) }, () => {
                        this.picthAscehnding()
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock? this.incrementP() : null }>
                    <Icons name={'add-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
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

                <View style={[c.calView,{paddingRight:1}]}>
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock? this.decrementL() : null }>
                    <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: Screen.wp('62%') }]}
                      keyboardType={"number-pad"}
                      editable={this.state.lock ? true : false}
                      onChangeText={(text) => this.setState({ firstLInput: (text) }, () => {
                        this.picthAscehnding()
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock? this.incrementL() : null }>
                    <Icons name={'add-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                  </View>
                </View>
              </View>
              <View style={{paddingTop:10}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: Colors.blueC, borderRadius: 5 }}>
                  <View style={c.hed}>
                    <Text style={c.hedText}>Difference</Text>
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

              {/* Mesure */}
              <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                  <Text style={[c.normalText, { paddingVertical: 0 }]}>Measurements below are center of overlap and</Text>
                  <Text style={[c.normalText, { paddingVertical: 0 }]}>underlap (sheet cover width apart)</Text>
                </View>
                {!this.state.showmore ?
                  // this.otherTen():
                  <>
                    {numOfsheets.slice(0, 20).map((item, id) => {
                      let text2 = this.state.pitchInput;
                      let picth = Math.cos(text2 * Math.PI / 180);
                      let diff = this.state.coverInput / picth;
                      let fl = +this.state.firstLInput;
                      if (item.start && item.end < 0) {

                        console.log('include=>', item.id)
                      }
                      if (item.id == 1) {
                        item.start = this.state.firstLInput;
                        item.end = this.state.sheet1End;
                      }
                      if (item.id == 2) {
                        item.start = this.state.sheet1End;
                        item.end = this.state.sheet2End;
                      }
                      if (item.id == 3) {
                        item.start = this.state.sheet2End;
                        item.end = this.state.sheet3End;
                      }
                      if (item.id == 4) {
                        item.start = this.state.sheet3End;
                        item.end = this.state.sheet4End;
                      }
                      if (item.id == 5) {
                        item.start = this.state.sheet4End;
                        item.end = this.state.sheet5End;
                      } if (item.id == 6) {
                        item.start = this.state.sheet5End;
                        item.end = this.state.sheet6End;
                      }
                      if (item.id == 7) {
                        item.start = this.state.sheet6End;
                        item.end = this.state.sheet7End;
                      }
                      if (item.id == 8) {
                        item.start = this.state.sheet7End;
                        item.end = this.state.sheet8End;
                      }
                      if (item.id == 9) {
                        item.start = this.state.sheet8End;
                        item.end = this.state.sheet9End;
                      } if (item.id == 10) {
                        item.start = this.state.sheet9End;
                        item.end = this.state.sheet10End;
                      }
                      if (item.id == 11) {
                        item.start = this.state.sheet10End;
                        item.end = this.state.sheet11End;
                      }
                      if (item.id == 12) {
                        item.start = this.state.sheet11End;
                        item.end = this.state.sheet12End;
                      }
                      if (item.id == 13) {
                        item.start = this.state.sheet12End;
                        item.end = this.state.sheet13End;
                      }
                      if (item.id == 14) {
                        item.start = this.state.sheet13End;
                        item.end = this.state.sheet14End;
                      }
                      if (item.id == 15) {
                        item.start = this.state.sheet14End;
                        item.end = this.state.sheet15End;
                      } if (item.id == 16) {
                        item.start = this.state.sheet15End;
                        item.end = this.state.sheet16End;
                      }
                      if (item.id == 17) {
                        item.start = this.state.sheet16End;
                        item.end = this.state.sheet17End;
                      }
                      if (item.id == 18) {
                        item.start = this.state.sheet17End;
                        item.end = this.state.sheet18End;
                      }
                      if (item.id == 19) {
                        item.start = this.state.sheet18End;
                        item.end = this.state.sheet19End;
                      } if (item.id == 20) {
                        item.start = this.state.sheet19End;
                        item.end = this.state.sheet20End;
                      }
                      return (
                        <View style={c.mainSheetView}>
                          <TouchableOpacity onPress={(id) => {
                            console.log("item=>", item)
                            item.checked = !item.checked
                            this.picthAscehnding()
                            console.log("checked=>", item.checked)
                          }}>
                            <Icon name={item.checked ? "check-square" : item.icon} size={25} color={item.checked ? Colors.green : Colors.grayPrimaryColor} />

                          </TouchableOpacity>
                          <View>
                            <Text style={c.normalText}>Sheet {item.id}</Text>
                          </View>
                          <View style={c.sheetBox}>
                            <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.start}</Text>
                          </View>
                          <View style={c.sheetBox}>
                            <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.end}</Text>
                          </View>
                        </View>
                      )
                    })}
                  </>
                  // }
                  :
                  <>
                    {numOfsheets.slice(0, 10).map((item, id) => {
                      let text2 = this.state.pitchInput;
                      let picth = Math.cos(text2 * Math.PI / 180);
                      let diff = this.state.coverInput / picth;
                      let fl = +this.state.firstLInput;
                      if (item.start && item.end < 0) {

                        console.log('include=>', item.id)
                      }
                      if (item.id == 1) {
                        item.start = this.state.firstLInput;
                        item.end = this.state.sheet1End;
                      }
                      if (item.id == 2) {
                        item.start = this.state.sheet1End;
                        item.end = this.state.sheet2End;
                      }
                      if (item.id == 3) {
                        item.start = this.state.sheet2End;
                        item.end = this.state.sheet3End;
                      }
                      if (item.id == 4) {
                        item.start = this.state.sheet3End;
                        item.end = this.state.sheet4End;
                      }
                      if (item.id == 5) {
                        item.start = this.state.sheet4End;
                        item.end = this.state.sheet5End;
                      } if (item.id == 6) {
                        item.start = this.state.sheet5End;
                        item.end = this.state.sheet6End;
                      }
                      if (item.id == 7) {
                        item.start = this.state.sheet6End;
                        item.end = this.state.sheet7End;
                      }
                      if (item.id == 8) {
                        item.start = this.state.sheet7End;
                        item.end = this.state.sheet8End;
                      }
                      if (item.id == 9) {
                        item.start = this.state.sheet8End;
                        item.end = this.state.sheet9End;
                      } if (item.id == 10) {
                        item.start = this.state.sheet9End;
                        item.end = this.state.sheet10End;
                      }
                      return (
                        <View style={c.mainSheetView}>
                          <TouchableOpacity onPress={(id) => {
                            console.log("item=>", item)
                            item.checked = !item.checked
                            this.picthAscehnding()
                            console.log("checked=>", item.checked)
                          }}>
                            <Icon name={item.checked ? "check-square" : item.icon} size={25} color={item.checked ? Colors.green : Colors.grayPrimaryColor} />

                          </TouchableOpacity>
                          <View>
                            <Text style={c.normalText}>Sheet {item.id}</Text>
                          </View>
                          <View style={c.sheetBox}>
                            <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.start}</Text>
                          </View>
                          <View style={c.sheetBox}>
                            <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.end}</Text>
                          </View>
                        </View>
                      )
                    })}
                  </>
                }
              </View>
              {this.state.showbutton ?
                // <View style={{ width: Screen.wp('100%'), alignItems: 'center' }}>
                <Button
                  text={this.state.showmore ? Strings.more : Strings.less}
                  visible={loading}
                  containerStyle={[c.Button, {
                    alignSelf: 'center',
                  }]}
                  onPress={() =>
                    setTimeout(() => {
                      <CLoader />
                      this.setState({ showmore: !this.state.showmore })
                    }, 300)}
                />
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
  picthAscehnding = () => {
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
        diffrence: diff.toFixed(2),
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
        // showmore:true,

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
    // let sheet11end = +sheet10end - +diff.toFixed();
    // let sheet12end = +sheet11end - +diff.toFixed();
    // let sheet13end = +sheet12end - +diff.toFixed();
    // let sheet14end = +sheet13end - +diff.toFixed();
    // let sheet15end = +sheet14end - +diff.toFixed();
    // let sheet16end = +sheet15end - +diff.toFixed();
    // let sheet17end = +sheet16end - +diff.toFixed();
    // let sheet18end = +sheet17end - +diff.toFixed();
    // let sheet19end = +sheet18end - +diff.toFixed();
    // let sheet20end = +sheet19end - +diff.toFixed();
    if (this.state.firstLInput != 0) {
      this.setState({
        diffrence: diff.toFixed(2),
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
        // sheet11Start: sheet10end,
        // sheet12Start: sheet11end,
        // sheet13Start: sheet12end,
        // sheet14Start: sheet13end,
        // sheet15Start: sheet14end,
        // sheet16Start: sheet15end,
        // sheet17Start: sheet16end,
        // sheet18Start: sheet17end,
        // sheet19Start: sheet18end,
        // sheet20Start: sheet19end,
        // sheet11End: sheet11end,
        // sheet12End: sheet12end,
        // sheet13End: sheet13end,
        // sheet14End: sheet14end,
        // sheet15End: sheet15end,
        // sheet16End: sheet16end,
        // sheet17End: sheet17end,
        // sheet18End: sheet18end,
        // sheet19End: sheet19end,
        // sheet20End: sheet20end,
        showbutton: false,
        showmore:true,

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
    this.picthAscehnding()
  }
  decrementC = () => {
    let count = this.state.coverInput - 1;
    this.setState({ coverInput: count.toString() })
    this.picthAscehnding()
  }
  incrementP = () => {
    let count = +this.state.pitchInput + 1;
    this.setState({ pitchInput: count.toString() })
    this.picthAscehnding()
  }
  decrementP = () => {
    let count = this.state.pitchInput - 1;
    this.setState({ pitchInput: count.toString() })
    this.picthAscehnding()
  }
  incrementL = () => {
    let count = +this.state.firstLInput + 1;
    this.setState({ firstLInput: count.toString() })
    this.picthAscehnding()
  }
  decrementL = () => {
    let count = this.state.firstLInput - 1;
    this.setState({ firstLInput: count.toString() })
    this.picthAscehnding()
  }
}
