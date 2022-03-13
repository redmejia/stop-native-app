import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import PantsProduct from "./PantsProduct";
import ShirtProduct from "./ShirtProduct";
import Home from "./Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabRoot = () => {

	return (

		<Tab.Navigator

			tabBarOptions={{
				activeTintColor: '#fff',
				inactiveTintColor: '#DC3F45',
				activeBackgroundColor: '#DC3F45',
				inactiveBackgroundColor: '#212129',

			}}

			screenOptions={{

				headerStyle: {
					backgroundColor: '#DC3F45'
				},
				tabBarBadge: 3,
				tabBarBadgeStyle: { backgroundColor: 'blue' }

			}}

		>
			<Tab.Screen name="Pants" component={PantsProduct} />
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Shirt" component={ShirtProduct} />
		</Tab.Navigator>

	)
}



class Main extends Component {

	render() {

		return (

			<Stack.Navigator>
				<Stack.Screen
					name="Stop"
					component={TabRoot}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		)
	}
}


export default Main;