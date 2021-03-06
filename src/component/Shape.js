import React from 'react'
import { View, Text,Image } from 'react-native'
import c from '../styles/commonStyle';
import {ImageView,Screen, Colors} from '../config/appConstants'
import LinearGradient from 'react-native-linear-gradient';
export default function Shape({text}) {
    return (
        <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={[Colors.white,Colors.white]}
        style={c.Lshape}>
            <Image
             resizeMode={'contain'}
             source={ImageView.sheet} 
             style={{height: Screen.hp('45%'), alignSelf: 'center', width: Screen.wp('90%')}} />   
        </LinearGradient>
    )
}
