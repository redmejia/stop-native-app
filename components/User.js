import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const User = () => {
	
	const navigation = useNavigation()

	return (
		<View style={styles.headerUserStyle}>

			<Text>
				@notAdmin
			</Text>
			<TouchableOpacity
				onPress={()=>{
					navigation.navigate('Signin')
				}}
			>
				<Icon
					name="sign-out"
					type='font-awesome'
					size={24}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	headerUserStyle: {
		marginRight: 15,
	}
})
export default User;
