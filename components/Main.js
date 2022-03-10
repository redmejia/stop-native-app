import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import PantsProduct from "./PantsProduct";
import ShirtProduct from "./ShirtProduct";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const Main = () => {
	return (

		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#fff',
				inactiveTintColor: '#DC3F45',
				activeBackgroundColor: '#DC3F45',
				inactiveBackgroundColor: '#212129',
			
			}}


		>
			<Tab.Screen name="Pants" component={PantsProduct} />
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Shirt" component={ShirtProduct} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	bottomBar: {
		backgroundColor: '#DC3F45',
		marginBottom: 4,
	}
})


export default Main;