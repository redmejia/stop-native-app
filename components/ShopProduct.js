import React, { useState } from "react";
import {
	Card, Button, Input
} from "react-native-elements";
import {
	Text, ScrollView, View,
	StyleSheet, Image, TouchableOpacity,
	Alert
} from "react-native";
import { baseURL } from "../redux/baseUrl";


const ProductShop = ({ route }) => {


	const { product } = route.params;

	const [myOrder, setOrder] = useState({
		id: product.id,
		name: product.name,
		size: "",
		qty: 1,
		total: product.price
	})



	const sizes = product.sizes.map(sizes => (
		<Button
			title={sizes}

			buttonStyle={{
				borderRadius: 0,
				marginLeft: 5,
				marginRight: 0,
				marginBottom: 0,
				backgroundColor: '#DC3F45',
				borderWidth: 1,
				borderColor: '#DC3F45',
				borderRadius: 100,
			}}

			onPress={() => setOrder(prevState => {

				return {
					...prevState,
					...{ size: sizes }
				}

			})}
		/>

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
				<Text style={styles.text}>Price ${product.price}</Text>

				<View style={styles.horizontalDisplay}>
					<Text style={styles.text}>Qty </Text>
					<View style={{ width: 50 }}>
						<Input
							placeholder="1"
							keyboardType="numeric"
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
					</View>
				</View>
				<View style={styles.horizontalDisplay}>
					<Text style={styles.text}>Size  </Text>
					{sizes}
				</View>

				<Card.Divider />

				<View >

					<TouchableOpacity
						style={styles.textCentered}
						onPress={() => {
							Alert.alert(
								'Look\'s Ok?',
								`Itme : ${myOrder.name}\nSize: ${myOrder.size}\nQty : ${myOrder.qty}\nTotal : ${myOrder.total}`,
								[
									{
										text: 'Cancel',
										style: 'cancel'
									},
									{
										text: 'OK',
										onPress: () => console.log("bye")
									}

								]

							)
						}}
					>
						<Text style={styles.text}>My Order</Text>
					</TouchableOpacity>

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
				</View>
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
		fontSize: 20,
		marginBottom: 14,
	},
	textCentered: {
		color: '#DC3F45',
		justifyContent: 'center',
		alignItems: 'center',
	},
	horizontalDisplay: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 14,
	}
})


export default ProductShop;