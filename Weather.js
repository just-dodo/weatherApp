import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Clear: {
		iconName: 'white-balance-sunny',
		gradientColors: ['#f7797d', '#FBD786'],
		title: 'It is TOO MUCH SUNNY',
		subtitle: 'Actually I hate sunny days like today.',
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradientColors: ['#6190E8', '#A7BFE8'],
		title: 'CLOUDY!! I LIKE IT',
		subtitle: 'OMG ',
	},
	Rain: {
		iconName: 'weather-rainy',
		gradientColors: ['#83a4d4', '#b6fbff'],
		title: 'RAINY!! I UNLIKE IT',
		subtitle: 'it makes me rainy, 서윤이 바보',
	}, 
};

export default function Weather({ temp, condition }) {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={weatherOptions[condition].gradientColors}
				style={styles.container}>
				<StatusBar barStyle='light-content' />
				<View style={styles.halfContainer}>
					<MaterialCommunityIcons
						name={weatherOptions[condition].iconName}
						size={80}
						color='white'
					/>
					<Text style={styles.condition}>{condition}</Text>
					<Text style={styles.temp}>{temp}°C</Text>
				</View>
				<View
					style={{
						...styles.halfContainer,
						...styles.textContainer,
					}}>
					<Text style={styles.title}>
						{weatherOptions[condition].title}
					</Text>
					<Text style={styles.subtitle}>
						{weatherOptions[condition].subtitle}
					</Text>
				</View>
			</LinearGradient>
		</View>
	);
}

Weather.PropTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Atmosphere',
		'Clear',
		'Clouds',
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	temp: {
		fontSize: 20,
		color: 'white',
	},
	condition: {
		fontSize: 25,
		color: 'white',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: '100',
		marginBottom: 10,
	},
	subtitle: {
		color: 'white',
		fontSize: 20,
		fontWeight: '600',
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start',
	},
});
