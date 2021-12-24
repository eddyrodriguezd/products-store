import React from 'react';

const ProductCard = (props) => {
	const { id, title, image } = props;

	return (
		<div className='grid-element'>
			<h1>{id}</h1>
			<img src={image} alt={title} />
			<div className='card-text'>
				<h3>{title}</h3>
			</div>
		</div>
	);
};

export default ProductCard;
