import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import c from '../styles/commonStyle';
import { clear } from '../redux/auth/actions';
import { connect } from "react-redux";
import { PrefManager } from '../utils';
import { Login, Home } from '../navigation/NavigationHelper';
import { Colors, ImageView, DrawerIcon, Fonts, Dimens, Screen } from '../config/appConstants';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeAlert from 'react-native-awesome-alerts';
const styles = StyleSheet.create({
    linear: {
        flexDirection: 'row', alignItems: 'center',
        width: '100%',
        paddingHorizontal: Screen.wp(2),
        alignSelf: 'center',
        height: Screen.hp(20),
        backgroundColor: Colors.white
    },
})
class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            name: '',
            photo: '',
            showAlert: false,
            refreshing:false
        }
        PrefManager.getValue('@name').then(name => {
            this.setState({ name: name })
        })
        setTimeout(() => {this.setState({refreshing: true})}, 0);
    }
    
    render() {
        const { navigation, clear } = this.props;
        return (
            <View style={c.flexStyle}>
                <FlatList
                    data={dataSource}
                    // ListHeaderComponent={this.renderHeader()}
                    renderItem={({ item, index }) =>
                        <View style={{
                            paddingTop: index == 0 ? Screen.hp(2) : 0,
                            width: Screen.wp('70%'),
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    for (let i = 0; i < dataSource.length; i++) {
                                        if (index == dataSource[i].id) {
                                            dataSource[i].v = !dataSource[i].v
                                        } else {
                                            dataSource[i].v = false
                                        }
                                    }
                                    if (item.navigation) {
                                        navigation.navigate(item.navigation ? item.navigation : '')
                                    }
                                    if (item.name == "Logout") {
                                       this.setState({showAlert:true})
                                    }
                                    this.setState({ visible: !this.state.visible })
                                }}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginHorizontal: Screen.wp('2%'),
                                    marginVertical: Screen.hp('0.5%'),
                                    paddingVertical: Screen.hp('1%'),
                                    borderBottomRightRadius: Screen.wp(5),
                                    borderTopRightRadius: Screen.wp(5),
                                    width: '95%',
                                }}>
                                <MIcon
                                    name={item.icon}
                                    size={25}
                                    style={{ paddingLeft: 8 }}
                                    color={item.v ? item.navigation ? Colors.secondary : Colors.textColor : Colors.textColor}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 0.9 }}>
                                    <Text style={{
                                        fontSize: Screen.wp('4%'), flex: 1,
                                        paddingHorizontal: Screen.wp(3), fontFamily: 'Lora-Bold', color: item.v ? item.navigation ? Colors.secondary : Colors.textColor : Colors.textColor
                                    }}>
                                        {item.name}</Text>
                                    {item.navigation || item.name == 'Logout'? null :
                                        <Image
                                            source={item.v ? ImageView.up : ImageView.bottom}
                                            resizeMode="contain"
                                            style={{
                                                width: Screen.wp('3.5%'),
                                                height: Screen.wp('3.5%'),
                                                tintColor: item.v ? item.navigation ? Colors.secondary : Colors.textColor : Colors.textColor
                                            }}
                                        />}
                                </View>
                            </TouchableOpacity>
                            {!item.navigation && item.v ?
                                <FlatList
                                    data={item.data}
                                    renderItem={({ item, index }) =>
                                        <View style={{
                                            width: Screen.wp('70%'),
                                        }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    if (item.navigation) {
                                                        for (let i = 0; i < dataSource.length; i++) {
                                                            if (index == dataSource[i].id) {
                                                                dataSource[i].v = false
                                                            }
                                                        }
                                                        navigation.navigate(item.navigation ? item.navigation : '')
                                                        navigation.closeDrawer()
                                                    }
                                                }}
                                                style={{
                                                    marginHorizontal: Screen.wp('2%'),
                                                    marginVertical: Screen.hp('0.5%'),
                                                    paddingVertical: Screen.hp('1%'),
                                                    borderBottomRightRadius: Screen.wp(5),
                                                    borderTopRightRadius: Screen.wp(5),
                                                    width: '95%',
                                                    borderBottomWidth: 0.6,
                                                    borderColor: Colors.light_gray

                                                }}>
                                                <Text style={{
                                                    fontSize: Screen.wp('4%'), flex: 1, paddingLeft: Screen.wp('11%'),
                                                    paddingHorizontal: Screen.wp(3), fontFamily: 'Lora-Bold', color: item.visible ? Colors.secondary : Colors.textColor
                                                }}>
                                                    {item.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                    keyExtractor={(item) => item.id}
                                /> : null}
                        </View>
                    }
                    keyExtractor={(item) => item.id}
                />
                {this.state.showAlert &&(
                <AwesomeAlert
                    onDismiss={() => {
                    this.setState({
                        showAlert: false
                    });
                    }}
                    show={this.state.showAlert}
                    showProgress={false}
                    contentStyle={c.contentStyle}
                    actionContainerStyle={{alignSelf:'flex-end'}}
                    cancelButtonStyle={c.cancelButtonStyle}
                    confirmButtonStyle={c.confirmButtonStyle}
                    titleStyle={c.titleStyle}
                    messageStyle={c.messageStyle}
                    title="Just a sec"
                    message="Are you sure you want to logout"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No"
                    confirmText="Yes, Logout"
                    confirmButtonColor={Colors.primary}
                    onCancelPressed={() => {
                        this.setState({
                            showAlert: false
                        });
                    }}
                    onConfirmPressed={() => {
                        this.setState({
                            showAlert: false
                        });
                        clear()
                        PrefManager.removeValue('@name')
                        PrefManager.removeValue('@id')
                        PrefManager.removeValue('@rollId')
                        PrefManager.removeValue('@permission')
                        PrefManager.removeValue('@token')
                        navigation.dispatch(Login);
                    }}
                />
                )}
            </View>
        )
    }
    // renderHeader = () => (
    //     <View
    //         style={styles.linear}>
    //         <Image source={this.state.photo ? { uri: this.state.photo } : ImageView.noImage}
    //             style={{ height: 80, width: 80, borderRadius: 40 }} />
    //         <View style={{ width: '74%', paddingLeft: 5, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
    //             <Text style={{
    //                 fontFamily: Fonts.SemiBold,
    //                 fontSize: Dimens.textSizeSmall,
    //                 color: 'white',
    //                 marginLeft: 8
    //             }}>{this.state.name}</Text>
    //             <TouchableOpacity
    //                 onPress={() => {
    //                     this.props.navigation.navigate('Profile')
    //                 }}
    //                 style={{
    //                     height: 30, width: 30, justifyContent: 'center',
    //                     marginRight: Screen.wp(5),
    //                     alignItems: 'center', marginTop: Screen.hp(5)
    //                 }}>
    //                 <Image source={ImageView.editBox} resizeMode={'contain'} style={{ height: Screen.hp(3), width: Screen.hp(3), tintColor: 'white' }}></Image>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // )
}

const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clear: () => {
            dispatch(clear());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
const dataSource = [
    {
        id: '0',
        name: 'Introduction',
        icon: DrawerIcon.home,
        navigation: 'introScreen',
        v: true
    },
    {
        id: '1',
        name: 'Hip/Valley Cut',
        icon: DrawerIcon.calendar,
        navigation: 'hipScreen',
        v: false
    },
    {
        id: '2',
        name: 'Rise and Run calculator',
        icon: DrawerIcon.calendar,
        navigation: 'riseScreen',
        v: false
    },
    {
        id: '2',
        name: 'About',
        icon: DrawerIcon.growth,
        navigation: 'aboutScreen',
        v: false
    },
]