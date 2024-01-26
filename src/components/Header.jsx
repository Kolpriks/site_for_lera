import React, { useState } from 'react'
import './Header.css'
import logo from '../images/logo4.png'
import ModalWindow from '../modal/ModalWindow'

export const Header = () => {
	const [modalIsopen, setModalIsOpen] = useState(false)

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

  return (
    <>
      <div className='container'>
        <div className='header_photo'>
					<div className='navigation__wrapper'>

						<nav>
							<a href='/'>ЦЕНЫ</a>
							<a href='/'>ПОРТФОЛИО</a>
						</nav>

						<img src={logo} className='logo'/>
						
						<nav>
							<a href='/'>ПРАВИЛА</a>
							<a href='/'>КОНТАКТЫ</a>
						</nav>

					</div>

					<div className='header__text__wrapper'>
						<div>
						<h2 className='header__text'>ФОТО ДЛЯ ТОРГОВЫХ ПЛОЩАДОК, СОЗДАНИЕ КАТАЛОЖНЫХ ИЗОБРАЖЕНИЙ</h2>
						</div>

						<div>
							<ul className='capability'>
								<li>Предметная съемка</li>
								<li>Художественная съемка с реквизитом</li>
								<li>Съемка на модели</li>
							</ul>
						</div>

					</div>

					<div className='buttons'>
						<button className='left-button'>ПОРТФОЛИО</button>
						<button onClick={openModal} className='right-button'>ОСТАВИТЬ ЗАЯВКУ</button>
						<ModalWindow isOpen={modalIsopen} closeModal={closeModal} />
					</div>

				</div>
			</div>
		</>
	)
}

