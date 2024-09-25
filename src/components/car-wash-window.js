import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CarBookingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const minHeight = 15;
  const maxHeight = 70;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleDrag = (event, info) => {
    if (info.offset.y < -100) {
      setIsOpen(true);
    } else if (info.offset.y > 100) {
      setIsOpen(false);
    }
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

      {/* Вытягиваемое окно с двумя состояниями */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl p-4"
        style={{ height: isOpen ? `${maxHeight}vh` : `${minHeight}vh` }}
        drag="y" 
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDrag}
        animate={{ height: isOpen ? `${maxHeight}vh` : `${minHeight}vh` }} 
        transition={{ type: 'spring', stiffness: 40 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Запись на мойку</h2>
          <button onClick={toggleDrawer} className="text-gray-600">Закрыть</button>
        </div>

        {/* Содержимое окна */}
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
