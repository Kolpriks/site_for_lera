import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '../../styles/Header.module.css';
import logo from './images/logo4.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import MainButton from '../buttons/MainButton';
import { Link } from 'react-scroll';
import Preloader from '../preloader/Preloader';


export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

	const ulClasses = windowWidth > 800 ? styles['menu'] : styles['mobileMenu'];
	const finalUlClasses = ulClasses === styles['mobileMenu'] && nav ? `${ulClasses} active` : ulClasses;
	const [buttonColor, setButtonColor] = useState('black');


	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('.headerPhoto');
			const button = document.querySelector('.mobileBtn');
		
			if (!header || !button) return; // Проверяем наличие элементов
		
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
      const mq = window.matchMedia('(min-width: 800px)');
      setWindowWidth(mq.matches ? 'large' : 'small');
    };

    handleResize(); // Вызываем обработчик resize при монтировании компонента
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className={styles.container}>
      <Preloader />
      <div className={styles.headerPhoto}>
        <div className={styles.navigationWrapper}>
          <img src={logo} className={styles['logoMobile']} />
          <ul className={nav ? `${styles.menu} ${styles.active}` : styles.menu}>
            <li>
              <Link to="price" smooth={true} duration={1000} onClick={closeNav}>
                ЦЕНЫ
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={1000} onClick={closeNav}>
                ПОРТФОЛИО
              </Link>
            </li>
						<Image src={logo} className={styles.logo}/>
            <li>
              <Link to="team" smooth={true} duration={1000} onClick={closeNav}>
                КОМАНДА
              </Link>
            </li>
            <li>
              <Link to="footer" smooth={true} duration={1500} onClick={closeNav}>
                КОНТАКТЫ
              </Link>
            </li>
          </ul>

          <div className={styles.mobileBtn} onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
          </div>
        </div>

        <div className={styles.headerTextWrapper}>
          <div>
            <h2 className={styles.headerText}>ФОТО ДЛЯ ТОРГОВЫХ ПЛОЩАДОК, СОЗДАНИЕ КАТАЛОЖНЫХ ИЗОБРАЖЕНИЙ</h2>
          </div>

          <div>
            <ul className={styles.capability}>
              <li>Предметная съемка</li>
              <li>Художественная съемка с реквизитом</li>
              <li>Съемка на модели</li>
            </ul>
          </div>
        </div>

        <div className={styles.buttons}>
					<Link to="portfolio" smooth={true} duration={1000}>
            <button className={styles.leftbutton}>ПОРТФОЛИО</button>
          </Link>

          <MainButton onModalToggle={(modalState) => setModalActive(modalState)} text="ОСТАВИТЬ ЗАЯВКУ" type="rightbutton" />
        </div>
      </div>
    </div>
  );
};
