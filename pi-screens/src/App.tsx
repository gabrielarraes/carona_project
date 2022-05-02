import React from 'react';
import { Route, Routes } from "react-router-dom";
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/forgotPassword" element={<ForgotPassword />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/resetPassword" element={<ResetPassword />}/>
    </Routes>
  );
}
export default App