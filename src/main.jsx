import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import CSS và JS của Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <-- Thêm dòng này vào đây

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);