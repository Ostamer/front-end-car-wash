import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ThirdModalWindow = ({ buttons, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const minHeight = 30;
  const maxHeight = 50;

  const closeWindow = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gray-200 shadow-lg rounded-t-3xl p-4 z-50"
      style={{ height: isOpen ? `${maxHeight}vh` : `${minHeight}vh` }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      animate={{ height: isOpen ? `${maxHeight}vh` : `${minHeight}vh` }}
      transition={{ type: 'spring', stiffness: 30 }}
    >
      <button
        className="absolute top-4 right-4 text-blue-500 py-2 px-4 rounded"
        onClick={closeWindow}
      >
        Закрыть третье окно
      </button>

      <div className="mt-12 space-y-4">
        {buttons.map((componentName, index) => (
          <button 
            key={index} 
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {componentName}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ThirdModalWindow;
