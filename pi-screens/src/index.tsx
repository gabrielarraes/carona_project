import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './providers/AuthProvider'

import App from "./App"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
);