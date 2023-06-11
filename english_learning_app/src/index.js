import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './pages/App/App';
import { Provider } from 'mobx-react';
import WordsStore from "./store/WordsStore";

const store = {
  wordsStore: new WordsStore()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>
);
