import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext.jsx';
import CaptainProvider from './context/CaptainContext.jsx';

createRoot(document.getElementById('root')).render(
  <CaptainProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </CaptainProvider>
);
