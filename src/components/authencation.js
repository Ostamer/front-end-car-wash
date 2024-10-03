import React, { useState } from 'react';
import carImage from '../images/car.png'; 
import logoImage from '../images/logo.jpg'; 
import { useNavigate } from 'react-router-dom';
import thing from '../images/hina.png';

const RegistrationForm = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navigate = useNavigate(); // Создайте навигацию


  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleLogin = () => {
    // Здесь можно добавить логику проверки данных, если нужно
    navigate('/hello'); // Перенаправление на страницу HelloWindow
  };

  return (
    <div className={`relative min-h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} p-4 flex flex-col`}>
      {/* Logo and Title */}
      <div className="space-y-2 relative z-10 mb-5 text-left">
        <div className="flex justify-between items-center">
          <img src={logoImage} alt="15TH Logo" className="h-10 w-10 rounded-lg" />
          <p className="text-sm text-blue-500">Регистрация</p>
        </div>
        <h1 className="text-3xl font-bold text-blue-600">Авторизация</h1>
        <p className="text-2xl">в 15TH App!</p>
      </div>

      {/* Form Section */}
      <div className="space-y-4 relative z-10 mb-5">
        <div>
          <label className="block text-gray-500">E-mail</label>
          <input
            type="email"
            className={`w-full p-3 rounded-lg ${isDarkTheme ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-black placeholder-gray-500'} border border-gray-300`}
            placeholder="Введите ваш e-mail"
          />
        </div>
        <div>
          <label className="block text-gray-500">Пароль</label>
          <input
            type="password"
            className={`w-full p-3 rounded-lg ${isDarkTheme ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-black placeholder-gray-500'} border border-gray-300`}
            placeholder="Введите ваш пароль"
          />
        </div>
        <div className="text-right">
          <button
            onClick={handleLogin}
            className="text-blue-500 text-sm bg-transparent border-0 cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            Восстановить пароль
          </button>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex-grow flex flex-col justify-center items-center relative">
        <div className="fixed left-0 w-3/4 flex justify-start ">
          <img src={carImage} className="w-full h-auto max-w-full" alt="car" />
        </div>

        <div className="fixed right-0 w-1/2 flex justify-end">
          <img src={thing} alt="thing" className="w-full h-auto max-w-full" />
          <button onClick={handleLogin} className="text-white absolute mt-10 font-bold py-2 px-6 rounded-lg transition-all text-center text-lg md:text-xl lg:text-2xl">
            Войти в Аккаунт
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
