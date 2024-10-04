import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Store/StateData'
import './locale/i18n.js'
import "@lottiefiles/lottie-player";
createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>,
)
