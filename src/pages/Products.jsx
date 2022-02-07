import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList';

import { getRandomInt, addSecondsToDate } from '../components/helpers/helper';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products').then((result) => {
			setProducts(
				result.data.map((product) => ({
					...product,
					maxTime: addSecondsToDate(new Date(), getRandomInt(6, 18)).getTime(),
				}))
			);
			console.log(`Information fetched from API: ${JSON.stringify(products)}`);
		});
	}, []);

	return (
		<div>
			<h1>Products</h1>
			<ProductList products={products} />
		</div>
	);
};

export default Products;
