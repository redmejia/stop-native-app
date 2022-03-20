import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import PromotionCard from "./PromotionCard";

import { connect } from "react-redux";

const Label = ({ title }) => (
	<Text style={styles.textStyle}>{title}</Text>
)

const Home = ({ productShirts, productPants }) => {

	const { shirts } = productShirts
	const { pants } = productPants

	return (
		<ScrollView style={styles.screen}>

			<Label title={"new arrivals"} />
			<PromotionCard data={shirts} />

			<Label title={"25% Off"} />
			<PromotionCard data={pants} />

			<Label title={"50% Off"}/>
			<PromotionCard data={shirts} />

		</ScrollView>
	)
}

const mapStateToProps = state => {
	return {
		productShirts: state.shirts,
		productPants : state.pants
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#212129',
	},
	textStyle: {
		margin: 20,
		borderBottomWidth: 2,
		borderBottomColor: '#7f8385',
		color: '#DC3F45',
		fontWeight: "bold",
		fontSize: 30,
		textTransform: 'uppercase'

	}
})

export default connect(mapStateToProps, null)(Home);

