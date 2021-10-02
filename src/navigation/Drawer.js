import React from 'react';
import { Sidebar } from '../component';
import { Colors } from '../config/appConstants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  aboutScreen,
  hipScreen,
  introScreen,
  riseScreen,
} from './Route';
const Drawer = createDrawerNavigator();
export default function DrawerScreen() {
    return (
        <Drawer.Navigator
            drawerType="slide"
            overlayColor="transparent"
            drawerStyle={{
                backgroundColor: '#252b3b',
                width: '70%',
                elevation: 1
            }} initialRouteName="introScreen" drawerContent={(props) => <Sidebar {...props} />}>
            <Drawer.Screen name={'introScreen'} component={introScreen} />
            <Drawer.Screen name={'hipScreen'} component={hipScreen} />
            <Drawer.Screen name={'aboutScreen'} component={aboutScreen} />
            {/* <Drawer.Screen name={'riseScreen'} component={riseScreen} /> */}
        </Drawer.Navigator>
    );
}