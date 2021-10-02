/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Animated,
  StyleSheet,
  View,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import CountryPicker from 'react-native-country-picker-modal';
import moment from 'moment';
import { Colors } from '../config/appConstants';

// Remove font scale
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
DatePicker.defaultProps = DatePicker.defaultProps || {};
DatePicker.defaultProps.allowFontScaling = false;

const IOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
  datePickerCont: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
  },
  MT10: {
    marginTop: 0,
    position: 'relative',
    backgroundColor: '#0000',
    marginVertical:20,
  },
  mainViewSty: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderBottomColor:'grey',
    borderRadius: 5,
    paddingHorizontal: 5,
    overflow:'hidden',
    // width:'80%',
  },
  leftIconViewSty: {
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryPickerView: {
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: -1,
    backgroundColor: '#ddd',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  codeTextStyle: {
    fontSize: 14,
    color: Colors.whiteColor,
    marginBottom: 1,
  },
  pickerModalStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    opacity: 0,
    zIndex: 10,
  },
});

class CInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      TopValue: new Animated.Value(16),
      HrOpacity: new Animated.Value(0),
    };
  }

  updateTopValue = () => {
    if (this.state.focused === true) {
      Animated.timing(this.state.TopValue, {
        toValue: -9,
        timing: 1500,
      }).start();
      Animated.timing(this.state.HrOpacity, {
        toValue: 1,
        timing: 1000,
      }).start();
    } else {
      Animated.timing(this.state.TopValue, {
        toValue: 16,
        timing: 1500,
      }).start();
      Animated.timing(this.state.HrOpacity, {
        toValue: 0,
        timing: 50,
      }).start();
    }
  };

  onFocus() {
    this.setState({focused: true}, () => {
      this.updateTopValue();
      if (this.props.onFocus) {
        this.props.onFocus();
      }
    });
  }

  onBlur() {
    this.setState({focused: false}, () => {
      this.updateTopValue();
      if (this.props.onBlur) {
        this.props.onBlur();
      }
    });
  }

  focus() {
    if (this.input !== undefined && this.input !== null) {
      if (this.props.datePicker) {
        this.input.onPressDate();
      } else {
        this.input.focus();
      }
    }
  }

  handlePicker = val => {
    const {countryValue, editable} = this.props;
    if (countryValue && editable) {
      countryValue(val);
      this.setState({openPicker: false});
    }
  };

  render() {
    const {focused, date, TopValue, HrOpacity, openPicker} = this.state;
    const {
      aOpacity,
      leftIconSty,
      inputStyle,
      datePicker,
      onSubmitEditing,
      onChangeText,
      textArea,
      value,
      placeholder,
      minDate,
      format,
      maxDate,
      disable,
      mode,
      headerTitle,
      isRequired,
      datePickerMainViewStyle,
      changeHeadTitle,
      changeViewWidthSty,
      fieldIconName,
      inputContainerStyle,
      editable,
      phone,
      DatePickerIConName,
      iconDatePickerHidden,
      customStyles,
      leftIconHidden,
      changeIcon,
      currentDate,
    } = this.props;

    const teaxArea = IOS ? 100 : 'auto';
    const normalText = 50;
    const today = moment();

    const values = today.format('YYYY') - 19;
    const month = today.format('MM');
    const Days =  today.format('DD');
    const MaxDateValu = `${values}-${month}-${Days}`;

    if (datePicker) {
      return (
        <View
          style={[
            styles.MT10,
            changeViewWidthSty,
            {
              elevation: focused ? 2 : 0,
            },
          ]}>
          {headerTitle !== '' ? (
            <Animated.View
              style={{
                height: 1.5,
                backgroundColor: '#0000',
                position: 'absolute',
                top: 0,
                paddingHorizontal: headerTitle.length * 4 + 2,
                left: 7,
                zIndex: 5,
                opacity: HrOpacity,
              }}
            />
          ) : null}

          {headerTitle !== '' ? (
            <Animated.Text
              allowFontScaling={false}
              numberOfLines={1}
              style={[
                {
                  position: 'absolute',
                  top: TopValue,
                  left: 15,
                  opacity: focused ? 1 : 0,
                  backgroundColor: '#0000',
                  zIndex: 5,
                  fontSize: 12,
                  color: Colors.primaryColor,
                  lineHeight: 15,
                  marginBottom: 5,
                },
                changeHeadTitle,
              ]}>
              {headerTitle}
              {isRequired ? (
                <Text
                  allowFontScaling={false}
                  style={{color: 'red', fontSize: 21}}>
                  *
                </Text>
              ) : null}
            </Animated.Text>
          ) : null}
          <View
            style={[
              styles.mainViewSty,
              {
                borderColor: focused
                  ? Colors.primaryColor
                  : Colors.primaryColor,
                height: textArea ? teaxArea : normalText,
                justifyContent: textArea ? 'flex-start' : 'center',
              },
              datePickerMainViewStyle,
            ]}>
            <DatePicker
              style={{
                justifyContent: 'center',
                width: '100%',
                fontSize: 14,
                backgroundColor: '#0000',
                paddingLeft: 10,
                color: Colors.whiteColor,
              }}
              date={date || value}
              mode={mode}
              placeholder={placeholder}
              format={format}
              disabled={disable}
              maxDate={currentDate || MaxDateValu}
              iconComponent={
                iconDatePickerHidden ? null : (
                  <Icon
                    name={DatePickerIConName}
                    style={{
                      fontSize: 16,
                      color: !_.isEmpty(value)
                        ? Colors.primaryColor
                        : Colors.grayColor,
                      paddingRight: 15,
                    }}
                  />
                )
              }
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={
                ({
                  dateIcon: {
                    position: 'absolute',
                    right: 20,
                    top: 4,
                    marginLeft: 0,
                    paddingRight: 10,
                  },
                  dateInput: {
                    width: '50%',
                    borderWidth: 0,
                    alignItems: 'flex-start',
                  },
                  disabled: {
                    backgroundColor: '#F6F6F6',
                    height: 0,
                  },
                  dateText: {
                    fontSize: 14,
                    color: Colors.whiteColor,
                  },
                  placeholderText: {
                    fontSize: 14,
                    color: Colors.grayColor,
                  },
                },
                customStyles)
              }
              ref={o => {
                this.input = o;
              }}
              onDateChange={dDate => {
                this.setState({date: dDate}, () => {
                  if (onChangeText) {
                    onChangeText(dDate);
                  }
                  setTimeout(() => {
                    if (onSubmitEditing) {
                      onSubmitEditing();
                    }
                  }, 1000);
                });
              }}
            />
          </View>
        </View>
      );
    }
    return (
      <View
        style={[
          styles.MT10,
          {
            elevation: focused ? 2 : 0,
          },
          changeViewWidthSty,
        ]}>
        {headerTitle !== '' ? (
          <Animated.View
            style={{
              height: 1.5,
              backgroundColor: '#0000',
              position: 'absolute',
              top: 0,
              paddingHorizontal: headerTitle.length * 4 + 2,
              left: 7,
              zIndex: 5,
              opacity: HrOpacity,
            }}
          />
        ) : null}

        {headerTitle !== '' ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.onFocus()}
          style={{ backgroundColor: focused ? Colors.whiteColor : '#0000' ,  zIndex: 5}}
        >
          <Animated.Text
            allowFontScaling={false}
            numberOfLines={1}
            style={[
              {
                position: 'absolute',
                top: TopValue,
                left: 15,
                opacity: focused ? 1 : 0,
                backgroundColor: focused ? Colors.whiteColor : '#0000',
                zIndex: 5,
                fontSize: 12,
                color: Colors.primaryColor,
                lineHeight: 15,
                marginBottom: 5,
              },
              changeHeadTitle,
            ]}>

            {headerTitle}
            {isRequired ? (
              <Text
                allowFontScaling={false}
                style={{color: 'red', fontSize: 21}}>
                *
              </Text>
            ) : null}

          </Animated.Text>
          </TouchableOpacity>
        ) : null}
        <View
          style={[
            styles.mainViewSty,
            {
              borderColor: focused
                ? Colors.primaryColor
                : Colors.primaryColor,
              height: textArea ? teaxArea : normalText,
              justifyContent: textArea ? 'flex-start' : 'center',
              backgroundColor: !editable && !textArea ? '#e5e5e5' : '',
            },
            inputContainerStyle,
          ]}>
          {_.isObject(phone) && !_.isEmpty(phone) ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.countryPickerView}
              onPress={() =>
                editable ? this.setState({openPicker: true}) : null
              }>
              <CountryPicker
                {...{
                  translation: 'eng',
                  onSelect: val => this.handlePicker(val),
                  countryCode: phone.cca2,
                  cca2: phone.cca2,
                  withFilter: true,
                  withAlphaFilter: true,
                  withFlagButton: true,
                  withFlag: true,
                  onClose: () => this.setState({openPicker: false}),
                  placeholder: '',
                }}
                visible={openPicker}
              />
              <Text style={styles.codeTextStyle}>{phone.pCode}</Text>
            </TouchableOpacity>
          ) : null}

          <View style={{flex: 1}}>
            <TextInput
              {...this.props}
              ref={o => {
                this.input = o;
              }}
              placeholderTextColor={focused ? '#0000' : Colors.grayColor}
              selectionColor={Colors.themeColor}
              style={[
                textArea ? {textAlignVertical: 'top'} : null,
                {
                  paddingLeft: _.isObject(phone) && !_.isEmpty(phone) ? 0 : 10,
                  width: '100%',
                  fontSize: 14,
                  backgroundColor: Colors.whiteColor,
                  color: Colors.blackColor,
                },
                inputStyle,
              ]}
              editable={editable}
              autoCorrect={false}
              autoCapitalize="none"
              allowFontScaling={false}
              blurOnSubmit={false}
              multiline={textArea}
              numberOfLines={textArea ? 5 : 1}
              returnKeyType={'next'}
              placeholder={placeholder}
              underlineColorAndroid="#0000"
              onFocus={() => this.onFocus()}
              onBlur={() => this.onBlur()}
            />
          </View>

          {leftIconHidden ? null : (
            <TouchableOpacity
              activeOpacity={aOpacity}
              style={[styles.leftIconViewSty, leftIconSty]}
              onPress={() => {
                if (_.isFunction(changeIcon)) {
                  changeIcon();
                }
              }}>
              <Icon
                name={fieldIconName}
                style={{
                  fontSize: 25,
                  color: focused ? Colors.themeGreen: '#696969',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

CInput.propTypes = {
  inputStyle: PropTypes.any,
  datePickerMainViewStyle: PropTypes.any,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  datePicker: PropTypes.bool,
  disable: PropTypes.bool,
  format: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  textArea: PropTypes.bool,
  mode: PropTypes.string,
  headerTitle: PropTypes.string,
  fieldIconName: PropTypes.string,
  inputContainerStyle: PropTypes.any,
  editable: PropTypes.bool,
  phone: PropTypes.objectOf(PropTypes.any),
  countryValue: PropTypes.func,
  DatePickerIConName: PropTypes.string,
  iconDatePickerHidden: PropTypes.bool,
  customStyles: PropTypes.any,
  leftIconHidden: PropTypes.bool,
  aOpacity: PropTypes.number,
  changeIcon: PropTypes.func,
  onPressHeader: PropTypes.func,
};

CInput.defaultProps = {
  aOpacity: 1,
  inputStyle: null,
  onFocus: null,
  onBlur: null,
  datePicker: false,
  format: 'YYYY-MM-DD',
  onSubmitEditing: null,
  onChangeText: null,
  placeholder: 'Default Placeholder',
  textArea: false,
  disable: false,
  mode: 'date',
  headerTitle: '',
  datePickerMainViewStyle: null,
  fieldIconName: '',
  inputContainerStyle: {},
  editable: true,
  phone: {},
  countryValue: null,
  DatePickerIConName: 'calendar',
  iconDatePickerHidden: false,
  customStyles: {},
  leftIconHidden: false,
  changeIcon: () => {},
};

export default CInput;
