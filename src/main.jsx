// import 'ionicons/css/ionicons.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {StoreProduct} from "./Redux/Store.jsx"
// import 'ionicons/css/ionicons.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={StoreProduct}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </StrictMode>
)
