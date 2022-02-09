import React from 'react';
import './TopNav.css';
import devIcon from '../../assets/developer-icon.jpeg';

const TopNav = ({ onAboutClick }) => (
	<div className='top-navbar'>
		<div
			className='about-button'
			role='button'
			onClick={() => onAboutClick()}
			onKeyDown={() => onAboutClick()}
			tabIndex={0}>
			<img src={devIcon} alt='dev' />
		</div>
		<h2>Products Catalog</h2>
	</div>
);

export default TopNav;
