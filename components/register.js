import React from "react";
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';




const Register = () => {

	return (

		<View style={styles.screen}>

			<Input
				placeholder='Name'
				style={styles.inputStyle}
			/>
			<Input
				placeholder='Email'
				style={styles.inputStyle}
			/>
			<Input
				placeholder='Password'
				style={styles.inputStyle}
				secureTextEntry={true}
			/>
		</View>
	)

}

export default Register;

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
