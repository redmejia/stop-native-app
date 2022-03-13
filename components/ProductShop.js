import React from "react";
import { Text, View } from "react-native";

const ProductShop = ({ route }) => {
	const { product } = route.params;

	return (
		<View>
			<Text>{product.id}</Text>
			<Text>{product.name}</Text>
			<Text>{product.image}</Text>
		</View>
	)
}


export default ProductShop;