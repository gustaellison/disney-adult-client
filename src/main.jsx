import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap our App component in BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // Wrap our App component in BrowserRouter
)
