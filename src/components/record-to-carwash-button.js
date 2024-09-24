import React from 'react';
import arrow from '../images/arrow_right1.png';
import stars from '../images/stars.png';

const RecordButton = () => {
    return (
        <button className="w-full bg-blue-500 text-white py-4 rounded-2xl text-lg mb-4 flex items-center justify-between px-4">
            {/* Левая часть с иконкой и текстом */}
            <div className="flex items-center">
                <img src={stars} alt="stars" className="w-6 h-6" />
                <p className="ml-2">Запись на мойку</p>
            </div>
            {/* Правая часть с иконкой стрелки */}
            <div className="bg-white rounded-xl p-2">
                <img src={arrow} alt="arrow" className="w-5 h-5" />
            </div>
        </button>
    );
};

export default RecordButton;
