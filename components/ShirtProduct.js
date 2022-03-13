import React from "react";
import Product from "./Product";


import { connect } from "react-redux";
import Loading from "./Loading";


const ShirtProduct = ({ product }) => {

	const { loading, shirts } = product

	return (
		<>
			{
				!loading ?
					<Product data={shirts} />
					:
					<Loading />
			}
		</>
	)
}

const mapStateToProps = state => {
	return {
		product: state.shirts
	}
}

export default connect(mapStateToProps, null)(ShirtProduct);