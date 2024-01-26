import axios from 'axios';

const sendMessageToTelegram = async (chatId, message) => {
  const telegramApiUrl = `https://api.telegram.org/bot6315239778:AAHYQ6_s4TptAIYzXA2StoK0LYdyVgF3_fc/sendMessage`;

  try {
    await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: message,
    });

    console.log('Message sent to Telegram successfully');
  } catch (error) {
    console.error('Error sending message to Telegram:', error.message);
  }
};
