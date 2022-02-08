import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList';
import TopNav from '../components/topNav/TopNav';

import { getRandomInt, addSecondsToDate } from '../helpers/helper';

const Products = () => {
	const productModalRef = useRef(null);
	const aboutModalRef = useRef(null);

	const [showProductModal, setShowProductModal] = useState(false);
	const [showAboutModal, setShowAboutModal] = useState(false);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get(process.env.REACT_APP_BACKEND_ENDPOINT).then((result) => {
			setProducts(
				result.data.map((product) => ({
					...product,
					maxTime: addSecondsToDate(new Date(), getRandomInt(60, 180)).getTime(),
				}))
			);
		});
	}, []);

	const outsideModalClicked = (event) => {
		switch (event.target) {
			case aboutModalRef.current:
				if (setShowAboutModal) {
					setShowAboutModal(false);
				}
				break;
			case productModalRef.current:
				if (setShowProductModal) {
					setShowProductModal(false);
				}
				break;
			default:
		}
	};

	useEffect(() => {
		document.addEventListener('click', outsideModalClicked, false);
		return () => {
			document.removeEventListener('click', outsideModalClicked, false);
		};
	}, []);

	return (
		<div>
			<TopNav
				onAboutClick={() => {
					setShowAboutModal(true);
					setShowProductModal(false);
				}}
			/>
			<ProductList
				productModalRef={productModalRef}
				aboutModalRef={aboutModalRef}
				showProductModal={showProductModal}
				setShowProductModal={setShowProductModal}
				showAboutModal={showAboutModal}
				setShowAboutModal={setShowAboutModal}
				products={products}
			/>
		</div>
	);
};

export default Products;
