import React from "react";
import { Text, StyleSheet, FlatList, ScrollView, Image } from "react-native";
import { Card, Button } from "react-native-elements";

import { baseURL } from "../redux/baseUrl";



const RederProduct = ({ item }) => {
	return (

		<Card >
			<Card.Title style={styles.text}>{item.name}</Card.Title>
			 <Card.Divider/>
			<Image
				style={{ width: '100%', height: 300 }}
				resizeMode="cover"
				source={{ uri: baseURL + item.image }}
			/>
			<Text style={styles.text}>Price : ${item.price}</Text>
			<Button
				title="buy"

				buttonStyle={{
					borderRadius: 0,
					marginLeft: 0,
					marginRight: 0,
					marginBottom: 0,
					backgroundColor: '#DC3F45',
					borderWidth: 1,
					borderColor: '#DC3F45',
					borderRadius: 30,
				}}
				titleStyle={{ fontWeight: 'bold' }}

			/>
		</Card>
	)
}

// Product card
const Product = ({ data }) => {
	return (
		<ScrollView style={styles.screen}>

			<FlatList
				data={data}
				renderItem={RederProduct}
				keyExtractor={(item) => item.id.toString()}
			/>
		</ScrollView>
	)
}


export default Product;

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#212129',
		flex: 1,
	},
	text: {
		color: '#DC3F45',
		fontWeight : 'bold',
		fontSize : 30,
	}
})