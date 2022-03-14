import React, { useState } from "react";
import {
	Card, Button, Input
} from "react-native-elements";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import { baseURL } from "../redux/baseUrl";


const ProductShop = ({ route }) => {


	const { product } = route.params;

	const [myOrder, setOrder] = useState({
		id: product.id,
		name: product.name,
		size: 0,
		qty: 1,
		total: product.price
	})



	const sizes = product.sizes.map(sizes => (
		<>
			<Button
				title={sizes}

				buttonStyle={{
					borderRadius: 0,
					marginLeft: 0,
					marginRight: 0,
					marginBottom: 5,
					backgroundColor: '#DC3F45',
					borderWidth: 1,
					borderColor: '#DC3F45',
					borderRadius: 30,
				}}

				onPress={() => setOrder(prevState => {

					return {
						...prevState,
						...{ size: sizes }
					}

				})}
			/>

		</>
	))



	return (
		<ScrollView style={styles.container}>

			<Card>
				<Card.Title style={styles.text}>{product.name}</Card.Title>
				<Card.Divider />
				<Image
					style={{ width: '100%', height: 400 }}
					resizeMode="cover"
					source={{ uri: baseURL + product.image }}
				/>
				<Text style={styles.text}>Price : ${product.price}</Text>
				<Card.Divider />
				<View>
					<Text style={styles.text}>Sizes</Text>
					{sizes}
				</View>
				<Card.Divider />
				<Input
					placeholder="1"
					onChangeText={(text) => setOrder(prevState => {
						return {
							...prevState,
							...{
								qty: text,
								total: +text * product.price
							}
						}

					})}
				/>
				<Button
					title="Check Out"

					buttonStyle={{
						borderRadius: 0,
						marginLeft: 0,
						marginRight: 0,
						marginBottom: 5,
						backgroundColor: '#212129',
						borderWidth: 1,
						borderColor: '#212129',
						borderRadius: 30,
					}}
					onPress={() => console.log(myOrder)}
				/>
			</Card>
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#212129',
	},
	text: {
		color: '#DC3F45',
		fontWeight: 'bold',
		fontSize: 30,
	}
})


export default ProductShop;