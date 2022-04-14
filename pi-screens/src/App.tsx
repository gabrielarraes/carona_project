import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

export interface IAppProps {};

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App