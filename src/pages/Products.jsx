import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList';
import TopNav from '../components/topNav/TopNav';

import { getRandomInt, addSecondsToDate } from '../helpers/helper';

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products').then((result) => {
			setProducts(
				result.data.map((product) => ({
					...product,
					maxTime: addSecondsToDate(new Date(), getRandomInt(60, 180)).getTime(),
				}))
			);
			console.log(`Information fetched from API: ${JSON.stringify(products)}`);
		});
	}, []);

	return (
		<div>
			<TopNav />
			<ProductList products={products} />
		</div>
	);
};

export default Products;
