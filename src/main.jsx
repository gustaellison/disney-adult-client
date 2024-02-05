import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Mouse+Memoirs&family=Patrick+Hand+SC&display=swap';
document.head.appendChild(googleFontsLink);

ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap our App component in BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // Wrap our App component in BrowserRouter
)
