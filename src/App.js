import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Authorization/Login';
import HelloWindow from './components/StartWindow';
import RegistrationForm from './components/Authorization/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/reg" element={<RegistrationForm/>}/>
          <Route path="/hello" element={<HelloWindow/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
