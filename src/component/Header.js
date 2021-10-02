import React, { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Colors, Dimens, Fonts, ImageView, Constants,Screen } from "../config/appConstants";
const pageStyle = StyleSheet.create({
  root: {
    paddingVertical: Screen.hp("1.5%"),
    backgroundColor: Colors.white,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 99999,
  },
  textstyle: {
    textAlign: "left",
    marginLeft: 5,
    paddingBottom: 5,
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeMedium,
  },
  btnstyle: {
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    marginRight: 5,
    borderRadius: 18,
  },
  flexView1:{
    flex: 0.6, alignItems: "center", flexDirection: "row"
  },
  flexView2:{
    flex: 0.4,
    alignItems: "flex-end",
    flexDirection: "row",
    marginRight: 5,
    justifyContent: "flex-end",
  }
});

class Header extends PureComponent<props> {
  state = {
    profile: null,
  };
  render() {
    const {
      openDrawer,
      onBack,
      text,
      drawer,
      returnKeyType,
      autoCapitalize,
      selectionColor,
      logOut,
      addLocation,
      onEdit,
      onFilter,
      onAdd,
      notification,
      placeholderTextColor,
      onChange,
      ...otherProps
    } = this.props;
    return (
        <GestureRecognizer
         onSwipeDown={onBack}
          config={Constants.config}
          style={pageStyle.root}>
         <View style={pageStyle.flexView1}>
            {openDrawer ? (
              <TouchableOpacity style={pageStyle.btnstyle} onPress={openDrawer}>
                <Image
                  resizeMode={"contain"}
                  style={{ height: "80%", width: "80%", marginBottom: 5 }}
                  source={ImageView.menu}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={pageStyle.btnstyle} onPress={onBack}>
                <Image
                  resizeMode={"contain"}
                  style={{ height: "80%", width: "80%", marginBottom: 5 }}
                  source={ImageView.back}
                />
              </TouchableOpacity>
            )}

            {text ? (
              <Text style={pageStyle.textstyle}>{text}</Text>
            ) : (
              <Image
                // resizeMode={"contain"}
                style={{ width: 30, height: 30,tintColor:Colors.primary }}
                source={ImageView.logo}
              />
            )}
          </View>

          <View style={pageStyle.flexView2}>
            <TouchableOpacity
              style={pageStyle.btnstyle}
              onPress={notification}
            >
              <Image
                resizeMode={"contain"}
                style={{
                  height: "60%",
                  width: "60%",
                  tintColor: "rgba(0, 0, 0,0.9)",
                  marginLeft: onAdd ? 0 : 10,
                }}
                source={ImageView.notification}
              />
            </TouchableOpacity>
            {addLocation?
            <TouchableOpacity
              style={pageStyle.btnstyle}
              onPress={addLocation}
            >
              <Image
                resizeMode={"contain"}
                style={{
                  height: "60%",
                  width: "60%",
                  tintColor: "rgba(0, 0, 0,0.9)",
                }}
                source={ImageView.location}
              />
            </TouchableOpacity>
            :null}
            {onAdd ? (
            <TouchableOpacity style={pageStyle.btnstyle} onPress={onAdd}>
              <Image
                resizeMode={"contain"}
                style={{
                  height: "60%",
                  width: "60%",
                  tintColor: "rgba(0, 0, 0,0.9)",
                }}
                source={ImageView.add}
              />
            </TouchableOpacity>
          ) : null}
          {onFilter ? (
            <TouchableOpacity style={pageStyle.btnstyle} onPress={onFilter}>
              <Icon
              name="filter"
              style={{color:Colors.primary}}
              size={20}></Icon>
              
            </TouchableOpacity>
          ) : null}
          {onEdit ? (
            <TouchableOpacity style={pageStyle.btnstyle} onPress={onEdit}>
              <Image
                resizeMode={"contain"}
                style={{
                  height: "60%",
                  width: "60%",
                  tintColor: "rgba(0, 0, 0,0.9)",
                }}
                source={ImageView.editBox}
              />
            </TouchableOpacity>
          ) : null}
          </View>
        </GestureRecognizer>
    );
  }
}
Header.propTypes = {
  text: PropTypes.string,
  openDrawer: PropTypes.func,
  onBack: PropTypes.func,
  onAdd: PropTypes.func,
  notification: PropTypes.func,
  returnKeyType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  selectionColor: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onChange: PropTypes.func,
  addLocation: PropTypes.func,
  onEdit:PropTypes.func
};

Header.defaultProps = {
  containerStyle: pageStyle.containerStyle,
  returnKeyType: "next",
  autoCapitalize: "none",
  selectionColor: "#c3d3d4",
};

export default Header;
