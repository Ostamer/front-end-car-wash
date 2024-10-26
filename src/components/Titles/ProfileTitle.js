import React from 'react';
const InfoAboutCar = () => {
    return (
    <div className="w-full text-black py-4 text-lg mb-4 flex items-center justify-between px-4">
        <div className="flex items-center justify-between w-full">
            {/* Левая часть с иконкой и текстом */}
            <div className="flex items-center">
                <p className="ml-2"> Audi</p>
                <p className="ml-1"> черный</p>
            </div>
            {/* Правая часть с иконкой стрелки */}
            <div className="flex items-center">
                <p className="ml-1"> черный</p>
            </div>
        </div>
    </div>
    );
};

export default InfoAboutCar;
