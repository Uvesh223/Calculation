import React, { PureComponent } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  Image,
  Text,
} from "react-native";
import { Colors, Dimens, Fonts,Screen } from "../config/appConstants";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import c from "../styles/commonStyle";
const s = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 5
  },
  textInput: {
    flex: 1,
    fontSize: Dimens.textSizeSmall,
    color: Colors.blacklight,
  },
  errorStyle: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    paddingHorizontal: Screen.wp(4),
    padding: Screen.wp(0.4),
    color: Colors.red
  },
  txtTitle: {
    color: Colors.blacklight,
    paddingHorizontal: Screen.wp(1),
    marginBottom: -Screen.hp(1),
    fontSize: 14,
    fontFamily: Fonts.Bold,
  },
});

class MyTextInput extends PureComponent<props> {
  state = {
    isFocused: false,
    isError: false,
    inputBorderColor: Colors.medium_gray,
  };

  handleFocus = (event) => {
    this.setState({ isFocused: true, inputBorderColor: Colors.primary });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };
  

  handleBlur = (event) => {
    this.setState({
      isFocused: false,
      inputBorderColor: Colors.medium_gray,
      isError: false,
    });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  getInnerRef = () => this.ref;

  render() {
    const { isFocused, isError } = this.state;
    const {
      title,
      leftIcon,
      containerStyle,
      returnKeyType,
      imagename,
      autoCapitalize,
      selectionColor,
      placeholderTextColor,
      multiline,
      textInputstyle,
      rightPress,
      rightImagename,
      imagecolor,
      fontBold,
      borderDisable,
      errorText,
      keyboardType,
      ...otherProps
    } = this.props;

    return (
      <View style={[s.container,containerStyle,{marginVertical:errorText?Screen.hp(1):0}]}>
        {title ? <Text style={s.txtTitle}>{title}</Text> : null}
        <View style={c.flexRow}>
          {imagename ? (
            <View
              style={{
                flex: 0.15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode={"contain"}
                style={{ height: 18, width: 18,tintColor:Colors.primary }}
                source={imagename}
              />
            </View>
          ) : null}
          <TextInput
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholderTextColor={placeholderTextColor}
            autoCapitalize={autoCapitalize}
            selectionColor={Colors.primary}
            style={[
              s.textInput,
              textInputstyle,
              {
                minHeight: multiline ? 240 : null,
                fontFamily: fontBold ? Fonts.Regular : Fonts.Regular,
                borderBottomWidth: borderDisable ? 0 : 0.6,
                borderColor: this.state.inputBorderColor,
                textAlignVertical: multiline ? "top" : null,
              },
            ]}
            
            multiline={multiline}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            spellCheck={false}
            ref={r => (this.ref = r)}
            {...otherProps}
          />
          {rightPress ? (
            <View style={{ flex: 0.15 }}>
              <TouchableOpacity onPress={rightPress}>
                <Image
                  resizeMode={"contain"}
                  style={{
                    height: 12,
                    width: 12,
                    tintColor: imagecolor ? imagecolor : undefined,
                  }}
                  source={rightImagename}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        {errorText ? (
          <Text style={s.errorStyle}>{errorText}</Text>
         ) : null}
      </View>
    );
  }
}

MyTextInput.propTypes = {
  containerStyle: PropTypes.any,
  textInputstyle: PropTypes.object,
  imagename: PropTypes.any,
  multiline: PropTypes.bool,
  borderDisable: PropTypes.bool,
  fontBold: PropTypes.bool,
  returnKeyType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  selectionColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  rightPress: PropTypes.func,
  rightImagename: PropTypes.any,
  imagecolor: PropTypes.string,
  title: PropTypes.string,
  errorText: PropTypes.string,
  otherProps:PropTypes.any,
};

MyTextInput.defaultProps = {
  returnKeyType: "next",
  autoCapitalize: "none",
  selectionColor: "#c3d3d4",
};
export default MyTextInput;
