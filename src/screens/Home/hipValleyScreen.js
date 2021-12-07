import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
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
export default class HipScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverInput: 0,
      pitchInput: 0,
      diffrence: 0,
      angleofCut: 0,
      measurement: 0,
      firstLInput: 0,
      page: 0,
      lock: true,
      activeD: false,
      activeA: true,
      showmore: true,
      loading: false,
      showbutton: true,
      data: [],
      disData: [],
      defaultTab: 1,
      visible:10,
      tabArray: ([
        {
          id: 1,
          name: 'Ascending',

        },
        {
          id: 2,
          name: 'Descending',
        },

      ]),
      activestate: false,
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
    const { navigation, loading, visible, data } = this.props;
    console.log("diffrence=>", this.state.diffrence)
    console.log("diffrence1=>", this.state.diffrence1)

    // console.log("defaultTab=>", this.state.defaultTab)

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
                {this.state.tabArray.map((item) => {
                  return (
                    <Button
                      text={item.name}
                      textBtn={{
                        fontSize: Dimens.textSizeSmall, color: Colors.white,
                      }}
                      visible={false}
                      onPress={() =>
                        this.setState({ defaultTab: item.id },
                          () => {
                            this.state.defaultTab === 1
                              ? this.picthAscehnding()
                              : this.state.defaultTab === 2
                                ? this.picthDescending()
                                : null
                          })
                      }
                      containerStyle={[c.Button, {
                        width: Screen.wp('28%'),
                        backgroundColor: item.id === this.state.defaultTab
                          ? Colors.blueC : Colors.grayPrimaryColor,
                        paddingVertical: Screen.hp('2%'),
                      }]}

                    />
                  )
                })}
                <Button
                  text={"Reset"}
                  textBtn={{
                    fontSize: Dimens.textSizeSmall, color: Colors.white,
                  }}
                  visible={loading}
                  containerStyle={[c.Button, {
                    width: Screen.wp('28%'), paddingVertical: Screen.hp('2%'),
                    backgroundColor: Colors.grayPrimaryColor,

                  }]}
                  onPress={() => this.clear()}
                />
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => { this.state.lock ? this.decrementC() : null }}>
                    <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: 60 }]}
                      keyboardType={"number-pad"}
                      ref={input => {
                        this.isCover = input;
                      }}
                      onChangeText={(text) => this.setState({ coverInput: text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') }, () => {
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => { this.state.lock ? this.incrementC() : null }}>
                    {/* <Text style={c.signnormalText}>+</Text> */}
                    <Icons name={'add-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                  </View>
                </View>

                <View style={c.calView}>
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock ? this.decrementP() : null}>
                    <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: 60 }]}
                      keyboardType={"number-pad"}
                      editable={this.state.lock ? true : false}
                      onChangeText={(text) => this.setState({ pitchInput: text.substr(0, text.indexOf('.') + 3) }, () => {
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock ? this.incrementP() : null}>
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

                <View style={[c.calView, { paddingRight: 1 }]}>
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock ? this.decrementL() : null}>
                    <Icons name={'remove-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      style={[c.input, { width: Screen.wp('62%') }]}
                      keyboardType={"number-pad"}
                      editable={this.state.lock ? true : false}
                      onChangeText={(text) => this.setState({ firstLInput: text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') }, () => {
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
                  <TouchableOpacity activeOpacity={0.7} style={c.circle} onPress={() => this.state.lock ? this.incrementL() : null}>
                    <Icons name={'add-circle-outline'} size={40} color={Colors.grayPrimaryColor} />
                  </TouchableOpacity>
                  <View>
                  </View>
                </View>
              </View>
              <View style={{ paddingTop: 10 }}>
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
                {this.state.defaultTab==1? 
                <>
                {this.state.data.slice(0,this.state.visible).map((item, index) => {
                
                  return (
                    <View style={c.mainSheetView}>
                      <TouchableOpacity onPress={(id) => {
                        item.checked = !item.checked
                        this.picthAscehnding()
                      }}>
                        <Icon name={item.checked ? "check-square" : item.icon} size={25} color={item.checked ? Colors.green : Colors.grayPrimaryColor} />
              
                      </TouchableOpacity>
                      <View>
                        <Text style={c.normalText}>Sheet {index + 1}</Text>
                      </View>
                      <View style={c.sheetBox}>
                        <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.start.toFixed()}</Text>
                      </View>
                      <View style={c.sheetBox}>
                        <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.end.toFixed()}</Text>
                      </View>
                    </View>
                  )              
                })
              }
              </>
              :null}
                {this.state.defaultTab==2? 
                <>
                {this.state.disData.slice(0,10).map((item, index) => {
                
                  return (
                    <View style={c.mainSheetView}>
                      <TouchableOpacity onPress={(id) => {
                        item.checked = !item.checked
                        this.picthAscehnding()
                      }}>
                        <Icon name={item.checked ? "check-square" : item.icon} size={25} color={item.checked ? Colors.green : Colors.grayPrimaryColor} />
              
                      </TouchableOpacity>
                      <View>
                        <Text style={c.normalText}>Sheet {index + 1}</Text>
                      </View>
                      <View style={c.sheetBox}>
                        <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.start.toFixed()}</Text>
                      </View>
                      <View style={c.sheetBox}>
                        <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.end.toFixed()}</Text>
                      </View>
                    </View>
                  )              
                })
              }
              </>
              :null}
                {/* <FlatList
                  data={this.state.defaultTab === 1 ? this.state.data : this.state.defaultTab === 2 ? this.state.disData : null}
                  renderItem={this.renderList}
                  // horizontal={true}
                  keyExtractor={(item, index) => index}
                  // onEndReached={this.onScrollHandler}
                  maxToRenderPerBatch={20}
                  // onEndThreshold={0}
                /> */}
              </View>
              {this.state.defaultTab === 1 ?
                <>
                  {this.state.data.length > 0 ? 
                  <Button
                  text={Strings.more}
                  visible={false}
                  containerStyle={[c.Button, {
                    alignSelf: 'center',
                  }]}
                  onPress={() => this.state.firstLInput != 0 ? this.loadMore() : null} />
                  :
                null}
                    <Button
                      text={Strings.cal}
                      visible={false}
                      containerStyle={[c.Button, {
                        alignSelf: 'center',
                      }]}
                      onPress={() => this.state.firstLInput != 0 ? this.getvalue() : null} />
                </>
                : this.state.defaultTab === 2 ?
                  <>
                    {/* {this.state.disData.length > 0 ? null : */}
                      <Button
                        text={Strings.cal}
                        visible={false}
                        containerStyle={[c.Button, {
                          alignSelf: 'center',
                        }]}
                        onPress={() => this.state.firstLInput != 0 ? this.getvalue() : null} />
                    {/* } */}
                  </>
                    : null}
                   
              {/* {this.state.showbutton ?
                <View style={{ width: Screen.wp('100%'), alignItems: 'center' }}>
                // <Button
                //   text={this.state.showmore ? Strings.more : Strings.less}
                //   visible={loading}
                //   containerStyle={[c.Button, {
                //     alignSelf: 'center',
                //   }]}
                //   onPress={() => this.clear()}

                setTimeout(() => {
                  <CLoader />
                  this.setState({ showmore: !this.state.showmore })
                }, 300)}
                // />
                // : null}*/}
            </View>
          </ScrollView>
        </LinearGradient>
      </AppRoot>
    )
  }
  radians_to_degrees(radians)
  {
    let pi = Math.PI;
    return radians * (180/pi);
  }
  picthAscehnding = () => {
    const { data } = this.state;
    let text2 = this.state.pitchInput;
    let picth = Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput / picth;
    let fl = this.state.firstLInput;
    let tan =  Math.tan(this.state.pitchInput * Math.PI / 180);
    let tan1 = tan.toFixed(3);
    let x = Math.SQRT2.toFixed(3);
    let xy = x*x+tan1*tan1;
    let xyz = xy.toFixed(5);
    let squart = Math.sqrt(xyz).toFixed(3);
    let mesure = squart*this.state.coverInput;
    let rakeMesure = mesure.toFixed();
    let angle =  diff.toFixed(2) / this.state.coverInput;
    let angleCut =this.radians_to_degrees(Math.atan(angle)).toFixed(2);
    if (this.state.firstLInput != 0) {
      this.setState({
        diffrence: diff.toFixed(2),
        angleofCut: angleCut,
        measurement: rakeMesure,
    })
    }
  }
  picthDescending = () => {
    const { disData } = this.state;
    let text2 = this.state.pitchInput;
    let picth = Math.cos(text2 * Math.PI / 180);
    let diff = this.state.coverInput / picth;
    let fl = this.state.firstLInput;
    let tan =  Math.tan(this.state.pitchInput * Math.PI / 180);
    let tan1 = tan.toFixed(3);
    let x = Math.SQRT2.toFixed(3);
    let xy = x*x+tan1*tan1;
    let xyz = xy.toFixed(5);
    let squart = Math.sqrt(xyz).toFixed(3);
    let mesure = squart*this.state.coverInput;
    let rakeMesure = mesure.toFixed();
    let angle =  diff.toFixed(2) / this.state.coverInput;
    let angleCut =this.radians_to_degrees(Math.atan(angle)).toFixed(2);
    if (this.state.firstLInput != 0) {
      this.setState({
        diffrence: diff.toFixed(2),
        measurement: rakeMesure,
        angleofCut: angleCut,
      })
    }
  }
  incrementC = () => {
    let count = +this.state.coverInput + 1;
    this.setState({ coverInput: count.toString() })
  }
  decrementC = () => {
    let count = this.state.coverInput - 1;
    this.setState({ coverInput: count.toString() })
  }
  incrementP = () => {
    let count = +this.state.pitchInput + 1;
    this.setState({ pitchInput: count.toString() })
  }
  decrementP = () => {
    let count = this.state.pitchInput - 1;
    this.setState({ pitchInput: count.toString() })
  }
  incrementL = () => {
    let count = +this.state.firstLInput + 1;
    this.setState({ firstLInput: count.toString() })
  }
  decrementL = () => {
    let count = this.state.firstLInput - 1;
    this.setState({ firstLInput: count.toString() })
  }
  renderList = ({ item, index }) => {
    // console.log("item======>", item)
    return (
      <View style={c.mainSheetView}>
        <TouchableOpacity onPress={(id) => {
          item.checked = !item.checked
          this.picthAscehnding()
        }}>
          <Icon name={item.checked ? "check-square" : item.icon} size={25} color={item.checked ? Colors.green : Colors.grayPrimaryColor} />

        </TouchableOpacity>
        <View>
          <Text style={c.normalText}>Sheet {index + 1}</Text>
        </View>
        <View style={c.sheetBox}>
          <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.start.toFixed()}</Text>
        </View>
        <View style={c.sheetBox}>
          <Text style={[c.normalText, { paddingVertical: 5 }]}>{item.end.toFixed()}</Text>
        </View>
      </View>
    )
  }
  clear = () => {
    this.setState({
      data: [],
      disData: [],
      coverInput: 0,
      pitchInput: 0,
      firstLInput: 0,
      diffrence: 0,
      angleofCut: 0,
      measurement: 0,
    })

  }
  getvalue = () => {
    this.state.data=[];
    this.state.disData=[];
    let input = this.state.pitchInput;
    let picth = Math.cos(input * Math.PI / 180);
    let diff = this.state.coverInput / picth;
    let fl = this.state.firstLInput;
    const number = fl;
    //creating a multiplication table
    for (let i = 0; i <= 50000; i += diff) {
      // plus  i with number
      const result = +fl + i;
      const result2 = +fl - i;
      let change = result + diff;
      this.state.defaultTab === 1 
         ? this.state.data.push({ start: result, end: result + diff, checked: false, icon: 'square', })
        : this.state.defaultTab === 2
          ? result2 < 0 ? null: this.state.disData.push({ start: result2, end: result2 - diff, checked: false, icon: 'square', }) : null
    }
    this.state.defaultTab === 1 ?
      this.picthAscehnding()
      : this.state.defaultTab === 2 ?
        this.picthDescending() : null
  }

  loadMore = () => {
    setTimeout(() => {
      <CLoader />
      this.setState({visible:this.state.visible+10})
}, 300)
  }
}
