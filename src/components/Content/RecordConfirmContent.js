import React from 'react';
import arrowIcon from '../../images/arrow_right_grey.png';

const RecordContent = ({ onOpenNewModal }) => {
  return (
    <div>
      <button 
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center py-1 justify-between w-full">
            <div className="text-base font-semibold mr-1">Экспресс отбивка</div>
            <div className="text-base text-gray-500">Цена</div>
        </div>
      </button>

      <button 
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center py-1 justify-between w-full">
            <div className="text-base font-semibold mr-1">Доп. услуги</div>
            <div className="text-base text-gray-500">Цена</div>
        </div>
      </button>

      <button 
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center py-1 justify-between w-full">
            <div className="text-base font-semibold mr-1">Время:</div>
            <div className="text-base text-gray-500">Цена</div>
        </div>
      </button>

      <div className="flex items-center justify-between w-full mb-6 mt-2">
          <div className="text-lg font-semibold mr-1">Общая стоимость услуг:</div>
          <div className="text-lg font-semibold">550 руб</div>
      </div>

      <button
      className="w-full bg-blue-500 text-center text-white py-4 rounded-2xl text-lg mb-2 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center text-center">
          <p className="ml-2">Открыть навигатор</p>
        </div>
        <img src={arrowIcon} alt="arrow" className="w-6 h-6" />
      </button>

      <div className="w-full flex justify-center text-center">
        <button 
        className="text-gray-400 py-2 text-base mb-4 flex justify-center text-center px-4">
            Отменить запись
        </button>
      </div>
    </div>
    );
};

export default RecordContent;
