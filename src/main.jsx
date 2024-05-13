import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
// import { BrowserRouter } from "react-router-dom";
// import Router from './router.jsx';
// import App from './App.jsx';
import Router from './router.jsx';

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
          <Router />
  // </React.StrictMode>,
);
