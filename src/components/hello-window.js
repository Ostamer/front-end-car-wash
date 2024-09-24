import React from 'react';
import carImage from '../images/first.jpg'; 
import logoImage from '../images/logo.jpg'; 
import RecordButton from './record-to-carwash-button';
import GarageButton from './garage-button';
import close from '../images/x1.png'

const AppScreen = () => {
  return (
    <div className='w-full bg-gray-300 h-screen flex flex-col'>
      {/* Основной контейнер */}
      <div 
        className="flex-grow relative bg-gray-blue flex flex-col items-center overflow-hidden rounded-b-3xl" 
        style={{ 
          height: '70vh', // Высота 75% от экрана
          backgroundImage: `url(${carImage})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      >
        {/* Затемнённый фон */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Основное содержимое */}
        <div className="relative flex flex-col justify-center items-center text-white w-full h-full px-4 text-center">
          <img src={logoImage} alt="15TH Logo" className="h-14 w-14 rounded-lg mb-2" />
          <h1 className="text-2xl font-bold">Добро пожаловать</h1>
          <h2 className="text-xl font-bold">в 15TH App!</h2>
          <p className="mt-2 text-base">
            Лучшая автомойка города Ялуторовска ждёт вас в гости.<br />
            Мы находимся по адресу Тюменская, 78!
          </p>
          <img 
            src={close} 
            alt="Close" 
            className="absolute bottom-4 mb-5 left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-lg cursor-pointer" 
          />
        </div>
      </div>

      {/* Блок с кнопками (25% экрана) */}
      <div className="flex-shrink-0 flex flex-col justify-center items-center w-full p-4" style={{ height: '27vh' }}>
        <RecordButton />
        <GarageButton />
      </div>
    </div>
  );
};

export default AppScreen;
