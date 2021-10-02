import React, { PureComponent } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { Colors, Dimens, Fonts,Screen } from "../config/appConstants";

const pageStyle = StyleSheet.create({
  containerStyle: {
    borderRadius: 5,
    shadowColor: "#878787",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.0,
    elevation: 2,
    backgroundColor: Colors.icons,
    alignItems: "center",
    padding: Screen.hp("2%"),
  },
  textBtn: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeSmall,
    color: Colors.white,
  },
});

class Button extends PureComponent<props> {
  render() {
    const { onPress, text, containerStyle, String, visible } = this.props;
    return (
      <TouchableOpacity
        style={{}}
        activeOpacity={visible ? 1 : 0.6}
        onPress={visible ? null : onPress}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[Colors.blueC,Colors.blueC]}
          style={(pageStyle.containerStyle, containerStyle)}
        >
          {visible ? (
            <ActivityIndicator size="small" color={"white"} />
          ) : (
            <Text style={pageStyle.textBtn}>{text}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  containerStyle: PropTypes.any,
  onPress: PropTypes.func,
  String: PropTypes.any,
};

Button.defaultProps = {
  containerStyle: pageStyle.containerStyle,
};

export default Button;
