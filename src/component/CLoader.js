import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {BaseColor,Colors} from '../config/appConstants';

const styles = StyleSheet.create({
  mainConSty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000',
  },
});

export class CLoader extends Component {
  render() {
    const {size, color, otherTheme} = this.props;
    return (
      <View style={[styles.mainConSty, otherTheme]}>
        <ActivityIndicator
          size={size || 'large'}
          color={color || Colors.blueC }
          animating
        />
      </View>
    );
  }
}

export default CLoader;
