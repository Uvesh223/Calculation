import { StyleSheet, Dimensions } from "react-native";
import { Fonts, Dimens, Colors, Screen, FontWeight } from "../config/appConstants";
const { width, height } = Dimensions.get("window");
const commonStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: Screen.hp("100%"),
    width: Screen.wp("100%"),
    alignItems: "center",
    justifyContent:'center'
    // paddingHorizontal:10,
  },
  mainView: {
  marginBottom:30,
  paddingHorizontal:Screen.wp('3%')
  // paddingHorizontal:10,
  },
  normalText: {
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: Colors.blackColor,
    // textAlign: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontFamily: Fonts.Bold,
    color: Colors.blackColor,
    // textAlign: 'center',
    paddingTop: 10,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: Screen.wp('70%')
  },
  aesbtn: {
    // width: Screen.wp('25%'),
  },
  mainCalView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  calView: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor:Colors.blueC,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: Screen.hp('1'),
    paddingVertical: Screen.hp('1'),
  },
  circle: {
    width: 40, 
    height: 40, 
    borderRadius: 25, 
    backgroundColor: Colors.light_gray,
    alignItems: 'center', 
    justifyContent: 'center' 
    },
    mainSheetView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:7,
    },
sheetBox:{
    flexDirection: 'row', 
    justifyContent: 'center',
    width: Screen.wp('25%'), 
    borderWidth: 1,
    borderColor:Colors.blueC,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: Screen.hp('2%'),
    paddingVertical: Screen.hp('1'),
  },
  input: {
    height: 40,
    color:Colors.blackColor,
    borderWidth: 1,
    borderColor:Colors.blueC,
    padding: 10,
  },

    // new

  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexStyle: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowTable: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    paddingVertical: 4
  },
  textBold: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeSmall,
  },
  textHeader: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeSmall,
    paddingLeft: Screen.hp(2),
    color: Colors.grayColor,
  },
  headerView: {
    backgroundColor: Colors.lightGray,
    height: Screen.hp(5),
    justifyContent: 'center',
    marginTop: Screen.hp(2),
  },
  textNormal: {
    fontFamily: Fonts.Regular,
    fontSize: Dimens.textSizeExtraSmall,
  },
  textNormal1: {

    fontSize: Dimens.textSizeExtraSmall,
    fontWeight: 'bold',
  },
  textBoldheader: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeSmall,
    color: Colors.themeGreen,
    fontWeight: 'bold',
  },
  textBoldSub: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeBottomBar,
    color: Colors.blackColor,
    fontWeight: 'bold',
  },
  textNormalTable: {
    fontFamily: Fonts.Regular,
    fontSize: Dimens.textSizeSmall,
  },
  Lshape: {
    height: Screen.hp("35%"),
    width: Screen.wp("100%"),
    justifyContent: "center",
    alignItems: "center",
    // position:'relative',
    // paddingTop: 50,
  },
  homeView: {
    height: Screen.hp("20%"),
    width: Screen.wp("100%"),
    // borderBottomLeftRadius: Screen.wp(20),
    justifyContent: "center",
    alignItems: "center",
  },
  homeWrap: {
    flex: 1,
    // width: Screen.wp("100%"), 
    backgroundColor: Colors.white,
    borderTopLeftRadius: Screen.wp(7),
    borderTopRightRadius: Screen.wp(7),
    borderBottomLeftRadius: Screen.wp(7),
    borderBottomRightRadius: Screen.wp(7),
    marginBottom: 30,
  },

  datailView: {
    height: Screen.hp("32%"),
    // width: Screen.wp("95%"),
    borderRadius: Screen.wp(5),
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Screen.wp(5),
    marginBottom: 20,
  },

  logininput: {
    width: Screen.wp("85%"),
    height: Screen.hp(6),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderRadius: Screen.wp(12),
    elevation: 2,
    backgroundColor: "white",
    alignSelf: "center",
    paddingHorizontal: Screen.wp(2),
  },
  profileInput: {
    width: Screen.wp("90%"),
    height: Screen.hp(6),
    alignSelf: "center",
    paddingHorizontal: Screen.wp(2),
    // marginTop: Screen.hp(4),
  },
  inputStyle: {
    width: Screen.wp("20%"),
    height: Screen.hp(2),
    // alignSelf: "center",
    // paddingHorizontal: Screen.wp(2),
    // marginTop: Screen.hp(4)
  },
  pickerStyle: {
    width: Screen.wp("86%"),
    marginBottom: Screen.hp(-1.5),
    height: Screen.hp(6),
    alignSelf: "center",
    marginTop: Screen.hp(5),
    borderBottomWidth: 0.6,
    borderColor: Colors.medium_gray
  },
  pickerStyle2: {
    width: Screen.wp("100%"),
    marginBottom: Screen.hp(-1.5),
    height: Screen.hp(10),
    alignSelf: "center",
    paddingLeft: Screen.wp(10),
    paddingRight: Screen.wp(10),
  },
  Button: {
    // marginHorizontal: Screen.hp("6%"),
    borderRadius: Screen.hp("3%"),
    marginVertical: Screen.hp("2%"),
    paddingVertical: Screen.hp("2%"),
    justifyContent: "center",
    alignItems: "center",
    width: Screen.wp('50%'),
    backgroundColor:Colors.blueC,
  },
  touchBtn:{
    borderRadius: Screen.hp("3%"),
    marginVertical: Screen.hp("2%"),
    paddingVertical: Screen.hp("2%"),
    justifyContent: "center",
    alignItems: "center",
    width: Screen.wp('50%'),
  },
  draggableIcon: {
    width: 60,
    height: 5,
    borderRadius: 5,
    margin: 10,
    alignSelf: "center",
    backgroundColor: "#ccc",
  },
  contentModalStyle: {
    width: "100%",
    height: Screen.hp("22%"),
    backgroundColor: "white",
    elevation: 10,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalViewBox: {
    width: "45%",
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginVertical: Screen.hp("1%"),
  },
  flatRoot: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 0.5,
    margin: 5,
    marginHorizontal: Screen.wp(4),
    paddingVertical: Screen.hp('0.5%'),
    paddingHorizontal: Screen.wp('3%')
  },
  flatRoot1: {
    flex: 1,
    backgroundColor: '#1cbb8c',
    elevation: 0.5,
    margin: 5,
  },
  flatButton: {
    height: 40,
    width: 50,
    alignSelf: 'flex-end',
    backgroundColor: Colors.viewBox,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatTopButton: {
    height: 40,
    width: 50,
    alignSelf: 'flex-end',
    backgroundColor: Colors.viewBox,
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatTopImg: {
    height: Screen.hp(4.5),
    width: Screen.wp(4.5),
    // marginTop: 4,
    alignSelf: 'center',
  },
  flatImg: {
    height: Screen.hp(4.5),
    width: Screen.wp(4.5),
    marginTop: 4,
    alignSelf: 'center',
  },
  flatRow: {
    paddingVertical: 5,
    flex: 0.9,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: 'flex-start'
  },
  flatTBold: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeSmall,
    flex: 0.40,
  },
  flatT: {
    fontFamily: Fonts.SemiBold,
    fontSize: Dimens.textSizeSmall,
    flex: 0.1,
  },
  flatTNormal: {
    fontFamily: Fonts.Regular,
    fontSize: Dimens.textSizeExtraSmall,
    flex: 0.60,
  },
  marginBottom: {
    marginBottom: 20,
  },
  generateButton: {
    width: Screen.wp("20%"),
    height: Screen.hp(5),
    alignSelf: "center",
    justifyContent: 'center',
    marginTop: Screen.hp(4),
    borderRadius: 9,
    backgroundColor: Colors.blue,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: Fonts.Bold,
    alignSelf: 'center',
  },
  buttonServiceText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Bold,
    alignSelf: 'center',
  },
  radioBtn: {
    flexDirection: 'row',
    marginTop: 20,
  },
  radioForm: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: Screen.wp("90%"),
    alignSelf: 'center',
    paddingHorizontal: Screen.wp(4),
    marginTop: Screen.hp(2)
  },
  radioFormContaner: {
    width: Screen.wp("90%"),
    alignSelf: 'center',
    marginTop: Screen.hp(4),
  },
  generateButton2: {
    width: Screen.wp("20%"),
    height: Screen.hp(7),
    alignSelf: "center",
    justifyContent: 'center',
    paddingLeft: Screen.wp(2),
    marginTop: Screen.hp(4),
    borderRadius: 9,
    backgroundColor: Colors.blue,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: Fonts.Bold,
    alignSelf: 'center',
  },
  buttonServiceText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.Bold,
    alignSelf: 'center',
  },
  radioBtn: {
    flexDirection: 'row',
    marginTop: 20,
  },
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  tab: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1
  },
  item: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.25
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  active: {
    color: Colors.primary,
    fontFamily: Fonts.Bold,
    fontSize: 14
  },
  inactive: {
    color: Colors.cool_gray,
    fontFamily: Fonts.Bold,
    fontSize: 14
  },
  label: {
    fontSize: 12,
    paddingVertical: 10,
    textAlign: 'center',
  },
  viewImage: {
    marginRight: Screen.wp(2),
    width: '70%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light_gray, marginTop: Screen.hp(3), height: 38, borderRadius: 10
  },
  contentStyle: {
    width: Screen.hp(32),
    height: Screen.hp(10)
  },
  cancelButtonStyle: {
    width: Screen.hp(10),
    height: Screen.hp(4.5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmButtonStyle: {
    width: Screen.hp(14),
    height: Screen.hp(4.5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: Fonts.Bold
  },
  messageStyle: {
    textAlign: 'left',
    flex: 1,
    fontFamily: Fonts.Regular
  },
  left: {
    height: 40,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  leftImg: {
    height: 20, width: 20, tintColor: 'white'
  },
  datePicker: {
    width: Screen.wp(65),
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 1,
    borderColor: Colors.light_gray,
    height: 50,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Screen.wp(2),
    borderWidth: 1,
  },
  tableHeader: {
    width: Screen.wp(30),
    borderWidth: 1,
    borderColor: Colors.light_gray,
    backgroundColor: 'white',
    padding: 6,
    height: Screen.hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableHeader3: {
    width: Screen.wp(30),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aoutoTableHeader: {
    width: Screen.wp(30),
    borderWidth: 1,
    borderColor: Colors.light_gray,
    backgroundColor: 'white',
    padding: 6,
    minHeight: Screen.hp(8),
  },
  tableHeader1: {
    width: Screen.wp(32),
    borderWidth: 1,
    height: Screen.hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white'
  },
  tableRowText: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    textAlign: 'center'
  },
  tableHeaderText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    textAlign: 'center'
  },
  imgBtn: {
    width: Screen.hp(34),
    height: Screen.hp(8),
    backgroundColor: Colors.grayColor,
    alignItems: 'center', justifyContent: 'center',
    borderRadius: Screen.hp(4),
    marginBottom: Screen.hp(3)
  },
  uploadText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.whiteColor,
  },
  uploadsubText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 15,
    textAlign: 'center',
    color: Colors.whiteColor,
  },
  uploadsubText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 15,
    textAlign: 'center',
    color: Colors.whiteColor,
  },
  btnText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 15,
    textAlign: 'center',
    color: Colors.whiteColor,
  },

  textProfile: {
    fontFamily: Fonts.SemiBold,
    fontSize: 15,
    color: Colors.whiteColor,
  },
  SmrText: {
    fontFamily: Fonts.SemiBold,
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.themeGreen,
  },
});
export default commonStyle;
