import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
	const { id, title, image } = props;

	return (
		<div className='product-card'>
			<h3>{id}</h3>
			<div className='product-card-img-container'>
				<img src={image} alt={title} />
			</div>
			<div className='product-card-footer'>
				<h3>{title}</h3>
				<div className='product-card-button'>
					<h3>Go to detail</h3>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
