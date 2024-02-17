import React, { useState } from 'react';
import Modal from './modal/Modal';
import styles from '../../styles/MainButton.module.css';
import axios from 'axios';

const sendMessageToTelegram = async (chatId, message) => {
	const telegramToken = 
	`https://api.telegram.org/bot6315239778:AAHYQ6_s4TptAIYzXA2StoK0LYdyVgF3_fc/sendMessage`;

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

const MainButton = ({ onModalToggle, text, type }) => {
	const [modalActive, setModalActive] = useState(false);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleFormSubmit = async (e) => {
    e.preventDefault();

    const chatId = '-4128263263';
    const fullMessage = `Новый заказ:\nФИО: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;

    await sendMessageToTelegram(chatId, fullMessage);

    setName('');
    setPhone('');
    setMessage('');
    setModalActive(false);
	};



	return (
		<>
			<button className={styles[type]} onClick={() => setModalActive(true)}>
				{text}
			</button>

			<Modal active={modalActive} setActive={setModalActive}>
				<form onSubmit={handleFormSubmit} className={styles.modalForm}>
					<label className={styles.label} htmlFor="name">ФИО:</label>
					<input
						className={styles.input}
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='Иванов Иван'
						required
					/>

					<label className={styles.label} htmlFor="phone">Телефон:</label>
					<input
						className={styles.input}
						type="tel"
						id="phone"
						value={phone}
						placeholder='+7 999 000 00 00'
						onChange={(e) => setPhone(e.target.value)}
						required
					/>

					<label className={styles.label} htmlFor="message">Сообщение:</label>
					<textarea
						className={styles.textarea}
						id="message"
						value={message}
						placeholder='Что будем снимать?'
						onChange={(e) => setMessage(e.target.value)}
					/>

					<button className={styles.button} type="submit">Отправить</button>

					<h3 className={styles.policy}>Нажимая на кнопку, 
					вы даете согласие на обработку своих персональных данных</h3>
				</form>
			</Modal>
		</>
	);
};

export default MainButton;
