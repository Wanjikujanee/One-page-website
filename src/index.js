import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const button = document.querySelector('#menu-button');
// const menu = document.querySelector('#menu');
// button.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

reportWebVitals();
