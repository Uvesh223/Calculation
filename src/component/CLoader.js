import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {BaseColor} from '../../app/config';

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
          color={color || BaseColor.themePurple}
          animating
        />
      </View>
    );
  }
}

export default CLoader;
