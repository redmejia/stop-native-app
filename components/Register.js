import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';



const Register = () => {

	return (

		<View style={styles.screen}>

			<Image
				style={styles.tinyLogo}
				source={require('./images/logo35.png')}

			/>

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
			<Button
				title="REGISTER"
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
	},
	tinyLogo: {
		
		// justifyContent: 'center',
        // alignItems: 'center',
		// margin : 0,
		// padding: 0,
		// width: '100%',
		// height: '100%',
	},
})
