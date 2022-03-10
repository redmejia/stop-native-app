import React from "react";
import { Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { Card, Button } from "react-native-elements";

const pants = [{
	id: 1,
	name: 'pant',
	price: 13.53

},
{
	id: 2,
	name: 'pant1',
	price: 13.53

},
{
	id: 3,
	name: 'pant2',
	price: 13.35

},
{
	id: 4,
	name: 'pant3',
	price: 13.89

},
{
	id: 5,
	name: 'pant4',
	price: 13.89

},
{
	id: 6,
	name: 'pant5',
	price: 13.89

},
{
	id: 7,
	name: 'pant6',
	price: 13.89

}
]




const RederProduct = ({ item }) => {
	return (

		<Card >
			<Card.Title style={styles.text}>{item.name}</Card.Title>
			<Text style={styles.text}>{item.price}</Text>
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

const Product = () => {
	return (
		<ScrollView style={styles.screen}>

			<FlatList
				data={pants}
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
	}
})