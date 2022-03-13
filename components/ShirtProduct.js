import React from "react";
import { Text } from "react-native";
import Product from "./Product";


import { connect } from "react-redux";


const ShirtProduct = ({ product }) => {

	const {loading, shirts} = product

	return (
		<>
			{
				!loading?
					<Product data={shirts} />
					:
					<Text>
						...loading
					</Text>
			}
		</>
	)
}

const mapStateToProps = state => {
	return {
		product : state.shirts
	}
}

export default connect(mapStateToProps, null)(ShirtProduct);