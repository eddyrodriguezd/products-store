import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductCard from './cards/ProductCard';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products').then((result) => {
			setProducts(result.data);
		});
	}, []);

	return (
		<>
			{products.map((item) => (
				<ProductCard id={item.id} title={item.title} image={item.image} />
			))}
		</>
	);
};

export default ProductList;
