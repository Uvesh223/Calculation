import React, { PureComponent } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import {Colors} from '../config/appConstants'
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:Colors.viewBox
  }
});
export default class AppRoot extends PureComponent {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle='dark-content' hidden={false} backgroundColor={Colors.white} />
        <SafeAreaView style={styles.container}>
          {this.props.children}
        </SafeAreaView>
      </View>
    );
  }
}