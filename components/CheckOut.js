import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import {
	Input, Card
} from "react-native-elements";

const PricingCardInfo = ({ name, qty, size, total }) => (
	<Card 
		containerStyle={{
			borderRadius: 5,
			width : 250,
		}}
		
	>
		<View style={styles.pricingCardStyle}>
			<Text style={styles.pricingTitleText}>{name}</Text>
			<Text style={styles.pricingSubTitleText}>${total}</Text>
			<Text style={styles.pricingSubSmall}>qty {qty}</Text>
			<Text style={styles.pricingSubSmall}>size {size}</Text>
		</View>
	</Card>
)

const CheckOut = ({ myOrder }) => {


	const [modalVisible, setModalVisible] = useState(false);

	const { name, qty, size, total } = myOrder;

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
						
						<PricingCardInfo
							name={name}
							qty={qty}
							size={size}
							total={total}
						/>

						<Text style={styles.textStyle}>Deliver to</Text>
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
	pricingCardStyle: {
		alignItems: 'center',
		alignContent: 'center',
	},
	pricingTitleText : {
		fontSize : 50,
		color : '#DC3F45',
	},
	pricingSubTitleText : {
		fontSize : 50,
		color : '#212129',
	},
	pricingSubSmall : {
		fontSize : 30,
		color : '#7f8385',
	}

});

export default CheckOut;