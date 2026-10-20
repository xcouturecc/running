import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/chunkRecovery';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
