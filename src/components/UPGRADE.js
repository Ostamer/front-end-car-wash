  const closeNextModal = () => {
    setIsNextModalOpen(false);
    setIsOpen(true);
  };

  const closeWindow = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose(); 
    }, 300);
  };

  return (
    <>
      <div>
      {isWelcomeVisible && <GarageScreen onClose={handleCloseWelcome}/>}
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
        <button
          className="absolute top-4 right-4 text-blue-500 py-2 px-4 rounded"
          onClick={closeWindow}
        >
          Закрыть
        </button>

        <div className="mt-12 space-y-4">
          {buttons.map((componentName, index) => (
            <Button 
              key={index} 
              componentName={componentName}
              onOpenNewModal={openNextModal}
            />
          ))}
        </div>
      </motion.div>

      {isNextModalOpen && (
        <SecondModalWindow
          buttons={nextModalButtons} 
          onClose={closeNextModal} 
        />
      )}
    </>
  );
};

export default SecondModalWindow;
