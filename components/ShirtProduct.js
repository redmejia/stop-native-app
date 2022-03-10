import React from "react";
import Product from "./Product";


const shirt = [
	{
	  id: 1,
	  name: 'shirt1',
	  price: 13.53
  
	},
	{
	  id: 2,
	  name: 'shirt2',
	  price: 13.53
  
	},
	{
	  id: 3,
	  name: 'shirt3',
	  price: 13.35
  
	}
  ]
  
  
  
const ShirtProduct = () => (
	<Product data={shirt} />
)

export default ShirtProduct;