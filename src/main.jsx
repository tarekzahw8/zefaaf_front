import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Store/StateData'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>,
)
