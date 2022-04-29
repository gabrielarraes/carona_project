import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/forgotPassword" element={<ForgotPassword />}/>
      <Route path="/homePage" element={<HomePage />}/>
    </Routes>
  );
}
export default App