import React from "react";
import Product from "./Product";

const pants = [
	{
		id: 1,
		name: 'pant',
		price: 13.53

	},
	{
		id: 2,
		name: 'pant1',
		price: 13.53

	},
	{
		id: 3,
		name: 'pant2',
		price: 13.35

	},
	{
		id: 4,
		name: 'pant3',
		price: 13.89

	},
	{
		id: 5,
		name: 'pant4',
		price: 13.89

	},
	{
		id: 6,
		name: 'pant5',
		price: 13.89

	},
	{
		id: 7,
		name: 'pant6',
		price: 13.89

	}
]

const PantsProduct = () => (
	<Product data={pants} />
)

export default PantsProduct;