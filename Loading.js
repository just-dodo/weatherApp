import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-contentd' />
			<Text style={styles.text}>loading WeatherApp</Text>
			<Text> From DoDo LAB</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 100,
		backgroundColor: '#FDF6AA',
	},
	text: {
		color: 'black',
		fontSize: 30,
	},
});
