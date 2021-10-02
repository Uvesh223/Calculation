import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Fonts } from '../config/appConstants'
import { View, TouchableOpacity, Text, StyleSheet, Animated, ScrollView } from 'react-native';
const s = StyleSheet.create({
	container: {
		margin: 5,
		flexDirection: 'row',
		alignItems: "center",
	},
	radioText: {
		marginRight: 35,
		fontSize: 14,
		fontFamily: Fonts.Bold,

	},
	radioCircle: {
		height: 24,
		width: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10
	},
	selectedRb: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#3740ff',
	},
	result: {
		marginTop: 20,
		color: 'white',
		fontWeight: '600',
		backgroundColor: '#F3FBFE',
	},
});
class RadioButton extends Component<props> {
	springValue = new Animated.Value(0.5)
	spring = () => {
		Animated.spring(this.springValue, {
			toValue: 0.95,
			friction: 2,
			tension: 15,
			useNativeDriver: false
		}).start();


	};
	render() {
		const { PROP, radioStyle, value, type } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={radioStyle} horizontal showsHorizontalScrollIndicator={false}>
					{PROP.map(res => {
						return (
							<View key={res.key} style={s.container}>
								<TouchableOpacity
									style={s.radioCircle}
									onPress={() => { this.props.onChange(type == 'value' ? res.text : res.key), this.spring() }}>

									{value == (type == 'value' ? res.text : res.key) &&
										<Animated.View
											style={[
												s.selectedRb,
												{ transform: [{ scale: this.springValue }] },
											]}
											onLayout={() => {
												this.springValue = new Animated.Value(0.5)
											}}
										/>
									}
								</TouchableOpacity>
								<Text style={s.radioText}>{res.text}</Text>
							</View>
						);
					})}
				</ScrollView>
			</View>
		);
	}
}
RadioButton.propTypes = {
	radioStyle: PropTypes.any
};
export default RadioButton