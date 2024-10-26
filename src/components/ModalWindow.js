import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RenderContent from './RenderContent';
import RenderTitle from './RenderTitles';
import RenderScreen from './RenderScreens';

const ModalWindow = ({ Content="", Title = "", Screen="", onClose}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNextModalOpen, setIsNextModalOpen] = useState(false);
  const [nextModalContent, setNextModalContent] = useState();
  const [nextModalTitle, setNextModalTitle] = useState();
  const [nextModalScreen, setNextModalScreen] = useState();
  const [isScreenVisible, setIsScreenVisible] = useState(!!Screen);
  const [dragOffset, setDragOffset] = useState(0); 

  const handleCloseInfoScreen = () => {
    setIsOpen(true);
    setIsScreenVisible(false);
  };

  const maxHeight = 80;

  const handleDragEnd = (event, info) => {
    const { offset } = info;
    
    setDragOffset(offset.y);

    if (offset.y < -100) {
      setIsOpen(true);
    } else if (offset.y > 100 || (Math.abs(offset.y) < 100 && isOpen && offset.y < 0)) {
      setIsOpen(false); 
    }
  };

  const openNextModal = (newContent, newTitle="MainWindowTitle", newScreen="") => {
    setNextModalContent(newContent);
    setNextModalScreen(newScreen);
    setNextModalTitle(newTitle);
    setIsNextModalOpen(true);
    setIsOpen(true);
  };

  const closeNextModal = () => {
    setIsNextModalOpen(false);
    setIsOpen(true); 
  };

  const closeWindow = () => {
    setIsOpen(false);
    onClose(); 
  };


  return (
    <>
      {isScreenVisible && <RenderScreen componentName={Screen} onClose={handleCloseInfoScreen}/>}

      <RenderContent contentName={"ProfileContent"} onOpenNewModal={openNextModal} />
      
      <motion.div
        className={`fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg rounded-t-3xl p-4 ${isNextModalOpen ? 'z-9' : 'z-10'}`} 
        style={{ 
          height: `${maxHeight}vh`, 
          opacity: isNextModalOpen ? 0.9 : 1, 
        }} 
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        dragElastic={1}
        initial={{ y: "100%" }} 
        animate={{ 
          y: isOpen ? `calc(100% - ${maxHeight}vh)` : `calc(100% - ${maxHeight}vh)`, 
        }} 
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: 'spring'}}
      >
      {Content !== 'MainWindowContent' && Content !== 'RecordConfirmContent' && (
        <button
          className="absolute top-4 right-4 text-blue-500 py-2 px-4 rounded"
          onClick={closeWindow}
        >
          Закрыть
        </button>
      )}

        <div className="flex justify-between items-center">
          <RenderTitle componentName={Title} />
        </div>

        <div className="space-y-4">
          <RenderContent contentName={Content} onOpenNewModal={openNextModal} />
        </div>
      </motion.div>

      {isNextModalOpen && (
        <ModalWindow
          Content={nextModalContent}
          Title={nextModalTitle}
          Screen={nextModalScreen}
          onClose={closeNextModal}
        />
      )}
    </>
  );
};

export default ModalWindow;
