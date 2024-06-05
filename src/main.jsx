import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.css';
import "modern-normalize";
import { store,persistor } from './redux/store.js';
import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
