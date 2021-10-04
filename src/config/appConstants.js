import { StyleSheet,Dimensions, Platform } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';
const Constants = {
  API_BASE_URL: '',
  API_BASE_URL_LOCAL:'http://ec2-3-25-186-181.ap-southeast-2.compute.amazonaws.com/api3/v1/',
  // API_BASE_URL_LOCAL:'https://devapi.appointgem.com/',
  IMAGE_BASE_URL: '',
  REQUEST_TIMEOUT: 20000 * 1,
  dateFormat: "MM/DD/YYYY",
  timeFormat: "MM/DD/YYYY h:mm:ss a",
  dateFormatApi: "YYYY-MM-DD",
  dateTime: 'HH:mm',
  dateMonthFormate: 'DD MMMM, YYYY',
  dateTableRow: 'DD MMMM',
}

const Colors = {
  primary: '#613228',
  secondary: '#e5bb9d',
  acent: "#74788d",
  statusBarColor: "rgba(97, 50, 40,1)",
  textColor: '#8590a5',
  shadow: '#fcf8e3',
  green: '#39b18d',
  pink: "#ff4081",
  viewBox: "#f8f8f8",
  white: '#fff',
  black: '#000',
  themeGreen1:'#81be41',
  blacklight: 'rgb(67, 67, 67)',
  medium_gray: "rgba(125, 125, 130, 0.5)",
  dark_gray: "#7C7C80",
  cool_gray: "rgba(125, 125, 130, 0.7)",
  light_gray: "rgba(125, 125, 130, 0.1)",
  light: "rgb(240, 240, 240)",
  // white: '#fff',
  lightPurple: '#CAC3D9',
  themeColor: '#414858',
  maroon: '#613228',
  blueViolet: '#8A2BE2',
  blue: '#0000FF',
  red: '#FF0000',
  lightsky: '#eff7fe',
  lightBlue: '#549cf8',
  gray: '#808080',
  lightGreen:'#4ba66f',
  themeGreen2:'#139694',
  themeColor: '#414858',
  themeGrey: '#D5D5D5',
  themeBlack: '#525871',
  themepurple: '#5E488C',
  textPrimaryColor: '#212121',
  textSecondaryColor: '#E0E0E1',
  grayColor: '#717171',
  whiteColor: '#FFFFFF',
  blackColor: '#0E152B',
  fieldColor: '#EEEEEE',
  grayPrimaryColor: '#8B8B8B',
  blackPrimaryColor: '#0E152B',
  grayTextColor: '#D2D2D2',
  redColor: '#fe0606',
  accentColor: '#696969',
  lightGray:'#efefef',
  themeGreen:'#068493',
  lightDarkGreen:'#90c6c4',
  blueC:'#20b0f0',
}

const Dimens = {
  textSizeBottomBar: 12,
  textSizeExtraSmall: 14,
  textSizeSmall: 16,
  textSizeMedium: 18,
  textSizeLarge: 20,
  textSizeExtraLarge: 30,
}

const Screen = {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
  wp: widthPercentageToDP,
  hp: heightPercentageToDP,
  scale: Dimensions.get('window').scale,
  fontScale: Dimensions.get('window').fontScale,
  OrientationChange: listenOrientationChange,
  OrientationListener: removeOrientationListener
}

const Fonts = {
  Bold: "OpenSans-Bold",
  BoldItalic: 'OpenSans-BoldItalic',
  ExtraBold: 'OpenSans-ExtraBold',
  ExtraBoldItalic: 'OpenSans-ExtraBoldItalic',
  Italic: 'OpenSans-Italic',
  Light: 'OpenSans-Light',
  LightItalic: 'OpenSans-LightItalic',
  Regular: 'OpenSans-Regular',
  SemiBold: 'OpenSans-SemiBold',
  SemiBoldItalic: 'OpenSans-SemiBoldItalic'
}

const ImageView = {
  logo:require('../assets/doctor.png'),
  home:require('../assets/home.png'),
  facebook:require('../assets/facebook.png'),
  google:require('../assets/google.png'),
  srl:require('../assets/srl.png'),
  profile:require('../assets/profile.jpeg'),

}
const DrawerIcon = {
  home: ('home-outline'),
  calendar: ("calendar-outline"),
  growth: ('trending-up'),
  history: ('history'),
  account: ('account-outline'),
  group: ('account-group-outline'),
  value: ('human-male-male'),
  shutdown: ('logout'),
  blockTime: ('timer-off-outline'),
}

const Strings = {
  App_Title: '',
  loading: 'Loading...',
  fmsg: "We will send you a new password to your register email.",
  Phone: 'Mobile',
  login: "LOGIN",
  logout: "Log out",
  settings: "Settings",
  wrongPhone: "Wrong Phone!",
  wrongEmail: "Wrong Email!",
  enterEmail: "Enter Email",
  enterPass: "Enter Password",
  blankField: "Please fill all fields",
  fpwd: "Forgot Password?",
  ok: "Okay",
  submit: "Submit",
  confirmCode: "Confirm Code",
  waitForOtpTiming: "You can Re-login after ",
  Signup: "Sign Up",
  fName: "First Name",
  lName: "Last Name",
  title:"Title",
  name: 'Name',
  email:'Email',
  pass:'Password',
  Lsocial:'Login with Social Media',
  signup:'CREATE AN ANCCOUNT',
  signupBtn:'SIGNUP',
  account:'Already have a account?',
  Createaccount:'New User?',
  resetPass:'RESET PASSWORD',
  resetText:'Please enter your email below to receive your password reset instructions',
  send:'SEND',
  update:'UPDATE',

  hip:'Hip/Valley Cut',
  asc:'Ascending',
  dsc:'Descending',


}


export const FontFamily = {
  bold: Platform.OS === 'ios' ? 'Lato-Bold' : 'Lato-Bold',
  boldItalic: Platform.OS === 'ios' ? 'Lato-BoldItalic' : 'Lato-BoldItalic',
  italic: Platform.OS === 'ios' ? 'Lato-Italic' : 'Lato-Italic',
  medium: Platform.OS === 'ios' ? 'Lato-Light' : 'Lato-Light',
  mediumItalic: Platform.OS === 'ios' ? 'Lato-LightItalic' : 'Lato-LightItalic',
  regular: Platform.OS === 'ios' ? 'Lato-Regular' : 'Lato-Regular',
  semiBold: Platform.OS === 'ios' ? 'Lato-Thin' : 'Lato-Thin',
  semiBoldItalic: Platform.OS === 'ios' ? 'Lato-ThinItalic' : 'Lato-ThinItalic',
  black: Platform.OS === 'ios' ? 'Lato-Black' : 'Lato-Black',
  blackItalic: Platform.OS === 'ios' ? 'Lato-BlackItalic' : 'Lato-BlackItalic',
};

export const FontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

export const Typography = StyleSheet.create({
  default: {
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  header: {
    fontSize: 34,
    fontWeight: FontWeight.bold,
    fontFamily: FontFamily.semiBold,
  },
  title1: {
    fontSize: 28,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
  },
  title2: {
    fontSize: 22,
    fontWeight: FontWeight.medium,
    fontFamily: FontFamily.medium,
  },
  title3: {
    fontSize: 20,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  headline: {
    fontSize: 17,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  body1: {
    fontSize: 17,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  body2: {
    fontSize: 14,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  callout: {
    fontSize: 17,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  subhead: {
    fontSize: 15,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  footnote: {
    fontSize: 13,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  caption1: {
    fontSize: 12,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  caption2: {
    fontSize: 11,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
  overline: {
    fontSize: 10,
    fontWeight: FontWeight.regular,
    fontFamily: FontFamily.regular,
  },
});

export { Constants, Colors, Dimens, Screen, Fonts, ImageView, Strings, DrawerIcon, };