import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/authencation';
import HelloWindow from './components/hello-window';
import CarWashWindow from './components/car-wash-window';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationForm/>}/>
          <Route path="/hello" element={<HelloWindow/>}/>
          <Route path="/window" element={<CarWashWindow/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
