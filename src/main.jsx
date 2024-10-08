import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './context'
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.AUTH0_DOMAIN
const clientId = process.env.AUTH0_CLIENTID


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
    </AppProvider> 
  </React.StrictMode>,
)
