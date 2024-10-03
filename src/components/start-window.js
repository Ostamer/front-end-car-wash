import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import MapView from './MapView';
const App = () => {
  const title = 'Auto';
  const buttonNames = ['RecordButton', 'GarageButton', 'HistoryButton'];
  const position = [57.1631, 65.5587]; // Замените на фактические координаты

  return (
    <div className="relative h-screen">
      <MapView position={position}/>
      <ModalWindow buttons={buttonNames} Title={title}/> 
    </div>
  );
};

export default App;
