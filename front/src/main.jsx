import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserProvider.jsx';

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
        <UserProvider>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </UserProvider>
   </React.StrictMode>
)
