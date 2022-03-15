import React from "react";
import { Card } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";

const PricingCardInfo = ({ qty, total }) => (
	
		<Card
			containerStyle={{
				borderRadius: 5,
				width: 260,
			}}

		>
			<View style={styles.pricingCardStyle}>
				<Text style={styles.pricingTitleText}>Hi there 👋</Text>
				<Text style={styles.pricingSubTitleText}>${total}</Text>
				<Text style={styles.pricingSubSmall}>Qty {qty}</Text>
			</View>
		</Card>
)

export default PricingCardInfo;

const styles = StyleSheet.create({
	
	pricingCardStyle: {
		alignItems: 'center',
		alignContent: 'center',
	},
	pricingTitleText: {
		fontSize: 30,
		color: '#DC3F45',
	},
	pricingSubTitleText: {
		fontSize: 50,
		color: '#212129',
	},
	pricingSubSmall: {
		fontSize: 30,
		color: '#7f8385',
	}
})