import React from "react";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import CheckOut from "./CheckOut";
import PricingCardInfo from "./PricingCard";

const RenderItem = ({ item }) => (
	<ListItem bottomDivider>
		<ListItem.Content>
			<ListItem.Title>Name {item.name}</ListItem.Title>
			<ListItem.Subtitle>Qty {item.qty}</ListItem.Subtitle>
			<ListItem.Subtitle>Total ${item.total}</ListItem.Subtitle>
		</ListItem.Content>
	</ListItem>
)


const Cart = ({ cart }) => {
	const total = cart.cart.reduce((a, c) => a + c.total, 0)
	const qty = cart.cart.reduce((a, c) => a + (+c.qty), 0)
	return (
		<ScrollView style={styles.screen}>
			<View style={styles.pricingCard}>
				<PricingCardInfo total={total} qty={qty} />
			</View>
			<FlatList
				data={cart.cart}
				renderItem={RenderItem}
				keyExtractor={(item => item.id.toString())}
			/>
			<View>
				<CheckOut />
			</View>
		</ScrollView>
	)
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps, null)(Cart);

const styles = StyleSheet.create({
	pricingCard: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
	},
	screen: {
		backgroundColor: '#212129',
		flex: 1,
	},
	checkOut: {
		marginBottom: 10,
	}
})