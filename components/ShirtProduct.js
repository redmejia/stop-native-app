import React from "react";
import ProductCard from "./ProductCard";


import { connect } from "react-redux";
import Loading from "./Loading";


const ShirtProduct = ({ product }) => {

	const { loading, shirts } = product

	return (
		<>
			{
				!loading ?
					<ProductCard data={shirts} />
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