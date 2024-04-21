import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom';

const PUBLISHABLE_KEY="pk_test_dGlkeS1ob2ctNDUuY2xlcmsuYWNjb3VudHMuZGV2JA"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
    </BrowserRouter>,
)
