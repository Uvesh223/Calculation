/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Feather';
import CText from '../component/CText';
import {Colors} from '../config/appConstants';
import LinearGradient from 'react-native-linear-gradient';


const styles = StyleSheet.create({
  mainCon: {
    width: '100%',
    height: 55,
    backgroundColor: Colors.lightPurple,
    position: 'relative',
  },
  titleCon: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  leftBtnCon: {
    width: 55,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.whiteColor,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  defaultIconSty: {
    fontSize: 30,
    color: Colors.medium_gray,
  },
});

export default class CHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  onCleanText() {
    this.setState({searchText: ''});
  }

  render() {
    const {
      searchPlacholderText,
      title,
      leftIcon,
      leftIconName,
      textStyle,
      rightIcon,
      onBackPress,
      centerViewSty,
      otherCon,
      displaySearch,
      rightIconName,
      onRightAction,
      customeIconSty,
      customeIconRightSty,
      otherLeftIconViewSty,
      onGo,
      loader,
      onRefreshData,
      onSearchBack,
      displayUserImg,
      userImgURL,
      otherUserImgSty,
    } = this.props;

    if (displaySearch) {
      return (
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.whiteColor,
            height: 55,
            paddingLeft: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              onSearchBack();
            }}
            style={{
              backgroundColor: '#0000',
              width: 30,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name={leftIconName}
              style={[styles.defaultIconSty, customeIconSty]}
            />
          </TouchableOpacity>
          <View
            style={[
              {
                flex: 1,
                borderWidth: 0.5,
                borderColor: '#CCC',
                borderRadius: 45 /2,
                alignSelf: 'center',
                height: 45,
                padding: 2,
                backgroundColor: Colors.whiteColor,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              },
              otherCon,
            ]}>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 5,
              }}>
              <TextInput
                style={{
                  height: '100%',
                  width: '100%',
                  fontSize: 14,
                  paddingHorizontal: 10,
                }}
                autoCorrect={false}
                autoCapitalize="none"
                allowFontScaling={false}
                blurOnSubmit={false}
                multiline={false}
                numberOfLines={1}
                returnKeyType={'go'}
                underlineColorAndroid="#0000"
                placeholder={searchPlacholderText || 'Search'}
                onChangeText={(text) => {
                  if (text === '') {
                    onRefreshData();
                    this.setState({searchText: text});
                  } else {
                    this.setState({searchText: text}, () => {
                      onGo(this.state.searchText);
                    });
                  }
                }}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                  onGo(this.state.searchText);
                }}
                value={this.state.searchText}
              />
            </View>
            <View
              style={{
                width: 45,
                height: '100%',
                backgroundColor: '#0000',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              {loader ? (
                <ActivityIndicator
                  size="small"
                  color={Colors.white}
                  animating
                />
              ) : (
                <MICon
                  name="search"
                  style={{fontSize: 30, color: Colors.white}}
                />
              )}
            </View>
          </View>
        </View>
      );
    }

    return (
      // <View style={[styles.mainCon, otherCon]}>
      <LinearGradient
        start={{ x: 0, y: 0}} end={{ x: 1, y: 0}}
        colors={[Colors.whiteColor,Colors.whiteColor]}
        style={[styles.mainCon, otherCon]}>
        {leftIcon ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              if (_.isFunction(onBackPress)) {
                onBackPress();
              }
            }}
            style={[
              {
                width: 30,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0000',
                position: 'absolute',
                top: 0,
                left: 25,
                zIndex: 10,
              },
              otherLeftIconViewSty,
            ]}>
            <Icon
              name={leftIconName}
              style={[styles.defaultIconSty, customeIconSty]}
            />
          </TouchableOpacity>
        ) : null}
        <View style={[styles.titleCon, centerViewSty, {position: 'relative'}]}>
          {displayUserImg ?
            <View style={[{position: 'absolute', left: 55, alignItems: 'center', justifyContent: 'center'}, otherUserImgSty]}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  overflow: 'hidden',
                }}
                source={{uri: userImgURL}}
              />
            </View>
           : null}
          <CText title3 blackColor numberOfLines={1} style={textStyle}>
            {title}
          </CText>
        </View>
        {rightIcon ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              if (_.isFunction(onRightAction)) {
                onRightAction();
              }
            }}
            style={[
              {
                right: 0,
                width: 55,
                height: 54,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0000',
                position: 'absolute',
                top: 0,
                zIndex: 10,
              },
            ]}>
            <Icon
              name={rightIconName}
              style={[styles.defaultIconSty, customeIconRightSty]}
            />
          </TouchableOpacity>
        ) : null}
      {/* </View> */}
      </LinearGradient>
    );
  }
}

CHeader.propTypes = {
  title: PropTypes.string,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  displaySearch: PropTypes.bool,
  leftIconName: PropTypes.string,
  onGo: PropTypes.func,
  onSearchBack: PropTypes.func,
  displayUserImg: PropTypes.bool,
  userImgURL: PropTypes.string,
};

CHeader.defaultProps = {
  title: 'Header Title',
  leftIcon: false,
  rightIcon: false,
  displaySearch: false,
  displayUserImg: false,
  leftIconName: 'keyboard-backspace',
  userImgURL: '',
  onGo: () => {},
  onSearchBack: () => {},
};
