import React, { useEffect, useState } from 'react';

import './ProductList.css';

import ProductCard from './cards/ProductCard';
import ProductDetailModal from './modals/products/ProductDetailModal';
import AboutModal from './modals/about/AboutModal';

const ProductList = ({
	productModalRef,
	aboutModalRef,
	showProductModal,
	setShowProductModal,
	showAboutModal,
	setShowAboutModal,
	products,
}) => {
	const [chosenId, setChosenId] = useState(0);
	const [chosenProduct, setChosenProduct] = useState({});

	useEffect(() => {
		if (chosenId !== 0) {
			setShowAboutModal(false);
			setChosenProduct(products.find((p) => p.id === chosenId));
			setShowProductModal(true);
		}
	}, [chosenId]);

	useEffect(() => {
		setChosenId(0);
		if (!showProductModal && showAboutModal) {
			setShowAboutModal(true);
		}
	}, [showProductModal]);

	useEffect(() => {
		if (!showAboutModal) {
			if (chosenId !== 0) {
				setShowProductModal(true);
			}
		}
	}, [showAboutModal]);

	return (
		<div className='products-flex-container'>
			{products.map((item) => (
				<ProductCard
					id={item.id}
					title={item.title}
					image={item.image}
					productOnClick={(id) => {
						setShowAboutModal(false);
						setChosenId(id);
					}}
					maxTime={item.maxTime}
				/>
			))}
			<AboutModal
				modalRef={aboutModalRef}
				showModal={showAboutModal}
				setShowModal={setShowAboutModal}
			/>
			<ProductDetailModal
				modalRef={productModalRef}
				image={chosenProduct.image}
				title={chosenProduct.title}
				price={chosenProduct.price}
				description={chosenProduct.description}
				category={chosenProduct.category}
				rating={chosenProduct.rating}
				showModal={showProductModal}
				setShowModal={setShowProductModal}
			/>
		</div>
	);
};

export default ProductList;
