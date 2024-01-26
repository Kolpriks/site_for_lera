import React, { useState } from 'react'
import './Header.css'
import logo from '../images/logo4.png'
import axios from 'axios'
// import ModalWindow from '../modal/ModalWindow'
import Modal from '../modal/Modal'


const sendMessageToTelegram = async (chatId, message) => {
	const telegramToken = `https://api.telegram.org/bot6315239778:AAHYQ6_s4TptAIYzXA2StoK0LYdyVgF3_fc/sendMessage`;

	try {
		await axios.post(telegramToken, {
			chat_id: chatId,
			text: message,
		});

		console.log('Message sent to Telegram successfully');
	} catch (error) {
		console.error('Error sending message to Telegram:', error.message);
	}
};


export const Header = () => {
	
	const [modalActive, setModalActive] = useState(false)
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const chatId = '-4128263263';

		const fullMessage = `Новый заказ:\nФИО: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;

		await sendMessageToTelegram(chatId, fullMessage);

		// Очистка состояния
		setName('');
		setPhone('');
		setMessage('');
		setModalActive(false);
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
						<button className='right-button' onClick={() => setModalActive(true)} >ОСТАВИТЬ ЗАЯВКУ</button> 
						{/* onClick={openModal} */}

						<Modal active={modalActive} setActive={setModalActive}>
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
						</Modal>
						{/* <ModalWindow isOpen={modalIsopen} closeModal={closeModal} /> */}
					</div>

				</div>
			</div>
		</>
	)
}