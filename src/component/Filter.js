import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageView, Colors,Fonts } from '../config/appConstants';
import { StyleSheet, View, Platform, TextInput, TouchableOpacity, Image } from 'react-native'
const styles = StyleSheet.create({
  textInput: {
    marginTop: 2,
    paddingVertical: Platform.OS == 'ios' ? 6 : 6,
    fontSize: 16,
    flex: 1,
    color: 'black',
    fontFamily: Fonts.Regular,
    paddingHorizontal: 4,
  },
})
export default function Filter({
  onSort, sort_direction,
  onClear, loading, onFilter,
  onSearch, searchText }) {
  const sortByDirection = () => {
    return (
      <TouchableOpacity
        style={{ flexDirection: 'column', width: 25 }}
        onPress={onSort}>
        <Image
          style={{
            height: 12,
            width: 12,
            tintColor: sort_direction == 'DESC'
              ? Colors.dark_gray
              : Colors.primary,
          }}
          source={ImageView.up_arrow}
        />

        <Image
          style={{
            height: 12,
            width: 12,
            tintColor: sort_direction == 'DESC'
              ? Colors.primary
              : Colors.dark_gray,
          }}
          source={ImageView.down_arrow}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: Platform.OS == 'ios' ? 60 : 60,
        width: '100%',
        paddingTop: Platform.OS == 'ios' ? 0 : 0,
        backgroundColor: '#F6F6F6',
        justifyContent: 'space-between',
        elevation: 0.2,
      }}>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: Colors.white,
          width: '100%',
          flex: 1,
          marginHorizontal: 15,
          marginVertical: 10,
          borderRadius: 5,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Icon
            name="search"
            size={20}
            color={Colors.primary}
            style={{
              height: 25,
              width: 35,
              paddingLeft: 10,
              alignSelf: 'center',
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            returnKeyType="search"
            selectionColor={'black'}
            onChangeText={onSearch}
            value={searchText}
            underlineColorAndroid="transparent"
          />

          {searchText.length < 1 ? null : (
            <TouchableOpacity
              onPress={onClear}
              style={{ alignSelf: 'center', right: 2 }}>
              <Icon
                name="times"
                size={20}
                color={Colors.medium_gray}
                style={{
                  marginTop: 2,
                  height: 25,
                  width: 35,
                }}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            activeOpacity={loading ? 1 : 0.6}
            onPress={onFilter}
            style={{width: 30,height:30 }}>
            <Icon
              name="filter"
              size={20}
              color={loading ? Colors.dark_gray : Colors.primary}
              style={{
                marginTop: 2,
              }}
            />
          </TouchableOpacity>
          {/* {sortByDirection()} */}
        </View>
      </View>
    </View>
  )

}
