import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './theme.jsx'
import { persistor, store } from './store/store.js'
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store ={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />

        </PersistGate>
      </Provider>
    

    </ThemeProvider>
  </React.StrictMode>,
)
