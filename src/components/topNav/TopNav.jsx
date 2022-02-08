import React from 'react';
import './TopNav.css';

const TopNav = ({ onAboutClick }) => (
	<div className='top-navbar'>
		<div
			className='about-button'
			role='button'
			onClick={() => onAboutClick()}
			onKeyDown={() => onAboutClick()}
			tabIndex={0}>
			About
		</div>
		<h1>Products</h1>
	</div>
);

export default TopNav;
