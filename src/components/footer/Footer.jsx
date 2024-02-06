import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



const Footer = () => {
	const handlePhoneClick = () => {
		window.location.href = 'tel:+79057122195';
	};

	const handleWhatsappClick = () => {
			window.location.href = 'https://api.whatsapp.com/send?phone=79057122195';
	};

	const handleTelegramClick = (username) => {
		window.location.href = `https://t.me/${username}`;
	};

	return (
		<div className='footer__wrap' id='footer'>
			<div className='footer-container'>
				<div className='footer'>
					<h2>Связаться с нами:</h2>
					<p className='footer-text' onClick={handleTelegramClick}><FaTelegramPlane size={15} /> @Croha007</p>
					<p className='footer-text' onClick={handlePhoneClick}><FaPhoneAlt size={15}/> 8-(905)-712-21-95</p>
					<p className='footer-text'><IoIosMail size={15}/> 0_cheese_0@mail.ru</p>
					<p className='footer-text' onClick={handleWhatsappClick}><FaWhatsapp size={15}/> 8-(905)-712-21-95</p>
				</div>
				<div className='separator'></div>
				<div className='footer'>
					<h2>Другие контакты:</h2>
					<p className='footer-text' onClick={() => handleTelegramClick('istomin_portfolio')}><FaTelegramPlane size={15} /> @istomin_portfolio</p>
					<p className='footer-text'>Сайт сделал: <br/><p className='footer-text' onClick={() => handleTelegramClick('Kolpriks')}><FaTelegramPlane size={15} />@Kolpriks</p></p>
				</div>
			</div>
		</div>
	)
}

export default Footer
