import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

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

const ModalWindow = ({ isOpen, closeModal }) => {
	const [inputData, setInputData] = useState('');

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const chatId = '-4128263263';

		await sendMessageToTelegram(chatId, `Новый заказ: ${inputData}`);

		// Очистка данных формы или закрытие модального окна
		setInputData('');
	};
	
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="My Modal"
		>
			<h2>Hello Modal</h2>
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					value={inputData}
					onChange={(e) => setInputData(e.target.value)}
				/>
				<button type="submit">Send to Telegram</button>
			</form>
			<button onClick={closeModal}>Close Modal</button>
		</Modal>
	);
};

export default ModalWindow;
