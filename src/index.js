import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Student from './pages/Student';
import Company from './pages/Company';
import Mycv from './pages/Mycv';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/student' element={<Student />}/>
          <Route path='/company' element={<Company />}/>
          <Route path='/mycv' element={<Mycv />}/>
          <Route path='/login' element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
