import React, { Component } from 'react';
import { Login, Home } from '../navigation/NavigationHelper';
import { Image, StyleSheet, SafeAreaView, StatusBar, Modal, Dimensions, View, Text, TouchableOpacity,Linking } from 'react-native';
import { connect } from 'react-redux';
import { ImageView, Fonts, Screen, Colors } from '../config/appConstants';
import LinearGradient from 'react-native-linear-gradient';
import { PrefManager } from '../utils';
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  imgStyle: {
    height: Screen.hp('40%'),
    alignSelf: 'center',
    width: Screen.wp('70%')
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.themeGreen1,
  },
  ModalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  netAlert: {
    overflow: "hidden",
    borderRadius: 10,
    shadowRadius: 10,
    width: width,
    height: height,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  netAlertContent: {
    flex: 1,
    padding: 20,
  },
  netAlertTitle: {
    fontSize: 20,
    paddingTop: 20,
    color: Colors.primary,
    textAlign: "center",
    fontFamily: Fonts.Bold,
  },
  netAlertDesc: {
    fontSize: 16,
    paddingTop: 10,
    alignSelf: "center",
    width: width * 0.8,
    color: Colors.primary,
    fontFamily: Fonts.Bold,
    paddingVertical: 5,
    textAlign: "center",
  },
})
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      txt: "Appointgem is currently down for maintenance",
      flag: false,
      Appversion: true,
    }
    // props.getAppVersion()
    setTimeout(() => {
          this.props.navigation.dispatch(Home);
    }, 2000);
  }
  
  componentDidMount() {
    Screen.OrientationChange(this);
  }

  componentWillUnmount() {
    Screen.OrientationListener();
  }
  
  render() {
    const { } = this.props
    return (
      <LinearGradient
        start={{ x: 0, y: 0}} end={{ x: 0.7, y: 1}}
        colors={[Colors.themePurple,Colors.themePurple]}
        style={styles.container}>
        <StatusBar barStyle='light-content' hidden={false} backgroundColor={Colors.themePurple} />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
          resizeMode={'contain'}
          source={ImageView.logo}
          style={styles.imgStyle} />
        <Modal
          ref={"updateModal"}
          visible={this.state.modalVisible}
          position="bottom"
          backdrop={true}
          coverScreen={true}
          backdropPressToClose={false}
          backdropOpacity={0.5}
          transparent={true}
          swipeToClose={false}
        >
          <View style={styles.ModalContainer}>
            <View style={styles.netAlert}>
              <View style={styles.netAlertContent}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: 10,
                  }}
                >
                  <Image
                    resizeMode="cover"
                    source={ImageView.update}
                    style={{ width: width, height: width }}
                  />
                </View>
                <Text style={styles.netAlertTitle}>Update Required</Text>
                <Text style={styles.netAlertDesc}>
                  Please update our app for an improved experience!! This
                  version is no longer supported.
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  height:Screen.hp(6),
                  bottom:Screen.hp(1.6),
                  width:Screen.wp(100),
                  backgroundColor: Colors.primary,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => this.get()}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 18,
                    fontFamily: Fonts.NunitoBold,
                  }}
                >
                  Upgrade Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
       </View>
      {/* </SafeAreaView> */}
      </LinearGradient>
    )
  }
  get = () => {
    if (Platform.OS == "android") {
      console.log(androidurl);
      Linking.openURL(androidurl);
    } else if (Platform.OS == "ios") {
      console.log(iosurl);
      Linking.openURL(iosurl);
    }
  };
}
const mapStateToProps = state => {
  return {
    // loading: state.discount.loading,
    // data: state.appVersion && state.appVersion.data,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // getAppVersion: data => {
    //   dispatch(getAppVersion(data))
    // },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash);