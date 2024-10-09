import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthencationForm from './components/Authencation/authencation';
import HelloWindow from './components/StartWindow';
import RegistrationForm from './components/Authencation/registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthencationForm/>}/>
          <Route path="/reg" element={<RegistrationForm/>}/>
          <Route path="/hello" element={<HelloWindow/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
