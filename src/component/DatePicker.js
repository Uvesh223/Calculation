import React from "react";
import { View, StyleSheet, Platform, Dimensions, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors, Screen, Fonts, Dimens } from "../config/appConstants";
const { width, height } = Dimensions.get("window");
const DatePicker = ({
  containerStyle,
  onDateChange,
  label,
  isVisible,
  onChange,
  minimumDate,
  mode,
  ...props
}) => (
  <View style={[s.datePickerWrap, containerStyle]}>
    {label ? <Text style={s.txtTitle}>{label}</Text> : null}
    {isVisible &&
      (Platform.OS == "ios" ? (
        <Modal
          contentContainerStyle={{ flex: 1 }}
          visible={isVisible}
          onDismiss={() => {}}
        >
          <View style={{}}>
            {/* <Text
              style={tailwind(
                "bg-kh-primary text-center py-4 font-bold text-2xl text-white tracking-wider"
              )}
            >
              {dayjs(
                this.state.iosHeaderTime ? this.state.iosHeaderTime : new Date()
              ).format("hh:mm A")}
            </Text> */}

            <View style={{ flex: 1 }}>
              <DateTimePicker
                testID="dateTimePicker"
                textColor="#000"
                value={iosHeaderDate ? iosHeaderDate : new Date()}
                mode={mode?mode:"date"}
                is24Hour={true}
                display="spinner"
                style={{ flex: 1 }}
                onChange={(event, selectedDate) => {
                  setIosHeaderDate(selectedDate);
                }}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    displayClock: false,
                    iosHeaderTime: null,
                  });
                }}
                style={{}}
              >
                <Text style={{}}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setIOSSlotTime();
                }}
                style={{}}
              >
                <Text style={{}}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode?mode:"date"}
          is24Hour={true}
          display="default"
          style={{ flex: 1 }}
          minimumDate={minimumDate}
          onChange={onChange}
        />
      ))}
  </View>
);
const s = StyleSheet.create({
  datePickerWrap: {
    flex: 1,
    color: Colors.blacklight,
  },
  datePicker: {
    justifyContent: "center",
    width: "100%",
    height: (width / 350) * 48,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_gray,
  },
  txtTitle: {
    color: Colors.blacklight,
    paddingHorizontal: Screen.wp(1),
    marginBottom: -Screen.hp(1),
    fontSize: 14,
    fontFamily: Fonts.Bold,
  },
});
export default DatePicker;
