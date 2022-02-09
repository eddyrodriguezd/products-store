import React, { useEffect, useState } from 'react';
import { formatCountDownTimer } from '../../helpers/helper';
import './ProductCard.css';

const ProductCard = ({ id, title, image, productOnClick, maxTime }) => {
	const calculateRemainingSeconds = () =>
		maxTime - new Date().getTime() > 0 ? Math.floor((maxTime - new Date().getTime()) / 1000) : 0;

	const [timeLeft, setTimeLeft] = useState(calculateRemainingSeconds());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateRemainingSeconds());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className='product-card'>
			<div className='product-card-img-container'>
				<img src={image} alt={title} />
			</div>
			<div className='product-card-footer'>
				<h3>{title}</h3>
				<div className='product-card-footer-bottom'>
					<div className='product-card-footer-item'>
						<h3>{formatCountDownTimer(timeLeft)}</h3>
					</div>
					<div className='product-card-footer-item'>
						<div
							className='product-card-button'
							role='button'
							onClick={() => (timeLeft > 0 ? productOnClick(id) : productOnClick(0))}
							onKeyDown={() => (timeLeft > 0 ? productOnClick(id) : productOnClick(0))}
							tabIndex={0}>
							Go to detail
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
