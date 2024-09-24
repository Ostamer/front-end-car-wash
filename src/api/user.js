// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8000';

// export const getUserProfile = (token) => {
//   return axios.get(`${API_BASE_URL}/user/me`, {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });
// };

// export const getUserList = (token, ids = []) => {
//   const query = ids.length ? `?ids=${ids.join(',')}` : '';
//   return axios.get(`${API_BASE_URL}/user${query}`, {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });
// };

// export const updateUserProfile = (token, data) => {
//   return axios.put(`${API_BASE_URL}/user/me`, data, {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });
// };
    