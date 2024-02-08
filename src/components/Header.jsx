import React, { useState, useEffect } from 'react';
import './Header.css'
import logo from '../images/logo4.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import MainButton from './buttons/MainButton'
import { Link, animateScroll as scroll } from 'react-scroll';
import Preloader from './preloader/Preloader';

export const Header = () => {
	
	const [modalActive, setModalActive] = useState(false)
	const [nav, setNav] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const ulClasses = windowWidth > 800 ? 'menu' : 'mobile-menu';
	const finalUlClasses = ulClasses === 'mobile-menu' && nav ? `${ulClasses} active` : ulClasses;
	const [buttonColor, setButtonColor] = useState('black');

	useEffect(() => {
			const handleScroll = () => {
					const header = document.querySelector('.header_photo');
					const button = document.querySelector('.mobile-btn');

					const headerRect = header.getBoundingClientRect();
					const buttonRect = button.getBoundingClientRect();

					if (headerRect.bottom > buttonRect.top) {
							setButtonColor('white');
					} else {
							setButtonColor('black');
					}
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
					window.removeEventListener('scroll', handleScroll);
			};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const closeNav = () => {
		setNav(false);
	};

	return (
	<div className='container'>
		<Preloader/>
		<div className='header_photo'>
			<div className='navigation__wrapper'>
				<img src={logo} className='logo-mobile' />
				<ul className={finalUlClasses}>
					<li>
						<Link to="price" smooth={true} duration={1000}>
							<a onClick={closeNav}>ЦЕНЫ</a>
						</Link>
					</li>
					<li>
						<Link to="portfolio" smooth={true} duration={1000}>
							<a onClick={closeNav}>ПОРТФОЛИО</a>
						</Link>
					</li>
					<img src={logo} className='logo' />
					<li>
						<Link to="team" smooth={true} duration={1000}>
							<a onClick={closeNav}>КОМАНДА</a>
						</Link>
					</li>
					<li>
						<Link to="footer" smooth={true} duration={1500}>
							<a onClick={closeNav}>КОНТАКТЫ</a>
						</Link>
					</li>
				</ul>

				<div className={nav ? ['mobile-btn', 'mobile-btn-active'].join(' ') : ['mobile-btn']} onClick={() => setNav(!nav)}>
						{nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} style={{ color: buttonColor }} />} 
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
					<Link to="portfolio" smooth={true} duration={1000}>
						<button className='left-button'>ПОРТФОЛИО</button>
					</Link>
					
					<MainButton onModalToggle={(modalState) => setModalActive(modalState)} text='ОСТАВИТЬ ЗАЯВКУ' type='right-button' />
				</div>

			</div>
		</div>
	)
}