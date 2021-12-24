import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './ProductList.css';

import ProductCard from './cards/ProductCard';
import ProductDetailModal from './modals/ProductDetailModal';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [isModalVisible, setModalVisible] = useState(false);

	setModalVisible(true);

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products').then((result) => {
			setProducts(result.data);
		});
	}, []);

	/* useEffect(() => {
		setModalVisible
	}, [modalVisible]); */

	return (
		<div className='products-flex-container'>
			{products.map((item) => (
				<ProductCard id={item.id} title={item.title} image={item.image} />
			))}
			{isModalVisible ? <ProductDetailModal /> : <div />}
		</div>
	);
};

export default ProductList;
