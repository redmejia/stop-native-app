import React from "react";
import { Text, StyleSheet, FlatList, ScrollView, Image } from "react-native";
import { Card, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { baseURL } from "../redux/baseUrl";




const RederProduct = ({ item, navigation }) => {

	const { name, image, price } = item.item

	return (

		<Card >
			<Card.Title style={styles.text}>{name}</Card.Title>
			<Card.Divider />
			<Image
				style={{ width: '100%', height: 300 }}
				resizeMode="cover"
				source={{ uri: baseURL + image }}
			/>
			<Text style={styles.text}>Price : ${price}</Text>
			<Button
				title="Buy"

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
				onPress={() => {
					navigation.navigate('Order', { product: item.item })
				}}
			/>
		</Card>
	)
}

const ProductCard = ({ data }) => {

	const navigation = useNavigation()

	return (
		<ScrollView style={styles.screen}>

			<FlatList
				data={data}
				renderItem={(item) =>
					 <RederProduct
					item={item}
					navigation={navigation}
				/>
				}
				keyExtractor={(item) => item.id.toString()}
			/>
		</ScrollView>
	)
}


export default ProductCard;

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#212129',
		flex: 1,
	},
	text: {
		color: '#DC3F45',
		fontWeight: 'bold',
		fontSize: 30,
	}
})