import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import {store} from './store/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Provider>
  // </React.StrictMode>,
)
