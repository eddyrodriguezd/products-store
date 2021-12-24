import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import './ProductList.css';

import ProductCard from './cards/ProductCard';
import ProductDetailModal from './modals/ProductDetailModal';

const ProductList = () => {
	const wrapperRef = useRef(null);
	const [products, setProducts] = useState([]);
	const [chosenProductId, setChosenProductId] = useState(0);
	const [chosenProduct, setChosenProduct] = useState({});
	const [isModalVisible, setModalVisible] = useState(false);

	axios.get('https://fakestoreapi.com/products').then((result) => {
		setProducts(result.data);
	});

	useEffect(() => {
		console.log('Product changed: ' + chosenProductId);

		if (chosenProductId !== 0) {
			axios.get('https://fakestoreapi.com/products/' + chosenProductId).then((result) => {
				console.log('retrieved data: ' + result.data);
				setChosenProduct(result.data);
			});

			setModalVisible(true);
		}
	}, [chosenProductId]);

	const productClicked = (id) => {
		console.log('product ' + id + ' clicked');
		setChosenProductId(id);
	};

	const outsideModalClicked = (event) => {
		console.log('is it a fake alarm?');
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			console.log('outside modal clicked');
			setModalVisible(false);
			setChosenProductId(0);
		}
	};

	useEffect(() => {
		document.addEventListener('click', outsideModalClicked, false);
		return () => {
			document.removeEventListener('click', outsideModalClicked, false);
		};
	}, []);

	return (
		<div className='products-flex-container'>
			{products.map((item) => (
				<ProductCard
					id={item.id}
					title={item.title}
					image={item.image}
					productOnClick={productClicked}
				/>
			))}
			{isModalVisible && chosenProductId !== 0 ? (
				<ProductDetailModal
					ref={wrapperRef}
					id={chosenProduct.id}
					title={chosenProduct.title}
					price={chosenProduct.price}
					description={chosenProduct.description}
					category={chosenProduct.category}
					rating={0}
				/>
			) : (
				<h1>Adiós</h1>
			)}
		</div>
	);
};

export default ProductList;
