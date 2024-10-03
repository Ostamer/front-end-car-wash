import React from 'react';
import arrow from '../../images/arrow_right1.png';
import history from '../../images/history.png';

const HistoryInfo = ({ onOpenNewModal }) => {
  return (
    <div>
    <button 
      className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full text-left">
        <p className="text-xs text-gray-400 ml-1"> Номер авто</p> 
        <p className="text-s ml-1 font-semibold"> История посещений</p> 
      </div>
    </button>
    <button 
    className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
    >
    <div className="w-full text-left">
        <p className="text-xs text-gray-400 ml-1"> Модель</p> 
        <p className="text-s ml-1 font-semibold"> История посещений</p> 
    </div>
    </button>
    <button 
    className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
    >
    <div className="w-full text-left">
        <p className="text-xs text-gray-400 ml-1"> Кузов</p> 
        <p className="text-s ml-1 font-semibold"> История посещений</p> 
    </div>
    </button>
    <button 
    className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
    >
    <div className="w-full text-left">
        <p className="text-xs text-gray-400 ml-1"> Цвет</p> 
        <p className="text-s ml-1 font-semibold"> История посещений</p> 
    </div>
    </button>
    </div>
  );
};

export default HistoryInfo;
