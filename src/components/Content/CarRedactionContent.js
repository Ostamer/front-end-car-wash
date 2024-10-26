import React from 'react';
import car from '../../images/car1.png';
import save from '../../images/Save.png';

const CarRedactionContent = ({ onOpenNewModal }) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={car}></img>
      <button 
        className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
      >
        <div className="w-full text-left">
          <p className="text-xs text-gray-400 ml-1"> Номер авто</p> 
          <input className="text-s ml-1 font-semibold"></input> 
        </div>
      </button>
      <button 
      className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
      >
      <div className="w-full text-left">
          <p className="text-xs text-gray-400 ml-1"> Модель</p> 
          <input className="text-s ml-1 font-semibold"></input> 
      </div>
      </button>

      <button 
      className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
      >
      <div className="w-full text-left">
          <p className="text-xs text-gray-400 ml-1"> Кузов</p> 
          <input className="text-s ml-1 font-semibold"></input> 
      </div>
      </button>
      
      <button 
      className="w-full bg-white text-black py-2 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
      >
        <div className="w-full text-left">
          <p className="text-xs text-gray-400 ml-1"> Цвет</p> 
          <input className="text-s ml-1 font-semibold"></input> 
        </div>
      </button>

      <button
      className="w-full bg-blue-500 text-center text-white py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center text-center">
          <img src={save} alt="save" className="w-6 h-6" />
          <p className="ml-2">Сохранить</p>
        </div>
      </button>
    </div>
  );
};

export default CarRedactionContent;
