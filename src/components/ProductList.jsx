import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import './ProductList.css';

import ProductCard from './cards/ProductCard';
import ProductDetailModal from './modals/ProductDetailModal';

const ProductList = () => {
	const modalRef = useRef(null);

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

	const outsideModalClicked = (event) => {
		if (modalRef.current !== event.target) {
			console.log('Click detected outside the modal');
			setShowModal(false);
			setChosenId(0);
		}
	};

	useEffect(() => {
		document.addEventListener('click', outsideModalClicked, false);
		return () => {
			document.removeEventListener('click', outsideModalClicked, false);
		};
	}, []);

	return (
		<div className='products-flex-container' /* onClick={closeModal} onKeyDown={closeModal} */>
			{products.map((item) => (
				<ProductCard
					id={item.id}
					title={item.title}
					image={item.image}
					productOnClick={(id) => setChosenId(id)}
				/>
			))}
			{console.log('isModalVisible? ' + showModal)}
			{console.log('chosenProduct? ' + chosenProduct)}
			{/* console.log('chosenProduct.rate? ' + chosenProduct.rating.rate) */}
			<ProductDetailModal
				ref={modalRef}
				id={chosenProduct.id}
				title={chosenProduct.title}
				price={chosenProduct.price}
				description={chosenProduct.description}
				category={chosenProduct.category}
				rating={chosenProduct.rating}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</div>
	);
};

export default ProductList;
