import React, {Component} from 'react';
import {Text, StyleSheet, I18nManager} from 'react-native';
import PropTypes from 'prop-types';
import {FontFamily, FontWeight, Colors, Typography} from '../config/appConstants';
import _ from 'lodash';

// Remove font scale
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      //props style
      header,
      title1,
      title2,
      title3,
      headline,
      body1,
      body2,
      callout,
      subhead,
      footnote,
      caption1,
      caption2,
      overline,
      // props font
      thin,
      ultraLight,
      light,
      regular,
      medium,
      semibold,
      bold,
      heavy,
      black,
      //custom color
      primaryColor,
      darkPrimaryColor,
      lightPrimaryColor,
      accentColor,
      textSecondaryColor,
      grayColor,
      whiteColor,
      fieldColor,
      grayPrimaryColor,
      //numberOfLines
      numberOfLines,
      //custom
      style,
      onPress,
      textAlignCenter,
      fontFamilyMedium,
      grayTextColor,
      blackColor,
      textAlignLeft,
      textAlignRight,
    } = this.props;
    return (
      <Text
        style={StyleSheet.flatten([
          Typography.default,
          I18nManager.isRTL // handling RTL on Text component
            ? {textAlign: 'left', marginLeft: 5}
            : {textAlign: 'left'},
          header && Typography.header,
          title1 && Typography.title1,
          title2 && Typography.title2,
          title3 && Typography.title3,
          headline && Typography.headline,
          body1 && Typography.body1,
          body2 && Typography.body2,
          callout && Typography.callout,
          subhead && Typography.subhead,
          footnote && Typography.footnote,
          caption1 && Typography.caption1,
          caption2 && Typography.caption2,
          overline && Typography.overline,
          //custom for font
          thin && StyleSheet.flatten({fontWeight: FontWeight.thin}),
          ultraLight &&
            StyleSheet.flatten({
              fontWeight: FontWeight.ultraLight,
            }),
          light && StyleSheet.flatten({fontWeight: FontWeight.light}),
          regular && StyleSheet.flatten({fontWeight: FontWeight.regular}),
          medium && StyleSheet.flatten({fontWeight: FontWeight.medium}),
          semibold && StyleSheet.flatten({fontWeight: FontWeight.semibold}),
          bold && StyleSheet.flatten({fontWeight: FontWeight.bold}),
          heavy && StyleSheet.flatten({fontWeight: FontWeight.heavy}),
          black && StyleSheet.flatten({fontWeight: FontWeight.black}),
          // default color
          StyleSheet.flatten({
            color: Colors.textPrimaryColor,
          }),
          //custom for color
          primaryColor && StyleSheet.flatten({color: Colors.themeColor}),
          darkPrimaryColor &&
            StyleSheet.flatten({
              color: Colors.themeColor,
            }),
          lightPrimaryColor &&
            StyleSheet.flatten({
              color: Colors.themeColor,
            }),
          accentColor && StyleSheet.flatten({color: Colors.accentColor}),
          textSecondaryColor &&
            StyleSheet.flatten({
              color: Colors.textSecondaryColor,
            }),
          grayColor && StyleSheet.flatten({color: Colors.grayColor}),
          whiteColor && StyleSheet.flatten({color: Colors.whiteColor}),
          fieldColor && StyleSheet.flatten({color: Colors.fieldColor}),
          textAlignCenter && StyleSheet.flatten({textAlign: 'center'}),
          textAlignLeft && StyleSheet.flatten({textAlign: 'left'}),
          textAlignRight && StyleSheet.flatten({textAlign: 'right'}),
          grayTextColor && StyleSheet.flatten({color: Colors.grayTextColor}),
          blackColor && StyleSheet.flatten({color: Colors.blackColor}),
          fontFamilyMedium &&
            StyleSheet.flatten({
              fontFamily: FontFamily.bold,
            }),
          grayPrimaryColor &&
            StyleSheet.flatten({color: Colors.grayPrimaryColor}),
          style && style,
        ])}
        numberOfLines={numberOfLines}
        onPress={_.isFunction(onPress) ? onPress : null}>
        {this.props.children}
      </Text>
    );
  }
}

// Define typechecking
Index.propTypes = {
  //define style
  header: PropTypes.bool,
  title1: PropTypes.bool,
  title2: PropTypes.bool,
  title3: PropTypes.bool,
  headline: PropTypes.bool,
  body1: PropTypes.bool,
  body2: PropTypes.bool,
  callout: PropTypes.bool,
  subhead: PropTypes.bool,
  footnote: PropTypes.bool,
  caption1: PropTypes.bool,
  caption2: PropTypes.bool,
  overline: PropTypes.bool,
  //define font custom
  thin: PropTypes.bool,
  ultraLight: PropTypes.bool,
  light: PropTypes.bool,
  regular: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  heavy: PropTypes.bool,
  black: PropTypes.bool,
  //custon for text color
  primaryColor: PropTypes.bool,
  darkPrimaryColor: PropTypes.bool,
  lightPrimaryColor: PropTypes.bool,
  accentColor: PropTypes.bool,
  textSecondaryColor: PropTypes.bool,
  grayColor: PropTypes.bool,
  whiteColor: PropTypes.bool,
  fieldColor: PropTypes.bool,
  grayPrimaryColor: PropTypes.bool,
  textAlignCenter: PropTypes.bool,
  grayTextColor: PropTypes.bool,
  //numberOfLines
  numberOfLines: PropTypes.number,
  //custom style
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node, // plain text
  onPress: PropTypes.any,
  fontFamilyMedium: PropTypes.bool,
  blackColor: PropTypes.bool,
  textAlignLeft: PropTypes.bool,
  textAlignRight: PropTypes.bool,
};

Index.defaultProps = {
  //props for style
  header: false,
  title1: false,
  title2: false,
  title3: false,
  headline: false,
  body1: false,
  body2: false,
  callout: false,
  subhead: false,
  footnote: false,
  caption1: false,
  caption2: false,
  overline: false,
  //props for font
  thin: false,
  ultraLight: false,
  light: false,
  regular: false,
  medium: false,
  semibold: false,
  bold: false,
  heavy: false,
  black: false,
  //custon for text color
  primaryColor: false,
  darkPrimaryColor: false,
  lightPrimaryColor: false,
  accentColor: false,
  textSecondaryColor: false,
  grayColor: false,
  whiteColor: false,
  fieldColor: false,
  grayPrimaryColor: false,
  textAlignCenter: false,
  grayTextColor: false,
  //numberOfLines
  numberOfLines: 50000,
  //custom style
  style: {},
  children: '',
  onPress: null,
  fontFamilyMedium: false,
  blackColor: false,
  textAlignLeft: false,
  textAlignRight: false,
};
