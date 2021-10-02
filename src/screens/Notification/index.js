import React, { Component } from 'react'
import { connect } from 'react-redux';import { getLocationData } from "../../redux/location/actions";
import { AppRoot, Header } from '../../component';
import c from '../../styles/commonStyle';
import NotificationList from '../../list/notification';
import { Fonts,Screen } from '../../config/appConstants';
import { View, StyleSheet, FlatList, Platform} from 'react-native'
const styles = StyleSheet.create({
  textInput: {
    marginTop: 2,
    paddingVertical: Platform.OS == 'ios' ? 6 : 6,
    fontSize: 16,
    flex: 1,
    color:'black',
    fontFamily: Fonts.Regular,
    paddingHorizontal: 4,
  },
})
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort_direction: 'DESC',
      search: ''
    }
  }
  componentDidMount() {
    Screen.OrientationChange(this);
  }

  componentWillUnmount() {
    Screen.OrientationListener();
  }
  componentDidUpdate(prevProps) {
    const { } = this.props;
  }
  render() {
    const { navigation } = this.props;
    return (
      <AppRoot>
        <View style={c.flexStyle}>
          <Header
            text={'Notification'}
            onBack={() => navigation.goBack()}
            notification={() => navigation.navigate('Notification')}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'always'} 
            data={[{ name: 'Manager' }, { name: 'ADMIN' }, { name: 'Receptionist' }]}
            renderItem={({ item, index }) => (
              <NotificationList
                item={item}
                index={index}
                onPress={() => {
                }}
              />
            )}
            keyExtractor={(item, index) => String(index)}
          />
        </View>
      </AppRoot>
    )
  }
}
const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);

