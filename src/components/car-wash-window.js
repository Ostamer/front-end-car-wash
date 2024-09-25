import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CarBookingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(20); // Начальная высота 20vh

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? 20 : 80); // Переключение высоты между 20vh и 80vh
  };

  const handleDrag = (event, info) => {
    const newHeight = Math.min(Math.max(20, 80 - info.point.y / window.innerHeight * 100), 80);
    setHeight(newHeight);
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

      {/* Вытягиваемое окно с возможностью перетаскивания */}
      <motion.div
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl p-4`}
        style={{ height: `${height}vh` }}
        drag="y" // Включаем возможность перетаскивания по оси Y
        dragConstraints={{ top: 0, bottom: 0 }} // Ограничиваем движение только вверх-вниз
        onDrag={handleDrag} // Обработчик для изменения высоты
        onDragEnd={() => setIsOpen(height > 50)} // Автоматически открываем или закрываем по положению
        animate={{ height: `${height}vh` }} // Анимируем высоту
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
