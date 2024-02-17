import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Main.module.css';
import Image from 'next/image';
import { Link } from 'react-scroll';
import MainButton from '../buttons/MainButton';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Main = () => {
	const [nav, setNav] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [modalActive, setModalActive] = useState(false); // Добавляем состояние для управления модальным окном
	const mainRef = useRef(null);

	const closeNav = () => {
			setNav(false);
	};

	useEffect(() => {
			const handleScroll = () => {
					const mainBlock = mainRef.current;
					const scrollTop = window.scrollY;
					const mainBottom = mainBlock.offsetTop + mainBlock.clientHeight;
					const threshold = 50;
					setIsScrolled(scrollTop > mainBottom - threshold);
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
					window.removeEventListener('scroll', handleScroll);
			};
	}, []);

    return (
			<div ref={mainRef} className={`${styles.mainContainer} ${isScrolled ? styles.scrolled : ''}`}>
            <div
                className={styles.mainPhotoBg}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            ></div>
            <Image
                className={styles.mainPhotoBg}
                src="/mainImages/header_photo_example_pink_shrinked.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
								alt='background image'
            />
            <div className={styles.nav}>
                {/* Desktop navigation */}
                <div className={styles.desktopNav}>
                    <Link to="price" smooth={true} duration={1000} className={styles.navButton}>
                        Цены
                    </Link>
                    <Link to="portfolio" smooth={true} duration={1000} className={styles.navButton}>
                        Портфолио
                    </Link>
                </div>
                <div className={styles.logo}>
                    <Image src="/mainImages/logo4.png" width="250" height="250" alt='logo'/>
                </div>
                <div className={styles.desktopNav}>
                    <Link to="team" smooth={true} duration={1000} className={styles.navButton}>
                        Команда
                    </Link>
                    <Link to="footer" smooth={true} duration={1500} className={styles.navButton}>
                        Контакты
                    </Link>
                </div>

                {/* Mobile navigation */}
                <div className={styles.mobileNav}>
                    <div className={styles.mobileLogo}>
                        <Image src="/mainImages/logo4.png" width="150" height="150" alt='logo'/>
                    </div>
                    <div
                        className={`${styles.mobileBtn} ${nav ? styles.mobileBtnActive : ''}`}
                        onClick={() => setNav(!nav)}
                    >
                        {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
                    </div>
                    <DropdownMenu isOpen={nav} closeNav={closeNav} />
                </div>
            </div>
            <div className={styles.mainTextWrap}>
                <h2 className={styles.mainText}>Фото для торговых площадок, создание каталожных изображений</h2>
            </div>
            <div className={styles.capabilityWrap}>
                <ul className={styles.capability}>
                    <li>Предметная съемка</li>
                    <li>Художественная съемка с реквизитом</li>
                    <li>Съемка на модели</li>
                </ul>
            </div>

            <div className={styles.buttons}>
                <Link to="portfolio" smooth={true} duration={1000} className={styles.portfolioButton}>
                    Портфолио
                </Link>

                <MainButton
                    onModalToggle={(modalState) => setModalActive(modalState)}
                    text="ОСТАВИТЬ ЗАЯВКУ"
                    type="rightbutton"
                />
            </div>
        </div>
    );
};

const DropdownMenu = ({ isOpen, closeNav }) => {
    const handleClick = () => {
        closeNav();
    };

    return (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
            <ul>
                <li>
                    <Link to="price" smooth={true} duration={1000} onClick={handleClick}>
                        Цены
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" smooth={true} duration={1000} onClick={handleClick}>
                        Портфолио
                    </Link>
                </li>
                <li>
                    <Link to="team" smooth={true} duration={1000} onClick={handleClick}>
                        Команда
                    </Link>
                </li>
                <li>
                    <Link to="footer" smooth={true} duration={1500} onClick={handleClick}>
                        Контакты
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Main;
