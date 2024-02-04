import React, { useState, useEffect } from 'react';
import './Header.css'
import logo from '../images/logo4.png'
import axios from 'axios'
import Modal from './buttons/modal/Modal'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import MainButton from './buttons/MainButton'

export const Header = () => {
	
	const [modalActive, setModalActive] = useState(false)

	const [nav, setNav] = useState(false);



	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const ulClasses = windowWidth > 800 ? 'menu' : 'mobile-menu';
	const finalUlClasses = ulClasses === 'mobile-menu' && nav ? `${ulClasses} active` : ulClasses;


	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	
	return (
	<div className='container'>
		<div className='header_photo'>
			<div className='navigation__wrapper'>
				<img src={logo} className='logo-mobile' />
				<ul className={finalUlClasses}>
					<li>
						<a href='/'>ЦЕНЫ</a>
					</li>
					<li>
						<a href='/'>ПОРТФОЛИО</a>
					</li>
					<img src={logo} className='logo' />
					<li>
						<a href='/'>ПРАВИЛА</a>
					</li>
					<li>
						<a href='/'>КОНТАКТЫ</a>
					</li>
				</ul>

				<div className={nav ? ['mobile-btn', 'mobile-btn-active'].join(' ') : ['mobile-btn']} onClick={() => setNav(!nav)}>
					{nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
				</div>
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
					<MainButton onModalToggle={(modalState) => setModalActive(modalState)} text='ОСТАВИТЬ ЗАЯВКУ' type='right-button' />
				</div>

			</div>
		</div>
	)
}










{/* <Modal active={modalActive} setActive={setModalActive}>
						<form onSubmit={handleFormSubmit} className='modal-form'>
							<label htmlFor="name">ФИО:</label>
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder='Иванов Иван'
								required
							/>

							<label htmlFor="phone">Телефон:</label>
							<input
								type="tel"
								id="phone"
								value={phone}
								placeholder='+7 999 000 00 00'
								onChange={(e) => setPhone(e.target.value)}
								required
							/>

							<label htmlFor="message">Сообщение:</label>
							<textarea
								id="message"
								value={message}
								placeholder='Что будем снимать?'
								onChange={(e) => setMessage(e.target.value)}
							/>

							<button type="submit">Отправить</button>

							<p className='policy'>Нажимая на кнопку, вы даете согласие на обработку своих персональных данных</p>
							


						</form>
					</Modal> */}