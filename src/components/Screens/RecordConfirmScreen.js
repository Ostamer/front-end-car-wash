import React from 'react';
import { motion } from 'framer-motion'; // Импортируйте motion
import carImage from '../../images/first.jpg'; 
import logoImage from '../../images/logo.jpg'; 
import close from '../../images/x1.png';

const GarageScreen = ({ onClose }) => {
  const animation = {
    hidden: { opacity: 0, y: -100 }, 
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-40 rounded-b-3xl"
      initial="hidden"
      animate="visible"
      variants={animation} 
      transition={{ duration: 0.5 }} 
      style={{ 
        backgroundImage: `url(${carImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100%', 
        overflow: 'hidden' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative text-white w-full text-center px-4">
        <img src={logoImage} alt="15TH Logo" className="h-14 w-14 rounded-lg mb-2 mx-auto" />
        <h1 className="text-2xl font-bold">Добавление первого</h1>
        <h2 className="text-xl font-bold">Авто в гараж</h2>
        <p className="mt-2 text-base">
          Нажмите на кнопку<br />
          "Добавить ещё" внизу экрана для<br />
          добавления вашего автомобиля в <br />
          гараж приложения.
        </p>
      </div>
      <button onClick={onClose}>
        <img 
          src={close} 
          alt="Close" 
          className="absolute fixed bottom-0 mb-5 left-1/2 transform -translate-x-1/2 h-7 w-7 rounded-lg cursor-pointer mt-4" 
        />
      </button>
    </motion.div>
  );
};

export default GarageScreen;
