import React, { useEffect, useRef, useState } from 'react';

import './ProductList.css';

import ProductCard from './cards/ProductCard';
import ProductDetailModal from './modals/products/ProductDetailModal';

const ProductList = ({ products }) => {
	const modalRef = useRef(null);

	const [chosenId, setChosenId] = useState(0);
	const [chosenProduct, setChosenProduct] = useState({});

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (chosenId !== 0) {
			if (chosenId === -1) {
				console.log('Timer is over');
			} else {
				console.log(`ID to look for: ${chosenId}`);

				setChosenProduct(products.find((p) => p.id === chosenId));
				console.log(`Chosen Product: ${JSON.stringify(chosenProduct)}`);

				setShowModal(true);
			}
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
		<div className='products-flex-container'>
			{products.map((item) => (
				<ProductCard
					id={item.id}
					title={item.title}
					image={item.image}
					productOnClick={(id) => setChosenId(id)}
					maxTime={item.maxTime}
				/>
			))}
			<ProductDetailModal
				ref={modalRef}
				id={chosenProduct.id}
				image={chosenProduct.image}
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
