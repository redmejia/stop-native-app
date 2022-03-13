import React, { useEffect } from "react";
import Product from "./Product";

import { connect } from "react-redux";


const ShirtProduct = ({ shirts }) => {

	return (
		<>
			<Product data={shirts.shirts} />
		</>
	)
}

const mapStateToProps = state => {
	return {
		shirts: state.shirts
	}
}

export default connect(mapStateToProps, null)(ShirtProduct);