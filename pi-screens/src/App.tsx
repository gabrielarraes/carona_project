import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';

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