import React from "react";
import { FlatList } from "react-native";
import { Card, Tile } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


import { baseURL } from "../redux/baseUrl";

const RenderPromotion = ({ item, navigation }) => {

	const { name, image } = item.item;

	return (
		<Card>
			<Tile
				imageSrc={{ uri: baseURL + image }}
				title={name}
				titleStyle={{
					color: 'red'
				}}
				featured

				onPress={() => {
					navigation.navigate('Order', { product: item.item })
				}}
			/>
		</Card>
	)
}


const PromotionCard = ({ data }) => {

	const navigation = useNavigation()

	return (
		<>
			<FlatList
				horizontal={true}
				data={data}
				renderItem={(item) =>
					<RenderPromotion
						item={item}
						navigation={navigation}
					/>
				}
				keyExtractor={(item) => item.id.toString()}
			/>
		</>
	)
}

export default PromotionCard;