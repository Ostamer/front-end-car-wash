import React from 'react';
import arrow from '../../images/arrow_right1.png';
import history from '../../images/history.png';

const HistoryInfo = ({ onOpenNewModal }) => {
  const buttonsForSecondModal = ['UserHistory'];

  return (
    <button 
      onClick={() => onOpenNewModal(buttonsForSecondModal)}
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src={history} alt="history" className="w-6 h-6" />
          <p className="ml-2"> История посещений</p>
        </div>
        <div className="bg-gray-300 rounded-xl p-2">
          <img src={arrow} alt="arrow" className="w-5 h-5" />
        </div>
      </div>
    </button>
  );
};

export default HistoryInfo;
