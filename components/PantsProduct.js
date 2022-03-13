import React from "react";
import Product from "./Product";
import { connect } from "react-redux";



const PantsProduct = ({ product }) => {
	const { loading, pants } = product;
	
	return (
		<>
			{
				!loading ?
					<Product data={pants} />
				: null
		}
		</>
	)
}
const mapStateToProps = state => {
	return {
		product: state.pants
	}
}
export default connect(mapStateToProps, null)(PantsProduct);