import React from 'react';
import './ProductDetailModal.css';

const ProductDetailModal = ({
	id,
	title,
	price,
	description,
	category,
	rating,
	showModal,
	setShowModal,
}) =>
	showModal ? (
		<div className='product-modal-container'>
			<div className='product-modal'>
				<h3>Id: {id}</h3>
				<h3>Title: {title}</h3>
				<h3>Price: {price}</h3>
				<h3>Description: {description}</h3>
				<h3>Category: {category}</h3>
				<h3>Rating: {rating}</h3>
			</div>
			<div
				className='product-modal-close-button'
				role='button'
				onClick={() => setShowModal(false)}
				onKeyDown={() => setShowModal(false)}
				tabIndex={0}>
				Close
			</div>
		</div>
	) : null;

export default ProductDetailModal;
