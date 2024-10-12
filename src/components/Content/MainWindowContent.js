import React from 'react';
import arrowIcon from '../../images/arrow_right1.png';
import starsIcon from '../../images/stars.png';
import historyIcon from '../../images/history.png';
import garageIcon  from '../../images/garage.png';
import CarSelect from '../Things/SelectCar';

const MainWindowContent = ({ onOpenNewModal }) => {
  const recordContent = ['RecordContent'];
  const recordTitle = ['RecordTitle'];

  const historyContent = ['HistoryContent'];
  const historyTitle = ['HistoryTitle'];

  const garageContent = ['GarageContent'];
  const garageTitle = ['GarageTitle'];
  const garageScreen = ['GarageScreen'];

    return (
    <div>
      <CarSelect /> 
      <button
      onClick={() => onOpenNewModal(recordContent, recordTitle, "")}
      className="w-full bg-blue-500 text-white py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center">
          <img src={starsIcon} alt="stars" className="w-6 h-6" />
          <p className="ml-2">Запись на мойку</p>
        </div>
        <div className="bg-white rounded-xl p-2">
          <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
        </div>
      </button>

      <button 
      onClick={() => onOpenNewModal(historyContent, historyTitle, "")}
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src={historyIcon} alt="history" className="w-6 h-6" />
            <p className="ml-2"> История посещений</p>
          </div>
          <div className="bg-gray-300 rounded-xl p-2">
            <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
          </div>
        </div>
      </button>

      <button
      onClick={() => onOpenNewModal(garageContent, garageTitle, garageScreen)}
      className="w-full bg-white text-black py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src={garageIcon} alt="garage" className="w-6 h-6" />
            <p className="ml-2"> Гараж</p>
          </div>
          <div className="bg-gray-300 rounded-xl p-2">
            <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
          </div>
        </div>
      </button>
    </div>
    );
  };
  
  export default MainWindowContent;
  