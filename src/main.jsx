import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/variables.css'
import './styles/global.css'
import App from './App.jsx'
// responsive.css is imported last so its media queries override the component styles
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
