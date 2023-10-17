import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SephoraContextProvider } from './context/SephoraContext.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SephoraContextProvider>
      <App />
    </SephoraContextProvider>
  </React.StrictMode>,
);
