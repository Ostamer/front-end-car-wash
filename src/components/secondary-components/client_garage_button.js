import React, { useState } from 'react';
import history from '../../images/history.png';
import Car from '../../images/car1.png';
const buttonsForNextModal = ['CarInfo'];
const carsData = [
  {
    id: 1,
    make: "Volkswagen",
    model: "PASSAT B6",
    plate: "M468KA72",
    services: [
      { date: "25.09.2024", type: "Комплекс PRO", details: "+Доп.услуги", price: "550р" },
      { date: "15.09.2024", type: "Доп.услуги", details: "+Доп. услуги", price: "150р" },
      { date: "30.09.2024", type: "Комплекс PRO", price: "550р" },
      { date: "15.08.2024", type: "Комплекс PRO", price: "550р" },
    ],
  },
  {
    id: 2,
    make: "Toyota",
    model: "Camry",
    plate: "M468KA72",
    services: [
      { date: "25.09.2024", type: "Комплекс PRO", details: "+Доп.услуги", price: "550р" },
      { date: "15.09.2024", type: "Доп.услуги", details: "+Доп. услуги", price: "150р" },
      { date: "30.09.2024", type: "Комплекс PRO", price: "550р" },
      { date: "15.08.2024", type: "Комплекс PRO", price: "550р" },
    ],
  },
  {
    id: 3,
    make: "Lada",
    model: "Granta",
    plate: "M468KA72",
    services: [
      { date: "25.09.2024", type: "Комплекс PRO", details: "+Доп.услуги", price: "550р" },
      { date: "15.09.2024", type: "Доп.услуги", details: "+Доп. услуги", price: "150р" },
      { date: "30.09.2024", type: "Комплекс PRO", price: "550р" },
      { date: "15.08.2024", type: "Комплекс PRO", price: "550р" },
    ],
  },
  // Другие автомобили...
];

const showButton = true;

const CarCard = ({ car, isSelected, onClick }) => (
  <div
    onClick={() => onClick(car.id)}
    className={`flex flex-col items-center p-4 rounded-2xl shadow-md m-2 bg-white cursor-pointer transition-transform transform w-48 h-48 ${
      isSelected ? 'scale-105 border-1 border-blue-500' : ''
    }`}
  >
    <div className="relative">
      {isSelected ? (
        <div className="absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">✔</span>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-white">✔</span>
        </div>
      )}
      <img
        src={Car}
        alt={`${car.make} ${car.model}`}
        className="w-full h-28 object-contain"
      />
    </div>
    <div className="text-2xs font-bold text-center">{`${car.make} ${car.model}`}</div>
    <p className="text-gray-600">{car.plate}</p>
  </div>
);

const HistoryInfo = ({ onOpenNewModal }) => {
  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleCarClick = (id) => {
    setSelectedCarId(id);
  };

  return (
    <>
      <div className='flex-grow'> 
        {showButton && (
          <div className="overflow-x-auto whitespace-nowrap p-4 mb-4 -ml-10 -mr-10"> {/* Добавлен отступ снизу */}
            <div className="inline-flex ml-4 mr-4">
              {carsData.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  isSelected={car.id === selectedCarId}
                  onClick={handleCarClick}
                />
              ))}
            </div>
          </div>
        )}
        <div className="items-center mb-4"> {/* Добавлен отступ снизу */}
          <p className='text-center text-2xs text-gray-400'>Нажмите два раза для редактирования</p>
        </div>
        <button
          className="w-full bg-white text-black py-4 rounded-2xl text-lg flex items-center justify-center px-4 shadow-xl hover:shadow-xl transition-shadow duration-300 mt-8" // Добавлен отступ сверху
          onClick={() => onOpenNewModal(buttonsForNextModal)} 
        >
          <div className="flex items-center">
            <img src={history} alt="history" className="w-6 h-6" />
            <p className="ml-2">Добавить ещё</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default HistoryInfo;