import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import {
	Input
} from "react-native-elements";


const CheckOut = () => {


	const [modalVisible, setModalVisible] = useState(false);

	// const { name, qty, size, total } = myOrder;

	return (
		<View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<ScrollView >
					<View style={styles.modalView}>
						
						<Text style={styles.textStyle}>Deliver To</Text>
						<Input
							placeholder="Name"
						/>
						<Input
							placeholder="Address"
						/>
						<Input
							placeholder="City"
						/>
						<Input
							placeholder="State"
						/>
						<Text style={styles.textStyle}>Payment</Text>
						<Input
							placeholder="Card Name"
						/>
						<Input
							placeholder="Card Number"
							keyboardType="numeric"
						/>
						<Input
							placeholder="CVS"
							keyboardType="numeric"
						/>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Place order</Text>
						</Pressable>
					</View>
				</ScrollView>
			</Modal>

			<Pressable
				style={[styles.button, styles.buttonOpen]}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.textStyle}>Check Out</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 40,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: '#212129',
	},
	buttonClose: {
		backgroundColor: '#212129',
	},
	textStyle: {
		color: '#DC3F45',
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	},
	

});

export default CheckOut;