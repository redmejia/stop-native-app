import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loading = () => {

	return (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size="large" color='#DC3F45' />
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: '#212129',
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "center",
		padding: 10
	}
});

export default Loading;