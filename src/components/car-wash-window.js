import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CarBookingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Кнопка для открытия */}
      <button
        onClick={toggleDrawer}
        className="fixed bottom-0 left-0 right-0 mx-auto mb-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        {isOpen ? 'Закрыть' : 'Записаться'}
      </button>

      {/* Вытягиваемое окно */}
      <motion.div
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl p-4 ${
          isOpen ? 'h-3/4' : 'h-1/4'
        } transition-all duration-300`}
        animate={{ height: isOpen ? '80vh' : '20vh' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Запись на мойку</h2>
          <button onClick={toggleDrawer} className="text-gray-600">Закрыть</button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Машина:</span>
            <span>Audi A4 черный</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Экспресс отмывка:</span>
            <span>550 руб</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Доп. услуги:</span>
            <span>Не требуются</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Время:</span>
            <span>5 сентября 15:00</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CarBookingDrawer;
