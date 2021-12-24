import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
	const { id, title, image, productOnClick } = props;

	return (
		<div className='product-card'>
			<h3>{id}</h3>
			<div className='product-card-img-container'>
				<img src={image} alt={title} />
			</div>
			<div className='product-card-footer'>
				<h3>{title}</h3>
				<div
					className='product-card-button'
					role='button'
					onClick={() => productOnClick(id)}
					onKeyDown={() => productOnClick(id)}
					tabIndex={0}>
					Go to detail
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
