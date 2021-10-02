import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, FlatList, TouchableOpacity, Text, TextInput, ActivityIndicator,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors,Fonts,Screen} from '../config/appConstants';
const optionStyle = {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
  const optionTextStyle = {
    flex: 1,
    textAlign: 'left',
    color: '#000',
    fontSize: 18,
  }  
 const styles= StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.65)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleTextStyle: {
      flex: 0,
      color: Colors.white,
      fontSize: 20,
      marginBottom: 15
    },
    listContainer: {
      flex: 1,
      paddingTop:10, 
      width: Screen.width,
      maxHeight: Screen.height ,
      backgroundColor: Colors.white,
      borderRadius: 5,
      
    },
    cancelContainer: {
      top:30,
      right:10,
  
      position:'absolute',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:15,
    },
    cancelButton: {
      backgroundColor: 'transparent',
      paddingVertical: 20,
      justifyContent:'flex-end',
      alignItems:'flex-end',
      paddingHorizontal: 20,
      // borderRadius: 10,
      // borderWidth:1,
      // borderColor:'#e3202d'
    },
    cancelButtonText: {
      // textAlign: 'center',
      // fontSize: 18,
      // color: "#fff"
    },
    filterTextInputContainer: {
      borderWidth: 1,
      borderColor: Colors.primary,
      borderRadius:5,
      marginHorizontal:10,
    },
    filterTextInput: {
      fontFamily:Fonts.regular,
      fontSize:18,
      paddingVertical: 10,
      paddingHorizontal: 15,
      flex: 0,
      
    },
    categoryStyle: {
      ...optionStyle
    },
    categoryTextStyle: {
      ...optionTextStyle,
      color: '#999',
      fontFamily: Fonts.regular,
      fontSize: 16
    },
    optionStyle: {
      ...optionStyle
    },
    optionStyleLastChild: {
      borderBottomWidth: 0
    },
    optionTextStyle: {
     
      ...optionTextStyle
    },
    selectedOptionStyle: {
      ...optionStyle
    },
    selectedOptionStyleLastChild: {
      borderBottomWidth: 0
    },
    selectedOptionTextStyle: {
      ...optionTextStyle,
      fontFamily: Fonts.regular
    },
    noResults: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    noResultsText: {
      flex: 1,
      textAlign: 'center',
      color: Colors.medium_gray,
      fontFamily:Fonts.medium,
      fontSize: 18
    }
  })
  
export default class LocationFilter extends Component {
  constructor (props, ctx) {
    super(props, ctx)
    this.state = {
      filter: "",
      value:'',
      loading: false,
      ds: props.options,
      noResult:"No result found"
    }
  }
  componentWillReceiveProps (newProps) {
    if ((!this.props.visible && newProps.visible) || (this.props.options !== newProps.options)) {
      this.setState({
        filter: '',
        ds: newProps.options,
      })
    }
  }

  render () {
    const {
      title,
      titleTextStyle,
      overlayStyle,
      cancelContainerStyle,
      renderList,
      keyExtractor,
      renderCancelButton,
      visible,
      modal,
      onCancel
    } = this.props

    const renderedTitle = (!title) ? null : (
      <Text style={titleTextStyle || styles.titleTextStyle}>{title}</Text>
    )

    return (
      <Modal
        onRequestClose={onCancel}
        {...modal}
        visible={visible}
        supportedOrientations={['portrait', 'landscape']}>
        <View style={overlayStyle || styles.overlay}>
          {renderedTitle}
          {(renderList || this.renderList)()}
        </View>
      </Modal>
    )
  }

  renderList = () => {
    const {
      showFilter,
      autoFocus,
      listContainerStyle,
      androidUnderlineColor,
      placeholderText,
      placeholderTextColor,
      filterTextInputContainerStyle,
      filterTextInputStyle,
    } = this.props;

    const filter = (!showFilter) ? null : (
      <View style={filterTextInputContainerStyle || styles.filterTextInputContainer}>
        <TextInput
          onChangeText={this.onFilterChange}
          autoCorrect={false}
          blurOnSubmit={true}
          value={this.state.value}
          autoFocus={true}
          autoCapitalize="none"
          underlineColorAndroid={androidUnderlineColor}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholderText}
          style={filterTextInputStyle || styles.filterTextInput} />
      </View>
    )

    return (
      <View style={listContainerStyle || styles.listContainer}>
          {(this.renderCancelButton || this.renderCancelButton)()}
        {filter}
        {this.renderOptionList()}
      </View>
    )
  }

  renderOptionList = () => {
    const {
      noResultsText,
      flatListViewProps,
      keyExtractor,
      keyboardShouldPersistTaps
    } = this.props

    const { ds } = this.state
    if(this.state.loading) {
        return(
            <View style={styles.noResults}>
             <ActivityIndicator size="large" color={Colors.primary} animating={this.state.loading} />
            </View>
        )
            }
    else if (ds.length == 0) {
      return (
       
            <View style={styles.noResults}>
              <Text style={styles.noResultsText}>{this.state.noResult}</Text>
            </View>
         
      )
    } else {
      return (
        <FlatList
          keyExtractor={keyExtractor||this.keyExtractor}
          {...flatListViewProps}
          data={ds}
          renderItem={(item)=> this.renderOption(item.item)}
          keyboardShouldPersistTaps="always"
        />
      )
    }
  }

  renderOption = (item) => {
    const {
      selectedOption,
      renderOption,
        optionTextStyle,
      selectedOptionTextStyle
    } = this.props

    const { _id, name} = item

    let style = styles.optionStyle
    let textStyle = optionTextStyle||styles.optionTextStyle

    if (_id === selectedOption) {
      style = styles.selectedOptionStyle
      textStyle = selectedOptionTextStyle ||styles.selectedOptionTextStyle
    }
    if (renderOption) {
      return renderOption(item, id === selectedOption)
    } else {

      return (
      <View> 
        <TouchableOpacity activeOpacity={0.7}
          style={[style, {flexDirection:'row', flex:1,  paddingHorizontal:20 }]}
          onPress={() => this.props.onSelect(_id, name)}>
        <Text style={[textStyle, {fontFamily: Fonts.regular}]}>{name}</Text>
        </TouchableOpacity>
      </View>
      )
    }
  }
  keyExtractor = (item, index) => item._id;

  renderCancelButton = () => {
    const {
      cancelButtonStyle,
      cancelButtonTextStyle,
      cancelButtonText
    } = this.props

    return (
      <TouchableOpacity onPress={this.props.onCancel}
        activeOpacity={0.7}
        style={cancelButtonStyle || styles.cancelButton}>
          <Icon name="times" color={Colors.primary} size={35} />
      </TouchableOpacity>
    )
  }

  onFilterChange = (text) => {
    const { options } = this.props
      const filter = text.toLowerCase()
      const filtered = (!filter.length)
        ? options
        : options.filter(({ searchKey, name, _id }) => (
          0 <= name.toLowerCase().indexOf(filter) ||
            (searchKey && 0 <= searchKey.toLowerCase().indexOf(filter))
        ))
  
      this.setState({
        filter:text.toLowerCase(),
        value:text,
        ds: filtered
      })
  }
}

LocationFilter.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  androidUnderlineColor: PropTypes.string,
  cancelButtonText: PropTypes.string,
  title: PropTypes.string,
  noResultsText: PropTypes.string,
  visible: PropTypes.bool,
  showFilter: PropTypes.bool,
  modal: PropTypes.object,
  selectedOption: PropTypes.string,
  renderOption: PropTypes.func,
  renderCancelButton: PropTypes.func,
  renderList: PropTypes.func,
  flatListViewProps: PropTypes.object,
  filterTextInputContainerStyle: PropTypes.any,
  filterTextInputStyle: PropTypes.any,
  cancelContainerStyle: PropTypes.any,
  cancelButtonStyle: PropTypes.any,
  cancelButtonTextStyle: PropTypes.any,
  titleTextStyle: PropTypes.any,
  overlayStyle: PropTypes.any,
  listContainerStyle: PropTypes.any,
  optionTextStyle:PropTypes.any,
  selectedOptionTextStyle:PropTypes.any,
  keyboardShouldPersistTaps: PropTypes.string
}

LocationFilter.defaultProps = {
  placeholderText: 'Search Location...',
  placeholderTextColor: '#ccc',
  androidUnderlineColor: 'rgba(0,0,0,0)',
  cancelButtonText: 'Close',
  noResultsText: 'No matches',
  visible: false,
  showFilter: true,
  keyboardShouldPersistTaps: 'never'
}