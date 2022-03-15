import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	Icon
} from "react-native-elements";
import { StyleSheet } from "react-native";
import PantsProduct from "./PantsProduct";
import ShirtProduct from "./ShirtProduct";
import Home from "./Home";
import ShopProduct from "./ShopProduct";

import { connect } from "react-redux";
import { fetchProductShirts, fetchProductPants } from "../redux/ActionCreators";
import Cart from "./Cart";
import Register from "./Register";
import Signin from "./Signin";
import User from "./User";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabRoot = (itemLen) => {

	return (

		<Tab.Navigator

			tabBarOptions={{
				activeTintColor: '#fff',
				inactiveTintColor: '#DC3F45',
				activeBackgroundColor: '#DC3F45',
				inactiveBackgroundColor: '#212129',

			}}



			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					if (route.name === 'Home') {
						return (
							<Icon
								name='home'
								type='font-awesome'
								color={color}
							/>
						);
					}
					if (route.name === 'Shirts') {
						return (

							<Icon
								name='chevron-up'
								type='font-awesome'
								color='#7f8385'
							/>
						)
					}
					if (route.name === 'Pants') {
						return (

							<Icon
								name='chevron-down'
								type='font-awesome'
								color='#7f8385'
							/>
						)
					}
					if (route.name === 'Cart') {
						return (
							<Icon
								name='shopping-cart'
								type='font-awesome'
								color='#7f8385'
							/>
						)
					}
				},
				headerStyle: {
					backgroundColor: '#DC3F45'
				},

			})}

		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabelStyle: styles.labelStyle,
					headerRight : () => <User  /> 
				}}
			/>
			<Tab.Screen
				name="Pants"
				component={PantsProduct}
				options={{
					tabBarLabelStyle: styles.labelStyle,
					headerRight : () => <User  /> 
				}}
			/>
			<Tab.Screen
				name="Shirts"
				component={ShirtProduct}
				options={{
					tabBarLabelStyle: styles.labelStyle,
					headerRight : () => <User  /> 
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={Cart}
				options={{
					tabBarLabelStyle: styles.labelStyle,
					tabBarBadge: itemLen > 0 ? itemLen : null,
					headerRight : () => <User  /> 
				}}
			/>
		</Tab.Navigator>

	)
}



class Main extends Component {

	componentDidMount() {
		this.props.fetchProductShirts();
		this.props.fetchProductPants();
	}


	render() {

		const len = this.props.cartItems.cart.length

		return (

			<Stack.Navigator>
				
				<Stack.Screen
					name="Signin"
					component={Signin}
					options={{
						headerShown : false
					}}
				/>

				<Stack.Screen 
					name="Register"
					component={Register}
					options={{
						headerShown : false,
					}}
				/>

				<Stack.Screen
					name="HomeSreen"
					component={() => TabRoot(len)}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Check Out"
					component={ShopProduct}
					options={{
						headerStyle: {
							backgroundColor: '#DC3F45'
						}
					}}
				/>

			</Stack.Navigator>
		)
	}
}

const mapStateToProps = state => {
	return {
		cartItems: state.cart
	}
}

const mapDispatchToProps = {
	fetchProductShirts,
	fetchProductPants
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
	iconStyle: {
		color: '#7f8385'
	},
	labelStyle: {
		fontSize: 14,
		fontWeight: 'bold',
	}
})