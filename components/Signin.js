import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
	
	const navigation = useNavigation()

	return (
		<View style={styles.screen}>

			<Image
				style={styles.tinyLogo}
				source={require('./images/logo35.png')}

			/>
			<Input
				placeholder="Email"
				style={styles.inputStyle}
				leftIcon={
					<Icon
						name="email"
						size={24}
						color='#7f8385'
					/>
				}

			/>
			<Input
				placeholder="Password"
				style={styles.inputStyle}
				secureTextEntry={true}
				leftIcon={
					<Icon
						name="lock"
						size={24}
						color='#7f8385'
					/>
				}
			/>
			<Button
				title="Sign in"
				buttonStyle={{
					backgroundColor: '#DC3F45',
					borderWidth: 2,
					borderColor: '#212129',
					borderRadius: 30,
				}}
				containerStyle={{
					width: 200,
					marginHorizontal: 50,
					marginVertical: 10,
				}}
				titleStyle={{ fontWeight: 'bold' }}
				onPress={() => {
					navigation.navigate('HomeSreen')
				}}
			/>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Register')
				}}
			>
				<Text style={{ color: 'white' }}>
					Not registered?<Text style={{ color: '#DC3F45' }}> Create an account</Text>
				</Text>

			</TouchableOpacity>
		</View >
	)
}

export default Signin;

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#212129',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputStyle: {
		color: '#DC3F45',
		borderBottomWidth: 3,
		borderBottomColor: '#DC3F45',
	}
})