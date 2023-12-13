import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Signup from './components/signup/Signup';
import Meals from './components/meals/Meals';
import Login from './components/login/Login';
import App from './components/app/App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>        
        <Route path="/" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
          <Route path="meals" element={<Meals />} />
          <Route path="home" element={<App />} />        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
