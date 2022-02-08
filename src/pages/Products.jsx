import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList';
import TopNav from '../components/topNav/TopNav';
// import AboutModal from '../components/modals/about/AboutModal';

import { getRandomInt, addSecondsToDate } from '../helpers/helper';

const Products = () => {
	const productModalRef = useRef(null);
	const aboutModalRef = useRef(null);

	const [showProductModal, setShowProductModal] = useState(false);
	const [showAboutModal, setShowAboutModal] = useState(false);

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

	const outsideModalClicked = (event) => {
		switch (event.target) {
			case aboutModalRef.current:
				if (setShowAboutModal) {
					console.log('Click detected outside the ABOUT modal');
					setShowAboutModal(false);
				}
				break;
			case productModalRef.current:
				if (setShowProductModal) {
					console.log('Click detected outside the PRODUCT modal');
					setShowProductModal(false);
				}
				break;
			default:
				console.log('Got here');
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
			{/* <AboutModal
				modalRef={aboutModalRef}
				showModal={showAboutModal}
				setShowModal={setShowAboutModal}
			/> */}
		</div>
	);
};

export default Products;
