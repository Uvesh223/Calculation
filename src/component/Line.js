import React, { PureComponent } from 'react';
import {
  View,Dimensions,StatusBar
} from 'react-native';
var width = Dimensions.get("window").width;
class Line extends PureComponent <props> {
 render() {
    const { navigation } = this.props
    return (
        <View>
        <View  style={[this.props.style,{width:width*1/3,marginHorizontal:1}]}>
            <StatusBar hidden={false} />
        </View>
        </View>
    );
  }
}
export default Line;
