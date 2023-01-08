import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/signup/Signup';
import reportWebVitals from './reportWebVitals';
import Meals from './components/meals/Meals';
import Login from './components/login/Login';
import App from './components/app/App';


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
