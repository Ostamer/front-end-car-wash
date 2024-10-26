import React, { useState } from 'react';
import arrow from '../../images/arrow_right1.png';
import car from '../../images/car1.png';

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
    ]
  },
  {
    id: 2,
    make: "Toyota",
    model: "Camry",
    plate: "A123BC45",
    services: [
      { date: "02.09.2024", type: "Комплекс PRO", details: "+Доп.услуги", price: "500р" },
      { date: "01.09.2024", type: "Доп.услуги", price: "100р" },
      { date: "25.08.2024", type: "Комплекс PRO", price: "500р" }
    ]
  }
];

const CarSelect = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  const handleNextCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carsData.length);
  };

  const handlePrevCar = () => {
    setCurrentCarIndex((prevIndex) =>
      prevIndex === 0 ? carsData.length - 1 : prevIndex - 1
    );
  };

  const currentCar = carsData[currentCarIndex];

  const handleServiceClick = (service) => {
    alert(`Детали услуги:\nДата: ${service.date}\nТип: ${service.type}\nДетали: ${service.details || 'Нет'}\nЦена: ${service.price}`);
  };

  const formatDateRange = (startDate, endDate) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return `${startDate.toLocaleDateString('ru-RU', options)} - ${endDate.toLocaleDateString('ru-RU', options)}`;
  };

  return (
    <div className='flex flex-col h-full mb-5'>
        <div className="relative flex justify-between items-center mb-6 mt-5">
            <button 
                onClick={handlePrevCar} 
                className="absolute left-0 bg-gray-200 rounded-2xl p-2 shadow-xl hover:shadow-xl transition-shadow duration-300 z-10">
                <img src={arrow} alt="arrow" className="w-5 h-5" />
            </button>
            <button 
                onClick={handleNextCar} 
                className="absolute right-0 bg-gray-200 rounded-2xl p-2 shadow-xl hover:shadow-xl transition-shadow duration-300 z-10">
                <img src={arrow} alt="arrow" className="w-5 h-5" />
            </button>
        </div>
        <img className='-mt-10' src={car} alt="Car" />
        <div className="flex-1 mx-2 flex justify-between items-center">
            <div className="text-left flex">
                <div className="font-bold text-base">{currentCar.make} {currentCar.model}</div>
            </div>
            <div className="text-base font-medium">{currentCar.plate}</div>
        </div>
    </div>
);
};

export default CarSelect;
