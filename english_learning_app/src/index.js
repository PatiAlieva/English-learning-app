import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App/App';
import { ContextProvider } from './Context/MyContext';
import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // оборачиваем всё наше приложение в функцию компонент, для того чтобы связать наше приложение и контекст
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
