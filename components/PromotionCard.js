import React from "react";
import { FlatList } from "react-native";
import { Card, Tile } from "react-native-elements";

import { baseURL } from "../redux/baseUrl";

const RenderPromotion = ({ item }) => {
	return (
		<Card>
			<Tile
				imageSrc={{ uri: baseURL + item.image }}
				title={item.name}
				titleStyle={{
					color: 'red'
				}}
				featured
			/>


		</Card>
	)
}


const PromotionCard = ({ data }) => {
	return (
		<>
			<FlatList
				horizontal={true}
				data={data}
				renderItem={RenderPromotion}
				keyExtractor={(item) => item.id.toString()}
			/>
		</>
	)
}

export default PromotionCard;