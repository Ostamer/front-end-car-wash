import React from 'react';
import arrowIcon from '../../images/arrow_right_grey.png';

const RecordContent = ({ onOpenNewModal }) => {
  const carWashRecordTypeContent = ['RecordTypeContent'];
  const carWashRecordTypeAdditionalContent = ['RecordAddTypeContent'];
  const carWashRecordTime = ['RecordTimeContent'];

  return (
    <div>
      <button 
      onClick={() => onOpenNewModal(carWashRecordTypeContent)}
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="text-base font-bold mr-1">Экспресс отбивка</div>
            <div className="text-base text-gray-500">Цена</div>
          </div>
          <div className="bg-gray-300 rounded-xl p-2">
            <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
          </div>
        </div>
      </button>

      <button 
      onClick={() => onOpenNewModal(carWashRecordTypeAdditionalContent)}
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="text-base font-bold mr-1">Доп.услуги</div>
            <div className="text-base text-gray-500">Не требуются</div>
          </div>
          <div className="bg-gray-300 rounded-xl p-2">
            <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
          </div>
        </div>
      </button>

      <button 
      onClick={() => onOpenNewModal(carWashRecordTime)}
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <p className="text-base font-bold mr-1">Время </p>
            <p className="text-base text-gray-500"> Не указано</p>
          </div>
          <div className="bg-gray-300 rounded-xl p-2">
            <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
          </div>
        </div>
      </button>

      <button
      className="w-full bg-blue-500 text-center text-white py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center text-center">
          <img src={arrowIcon} alt="arrow" className="w-6 h-6" />
          <p className="ml-2">Сохранить</p>
        </div>
      </button>
    </div>
    );
};

export default RecordContent;
