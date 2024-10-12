import React, { useState } from 'react';
import arrow from '../../images/arrow_right1.png';

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

const ServiceHistory = ({ onOpenNewModal }) => {
  const VisitContent = ["VisitContent"];
  const VisitTitle = ["VisitTitle"];

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

  const now = new Date();

  const getMonday = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - (day === 0 ? 6 : day - 1); 
    const monday = new Date(date.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
  };

  const getSunday = (date) => {
    const monday = getMonday(date);
    return new Date(monday.setDate(monday.getDate() + 6));
  };

  const thisMonday = getMonday(new Date());
  const thisSunday = getSunday(new Date());

  const lastMonday = new Date(thisMonday);
  lastMonday.setDate(thisMonday.getDate() - 7);
  const lastSunday = new Date(thisSunday);
  lastSunday.setDate(thisSunday.getDate() - 7);

  const week3Monday = new Date(lastMonday);
  week3Monday.setDate(lastMonday.getDate() - 7);
  const week3Sunday = new Date(lastSunday);
  week3Sunday.setDate(lastSunday.getDate() - 7);

  const week4Monday = new Date(week3Monday);
  week4Monday.setDate(week3Monday.getDate() - 7);
  const week4Sunday = new Date(week3Sunday);
  week4Sunday.setDate(week3Sunday.getDate() - 7);

  const classifyServices = (services) => {
    const categorized = {
      thisWeek: [],
      lastWeek: [],
      week3: [],
      week4: [],
      older: []
    };

    services.forEach(service => {
      const serviceDate = new Date(service.date.split('.').reverse().join('-'));

      if (serviceDate >= thisMonday && serviceDate <= thisSunday) {
        categorized.thisWeek.push(service);
      } else if (serviceDate >= lastMonday && serviceDate <= lastSunday) {
        categorized.lastWeek.push(service);
      } else if (serviceDate >= week3Monday && serviceDate <= week3Sunday) {
        categorized.week3.push(service);
      } else if (serviceDate >= week4Monday && serviceDate <= week4Sunday) {
        categorized.week4.push(service);
      } else {
        categorized.older.push(service);
      }
    });

    return categorized;
  };

  const categorizedServices = classifyServices(currentCar.services);


  const formatDateRange = (startDate, endDate) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return `${startDate.toLocaleDateString('ru-RU', options)} - ${endDate.toLocaleDateString('ru-RU', options)}`;
  };

  return (
    <div className='flex flex-col h-full'>
      <div className="flex justify-between items-center mb-6">
        <button onClick={handlePrevCar} className="bg-white rounded-xl p-2 shadow-xl hover:shadow-xl transition-shadow duration-300">
          <img src={arrow} alt="arrow" className="w-5 h-5" />
        </button>

        <div className="flex-1 mx-2 bg-white rounded-2xl px-6 py-2 shadow-sm flex justify-between items-center shadow-xl hover:shadow-xl transition-shadow duration-300">
          <div className="text-left">
            <div className="text-gray-500 text-sm">{currentCar.make}</div>
            <div className="font-bold text-lg">{currentCar.model}</div>
          </div>
          <div className="text-gray-400 text-base font-medium">{currentCar.plate}</div>
        </div>

        <button onClick={handleNextCar} className="bg-white rounded-xl p-2 shadow-xl hover:shadow-xl transition-shadow duration-300">
          <img src={arrow} alt="arrow" className="w-5 h-5" />
        </button>
      </div>
      
      <div className="max-h-80 flex-grow overflow-y-auto scrollbar-hide mb">
        {Object.entries(categorizedServices).map(([category, services]) => (
          services.length > 0 && (
            <div key={category} className="mb-6">
              <div className="text-center text-m text-gray-500 mb-1">
                {category === 'thisWeek' ? 'На этой неделе' :
                 category === 'lastWeek' ? `${formatDateRange(lastMonday, lastSunday)}` :
                 category === 'week3' ? `${formatDateRange(week3Monday, week3Sunday)}` :
                 category === 'week4' ? `${formatDateRange(week4Monday, week4Sunday)}` : 'Давно'}
              </div>

              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => onOpenNewModal(VisitContent, VisitTitle, "")}
                  className="bg-white rounded-2xl flex justify-between items-center p-4 mb-3 w-full shadow-xl hover:shadow-xl transition-shadow duration-300" // кнопки занимают всю ширину
                >
                  <div className="w-full">
                    <div className=" text-s text-gray-500 mb-2 text-left">{service.date}</div>
                    <div className='flex'>
                      <div className="font-bold">{service.type}</div>
                      {service.details && (
                        <div className="text-s text-gray-500">{service.details}</div>
                      )}  
                    </div>
                  </div>
                  <div className="text-lg font-bold">{service.price}</div>
                </button>
              ))}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ServiceHistory;
