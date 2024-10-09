import React from 'react';
import History from '../../images/profile.png'  ;

const HistoryInfo = ({ onOpenNewModal }) => {
  return (
  <button 
  className="absolute fixed right-0 top-0 bg-white py-4 rounded-2xl text-lg mr-2 mt-2 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
    <img src={History} className="w-7 h-7" alt="History" />
  </button>
  );
};

export default HistoryInfo;
