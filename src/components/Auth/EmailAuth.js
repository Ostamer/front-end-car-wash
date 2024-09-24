import React, { useState } from 'react';
import { emailAuth } from '../../api/auth'; // Импортируем API для работы с email аутентификацией

const EmailAuth = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await emailAuth(email);
      if (response.status === 200) {
        setMessage('Код подтверждения отправлен на ваш email.');
      }
    } catch (err) {
      setError('Ошибка при отправке кода подтверждения. Проверьте email и попробуйте снова.');
    }
  };

  return (
    <div>
      <h2>Авторизация через Email</h2>
       <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Введите ваш email"
          />
        </div>
        <button type="submit">Отправить код</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
     </div>
  );
};

export default EmailAuth;
