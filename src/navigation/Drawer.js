import React, { Component } from "react";
import { Sidebar } from '../component';
import { Colors } from '../config/appConstants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  aboutScreen,
  HipScreen,
  IntroScreen,
  riseScreen,
  open
} from './Route';
import {
    Screen,
  } from "../config/appConstants";
const Drawer = createDrawerNavigator();
// export default class DrawerScreen() {
    export default class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,    
        }
      }
      componentDidMount() {
        Screen.OrientationChange(this);
        AsyncStorage.getItem('first_time').then((value) => {
            if(value !== null){
                this.setState({ showRealApp: true});
                console.log("not null");
                this.props.navigation.navigate('Home');
            }
            else{
                this.setState({ showRealApp:false });
                console.log("null");
                this.props.navigation.navigate('IntroScreen');

            }
          });      
      }
    
      componentWillUnmount() {
        Screen.OrientationListener();
      }
render() {
    console.log("showRealApp===>",this.state.showRealApp)
    return (
        <Drawer.Navigator
            drawerType="slide"
            overlayColor="transparent"
            drawerStyle={{
                backgroundColor: '#252b3b',
                width: '70%',
                elevation: 1
            }}
            //  initialRouteName={ AsyncStorage.getItem("first_time").then(value =>(value == null))?
            initialRouteName={AsyncStorage.getItem('first_time').then((value) => {
            value !== null}) ? "hipScreen":"IntroScreen"}drawerContent={(props) => <Sidebar {...props} />}>
            <Drawer.Screen name={'open'} component={open} />
            <Drawer.Screen name={'IntroScreen'} component={IntroScreen} />
            <Drawer.Screen name={'hipScreen'} component={HipScreen} />
            <Drawer.Screen name={'riseScreen'} component={riseScreen} />
            <Drawer.Screen name={'aboutScreen'} component={aboutScreen} />
        </Drawer.Navigator>
    );
}
}