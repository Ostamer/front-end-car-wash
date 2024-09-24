import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const login = (identifier, password) => {
  return axios.post(`${API_BASE_URL}/auth/login/`, { identifier, password });
};

export const emailAuth = (email) => {
  return axios.post(`${API_BASE_URL}/auth/email/`, { email });
};

export const phoneAuth = (phone_number) => {
  return axios.post(`${API_BASE_URL}/auth/phone/`, { phone_number });
};

export const tgAuth = (telegram_id) => {
  return axios.post(`${API_BASE_URL}/auth/tg/`, { telegram_id });
};

export const confirmCode = (url, data) => {
  return axios.post(url, data);
};

export const checkToken = (token) => {
  return axios.get(`${API_BASE_URL}/auth/token/check`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};
