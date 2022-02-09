import React from 'react';
import './AboutModal.css';
import devImage from '../../../assets/eddy.jpg';

const AboutModal = ({ modalRef, yPosition, showModal, setShowModal }) =>
	showModal ? (
		<div
			className='about-modal-container'
			ref={modalRef}
			style={{ transform: `translateY(${yPosition}px)` }}>
			<div className='about-modal-image'>
				<img src={devImage} alt='Developer' />
			</div>

			<div className='about-modal-info'>
				<div
					className='about-modal-close-button'
					role='button'
					onClick={() => setShowModal(false)}
					onKeyDown={() => setShowModal(false)}
					tabIndex={0}>
					X
				</div>
				<div className='about-modal-text'>
					<h3>Developed by: Eddy Rodriguez</h3>
					<h3>
						Application that simulates an e-commerce with products from the Fake Store API
						(https://fakestoreapi.com/)
					</h3>
					<h3>
						Techonologies learned during the course and used in this app:
						<ul>
							<li
								style={{
									content:
										"url('https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript')",
								}}
							/>
							<li
								style={{
									content:
										"url('https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3')",
								}}
							/>
							<li
								style={{
									content:
										"url('https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react')",
								}}
							/>
						</ul>
					</h3>
					<h3>Contact information</h3>
					<h3>
						Mail:
						<a href='mailto:e.rodriguezd@pucp.edu.pe' style={{ color: 'black' }}>
							e.rodriguezd@pucp.edu.pe
						</a>
					</h3>
					<h3>
						Github:
						<a href='https://github.com/eddyrodriguezd/' style={{ color: 'black' }}>
							https://github.com/eddyrodriguezd/
						</a>
					</h3>
				</div>
			</div>
		</div>
	) : null;

export default AboutModal;
