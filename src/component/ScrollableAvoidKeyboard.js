import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class ScrollableAvoidKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style, contentContainerStyle,keyboardShouldPersistTaps ,scrollEnabled} = this.props;
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        bouncesZoom={false}
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        style={[s.container, style]}
        contentContainerStyle={[s.contentContainer, contentContainerStyle]}
        enableOnAndroid={true}
        scrollEnabled={scrollEnabled}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        {...this.props}
      />
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default ScrollableAvoidKeyboard;
