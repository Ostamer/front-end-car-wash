import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TelegramBot = () => {
    const [accessToken, setAccessToken] = useState('');
    const [userId, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const API_URL = 'http://127.0.0.1:8000/auth/tg';
    const API_URL_TOKEN = 'http://127.0.0.1:8000/auth/token/';
    const fixedTelegramId = '1487683438';

    const fetchAccessToken = async (telegramId) => {
        try {
            const userResponse = await axios.post(API_URL, { telegram_id: telegramId });
            console.log(userResponse.data.details.user_id);
            if (userResponse.status === 200) {
                const username = userResponse.data.details.user_id;
                const password = 12345678;

                const tokenResponse = await axios.post(API_URL_TOKEN, {
                    username,
                    password,
                });

                if (tokenResponse.status === 200) {
                    const token = tokenResponse.data.access;
                    setAccessToken(token);
                    setUserId(username);
                    
                    // Сохраняем данные в localStorage
                    localStorage.setItem('accessToken', token);
                    localStorage.setItem('userId', username);
                } else {
                    setErrorMessage(`Не удалось получить access_token. Код ошибки: ${tokenResponse.status}`);
                }
            } else {
                setErrorMessage(`Не удалось получить информацию от API. Код ошибки: ${userResponse.status}`);
            }
        } catch (error) {
            setErrorMessage(`Произошла ошибка: ${error.message}`);
        }
    };

    useEffect(() => {
        // Загружаем данные из localStorage
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedUserId = localStorage.getItem('userId');

        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        }
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            fetchAccessToken(fixedTelegramId);
        }
    }, []);

    return (
        <div className="telegram-bot">
            <h1>Получить access_token из Telegram</h1>
            {accessToken && <p>Ваш access_token: {accessToken}</p>}
            {userId && <p>Ваш user_id: {userId}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default TelegramBot;
