import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './render-main-buttons';
import RenderTitle from './render-main-titles';
import SecondModalWindow from './SecondModalWindow';
import WelcomeScreen from './Screens/WelcomeScreen';


const ModalWindow = ({ Title, buttons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [secondModalButtons, setSecondModalButtons] = useState([]);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

  const handleCloseWelcome = () => {
    setIsOpen(true);
    setIsWelcomeVisible(false);
  };

  const minHeight = 30;
  const maxHeight = 70;

  const handleDragEnd = (event, info) => {
    const { offset } = info;
    if (offset.y < -100) {
      setIsOpen(true);
    } else if (offset.y > 100) {
      setIsOpen(false);
    }
  };

  const openSecondModal = (newButtons) => {  
    setSecondModalButtons(newButtons);
    setIsSecondModalOpen(true);
    setIsOpen(false);
  };

  const closeSecondModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsSecondModalOpen(false);
      setIsAnimating(false);
      setIsOpen(true);
    }, 300);
  };

  return (
    <>
      <div>
      {isWelcomeVisible && <WelcomeScreen onClose={handleCloseWelcome} />}
      </div>
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg rounded-t-3xl p-4"
        style={{ height: isOpen ? `${maxHeight}vh` : `${minHeight}vh` }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        animate={{ height: isOpen ? `${maxHeight}vh` : `${minHeight}vh` }}
        transition={{ type: 'spring', stiffness: 30 }}
      >
        <div className="flex justify-between items-center mb-4">
          <RenderTitle componentName={Title} />
        </div>

        <div className="space-y-4">
          {buttons.map((componentName, index) => (
            <Button 
              key={index} 
              componentName={componentName} 
              onOpenNewModal={openSecondModal} 
            />
          ))}
        </div>
      </motion.div>

      {isSecondModalOpen && (
        <SecondModalWindow 
          buttons={secondModalButtons} 
          onClose={closeSecondModal} 
        />
      )}
    </>
  );
};

export default ModalWindow;
