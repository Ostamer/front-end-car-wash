import React from 'react';
import CarSelect from '../Things/SelectCar';
import ProfilePng from '../../images/profile.png';
import LogoutPng from '../../images/Logout.png';
import save from '../../images/Save.png';
const HistoryInfo = ({ }) => {
  return (
    <div className='px-2 py-2'>
      <div className='flex items-center justify-between py-5'>
        <div className='flex items-center justify-between'>
          <div className='bg-gray-200 rounded-2xl w-16 h-16 flex justify-center items-center'>
            <img src={ProfilePng} className='w-6 h-6'></img>  
          </div>
          <div className='px-2 items-center'>
            <p className='text-gray-400 text-xs'>Пользователь</p>
            <p className='text-black text-base font-semibold'>Сергей Бебрович</p>
          </div>
        </div>
          {/* <button className='bg-gray-400'>
            <img src={LogoutPng} className='w-6 h-6'></img>  
          </button> */}
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col justify-center bg-white w-40 px-4 h-14 rounded-xl shadow-lg hover:shadow-base transition-shadow duration-300'>        
          <p className='text-gray-400 text-xs'>Имя</p>
          <p className='text-black text-base font-semibold'>Сергей</p>  
        </div>
        <div className='flex flex-col justify-center bg-white w-40 px-4  h-14 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <p className='text-gray-400 text-xs'>Фамилия</p>
          <p className='text-black text-base font-semibold'>Бебрович</p> 
        </div>
      </div>
      <div className="w-full bg-white text-black py-2 rounded-2xl text-lg mt-5 mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className='items-center'>
          <p className='text-gray-400 text-xs'>Дата рождения</p>
          <p className='text-black text-base font-semibold'>16.10.2003</p>
        </div>
      </div>
      <div className="w-full bg-white text-black py-2 rounded-2xl text-lg mt-5 mb-4 flex items-center justify-between px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className='items-center'>
          <p className='text-gray-400 text-xs'>Номер телефона</p>
          <p className='text-black text-base font-semibold'>89195970065</p>
        </div>
      </div>
      <div className='flex justify-center items-center text-xs text-gray-400'>Намжите для редактирования</div>
      <button
      className="w-full bg-blue-500 text-center text-white py-4 rounded-2xl text-lg mb-4 mt-4 flex items-center justify-center px-4 shadow-xl hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center text-center">
          <img src={save} alt="save" className="w-6 h-6" />
          <p className="ml-2">Сохранить</p>
        </div>
      </button>
    </div>
  );
};

export default HistoryInfo;