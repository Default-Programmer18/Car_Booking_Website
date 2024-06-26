import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { JourneyDetailsProvider } from './contextApi/JourneyDetailsContext.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <JourneyDetailsProvider>
    <App />
    <Toaster></Toaster>
    </JourneyDetailsProvider>
    </BrowserRouter>
 
)
