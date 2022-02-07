import React from 'react';
import './TopNav.css';

const TopNav = () => (
	<div className='top-navbar'>
		<div
			className='about-button'
			role='button'
			onClick={() => alert('HEY')}
			onKeyDown={() => alert('HEY')}
			tabIndex={0}>
			About
		</div>
		<h1>Products</h1>
	</div>
);

export default TopNav;
