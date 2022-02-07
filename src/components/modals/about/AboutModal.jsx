import React from 'react';
import './AboutModal.css';

const AboutModal = ({ modalRef, showModal, setShowModal }) =>
	showModal ? (
		<div className='about-modal-container' ref={modalRef}>
			<div className='about-modal-image'>
				<img src='../../../assets/devPhoto.jpg' alt='Developer' />
			</div>
			<div className='about-modal-text'>
				<h3>Developed by: Eddy Rodriguez</h3>
				<h3>Fake Store done with products from https://fakestoreapi.com/</h3>
				<br />
				<h3>
					Techonologies learned during the course and used in this app: CSS (Flexbox), JS, React
					(Hooks)
				</h3>
				<br />
				<h3>Contact information</h3>
				<h3>Mail: e.rodriguezd@pucp.edu.pe</h3>
				<h3>Github: https://github.com/eddyrodriguezd/</h3>
			</div>
			<div
				className='about-modal-close-button'
				role='button'
				onClick={() => setShowModal(false)}
				onKeyDown={() => setShowModal(false)}
				tabIndex={0}>
				Close
			</div>
		</div>
	) : null;

export default AboutModal;
