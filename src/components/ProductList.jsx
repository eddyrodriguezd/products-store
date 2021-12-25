import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import './ProductList.css';

import ProductCard from './cards/ProductCard';
import ProductDetailModal from './modals/ProductDetailModal';

const ProductList = () => {
	// const wrapperRef = useRef(null);
	const [products, setProducts] = useState([]);
	const [chosenId, setChosenId] = useState(0);
	const [chosenProduct, setChosenProduct] = useState({});

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log('Fetching information from API');
		axios.get('https://fakestoreapi.com/products').then((result) => {
			console.log('Information from API: ' + JSON.stringify(result.data));
			setProducts(result.data);
		});
	}, []);

	useEffect(() => {
		if (chosenId !== 0) {
			console.log('ID to look for: ' + chosenId);

			setChosenProduct(products.find((p) => p.id === chosenId));
			console.log('Chosen Product: ' + JSON.stringify(chosenProduct));

			setShowModal(true);
		}
	}, [chosenId]);

	const productOnClick = (id) => {
		console.log('Product ' + id + ' clicked');
		setChosenId(id);
	};

	/* const outsideModalClicked = (event) => {
		console.log('is it a fake alarm?');
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			console.log('outside modal clicked');
			setModalVisible(false);
			setChosenProductId(0);
		}
	}; */

	/* useEffect(() => {
		document.addEventListener('click', outsideModalClicked, false);
		return () => {
			document.removeEventListener('click', outsideModalClicked, false);
		};
	}, []); */

	return (
		<div className='products-flex-container'>
			{console.log('RENDERIZANDO...')}
			{products.map((item) => (
				<ProductCard
					id={item.id}
					title={item.title}
					image={item.image}
					productOnClick={productOnClick}
				/>
			))}
			{console.log('isModalVisible? ' + showModal)}
			{console.log('chosenProduct.rating? ' + JSON.stringify(chosenProduct.rating))}
			{/* console.log('chosenProduct.rate? ' + chosenProduct.rating.rate) */}
			<ProductDetailModal
				// ref={wrapperRef}
				id={chosenProduct.id}
				title={chosenProduct.title}
				price={chosenProduct.price}
				description={chosenProduct.description}
				category={chosenProduct.category}
				rating={0}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</div>
	);
};

export default ProductList;
