import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ModalWindow from './ModalWindow';
import MapView from './MapView';
import TelegramBot from './Authorization/TgAuthorize';

const App = () => {
  const content = 'MainWindowContent';
  const position = [57.1631, 65.5587]; 

  const accessToken = useSelector((state) => state.auth.accessToken);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    console.log('accessToken:', accessToken);
    console.log('userId:', userId);
  }, [accessToken, userId]);

  return (
    <div className="relative h-screen">
      <MapView position={position} />
      <ModalWindow Content={content} Title='MainWindowTitle' Screen='WelcomeScreen'/> 
    </div>
  );
};

export default App;
