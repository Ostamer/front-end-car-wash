import React from 'react';
import arrowIcon from '../../images/arrow_right_grey.png';
import CarSelect from '../Things/SelectCar';

const RecordContent = ({ onOpenNewModal }) => {
  const RecordTypeContent = ['RecordTypeContent'];
  const RecordTypeTitle = ['RecordTypeTitle'];

  const RecordAddTypeContent = ['RecordAddTypeContent'];
  const RecordAddTypeTitle = ['RecordAddTypeTitle'];

  const RecordTimeContent = ['RecordTimeContent'];
  const RecordTimeTitle = ['RecordTimeTitle'];

  const RecordConfirmContent = ['RecordConfirmContent'];
  const RecordConfirmTitle = ['RecordConfirmTitle'];
  const RecordConfirmScreen = ['RecordConfirmScreen'];

  return (
    <div>
      <CarSelect /> 
      <button 
      onClick={() => onOpenNewModal(RecordTypeContent, RecordTypeTitle)}
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
      onClick={() => onOpenNewModal(RecordAddTypeContent, RecordAddTypeTitle)}
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
      onClick={() => onOpenNewModal(RecordTimeContent, RecordTimeTitle)}
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
      onClick={() => onOpenNewModal(RecordConfirmContent, RecordConfirmTitle, RecordConfirmScreen)}
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
