import React, { useState } from "react";
import { services } from "./servicesData";
import grayApproveIcon from "../../images/gray_approve.png";
import whiteApproveIcon from "../../images/white_approve.png";

const ServicesList = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSelectService = (service) => {
    if (selectedServices.includes(service.id)) {
      setSelectedServices((prev) => prev.filter((id) => id !== service.id));
    } else {
      setSelectedServices((prev) => [...prev, service.id]);
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto">
      <div className="max-h-80 overflow-y-scroll space-y-4 p-4 border-b">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleSelectService(service)}
            className={`p-4 rounded-2xl border-2 transition-colors duration-300 cursor-pointer ${
              selectedServices.includes(service.id) ? "bg-white border-blue-500" : "bg-white border-white"
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-base font-semibold">{service.name}</div>
                <div className="text-base text-blue-500">{service.price}</div>
              </div>
              {selectedServices.includes(service.id) ? (
                <div className="bg-blue-500 rounded-lg w-7 h-7 flex items-center justify-center">
                  <img src={whiteApproveIcon} alt="arrow" className="w-4 h-3" />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg w-7 h-7 flex items-center justify-center">
                  <img src={grayApproveIcon} alt="arrow" className="w-4 h-3" />
                </div>
              )}
            </div>
            {selectedServices.includes(service.id) && service.description && (
              <div className="mt-1 text-sm text-gray-700">{service.description}</div>
            )}
            {selectedServices.includes(service.id) && service.details && (
              <div className="text-xs text-gray-500 mt-1">{service.details}</div>
            )}
          </div>
        ))}
      </div>
      <button
        className={`w-full p-4 mt-4 rounded-2xl flex items-center text-white font-semibold transition-colors duration-300 ${
          selectedServices.length ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!selectedServices.length}
      >
        {selectedServices.length ? (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="bg-gray-100 rounded-lg w-7 h-7 flex items-center justify-center">
                <img src={grayApproveIcon} alt="stars" className="w-4 h-3" />
              </div>
              <p className="ml-2">Выбрать</p>
            </div>
            <div className="flex items-center">
              <div>
                {selectedServices
                  .map((id) => services.find((s) => s.id === id).price)
                  .reduce((total, price) => total + price, 0)}{" "}
                руб
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full text-center">Выбрать</div>
        )}
      </button>
    </div>
  );
};

export default ServicesList;
