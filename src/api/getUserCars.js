import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../store/userCarsSlice';

const TelegramBot = () => {
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.auth.accessToken);
    const userId = useSelector((state) => state.auth.userId);

    const API_URL = 'http://127.0.0.1:8000/auth/tg';
    const API_URL_TOKEN = 'http://127.0.0.1:8000/auth/token/';
    const fixedTelegramId = '1487683438';

    const fetchAccessToken = async (telegramId) => {
        try {
            const userResponse = await axios.post(API_URL, { telegram_id: telegramId });
            if (userResponse.status === 200) {
                const username = userResponse.data.details.user_id;
                const password = 12345678;

                const tokenResponse = await axios.post(API_URL_TOKEN, {
                    username,
                    password,
                });

                if (tokenResponse.status === 200) {
                    const token = tokenResponse.data.access;
                    
                    dispatch(setCredentials({ userId: username, accessToken: token }));
                    
                    localStorage.setItem('accessToken', token);
                    localStorage.setItem('userId', username);
                } 
            }
        } catch (error) {
            setErrorMessage(`Произошла ошибка: ${error.message}`);
        }
    };

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedUserId = localStorage.getItem('userId');

        if (storedAccessToken && storedUserId) {
            dispatch(setCredentials({ userId: storedUserId, accessToken: storedAccessToken }));
        } else {
            fetchAccessToken(fixedTelegramId);
        }
    }, [dispatch]);

    return null;
};

export default TelegramBot;
